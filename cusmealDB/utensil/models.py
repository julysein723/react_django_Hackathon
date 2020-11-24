from django.db import models

class Utensil(models.Model):
    name = models.CharField('조리도구명',max_length=20)
    photo = models.CharField('사진',max_length=50)
    price = models.PositiveIntegerField('가격')