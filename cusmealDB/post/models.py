from django.db import models
from uuid import uuid4
import os

def uuid_name(instance, filename):
    uuid = uuid4().hex
    extension = os.path.splitext(filename)[-1].lower()
    return '/'.join([
        'post',
        uuid+extension,
    ])

class Post(models.Model):
    nickname = models.CharField('닉네임',max_length=20)
    date = models.CharField('날짜',max_length=20)
    time = models.CharField('시간',max_length=20)
    context = models.CharField('글내용',max_length=100)
    photo = models.ImageField('사진',upload_to=uuid_name)

    def __str__(self):
        return self.nickname