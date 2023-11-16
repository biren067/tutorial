import React from 'react'

function Signal() {
  return (
    <div>
{`
# signals.py
from django.db.models.signals import post_save
from django.dispatch import receiver
from myapp.models import MyModel

@receiver(post_save, sender=MyModel)
def my_model_post_save(sender, instance, **kwargs):
    # This function is called when a MyModel instance is saved
    print(f"MyModel instance with id {instance.id} was saved.")

# models.py
from django.db import models

class MyModel(models.Model):
    name = models.CharField(max_length=100)

# views.py
from myapp.models import MyModel
from django.shortcuts import render

def create_model_instance(request):
    my_instance = MyModel(name="Example")
    my_instance.save()
    return render(request, 'template.html')

`}
    </div>
  )
}

export default Signal