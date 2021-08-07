from rest_framework import serializers
from . models import *

class AchieversSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievers
        fields = ("athleteImage", "name", "medals", "sports_category", "bio", "detailed_info_link")