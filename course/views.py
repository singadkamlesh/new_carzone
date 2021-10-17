from django.shortcuts import render
from course.models import Course
# Create your views here.
def course(request):
    courses = Course.objects.all()

    data = {
        'courses' : courses,
    }
    return render(request, 'course/course.html',data)
