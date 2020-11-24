from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('market/', include('market.urls')),
    path('material/', include('material.urls')),
    path('mealkit/', include('mealkit.urls')),
    path('post/', include('post.urls')),
    path('reservation/', include('reservation.urls')),
    path('utensil/', include('utensil.urls')),
]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
