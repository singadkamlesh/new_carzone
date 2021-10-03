from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about', views.about, name='about'),
    path('widgets', views.widgets, name='widgets'),
    path('blog' , views.blog, name='blog'),
    path('contact', views.contact, name='contact'),
    path('enrollnow', views.enrollnow, name='enrollnow'),

    ]
