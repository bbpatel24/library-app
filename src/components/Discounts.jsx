import React from 'react';
import Discount from "./reusability/Discount"
import { books } from "../data"
const Discounts = () => {

    return (
        <div className="discounts">
        <div className="row">
            <h1 className="discount-heading">
                Books on Sale
            </h1>
        <div className="discount-container">
        {books.filter(book => book.salePrice)
        .slice(0,8)
        .map(book => <Discount 
            book = {book}
        />)}
        </div>
        </div>
        </div>
    );
}

export default Discounts;
