from rest_framework import serializers
from . models import *

class AchieversSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievers
        fields = ("athleteImage", "name", "medals", "sports_category", "bio", "detailed_info_link")


class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = ( "fullName", "email", "message")


class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = ("profileImage", "fullName", "work", "bio")

