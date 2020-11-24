from django.db import models

class Material(models.Model):
    name = models.CharField('재료명',max_length=20)
    photo = models.ImageField('사진', blank=True)
    price = models.PositiveIntegerField('가격')

    def __str__(self):
        return self.name