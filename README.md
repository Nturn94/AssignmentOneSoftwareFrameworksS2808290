

# 3813ICT Software Frameworks Assignment Phase One
By Nathan Turnbull S2808290

## To install and run this code:
1. Run, “npm install”, in the command prompt where the package.json file is located.
2. Launch the project in the browser by running the, “npm start”, command.


## User accounts to use to log in with:

| Username      | Password          | User level  |
| ------------- |:-------------:| -----:|
| Nathan101     | hello1234 | Super Admin (Level 3) |
| Daniel101     | goodbye123      |   User (Level 1) |



## Notes about the directory:
Within the directory there are a couple of main files/folders.
### Inside the App folder:
app.component.html contains the properties that are inherited by the other pages.
### Inside the src folder:
#### The Login page:
-	This is the first page you will see. It authenticates the user.
#### The Home page:
-	This page shows the account information. From this page there are features only available to super admins and group admins.
-	Super and Group admins have access to the full list of users.
-	Super Admins may create a new user from this page.
#### The account creation page (Register)
-	Has a bunch of text fields and the button will store all the new data within the browser session.
#### Models:
There are several models. The models are the classes that have been used.
-	There is the User Class
-	There is the Groups Class
#### Services:
Services contain functions relating to various components and models.
-	The user service contains functions to:
o	Delete
o	Register
o	Read
-	The group service contains functions to: (Incomplete)
o	Delete
o	Add 
## Version Control:
Version control was done via git and uploaded to github. There is one main branch (main). There are several commits when new features were added.
## Main Data Structures:
-	The Users
-	The groups
## How it all connects:
All data is stored in the browser using a system called, “FakeBackend”. FakeBackend is a file within the directory that connects the class: User to the components.



