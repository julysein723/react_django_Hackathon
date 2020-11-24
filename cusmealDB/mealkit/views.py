from django.shortcuts import render
from rest_framework.viewsets import  ModelViewSet
from .serializers import MealkitSerializer, MaterialSerializer
from .models import Mealkit, Material

class MealkitViewSet (ModelViewSet):
    queryset = Mealkit.objects.all()
    serializer_class = MealkitSerializer

class MaterialViewSet (ModelViewSet):
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer