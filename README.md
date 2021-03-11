# GoD_frontend

The Game of Drones frontend was developed using 
 - Node.js 12.21.0
 - Angular 11.2.3 

# Prerequisite

Deploy the Backend - https://github.com/mauriciogracia/GoD_backend

# Deployment Process 

1. Build the web site: `$/web/ng build --prod`
2. copy the `dist/` folder to your webserver (nginx, etc) 

If your backend is not running on localhost:5000 you can change it
by editing the $/assets/God_config.json to match the exposed operations of the backend.
change "apiBaseUrl" : "http://localhost:5000/api/Game" to the actual URL of the running api.

