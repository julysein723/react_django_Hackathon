from rest_framework.serializers import ModelSerializer
from .models import Mealkit, Material

class MealkitSerializer(ModelSerializer):
    class Meta:
        model=Mealkit
        fields='__all__'

class MaterialSerializer(ModelSerializer):
    class Meta:
        model=Material
        fields='__all__'
