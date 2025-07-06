from django.db import models

# Create your models here.
from django.db import models
# lessons/models.py

class Lesson(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    example = models.TextField()
    video_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title
    def __str__(self):
        return self.title

class Quiz(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name='quizzes')
    question = models.CharField(max_length=255)
    option1 = models.CharField(max_length=100)
    option2 = models.CharField(max_length=100)
    option3 = models.CharField(max_length=100)
    correct_answer = models.CharField(max_length=100)

    def __str__(self):
        return self.question
