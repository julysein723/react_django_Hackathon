# Generated by Django 3.1.1 on 2020-11-24 17:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0002_auto_20201125_0117'),
    ]

    operations = [
        migrations.AddField(
            model_name='market',
            name='address2',
            field=models.CharField(default='', max_length=50, verbose_name='주소2'),
        ),
        migrations.AlterField(
            model_name='market',
            name='address',
            field=models.CharField(max_length=50, verbose_name='주소1'),
        ),
    ]
