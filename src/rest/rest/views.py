# from django.shortcuts import render
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# import os
# from .models import Todo

# class TodoListView(APIView):
#     def get(self, request):
#         todos = Todo.objects.all()
#         resp = []
#         for i in range(len(todos)):
#             resp.append(todos[i].to_dict())
#         return Response(resp, status=status.HTTP_200_OK)

#     def post(self, request):
#         todo_item = request.data
#         newTodo = Todo()
#         newTodo.title = todo_item.get('title', '')
#         newTodo.content = todo_item.get('content', '')
#         newTodo.save()
#         return Response(newTodo.to_dict(), status=status.HTTP_200_OK)

#     def put(self, request, id):
#         updateTodo = Todo.objects.get(id=id)
#         todo_item = request.data
#         updateTodo.title = todo_item.get('title', '')
#         updateTodo.content = todo_item.get('content', '')
#         updateTodo.save()
#         return Response(updateTodo.to_dict(), status=status.HTTP_200_OK)

#     def delete(self, request, id):
#         todo = Todo.objects.get(id=id)
#         print(todo.to_dict)
#         todo.delete()
#         return Response(status=status.HTTP_200_OK)
