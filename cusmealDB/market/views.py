from django.shortcuts import render
from rest_framework.viewsets import  ModelViewSet
from .serializers import MarketSerializer
from .models import Market

class MarketViewSet (ModelViewSet):
    queryset = Market.objects.all()
    serializer_class = MarketSerializer