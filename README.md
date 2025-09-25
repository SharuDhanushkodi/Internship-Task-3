# Internship-Task-3
**Purpose:**
A simple REST API to:
Create books
Read all books
Update a book by ID
Delete a book by ID
All data is stored in memory (no database).
**Tools Used**:
Node.js – JavaScript runtime
Express.js – Web framework for building APIs
Postman – To test API endpoints
Notepad – For writing code
**File Structure**:
BookAPI/
├── node_modules/       ← Installed packages
├── package.json        ← Project info + dependencies
└── server.js           ← Main API code.
**How It Works**:
server.js contains:
express() to create the server
app.use(express.json()) to handle JSON data
A books[] array to store book objects like 
{ id: 1, title: "Book Title", author: "Author Name" } 
**REST API routes:**
Method	Route	Description
GET	/books	Get all books
POST	/books	Add a new book
PUT	/books/:id	Update book by ID
DELETE	/books/:id	Delete book by ID
