from django.db import models

class Mealkit(models.Model):
    name = models.CharField('밀키트명',max_length=20)
    photo = models.CharField('사진',max_length=50)
    detail = models.CharField('상세설명',max_length=50)
    signiture = models.BooleanField('시그니처')
    price = models.PositiveIntegerField('최소가격')

class Material(models.Model):
    mealkit = models.ForeignKey('Mealkit', on_delete= models.CASCADE)
    name = models.CharField('재료명',max_length=20)
    photo = models.CharField('사진',max_length=50)
    price = models.PositiveIntegerField('가격')