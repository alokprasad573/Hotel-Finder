# Airbnb Clone

A full-stack web application for finding and managing hotel listings with user authentication and reviews.

## Features

- **User Authentication**
  - Secure login and registration
  - Session management
  - User-specific operations

- **Hotel Listings**
  - View all hotel listings
  - Create new listings with image upload
  - Edit existing listings
  - Delete listings
  - Detailed view of individual hotels

- **Reviews System**
  - Add reviews to hotels
  - Delete reviews
  - User-specific review management

- **Security Features**
  - Passport.js authentication
  - Session-based security
  - Input validation
  - Error handling
  - Flash messages

## Tech Stack

- **Backend**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - Passport.js (Authentication)

- **Frontend**
  - EJS templates with ejs-mate
  - Static file serving
  - Method override for RESTful routes

- **Additional Tools**
  - Multer (File upload)
  - Express-session
  - Connect-flash
  - Method-override

## API Endpoints

### Listings
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/listing` | View all listings | No |
| GET | `/listing/new` | New listing form | Yes |
| POST | `/listing` | Create listing | Yes |
| GET | `/listing/:id` | View listing | No |
| GET | `/listing/:id/edit` | Edit form | Yes + Owner |
| PUT | `/listing/:id` | Update listing | Yes + Owner |
| DELETE | `/listing/:id/delete` | Delete listing | Yes + Owner |

### Reviews
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/listing/:id/reviews` | Add review |
| DELETE | `/listing/:id/reviews/:reviewId` | Delete review |

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/login` | Login page |
| POST | `/login` | Login user |
| GET | `/signup` | Signup page |
| POST | `/signup` | Register user |
| GET | `/logout` | Logout user |

## Setup

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd hotel-listing
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start MongoDB
   Make sure MongoDB is running on your system:
   ```bash
   # For Windows
   mongod

   # For Linux/Mac
   sudo service mongod start
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Access the application
   Open your browser and navigate to:
   ```
   http://localhost:8080/listing
   ```

## Project Structure

```
hotel-listing/
├── app.js                 # Main application file
├── cloudConfig.js         # Cloud storage configuration
├── middleware.js          # Custom middleware functions
├── package.json           # Project dependencies and scripts
├── schema.js             # Joi validation schemas
│
├── controllers/           # Business logic controllers
│   ├── listing.js        # Hotel listing operations
│   ├── review.js         # Review operations
│   └── user.js           # User authentication operations
│
├── models/               # MongoDB models
│   ├── listings.js       # Hotel listing schema
│   ├── review.js         # Review schema
│   └── user.js           # User schema
│
├── routes/               # Express route handlers
│   ├── listingroutes.js  # Hotel listing routes
│   ├── reviewroutes.js   # Review routes
│   └── userroutes.js     # User authentication routes
│
├── utlis/                # Utility functions
│   ├── ExpressError.js   # Custom error class
│   └── wrapAsync.js      # Async error handling
│
├── views/                # EJS templates
│   ├── listing/          # Hotel listing views
│   │   ├── index.ejs     # All listings page
│   │   ├── show.ejs      # Single listing details
│   │   ├── new.ejs       # Create new listing form
│   │   ├── edit.ejs      # Edit listing form
│   │   └── error.ejs     # Error page
│   │
│   ├── layouts/          # Layout templates
│   │   └── boilerplate.ejs # Main layout template
│   │
│   ├── users/            # User authentication views
│   │   ├── login.ejs     # Login page
│   │   └── signup.ejs    # Registration page
│   │
│   └── includes/         # Reusable components
│       ├── navbar.ejs    # Navigation bar
│       ├── footer.ejs    # Footer component
│       └── flash.ejs     # Flash messages
│
├── public/               # Static assets
│   ├── css/             # Stylesheets
│   ├── js/              # Client-side scripts
│   └── images/          # Image assets
│
└── init/                # Initialization database with sample data.
```

## Error Handling

The application includes comprehensive error handling for:
- 404 Not Found errors
- Input validation errors
- Database operation errors
- Authentication errors
- Authorization errors

## Development

The application uses nodemon for automatic server restarts during development. Run `npm run dev` to start the development server. 
