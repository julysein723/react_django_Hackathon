from django.db import models
from uuid import uuid4
import os

def uuid_name(instance, filename):
    uuid = uuid4().hex
    extension = os.path.splitext(filename)[-1].lower()
    return '/'.join([
        'material',
        uuid+extension,
    ])

class Material(models.Model):
    name = models.CharField('재료명',max_length=20)
    photo = models.ImageField('사진', blank=True, upload_to = uuid_name)
    price = models.PositiveIntegerField('가격')

    def __str__(self):
        return self.name