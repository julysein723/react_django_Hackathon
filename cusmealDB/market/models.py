from django.db import models

class Market(models.Model):
    name = models.CharField('시장명',max_length=20)
    photo = models.ImageField('사진')
    address = models.CharField('주소1',max_length=50)
    address2 = models.CharField('주소2',max_length=50, default = "")
    def __str__(self):
        return self.name