from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('market/', include('market.urls')),
    path('material/', include('material.urls')),
    path('mealkit/', include('mealkit.urls')),
    path('post/', include('post.urls')),
    path('reservation/', include('reservation.urls')),
    path('utensil/', include('utensil.urls')),
]
