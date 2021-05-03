# Generated by Django 3.1.6 on 2021-05-01 17:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ipowebsite', '0006_testimonials'),
    ]

    operations = [
        migrations.CreateModel(
            name='Careerinfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150)),
                ('intro', models.TextField()),
                ('link', models.URLField(blank=True, null=True, unique=True)),
                ('available', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Stockcourse',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('intro', models.TextField()),
                ('img', models.ImageField(upload_to='pics')),
                ('price', models.IntegerField()),
                ('link', models.URLField(blank=True)),
            ],
        ),
    ]
