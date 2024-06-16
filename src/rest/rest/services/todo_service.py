from rest.models import Todo

class TodoService:
    @staticmethod
    def get_todo(id):
        try:
            return Todo.objects.get(id=id)
        except Exception as e:
            return None
    
    @staticmethod
    def get_all_todos():
        return Todo.objects.all()

    @staticmethod
    def create_todo(todo_item):
        newTodo = Todo()
        if todo_item.get('title') is None or todo_item.get('content') is None:
            return None
        newTodo.title = todo_item.get('title', '')
        newTodo.content = todo_item.get('content', '')
        newTodo.save()
        return newTodo

    @staticmethod
    def update_todo(todo, data):
        for key, value in data.items():
            setattr(todo, key, value)
        todo.save()
        return todo

    @staticmethod
    def delete_todo(todo):
        todo.delete()