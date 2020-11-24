from django.db import models
from uuid import uuid4
import os

def uuid_name(instance, filename):
    uuid = uuid4().hex
    extension = os.path.splitext(filename)[-1].lower()
    return '/'.join([
        'mealkit',
        uuid+extension,
    ])

class Mealkit(models.Model):
    name = models.CharField('밀키트명',max_length=20)
    photo = models.ImageField('사진', upload_to=uuid_name)
    detail = models.CharField('상세설명',max_length=50)
    signiture = models.BooleanField('시그니처')
    price = models.PositiveIntegerField('최소가격')

    def __str__(self):
        return self.name
        
class Material(models.Model):
    mealkit = models.ForeignKey('Mealkit', on_delete= models.CASCADE)
    name = models.CharField('재료명',max_length=20)
    gram = models.PositiveIntegerField('그램수', default = 100)
    price = models.PositiveIntegerField('가격')

    def __str__(self):
        return self.name