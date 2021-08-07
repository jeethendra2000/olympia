from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . views import *

# define the router
router = DefaultRouter()

# define the router path and viewset to be used
router.register(r'achievers', AchieversViewSet)

urlpatterns = [
    path('home/', home),
    path('', include(router.urls))
]
