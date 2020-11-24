from django.contrib import admin
from mealkit.models import Mealkit, Material

@admin.register(Mealkit)
class Mealkit(admin.ModelAdmin):
    pass

@admin.register(Material)
class Material(admin.ModelAdmin):
    pass