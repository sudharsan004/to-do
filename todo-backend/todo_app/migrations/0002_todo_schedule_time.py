# Generated by Django 3.2.3 on 2021-05-15 04:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='schedule_time',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
