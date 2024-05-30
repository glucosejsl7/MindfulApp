# Generated by Django 5.0.4 on 2024-05-30 09:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_apis', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='HomeFollow',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('image', models.CharField(max_length=254)),
                ('hashtag', models.TextField()),
                ('published_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
