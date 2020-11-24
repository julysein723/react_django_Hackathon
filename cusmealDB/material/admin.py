from django.contrib import admin
from material.models import Material

@admin.register(Material)
class Material(admin.ModelAdmin):
    pass