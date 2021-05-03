from django.db import models

class CurrentIpo(models.Model):
    name = models.CharField(max_length=100)
    pricel = models.IntegerField(null=True, blank=True)
    priceu = models.IntegerField(null=True, blank=True)
    quantitymin = models.IntegerField(null=True, blank=True)
    dateu = models.DateField(null=True, blank=True)
    datel = models.DateField(null=True, blank=True)
    available = models.BooleanField(default=False)
    upcomming = models.BooleanField(default=True)
    rhp = models.URLField(max_length=200,null=True, unique=True, blank=True)
    img = models.ImageField(upload_to='pics', null=True)

class Testimonials(models.Model):
    name = models.CharField(max_length=100)
    review = models.TextField()
    img = models.ImageField(upload_to='pics')

class Stockcourse(models.Model):
    name = models.CharField(max_length=100)
    intro = models.TextField()
    img = models.ImageField(upload_to='pics')
    price = models.IntegerField()
    link = models.URLField(max_length=200, blank=True)

class Careerinfo(models.Model):
    title = models.CharField(max_length=150)
    intro = models.TextField()
    link = models.URLField(max_length=200,null=True, unique=True, blank=True)
    img = models.ImageField(upload_to='pics',null=True)
    available = models.BooleanField(default=False)

# NATIONALITY =(
#     ("1", "indain"),
#     ("2", "other"),
# )
# INVERSRTOR_STATUS = (
#     ("1", "IND Retail"),
#     ("2","IND HNI"),
# )
# DEPOSITORY = (
#     ("1", "NSDL"),
#     ("2", "CDSL"),
# )

class Ipoforms(models.Model):
    compname = models.CharField(max_length=75)
    investatus = models.CharField(max_length=75)
    quanofshare = models.IntegerField()
    pricpershare = models.IntegerField()
    pan = models.CharField(max_length=10)
    applicantname = models.CharField(max_length=75)
    date = models.DateField()
    depository = models.CharField(max_length=75, default="CDSL")
    dpid = models.CharField(max_length=16)
    dpname = models.CharField(max_length=50)
    bankname = models.CharField(max_length=50)
    accountnum = models.CharField(max_length=16)
    nationality = models.CharField(max_length=75)

class Contactus(models.Model):
    email = models.EmailField()
    qtype = models.CharField(max_length=75)
    qtext = models.TextField()






    
