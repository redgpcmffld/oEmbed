from django.urls import path

from .views import PreviewAPIView

urlpatterns = [
    path('', PreviewAPIView.as_view(), name='get_previews')
]
