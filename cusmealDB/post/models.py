from django.db import models

class Post(models.Model):
    nickname = models.CharField('닉네임',max_length=20)
    date = models.CharField('날짜',max_length=20)
    time = models.CharField('시간',max_length=20)
    context = models.CharField('글내용',max_length=100)
    photo = models.CharField('사진',max_length=50)