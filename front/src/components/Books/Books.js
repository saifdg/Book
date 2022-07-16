import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
import "./Books.css";
import Axios from "axios";

const Books = () => {
  const [books, setBooks] = useState({});
  const fn = async () => {
    const result = await Axios.get("/api/books");
    setBooks({ data: result.data });
  };
  useEffect(async () => {
    fn();
  }, []);

  return (
    <div className="section2">
      <h1>Books</h1>
      <div className="BookContainer">
        {books.data?books.data.map((book, idx) => (
          <BookCard key={idx} {...book} />
        )):null}
      </div>
    </div>
  );
};

export default Books;
