import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import { useState } from "react";

const App = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div className="app">
      <h1 className="title">Reading Nook</h1>
      <AddBook onAdd={handleAddBook} books={books} />
      <h2 className="section-title">Book List</h2>

      <BookList books={books} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
