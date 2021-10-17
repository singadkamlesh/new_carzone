# Generated by Django 3.2.7 on 2021-10-10 15:36

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_title', models.CharField(max_length=255)),
                ('course_stream', models.CharField(choices=[('SEO', 'Search Engine Optimization'), ('SEM', 'Search Engine Marketing'), ('SMM', 'Social Media Marketing'), ('SMO', 'Social Media Optimization'), ('Email', 'Email Marketing'), ('Py Dev', 'Python Development'), ('Html/CSS', 'Web Development')], max_length=100)),
                ('course_author', models.CharField(choices=[('KS', 'Kamlesh Singad'), ('SB', 'Shital Borkar'), ('AR', 'Ashish Rathore'), ('YS', 'Yash Saxena'), ('DS', 'Dharmendra Singad'), ('SS', 'Sonal Singad')], max_length=100)),
                ('created_date', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('about_course', models.TextField(max_length=500)),
                ('course_price', models.IntegerField()),
                ('course_thumbnail', models.ImageField(blank=True, upload_to='photos/%y/%m/%d/')),
            ],
        ),
    ]
