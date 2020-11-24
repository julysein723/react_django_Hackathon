from django.db import models

class Reservation(models.Model):
    mealkit = models.ForeignKey('mealkit.Mealkit', on_delete=models.CASCADE)
    price = models.PositiveIntegerField('가격')
    quantity = models.PositiveIntegerField('수량')