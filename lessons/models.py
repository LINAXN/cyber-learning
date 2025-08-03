from django.db import models

class Lesson(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    example = models.TextField()
    video_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title

class Quiz(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name='quizzes')
    title = models.CharField(max_length=255)  # اسم الكويز

    def __str__(self):
        return f"Quiz for {self.lesson.title}"

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='questions')
    text = models.CharField(max_length=255)

    def __str__(self):
        return self.text

class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='answers')
    text = models.CharField(max_length=100)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.text} ({'Correct' if self.is_correct else 'Wrong'})"
