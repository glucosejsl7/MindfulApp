# models.py
from django.db import models

class DataTest(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

class HomeFollow(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    hashtag = models.TextField(blank=True, null=True)
    published_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class HomeFollowImage(models.Model):
    home_follow = models.ForeignKey(HomeFollow, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='home_follow_images/')

    def __str__(self):
        return f"Image for {self.home_follow.title}"
