from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest.services.todo_service import TodoService

class TodoListView(APIView):
    def get(self, request):
        todos = TodoService.get_all_todos()
        resp = []
        for i in range(len(todos)):
            resp.append(todos[i].to_dict())
        return Response(resp, status=status.HTTP_200_OK)

    def post(self, request):
        try:
            newTodo = TodoService.create_todo(request.data)
            if newTodo is None:
                return Response(status=status.HTTP_400_BAD_REQUEST)
            return Response(newTodo.to_dict(), status=status.HTTP_200_OK)
        except Exception as e:
            return Response(e, status=status.HTTP_400_BAD_REQUEST)