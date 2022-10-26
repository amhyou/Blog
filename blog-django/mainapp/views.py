from django.http import FileResponse, HttpResponse, JsonResponse
from django.shortcuts import render
from .models import Article

def Home(req):
    return HttpResponse("Hello World !")


def Articles(req):
    data = Article.objects.all()
    arts = [{"title":elm.title,"summary":elm.summary,"body":elm.body,"img":req.build_absolute_uri(elm.image.url)} for elm in data]
    return JsonResponse({"data":arts})


def Images(req,img):
    try:
        image = open("images/"+img,'rb')
        return FileResponse(image)
    except:
        return HttpResponse("image not found")