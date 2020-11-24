from django.contrib import admin
from market.models import Market

@admin.register(Market)
class Market(admin.ModelAdmin):
    pass