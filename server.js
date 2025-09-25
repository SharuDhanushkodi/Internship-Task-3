const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory book list
let books = [
  { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: 2, title: '1984', author: 'George Orwell' }
];

// Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});

// Delete a book by ID
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ message: 'Book not found' });

  const removed = books.splice(index, 1);
  res.json(removed[0]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
