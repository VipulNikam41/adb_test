from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest.serializers.todo_serializer import TodoSerializer
from rest.services.todo_service import TodoService
from django.shortcuts import get_object_or_404

class TodoDetailView(APIView):
    def put(self, request, id):
        todo = get_object_or_404(Todo, id=id)
        serializer = TodoSerializer(todo, data=request.data, partial=True)
        if serializer.is_valid():
            todo = TodoService.update_todo(todo, serializer.validated_data)
            return Response(TodoSerializer(todo).data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        todo = get_object_or_404(Todo, id=id)
        TodoService.delete_todo(todo)
        return Response(status=status.HTTP_204_NO_CONTENT)