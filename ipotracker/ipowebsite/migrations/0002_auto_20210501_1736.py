# Generated by Django 3.1.6 on 2021-05-01 12:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ipowebsite', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='currentipo',
            old_name='date',
            new_name='datel',
        ),
        migrations.AddField(
            model_name='currentipo',
            name='dateu',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='currentipo',
            name='rhp',
            field=models.URLField(blank=True, null=True, unique=True),
        ),
    ]