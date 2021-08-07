from django.shortcuts import render, HttpResponse
from rest_framework import viewsets

# our created models and serializer
from . models import *
from . serializers import *

# Create your views here.
def home(request):
    return HttpResponse("hi, this is home page of api app")

# create a viewset
class AchieversViewSet(viewsets.ModelViewSet):
    # define queryset
    queryset = Achievers.objects.all()
     
    # specify serializer to be used
    serializer_class = AchieversSerializer