from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('', views.ReservationList.as_view()),
    path('reservation/<int:pk>/',views.ReservationDetail.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)