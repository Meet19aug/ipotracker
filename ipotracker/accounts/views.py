from django.shortcuts import render, redirect
from django.contrib.auth.models import User,auth
from django.contrib import messages
# Create your views here.
def register(request):
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        if password1 != password2:
            messages.info(request,'password not matching: ',extra_tags="signup")
            return redirect('/')
        else:
            if User.objects.filter(username=username).exists():
                messages.info(request,'username Already exists: ',extra_tags="signup")
                return redirect('/')
            elif User.objects.filter(email=email).exists():
                messages.info(request,'Email Already exists: ',extra_tags="signup")
                return redirect('/')
            else:
                user = User.objects.create_user(first_name=first_name, last_name=last_name, username=username, email=email, password=password)
                user.save()
        return redirect('/')
    else: 
        return render(request,'index.html')
    
def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            messages.error(request, 'Unvalid creddential',extra_tags="login")
            return redirect('/')
    else:
        return render(request,'/')

def logout(request):
    auth.logout(request)
    return redirect('/')