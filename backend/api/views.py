from django.shortcuts import render, HttpResponse
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
# from rest_framework import authentication, permissions


# our created models and serializer
from . models import *
from . serializers import *

# Create your views here.
def home(request):
    return HttpResponse("hi, this is home page of api app")

# create a viewset
class AchieversViewSet(viewsets.ReadOnlyModelViewSet):
    # define queryset
    queryset = Achievers.objects.all()
     
    # specify serializer to be used
    serializer_class = AchieversSerializer


class ContactUsView(APIView):
    serializer_class = ContactUsSerializer

    # to create data
    def post(self, request, format=None):
        serializer = ContactUsSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AboutUsViewSet(viewsets.ReadOnlyModelViewSet):
    # define queryset
    queryset = AboutUs.objects.all()
     
    # specify serializer to be used
    serializer_class = AboutUsSerializer