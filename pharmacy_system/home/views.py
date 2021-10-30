from django.shortcuts import render


# Create your views here.
def home(request):
  return render(request, 'home/home.html')

def about(request):
  return render(request, 'home/about.html')

def cart(request):
  return render(request, 'home/cart.html')

def product(request):
  return render(request, 'home/product.html')

def contact(request):
  return render(request, 'home/contact.html')