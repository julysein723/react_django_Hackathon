from django.contrib import admin
from utensil.models import Utensil

@admin.register(Utensil)
class Utensil(admin.ModelAdmin):
    pass