class TodoService:
    @staticmethod
    def get_all_todos():
        return Todo.objects.all()

    @staticmethod
    def create_todo(data):
        todo = Todo.objects.create(**data)
        return todo

    @staticmethod
    def update_todo(todo, data):
        for key, value in data.items():
            setattr(todo, key, value)
        todo.save()
        return todo

    @staticmethod
    def delete_todo(todo):
        todo.delete()