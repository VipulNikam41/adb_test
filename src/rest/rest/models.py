from datetime import datetime
from mongoengine import Document, fields


class Todo(Document):
    title = fields.StringField(max_length=200)
    content = fields.StringField(max_length=600)
    created_at = fields.DateTimeField(default=datetime.now)
    updated_at = fields.DateTimeField(default=datetime.now)

    def save(self, *args, **kwargs):
        if not self.created_at:
            self.created_at = datetime.now()
        self.updated_at = datetime.now()
        return super(Todo, self).save(*args, **kwargs)

    def to_dict(self):
        return {
            "id": str(self.id),
            "title": self.title,
            "content": self.content,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }
