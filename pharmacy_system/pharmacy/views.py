from django.shortcuts import render


# Create your views here.
def home(request):
  return render(request, 'pharmacy/home.html')

def cart(request):
  return render(request, 'pharmacy/cart.html')

def product(request):
  return render(request, 'pharmacy/product.html')
