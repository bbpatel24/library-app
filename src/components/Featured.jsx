import React from "react";
import { books } from "../data";
import Book from "./reusability/Book";
const Featured = () => {
  return (
    <div className="featured">
      <div className="row">
        <h1 className="feature-heading">Featured Books for you</h1>
        <div className="featured-container">
          {books
            .filter((book) => book.rating === 5)
            .slice(0, 4)
            .map((book) => (
              <Book book={book} key={book.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
