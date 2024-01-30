# Getting Started with Customer Crud App

This project was bootstrapped with [React](https://github.com/facebook/create-react-app) and [SpringBoot](https://springhttps://spring.io/).

## FrontEnd Scripts

In the project directory /sunbase-frontend, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Routes - /, /customers, /addCustomer, /customer/:id\
### Components - LoginForm, CustomersList, EditForm

## Backend Scripts

In the project directory /sunbase, you can follow below steps:

Step 1: Open the sunbase directory in intellij/Any other suitable editor.\
Step 2: Navigate to sunbase/src/main/java/com/vishnu/sunbase/SunbaseApplication.java.\
Step 3: Run the main method of the SunbaseApplication class.\
Step 4: Open [http://localhost:8080](http://localhost:8080) to check the status of the server.

Models: Customer(id, firstName, lastName, email, address, street, city, state, phone)\
Service: CustomerService(addCustomer, editCustomer, getCustomers, getCustometById, deleteCustomer)\
Repository: ICustomerRepo



