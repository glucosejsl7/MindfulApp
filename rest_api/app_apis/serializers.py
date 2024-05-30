from rest_framework import serializers
from .models import DataTest, HomeFollow, HomeFollowImage

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataTest
        fields = '__all__'

class HomeFollowImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeFollowImage
        fields = ('image',)

class HomeFollowSerializer(serializers.ModelSerializer):
    images = HomeFollowImageSerializer(many=True, read_only=True)

    class Meta:
        model = HomeFollow
        fields = '__all__'
