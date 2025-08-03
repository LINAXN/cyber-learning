from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Lesson, Quiz

from django.contrib import admin
from .models import Quiz, Question, Answer

admin.site.register(Lesson)

class AnswerInline(admin.TabularInline):
    model = Answer
    extra = 2

class QuestionInline(admin.StackedInline):
    model = Question
    extra = 1

class QuizAdmin(admin.ModelAdmin):
    inlines = [QuestionInline]

class QuestionAdmin(admin.ModelAdmin):
    inlines = [AnswerInline]

admin.site.register(Quiz, QuizAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Answer)
