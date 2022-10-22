from django.http import HttpResponse
from django.shortcuts import render


def Home(req):
    return HttpResponse("Hello World !")
