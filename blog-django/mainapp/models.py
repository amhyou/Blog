from django.db import models

class Article(models.Model):
    title = models.TextField(blank=False, null=False)
    summary = models.TextField()
    body = models.TextField()
    image = models.ImageField(upload_to="images")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title