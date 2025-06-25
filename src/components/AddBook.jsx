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

const AddBook = () => {
  const [title, setTitle] = useState("Team 4")
   const handleSubmit = (event) => {
     event.preventDefault();
     console.log( "title", title);
   }
  return ( 
  <form onClick={handleSubmit}>
      <input name= "title" placeholder="Enter Book Name" type ="text" ></input>
      <button className="create-button">Create Book</button>
    </form>
      

  )
};

export default AddBook;
