import React from 'react';
import '../styles/Cart.css';
import {useState} from 'react'


function Cart({cart, updateCart}){
  const monsteraPrice = 8
  const [isOpen, setIsOpen] = useState(false)

  return isOpen? (
    <div className='lmj-cart'>
      <button className='lmj-cart-toogle-button'
      onClick={() => setIsOpen(false)}>Fermer</button>
      <h2>Panier</h2>
      <h3>Total : {monsteraPrice * cart}€</h3>
      <button onClick={() => updateCart(0)}>Vider le panier</button>

  </div> 
      ) : ( <button onClick={()=> setIsOpen(true)}>Ouvrir le Panier</button>

      )
}

export default Cart;
