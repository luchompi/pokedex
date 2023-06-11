from django.db import models

class Stats(models.Model):
    name = models.CharField(max_length=50)
    points = models.IntegerField()

class Type (models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self) :
        return self.name



class Pokemon (models.Model):
    name = models.CharField(max_length=50)
    img_front_default = models.SlugField(max_length=250)
    img_back_default = models.SlugField(max_length=250)
    user = models.CharField(max_length=50,default='root')
    def __str__(self) :
        return self.name

class  PokeInfo(models.Model):
    pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE)
    type = models.ForeignKey(Type, on_delete=models.CASCADE)
    stat = models.ForeignKey(Stats, on_delete=models.CASCADE)
