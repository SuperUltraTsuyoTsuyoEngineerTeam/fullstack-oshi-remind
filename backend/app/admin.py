from django.contrib import admin

from .models import Site, ToDoItem

admin.site.register(Site)


@admin.register(ToDoItem)
class ToDoItemAdmin(admin.ModelAdmin):
    pass
