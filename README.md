# githubapi-node-angular
GitHub Api – Node – Angular
This project is intented to use to demonstrate the github api integrated with NodeJS as backend server and Angular as Frontend. 
To run this project, need to be installed in the computer
-	Git
-	Node v14.15.2 (if not installed you can download from https://nodejs.org/es/download/)
-	NPM v6.14.9  (this package manager comes with full install of node)
-	TSC v4.1.3 (run npm install -g typescript to install globally in the computer)
-	NG (Angular Cli 11.0.5, run npm install -g @angular/cli to install globally in the computer)   

The first step to run the project is up the backend server (NodeJS):
1.	Clone git repository with the command “git clone https://github.com/rllamoca/githubapi-node-angular.git” and open a new terminal
2.	Go to the main project folder and create a new file called “tokenfile.txt” and put in a valid token value (make sure this file have permissions to read)
3.	Then run the command “npm install” to install all dependencies
4.	Then run the command “tsc”, this command will compile typescript files and generate a dist folder (if you are in windows environment you need to enable script execution with the command “Set-ExecutionPolicy unrestricted”)
5.	Finally execute the command “node dist/index.js” to start the backend server

In another terminal run these steps to make up the angular app (DON’T CLOSE THE PREVIOUS TERMINAL WITH NODE JS)
1.	Go to the main project and then go to the “app folder” with command “cd /app”
2.	Run the command “npm install” to install all dependencies of angular project
3.	Finally run “ng serve --proxy-config ./config/proxy.config.json” to start angular project

Go to the chrome explorer and type http://localhost:4200/login to start the application
