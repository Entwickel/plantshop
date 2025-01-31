import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import React from 'react';
import {useState} from 'react'
import logo from '../assets/logo.png'
import Footer from './Footer';
import { useEffect } from 'react';

function App() {
  const [cart, updateCart] = useState(0)
  const [total, updateTotal] = useState(0)
  useEffect(() => {
    document.title = `Plantshop: ${total}€ d'achats`
    }, [total])

  return (
      <div>
          <Banner>
          </Banner>
          <div className='lmj-layout-inner'>
              <Cart cart={cart} updateCart={updateCart} total={total} updateTotal={updateTotal} />
              <ShoppingList cart={cart} updateCart={updateCart} total={total} updateTotal={updateTotal} plantPrice = {8} />
          </div>
          <Footer />
      </div>
  )
}

export default App;
