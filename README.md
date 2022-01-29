# ICS4U Grow Your Forest web application - Ally & Noiva (2021-2022)

## Introduction

Our application aims to provide student with an all in one place study tool and allow students to study efficiently. The target audience of our application are students in elementry school, high school, and college.   


## Features
Our application includes:
- Long-term goal feature
- Daily task feature
- Pomodoro Timer
- Study Music Player


## How to use it
> If users merely want to see the core functions of our application, users can clone the main branch of the project and run it with a live server or a PHP server. 
``` 
https://github.com/meimei-xu/project_repo12
```

> If users want to view the user account system of our applcation, users need to clone the **final branch** 
``` 
https://github.com/meimei-xu/project_repo12/tree/final-branch
```
> After that, users should go to the project folder and install several dependencies which include:
> - Express
> - Express-Messages
> - Express-Session
> - Express-Validator (version 5.3.1)
> - Connect-Flash
> - Mongoose
> - Passport
> - Body-Parser
> - Bcrypt
> - nodemon (as a global variable)
> - EJS
> To do this, user need to run:
```
npm install bcryptjs body-parser connect-flash ejs express express-messages express-session express-validator @5.3.1 mongoose passport passport-local nodemon -g
  
```
> To start the server, user need to run 
``` 
nodemon
```
> User should see the following:
```
Server started on port 3000...
Connected to MongoDB
```
> Finally by going on to localhost:3000, user could use our web application properly! Enjoy your tour!

## Other information
The Project is still under development. Some features are not completed and the code might have some errors. Also note that because our MongoDB Atlas database is private, users will not be able to connect to, in which they will need to create their own cluster/database and add their connection string to their code. Please use it at your own risk!
