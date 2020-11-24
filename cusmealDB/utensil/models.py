from django.db import models

class Utensil(models.Model):
    name = models.CharField('조리도구명',max_length=20)
    photo = models.ImageField('사진')
    price = models.PositiveIntegerField('가격')

    def __str__(self):
        return self.name