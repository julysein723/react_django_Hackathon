from rest_framework.serializers import ModelSerializer
from .models import Market

class MarketSerializer(ModelSerializer):
    class Meta:
        model=Market
        fields='__all__'
