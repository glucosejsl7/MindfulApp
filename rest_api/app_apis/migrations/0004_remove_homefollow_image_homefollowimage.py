# Generated by Django 5.0.4 on 2024-05-30 10:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_apis', '0003_alter_homefollow_hashtag_alter_homefollow_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='homefollow',
            name='image',
        ),
        migrations.CreateModel(
            name='HomeFollowImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='home_follow_images/')),
                ('home_follow', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='app_apis.homefollow')),
            ],
        ),
    ]