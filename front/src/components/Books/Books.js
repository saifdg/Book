import React from "react";
import BookCard from "../BookCard/BookCard";
import "./Books.css";

const Books = () => {
  return <div className="section2">
    <h1>Books</h1>
    <div className="BookContainer">
        <BookCard/>
        <BookCard/>

        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>

    </div>
  </div>;
};

export default Books;
