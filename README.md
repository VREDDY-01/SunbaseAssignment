
# Customer Management CRUD Application

This is a simple CRUD application for managing customer information with Spring Boot as the backend and basic react for the frontend.

## Getting Started

### Prerequisites

- Java
- Maven
- MySQL
- SpringBoot
- Hibernat
- React

### Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/VREDDY-01/SunbaseAssignment
    cd sunbaseAssignment
    ```

2. **Backend Setup:**

    - Open `src/main/resources/application.properties` and configure your MySQL database settings.
    
    - Build and run the Spring Boot application:

        ```bash
        mvn spring-boot:run
        ```

3. **Frontend Setup:**

    - Navigate to the `sunbase-frontend` directory:

        ```bash
        cd sunbase-frontend
        ```

    - Install dependencies:

        ```bash
        npm install
        ```

    - Run the frontend:

        ```bash
        npm start
        ```

4. **Access the Application:**

    - Open your browser and go to [http://localhost:3000](http://localhost:3000)

## API Endpoints

### Create a Customer

- **Endpoint:** `/customers`
- **Method:** `POST`
- **Request Body:**
  
    ```json
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "street": "Elvnu Street",
        "address": "H no 2",
        "city": "Delhi",
        "state": "Delhi",
        "email": "sam@gmail.com",
        "phone": "12345678"
    }
    ```

### Update a Customer

- **Endpoint:** `/customers/{customerId}`
- **Method:** `PUT`
- **Request Body:**

    ```json
    {
        "firstName": "vishnu",
        "lastName": "Teja",
        "street": "new street",
        "address": " H no 1",
        "city": "New Delhi",
        "state": "New Delhi",
        "email": "new@gmail.com",
        "phone": "981635527"
    }
    ```

### Get a List of Customers

- **Endpoint:** `/customers`
- **Method:** `GET`
- **Parameters:**
  - `page` (Pagination)
  - `size` (Pagination)
  - `sort` (Sorting)
  - `search` (Searching)

### Get a Single Customer

- **Endpoint:** `/customers/{customerId}`
- **Method:** `GET`

### Delete a Customer

- **Endpoint:** `/customers/{customerId}`
- **Method:** `DELETE`

### Authentication

  
    ```json
    {
        "login_id": ashok
        "password": 12345
    }
    ```

    The response will contain a Bearer token which you need to pass in subsequent API calls.


## Sync Data from Remote API

- **Endpoint:** `/sync`
- **Method:** `GET`

   This endpoint will call the remote API to fetch customer data and save/update it in your local database.

## Contributors

- K Vishnu Teja
