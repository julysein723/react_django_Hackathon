from django.shortcuts import render
from rest_framework.viewsets import  ModelViewSet
from .serializers import ReservationSerializer
from .models import Reservation

class ReservationViewSet (ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer