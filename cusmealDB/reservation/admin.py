from django.contrib import admin
from reservation.models import Reservation

@admin.register(Reservation)
class Reservation(admin.ModelAdmin):
    pass