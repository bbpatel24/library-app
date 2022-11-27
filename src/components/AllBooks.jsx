import React from 'react';
import {Link} from "react-router-dom"
const AllBooks = ({books}) => {
    
    return (
        <div className="row">
        <div className="all-books">
        {books.map(book => 
        <div className="all-books-container">
        <Link to={`${book.id}`} key={Math.random()}>
                <figure className="all-books-wrapper">
                    <img src={book.url} alt="" className="book-image" />
                </figure>
        </Link>
                <h3 className="all-books-title">
                {book.title}
                </h3>
                <h2 className="all-books-discounted-price">
                {
                    book.salePrice ? 
                    <><span className="discount-decoration">${book.originalPrice}</span>${book.salePrice}</>
                    : <>${book.originalPrice}</>
                }
                </h2>
            </div>
           )}
            </div>
            </div>
    );
}
export default AllBooks;
