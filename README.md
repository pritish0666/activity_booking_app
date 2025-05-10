# Activity Booking API

A RESTful API for managing activities and bookings.

## Setup Instructions

### 1. Clone the Repository
```
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies
```
npm install
```

### 3. Configure Environment
Create a `.env` file in the root directory with the following variables:
```
PORT = 8000
MONGO_URI = <your-mongodb-connection-string>
JWT_SECRET = <your-jwt-secret>
```

### 4. Start the Server
```
npm start
```

## API Testing in Postman



### Authentication Endpoints

#### Register User
- **URL**: `http://localhost:8000/api/auth/register`
- **Body Sample**:
```json
{
  "name": "XYZ",
  "email": "xyz@gmail.com",
  "phone": "1234567890",
  "password": "123456"
}
```

#### Login
- **URL**: `http://localhost:8000/api/auth/login`
- **Body Sample**:
```json
{
  "email": "xyz@gmail.com",
  "password": "123456"
}
```
- **Response**: Returns JWT token for authentication

### Activity Endpoints

#### Get All Activities
- **URL**: `http://localhost:8000/api/activities`


#### Add New Activity
- **URL**: `http://localhost:8000/api/activities`

- **Body Sample**:
```json
{
  "title": "Champions League Final",
  "description": "Liverpool vs Real Madrid",
  "location": "Istanbul",
  "date": "2025-07-31",
  "time": "12.30"
}
```

### Protected Routes

The following endpoints require authentication. Include the JWT token in the request header:

#### Get User Bookings
- **URL**: `http://localhost:8000/api/bookings/my-bookings`

- **Headers**:
  - `Authorization`: `Bearer {token}`

#### Book an Activity
- **URL**: `http://localhost:8000/api/bookings/book`

- **Headers**:
  - `Authorization`: `Bearer {token}`
- **Body Sample**:
```json
{
  "activityId": "681e62f60c469b04b738512f"
}
```

## Testing

Use the provided Postman endpoints to test the API functionality. Make sure to save the token received after login to use with the protected routes.
