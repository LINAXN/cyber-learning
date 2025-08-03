from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Lesson, Quiz
from .serializers import LessonSerializer, QuizSerializer

class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer