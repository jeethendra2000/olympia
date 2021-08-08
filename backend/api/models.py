from django.db import models

# Create your models here.
# To store Achievers list
class Achievers(models.Model):
    athleteImage = models.ImageField(upload_to="athleteImages")
    name = models.CharField(max_length=100)
    medals = models.TextField(max_length=100)
    sports_category = models.CharField(max_length=100)
    bio = models.TextField(max_length=256)
    detailed_info_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name

# to store contact request
class ContactUs(models.Model):
    fullName = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    message = models.TextField(max_length=500)

    def __str__(self):
        return self.fullName


# to store team members details in About page
class AboutUs(models.Model):
    profileImage = models.ImageField(upload_to="team")
    fullName = models.CharField(max_length=100)
    work = models.CharField(max_length=30)
    bio = models.TextField(max_length=100)

    def __str__(self):
        return self.fullName