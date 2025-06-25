import React from "react";


const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title} <small>by {book.author}</small></h3>
      {book.image && <img src={book.image} alt={book.title} />}
      <p><strong>Published:</strong> {book.publishedDate}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p>{book.description}</p>
      <p>{book.isRead ? "✅ Read" : "📖 Not read yet"}</p>
      <p>{book.isFavorite ? "⭐ Favorite" : ""}</p>
    </div>
  );
};

export default BookCard;
