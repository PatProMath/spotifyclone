from django.shortcuts import render
from django.http import HttpResponse
from itsdangerous import Serializer
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room

def test(request):

    return HttpResponse("Alive and Running")

class RoomView(generics.CreateAPIView):

    queryset = Room.objects.all()
    serializer_class = RoomSerializer
