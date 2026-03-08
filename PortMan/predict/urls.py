from . import views
from django.urls import path

urlpattern= [
    path('', views.index, name='PredictIndex' )
]
