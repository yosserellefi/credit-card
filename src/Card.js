import React from 'react'
import './App.css';

export default function Card() {
  return (
    <div className="container">
    
        <h1 className="credit__card">CREDIT CARD</h1>
          <div className="card-puce">
        <img className="img__puce" src="https://st2.depositphotos.com/3248189/9001/v/950/depositphotos_90016566-stock-illustration-credit-card-chip.jpg" alt="card__puce" /> 
          </div>
        <div className="card__number">
            <h3>1111 1111 1111 1111</h3>
        </div>
        <div className="bottom">
        <div className="elements">
        <div>
            <div className="serie__card">5422</div>
            <div className="date">
                <p className="m_y">MONTH/YEAR</p>
                <p className="number">10/17</p> 
                <p className="valid">VALID THRU</p>
            </div>
        
        </div>
        
        </div>
        <div className="logo">
        <img src="https://static.webshopapp.com/shops/041757/files/013460499/visamastercardlogo.jpg" alt="visa-card" class="visa-card"/>
        </div>
        </div>
    </div>
  )
}
