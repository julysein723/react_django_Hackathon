from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('utensil', views.UtensilViewSet)

urlpatterns = [
    path('', include(router.urls)),
]