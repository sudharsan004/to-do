from django.db import models
from django.db.models.deletion import CASCADE
from django.contrib.auth.models import User
# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100,unique=True)
    description = models.CharField(max_length=300)

    def __str__(self):
        return self.name

class Todo(models.Model):
    user=models.ForeignKey(User, on_delete= models.CASCADE)
    task = models.CharField(max_length=500)
    category = models.ForeignKey(Category,on_delete=CASCADE)
    #schedule_time = models.DateTimeField(auto_now_add=True,null=True)
    created_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.task