# Create your views here.
from django.shortcuts import render

def Homepage(request):
    return render(request, "home.html")