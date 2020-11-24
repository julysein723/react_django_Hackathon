from django.shortcuts import render
from rest_framework.viewsets import  ModelViewSet
from .serializers import MaterialSerializer
from .models import Material

class MaterialViewSet (ModelViewSet):
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer