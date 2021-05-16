from django.shortcuts import render

# Create your views here.
def home(request):
    return render('hi')
from rest_framework import viewsets

from .serializers import TodoSerializer,CategorySerializer
from .models import Todo, Category


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    

# from rest_framework import generics

# class TodoList(generics.ListAPIView):
#     serializer_class = TodoSerializer

#     def get_queryset(self):
#         """
#         This view should return a list of all the Todo 
#         for the currently authenticated user.
#         """
#         user = self.request.user
#         return Purchase.objects.filter(user=user)