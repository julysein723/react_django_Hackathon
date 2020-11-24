from django.db import models

class Material(models.Model):
    name = models.CharField('재료명',max_length=20)
    gram = models.PositiveIntegerField('그램수')
    price = models.PositiveIntegerField('가격')