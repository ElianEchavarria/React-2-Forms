/*
==============================
📚 React II: Forms Project Guide
🗓️ Due: June 26, 2025 by 10:00 AM EDT
==============================

✅ SETUP PHASE
- [ ] Fork the Starting Point repo and clone locally
- [ ] Add group members as collaborators (if applicable)
- [ ] Run `npm install` and confirm app starts with `npm start`

✅ COMPONENT STRUCTURE
- [ ] Plan component structure:
      └── AddBook (form)
      └── BookList (holds list of BookCard)
      └── BookCard (individual book display)
- [ ] Decide where to manage the `books` state (suggestion: in App)

✅ IMPLEMENTATION PHASE
1. 🛠️ Basic Form Setup
- [ ] Start with `AddBook` form: input only for `title`
- [ ] Hook up local state for controlled input
- [ ] On submit, validate input, and add dummy book to `books` state
- [ ] Display book via `BookList` + `BookCard`

2. 🧩 Expand Form Fields
- [ ] Add `author` field (required)
- [ ] Add `image` field (optional - URL string)
- [ ] Add `publishedDate` field (optional - datetime input)
- [ ] Add `description` field (optional - text area)
- [ ] Add `rating` field (number 1-5, validate this)
- [ ] Add `category` dropdown (e.g. fiction, science, etc.)
- [ ] Add checkboxes for `isRead` and `isFavorite` (default false)

3. 🧪 Validation
- [ ] Prevent form submission if required fields are empty
- [ ] Prevent invalid rating (must be 1-5)
- [ ] Show user-friendly error messages (BONUS)

4. 📄 Book List
- [ ] After submit, show new book in the list instantly
- [ ] Ensure all fields render correctly in `BookCard`

✅ BONUS FEATURES
- [ ] Display validation error messages next to inputs
- [ ] Add search bar to filter by:
      └── Author
      └── Category
      └── Read status

✅ FINAL TOUCHES
- [ ] Add styling (basic layout, nice cards, spacing)
- [ ] Add dummy book data (optional for testing before full form works)
- [ ] Test all functionality: add, validate, list, filter
- [ ] Deploy to GitHub Pages
- [ ] Submit project in the Cohort Spreadsheet

💡 REMEMBER:
Start small. Get `title` working first, then expand. Use dummy data to test layout. Trust your instincts and experiment!

*/

import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";


const App = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div className="app">
      <h1 className="title">React Forms! 📝</h1>
      <AddBook onAdd={handleAddBook} books={books} />
      Book List
      <BookList books={books} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
