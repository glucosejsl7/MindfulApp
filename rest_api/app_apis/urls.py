from django.urls import path
from . import views
urlpatterns = [
   path('', views.ListData.as_view()),
   path('<int:pk>/', views.Detail.as_view()),
   path('homefollow/', views.HomeFollowAll.as_view(), name='homefollow-list'),
   path('homefollow/<int:pk>', views.HomeFollowDetail.as_view()),
]
