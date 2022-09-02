import React from 'react';
import { CartWidget } from './CartWidget'
import '../../App.css';

export function Header () {
  return (
    <header>
      <img src="logo192.png" alt="logo-enio" className="logo-enio" />
      <CartWidget cantidadProductos="4" />
    </header>
  )
}
