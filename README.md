# CabWay Backend API Documentation

<h2 style="color: #4CAF50;">User Registration Endpoint</h2>


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

<h2 style="color: #4CAF50;">User Login Endpoint</h2>


### POST /users/login

Allow an existing user to log in to the system using either their phone number or email.

#### Request Body

```json
{
  "identifier": "john.doe@example.com",  // This can be email or phone number
  "password": "1234hgti"
}
```

#### Validation Rules

- **identifier:**
  - Can be either a valid email format or a valid 10-digit Indian mobile number starting with digits 6-9

- **Password:**
  - Minimum 8 characters

#### Success Response

**Status Code:** 200 (Ok)
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
            "type": "field",
            "value": "987656786",
            "msg": "Please provide a valid email or phone number.",
            "path": "identifier",
            "location": "body"
        }
    ]
}
```

**Status Code:** 500 (Internal Server Error)
```json
"Internal server error."
```

<h2 style="color: #4CAF50;">User Profile Endpoint</h2>

### GET /users/profile

Fetch the authenticated user's profile details.

#### Request Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN"
}
```
or use HTTP-only cookie named 'token'

#### Authentication
- Requires a valid JWT token either in Authorization header or cookie
- Token must not be blacklisted
- User must be logged in

#### Success Response
**Status Code:** 200 (OK)
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "phonenumber": "9876543210",
  "createdAt": "2024-02-20T10:00:00.000Z",
  "updatedAt": "2024-02-20T10:00:00.000Z"
}
```

#### Error Responses

**Status Code:** 401 (Unauthorized)
```json
{
  "message": "Unauthorized"
}
```

**Status Code:** 500 (Internal Server Error)
```json
"Internal server error."
```

<h2 style="color: #4CAF50;">User Logout Endpoint</h2>


### GET /users/logout

Log out the currently authenticated user and blakliste the token.

#### Request Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN"
}
```
or use HTTP-only cookie named 'token'

#### Authentication
- Requires a valid JWT token either in Authorization header or cookie
- User must be logged in

#### Success Response
**Status Code:** 200 (OK)
```json
{
  "message": "Logged out"
}
```

#### Error Responses

**Status Code:** 401 (Unauthorized)
```json
{
  "message": "Unauthorized"
}
```

**Status Code:** 500 (Internal Server Error)
```json
"Internal server error."
```


<!-- 
## User Profile Endpoint

### GET /user/profile

#### Request Body
#### Validation Rules
#### Success Response
#### Error Response

**Status Code:** 500 (Internal Server Error)
```json
"Internal server error."
``` -->