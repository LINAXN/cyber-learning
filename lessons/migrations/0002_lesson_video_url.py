# Generated by Django 5.2.4 on 2025-07-06 19:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lessons', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='lesson',
            name='video_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]
