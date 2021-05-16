from django.urls import path
from .views import home

from rest_framework import routers

from django.urls import path, include
from .views import TodoViewSet,CategoryViewSet, TodoList


router = routers.DefaultRouter()
router.register('todo', TodoViewSet)
router.register('user-todo',TodoList)
router.register('category', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    
]
