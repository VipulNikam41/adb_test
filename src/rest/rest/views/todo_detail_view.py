from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest.services.todo_service import TodoService
from rest.models import Todo

class TodoDetailView(APIView):
    def put(self, request, id):
        updateTodo = TodoService.get_todo(id=id)
        if updateTodo is None:
            return Response(None, status=status.HTTP_400_BAD_REQUEST)
        todo_item = request.data
        if todo_item.get('title', ''):
            updateTodo.title = todo_item.get('title', '')
        if todo_item.get('content', ''):
            updateTodo.content = todo_item.get('content', '')
        updateTodo.save()
        return Response(updateTodo.to_dict(), status=status.HTTP_200_OK)

    def delete(self, request, id):
        todo = TodoService.get_todo(id=id)
        if todo is None:
            return Response("Todo not present", status=status.HTTP_204_NO_CONTENT)
        TodoService.delete_todo(todo)
        return Response("Todo Deleted", status=status.HTTP_204_NO_CONTENT)