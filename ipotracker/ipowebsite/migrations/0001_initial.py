# Generated by Django 3.1.6 on 2021-04-30 19:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CurrentIpo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('pricel', models.IntegerField()),
                ('priceu', models.IntegerField()),
                ('quantitymin', models.IntegerField()),
                ('date', models.DateField(blank=True, null=True)),
                ('available', models.BooleanField(default=False)),
                ('img', models.ImageField(upload_to='pics')),
            ],
        ),
    ]