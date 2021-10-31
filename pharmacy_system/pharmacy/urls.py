from django.urls import path
from . import views


urlpatterns = [
  path('', views.home, name='pharmacy-home'),
  path('cart/', views.cart, name='cart'),
  path('product/', views.product, name='product'),
]
