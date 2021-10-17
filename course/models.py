from django.db import models
from datetime import datetime
from ckeditor.fields import RichTextField
from multiselectfield import MultiSelectField
# Create your models here.


class Course(models.Model):

    stream_choice =(
            ('SEO','Search Engine Optimization'),
            ('SEM','Search Engine Marketing'),
            ('SMM', 'Social Media Marketing'),
            ('SMO', 'Social Media Optimization'),
            ('Email', 'Email Marketing'),
            ('Py Dev','Python Development'),
            ('Html/CSS','Web Development'),
    )

    author_choice = (
        ('KS', 'Kamlesh Singad'),
        ('SB','Shital Borkar'),
        ('AR','Ashish Rathore'),
        ('YS','Yash Saxena'),
        ('DS','Dharmendra Singad'),
        ('SS','Sonal Singad'),
    )

    languages = (
        ('ENG', 'English'),
        ('HI', 'Hindi'),
        ('Guj','Gujrati'),
        )

    course_title = models.CharField(max_length=255)
    course_stream =  models.CharField(choices=stream_choice, max_length=100)
    course_author = models.CharField(choices=author_choice, max_length=100)
    created_date = models.DateTimeField(default=datetime.now, blank=True)
    about_course = RichTextField()
    course_price = models.IntegerField()
    course_thumbnail =models.ImageField(upload_to='photos/%y/%m/%d/', blank = True)
    def __str__(self):
        return self.course_title
