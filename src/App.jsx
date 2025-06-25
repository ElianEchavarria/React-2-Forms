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
      <h1 className="title">React Forms! 📝</h1>
      <AddBook onAdd={handleAddBook} />
      Book List
      <BookList books={books} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
