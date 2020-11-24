from rest_framework.serializers import ModelSerializer
from .models import Utensil

class UtensilSerializer(ModelSerializer):
    class Meta:
        model=Utensil
        fields='__all__'
