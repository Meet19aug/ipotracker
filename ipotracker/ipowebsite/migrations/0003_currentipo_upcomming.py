# Generated by Django 3.1.6 on 2021-05-01 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ipowebsite', '0002_auto_20210501_1736'),
    ]

    operations = [
        migrations.AddField(
            model_name='currentipo',
            name='upcomming',
            field=models.BooleanField(default=True),
        ),
    ]
