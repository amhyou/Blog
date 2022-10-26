
from django.urls import path
from .views import *

urlpatterns = [
    path('',Home,name="Home"),
    path('content',Articles,name="Articles"),
    path('images/<img>',Images,name="Images")
]
