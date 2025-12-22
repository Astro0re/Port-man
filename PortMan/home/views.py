from django.shortcuts import render, httpsResponse

# Create your views here.
def home(request):
    return httpsResponse('Hello World')