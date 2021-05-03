from django.shortcuts import render,redirect
from .models import CurrentIpo, Testimonials, Careerinfo, Stockcourse, Ipoforms, Contactus
from django.contrib import messages

# Create your views here.


def index(request):
    curIpos = CurrentIpo.objects.all()
    return render(request, "index.htm", {'curIpos': curIpos})


def about(request):
    testimonials = Testimonials.objects.all()
    return render(request, "about.htm", {'testimonials': testimonials})


def product(request):
    stockcourses = Stockcourse.objects.all()
    return render(request, "product.htm", {'stockcourses': stockcourses})


def contact(request):
    if request.method == 'POST':
        print("post")
        email = request.POST['email']
        qtype = request.POST['qtype']
        qtext = request.POST['qtext']
        cu = Contactus(email=email, qtype=qtype, qtext=qtext)
        cu.save()
        return redirect('/')
    else:
        print("inside ElseOf Contact")
        return render(request, "contact.htm")


def career(request):
    careerinfos = Careerinfo.objects.all()
    return render(request, "career.htm", {'careerinfos': careerinfos})


def forms(request):
    print("pass to form in views outif")
    if request.method == 'POST':
        print("pass to form in views")
        compname = request.POST['compname']
        investatus = request.POST['investatus']
        quanofshare = request.POST['quanofshare']
        pricpershare = request.POST['pricpershare']
        pan = request.POST['pan']
        applicantname = request.POST['applicantname']
        date = request.POST['date']
        depository = request.POST['depository']
        dpid = request.POST['dpid']
        dpname = request.POST['dpname']
        bankname = request.POST['bankname']
        accountnum = request.POST['accountnum']
        nationality = request.POST['nationality']
        applicant = Ipoforms(compname=compname, investatus=investatus, quanofshare=quanofshare, pricpershare=pricpershare, pan=pan, applicantname=applicantname, date=date, depository=depository, dpid=dpid, dpname=dpname, bankname=bankname, accountnum=accountnum, nationality=nationality)
        applicant.save()
        print("this is post")
        print(compname,investatus,applicantname)
        return redirect('/')
    else:
        print("Else part Executed: ")
        curIpos = CurrentIpo.objects.all()
        ipoForm = Ipoforms.objects.all()
        formList = [
            curIpos,
            ipoForm,
        ]
        return render(request, "form.htm", {'formList': formList})


