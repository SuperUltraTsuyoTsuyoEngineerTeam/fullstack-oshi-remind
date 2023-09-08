from rest_framework import serializers

from .models import Site, ToDoItem


class SiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = ("id", "title", "url")


class ToDoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDoItem
        fields = ("id", "site", "task")
