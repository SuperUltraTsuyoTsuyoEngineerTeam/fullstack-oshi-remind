from django.db import models


class Site(models.Model):
    title = models.CharField(max_length=200)
    url = models.URLField()


class ToDoItem(models.Model):
    site = models.ForeignKey(Site, on_delete=models.CASCADE)
    task = models.CharField(max_length=200)
