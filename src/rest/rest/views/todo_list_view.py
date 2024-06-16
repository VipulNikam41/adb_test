from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest.serializers.todo_serializer import TodoSerializer
from rest.services.todo_service import TodoService

class TodoListView(APIView):
    def get(self, request):
        todos = TodoService.get_all_todos()
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            todo = TodoService.create_todo(serializer.validated_data)
            return Response(TodoSerializer(todo).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)