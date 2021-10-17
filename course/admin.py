from django.contrib import admin
from .models import Course
from django.utils.html import format_html
# Register your models here.
class CourseAdmin(admin.ModelAdmin):
    def thumbnail(self, object):
        return format_html('<img src="{}" width ="40" style = "border-radius : 50px;" />'.format(object.course_thumbnail.url))

    thumbnail.short_description = 'Course Image'

    list_display = ('id','thumbnail','course_title','course_author','created_date',)
    list_display_links = ('id', 'thumbnail','course_title','course_author',)
    search_fields = ('course_title', 'course_stream',)
    list_filter = ('course_stream',)
admin.site.register(Course, CourseAdmin)
