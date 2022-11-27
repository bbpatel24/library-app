import React from 'react';
import {Link} from "react-router-dom"
const Book = ({book}) => {
    return (
            <div className="book-container">
            <Link to={`books/${book.id}`} key={Math.random()}>
            <figure className="book-wrapper">
                    <img src={book.url} alt="" className="book-image" />
                </figure>
    </Link>
                
                <p className="book-title">
                {book.title}
                </p>
                <p className="book-discounted-price">
                {
                    book.salePrice ? 
                    <><span className="discount-decoration">${book.originalPrice}</span>${book.salePrice}</>
                    : <>${book.originalPrice}</>
                }
                <br />
                </p>
            </div>
    );
}

export default Book;
