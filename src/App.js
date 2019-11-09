import React from 'react';
import './App.css';
import Ticket from './components/Ticket';
import Footer from './components/Footer';
import TshittList from './components/TshittList';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <div className="App">
      {/* <Ticket name="Super Deluxe" /> */}
      <CartProvider>
        <Cart />
        <TshittList />
      </CartProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
