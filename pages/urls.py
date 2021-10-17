from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about', views.about, name='about'),
    path('widgets', views.widgets, name='widgets'),
    path('blog' , views.blog, name='blog'),
    path('contact', views.contact, name='contact'),
    path('enrollnow', views.enrollnow, name='enrollnow'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    path('blog_grid', views.blog_grid, name='blog_grid'),
    path('blog_details', views.blog_details, name='blog_details'),

    ]
