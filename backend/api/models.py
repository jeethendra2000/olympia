from django.db import models

# Create your models here.
class Achievers(models.Model):
    athleteImage = models.ImageField(upload_to="athleteImages")
    name = models.CharField(max_length=100)
    medals = models.TextField(max_length=100)
    sports_category = models.CharField(max_length=100)
    bio = models.TextField(max_length=256)
    detailed_info_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name