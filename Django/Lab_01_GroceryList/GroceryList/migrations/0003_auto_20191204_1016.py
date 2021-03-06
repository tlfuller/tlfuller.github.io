# Generated by Django 3.0 on 2019-12-04 18:16

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('GroceryList', '0002_auto_20191203_1621'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='question',
            name='complete_date',
        ),
        migrations.RemoveField(
            model_name='question',
            name='pub_date',
        ),
        migrations.AddField(
            model_name='choice',
            name='complete_date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Date Completed'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='choice',
            name='pub_date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Date Created'),
            preserve_default=False,
        ),
    ]
