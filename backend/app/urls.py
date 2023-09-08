from django.urls import include, path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r"sites", views.SiteViewSet)
router.register(r"todoitems", views.ToDoItemViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
