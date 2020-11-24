from django.db import models
from uuid import uuid4
import os

def uuid_name(instance, filename):
    uuid = uuid4().hex
    extension = os.path.splitext(filename)[-1].lower()
    return '/'.join([
        'market',
        uuid+extension,
    ])

class Market(models.Model):
    name = models.CharField('시장명',max_length=20)
    photo = models.ImageField('사진',upload_to = uuid_name)
    address = models.CharField('주소1',max_length=50)
    address2 = models.CharField('주소2',max_length=50, default = "")
    def __str__(self):
        return self.name