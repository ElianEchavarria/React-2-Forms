import React, { useState } from "react";


/**
 * A book should have the following fields:
 * - title (required)
 * - author (required)
 * - image (optional, url)
 * - publishedDate (optional, datetime)
 * - description (optional, text)
 * - rating (number, 1-5)
 * - category (optional, dropdown with options: fiction, non-fiction, poetry, drama, biography, history, science, technology, art, music, travel, cooking, gardening, etc.)
 * - isRead (boolean, default false)
 * - isFavorite (boolean, default false)
 */

const AddBook = ({ onAdd, books }) => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    image: "",
    publishedDate: "",
    description: "",
    rating: "",
    category: "",
    isRead: false,
    isFavorite: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // This part under here should help stop duplicate books ima keep testing it
    const isDuplicate = books.some(
      (book) =>
        book.title.trim().toLowerCase() === form.title.trim().toLowerCase()
    );
    if (isDuplicate) {
      alert("This book title already exists. Please enter a different title.");
      return;
    }
    if (!form.title || !form.author || form.rating < 1 || form.rating > 5) {
      alert("Title, author, and valid rating are required.");
      return;
    }
    onAdd({ ...form, id: Date.now() });
    setForm({ ...form, title: "", author: "", rating: "", description: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required />
      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      <input type="date" name="publishedDate" value={form.publishedDate} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="rating" type="number" min="1" max="5" placeholder="Rating (1-5)" value={form.rating} onChange={handleChange} />
      <select name="category" value={form.category} onChange={handleChange}>
        <option value="">Select category</option>
        <option value="fiction">Fiction</option>
        <option value="non-fiction">Non-fiction</option>
        <option value="poetry">Poetry</option>
        <option value="drama">Drama</option>
        <option value="biography">Biography</option>
        <option value="history">History</option>
        <option value="science">Science</option>
        <option value="technology">Technology</option>
        <option value="art">Art</option>
        <option value="music">Music</option>
        <option value="travel">Travel</option>
        <option value="cooking">Cooking</option>
        <option value="gardening">Gardening</option>
      </select>
      <div className="checkbox-group">
              <label>
                <input
                  name="isRead"
                  type="checkbox"
                  checked={form.isRead}
                  onChange={handleChange}
                />
                Read
              </label>
              <label>
                <input
                  name="isFavorite"
                  type="checkbox"
                  checked={form.isFavorite}
                  onChange={handleChange}
                />
                Favorite
              </label>
            </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;