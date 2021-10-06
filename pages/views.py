from django.shortcuts import render
from .models import Trainer

# Create your views here.
def home(request):
    return render(request, 'pages/home.html')

def about(request):
    trainers = Trainer.objects.all()
    data = {
        'trainers' : trainers,
    }
    return render(request, 'pages/about.html', data)


def widgets(request):
    return render(request, 'pages/widgets.html')

def blog(request):
    return render(request, 'pages/blog.html')


def contact(request):
    return render(request, 'pages/contact.html')


def enrollnow(request):
    return render(request, 'pages/enrollnow.html')
