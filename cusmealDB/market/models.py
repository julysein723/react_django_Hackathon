from django.db import models

class Market(models.Model):
    name = models.CharField('시장명',max_length=20)
    photo = models.CharField('사진',max_length=50)
    address = models.CharField('주소',max_length=50)