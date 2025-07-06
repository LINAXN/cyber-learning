from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Lesson, Quiz

admin.site.register(Lesson)
admin.site.register(Quiz)
