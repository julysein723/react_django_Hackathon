from django.shortcuts import render
from rest_framework.viewsets import  ModelViewSet
from .serializers import UtensilSerializer
from .models import Utensil

class UtensilViewSet (ModelViewSet):
    queryset = Utensil.objects.all()
    serializer_class = UtensilSerializer