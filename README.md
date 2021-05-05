# ipotracker
These is dynamic website for your stock market related services Like IPO Filling and Courses

#Functionality
These website uses HTML,CSS And javascript For front-end and Backend with django framework which makes website dynamic

#Step to run these Application
1. Make new folder and open vs code for that folder
2. in CMD run command: git init
3. git pull https://github.com/Meet19aug/ipotracker.git
4. with executing upper command if you are using first time git on your pc you face some basic problem of setting username and password for your account solve it by searching in browser  python is required so please download python from web.
5. once code is downloaded into your folder you can see one folder name ipotracker and secound readme.md file
6. Run the following command in CMD
7. cd ipotracker
8. pip install virtualenvwrapper -win
9. mkvirtualenv trail
10. pip install django
11. check all installation is done or not by executing following command
12. ----------------------------------------
13. python --version
14. pip --version
15. django-admin --version
16. workon trail
17. ---------------------------------------
18. BEFORE RUNNING FOLLOWING COMMAND MAKE CHANGE IN "ipotracker/settings.py file"
19. line number 77 change to your local database requirement settings:
20. DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'ipotrackerdb',
        'USER' : 'postgres',
        'PASSWORD': 'your-password',
        'HOST': 'localhost',
      }
    }
    
21. python manage.py makemigrations
22. python manage.py sqlmigrate ipotracker 0001
23. pythno manage.py
24. ---------------------------------------
25. python manage.py runserver
26. ---------------------------
27. 127.0.0.1/8000   run on server to see webapplication
28. 

