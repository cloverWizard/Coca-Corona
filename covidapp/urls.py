from django.urls import path

from . import views

urlpatterns = [
    path('', views.login, name='login'),
    path('dashboard', views.dashboard, name='dashboard'),
    # path('register', views.signup, name='signup'),
    path('register', views.register, name='register'),
]