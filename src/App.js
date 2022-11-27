import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "../src/components/routes/Home";
import AllBooks from "./components/AllBooks";
import Cart from "../src/components/Cart";
import BookItem from "../src/components/BookItem";
import { books } from "./data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [buttonText, setButtonText] = useState('Add To Cart');
  function addToCart(book) {
    setButtonText('Checkout');
    const dupeItem = cart.find((item) => +book.id === +item.id);
    // checking if there is any duplicate book already existing in our cart
    //console.log(dupeItem);
    if (dupeItem) {
      //dupeItem.quantity += 1;
      setCart(
        cart.map((item) => {
          if (+item.id === +dupeItem.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
        })
      );
    } else {
      setCart([...cart, { ...book, quantity:1 }]);
    }
  }
  function removeFromCart(item){
   setCart(cart.filter(book => book.id !== item.id))
  }
  function changeQuantity(book,quantity){
    setCart(cart.map(item =>{
      if(item.id === book.id) {
        return{
          ...item,
              quantity: +quantity,
        }  
      }
      else{
        return item;
      }
    }))
  }
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeFromCart={removeFromCart} />} />
        <Route path="books" element={<AllBooks books={books} />} />
        <Route
          path="books/:id"
          element={<BookItem books={books} addToCart={addToCart} buttonText={buttonText} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
