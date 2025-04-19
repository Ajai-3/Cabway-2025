# CabWay Backend API Documentation

## User Registration Endpoint

### POST /users/register

Register a new user in the system.

#### Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "phonenumber": "9876543210",
  "password": "password123"
}
```

#### Validation Rules
- **First Name:**
  - Minimum 3 characters
  - Maximum 20 characters
  - Only alphabetic characters
  - Will be capitalized automatically

- **Last Name:**
  - Minimum 3 characters
  - Maximum 20 characters
  - Only alphabetic characters
  - Will be capitalized automatically

- **Email:**
  - Must be a valid email format
  - Must be unique in the system

- **Phone Number:**
  - Must be a valid 10-digit Indian mobile number
  - Must start with digits 6-9
  - Must be unique in the system

- **Password:**
  - Minimum 8 characters
  - Must contain both alphabets and numbers

#### Success Response
**Status Code:** 201 (Created)
```json
{
  "token": "JWT_TOKEN",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "phonenumber": "9876543210",
    "createdAt": "2024-02-20T10:00:00.000Z",
    "updatedAt": "2024-02-20T10:00:00.000Z"
  }
}
```

#### Error Responses

**Status Code:** 400 (Bad Request)
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters.",
      "path": "fullname.firstname"
    }
  ]
}
```

**Status Code:** 500 (Internal Server Error)
```json
"Internal server error."
```