from rest_framework import generics, viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from .models import DataTest, HomeFollow
from .serializers import DataSerializer, HomeFollowSerializer

class ListData(generics.ListCreateAPIView):
    queryset = DataTest.objects.all()
    serializer_class = DataSerializer

class Detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = DataTest.objects.all()
    serializer_class = DataSerializer

class HomeFollowAll(generics.ListCreateAPIView):
    queryset = HomeFollow.objects.all()
    serializer_class = HomeFollowSerializer

class HomeFollowDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = HomeFollow.objects.all()
    serializer_class = HomeFollowSerializer

class HomeFollowViewSet(viewsets.ModelViewSet):
    queryset = HomeFollow.objects.all()
    serializer_class = HomeFollowSerializer
    parser_classes = (MultiPartParser, FormParser)
