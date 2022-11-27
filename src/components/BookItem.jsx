import React from "react";
import { Link, useParams } from "react-router-dom";

const BookItem = ({ books, addToCart,buttonText }) => {
  let { id } = useParams();
  const book = books.find((book) => +id === +book.id);
  return (
    <div>
      <div className="row">
        <div className="book-item-container">
            <figure className="book-item-image-wrapper">
              <img src={book.url} alt="" className="book-item-image" />
            </figure>
            <div className="book-info">
              <div className="book-item-price">
                
                <p className="book-item-general">Book Price:</p>
                <h2>
                  {book.salePrice ? (
                    <>
                      <span className="discount-decoration">
                        Then:${book.originalPrice}
                      </span>
                      Now:${book.salePrice}
                    </>
                  ) : (
                    <>
                      <span>${book.originalPrice}</span>
                    </>
                  )}
                </h2>
              </div>
              <div className="book-item-title">
                <p className="book-item-general">Title:</p>
                <h3>{book.title}</h3>
              </div>
              <div className="book-item-summary">
                <p className="book-item-general">Summary:</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo officia illo alias nesciunt, odio at quisquam. Iste
                  qui ratione dolore atque, accusantium distinctio voluptatem
                  impedit vel placeat ab, dicta illum!
                </p>
                <button
                  className="book-item-button"
                  onClick={() => addToCart(book)}
                >
                  <Link to="/cart" className="book-item-button-link">{buttonText}</Link>
                </button>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default BookItem;
