# Generated by Django 4.1.2 on 2022-10-25 09:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0002_remove_article_date_article_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='image',
            field=models.ImageField(upload_to='images'),
        ),
    ]
