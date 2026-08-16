import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Modal from '../Modals';
import Cart from '../screens/Cart';
import { useCart, useDispatchCart } from '../components/ContextReducer'
import CustOrderfd from "../screens/CustOrderfd"


import FoodBankIcon from '@mui/icons-material/FoodBank';

export default function Navbar() {


  let data = useCart();
  let dispatch = useDispatchCart();

  const navigate = useNavigate();
  const [cartView, setCartView] = useState(false)
  const [custOrder, setCustOrder] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleLogout() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail")
    dispatch({ type: "ORDERRECEIVED" })
    navigate("/");
  }




 

  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center w-100">
          <Link className="navbar-brand fs-1 d-flex align-items-center" to="/">
            <span >Meal</span>
            <FoodBankIcon style={{ fontSize: '2rem' }} />
            <span className='me-auto'>Mate</span>
          </Link>
          <button className="navbar-toggler" type="button" aria-label='Toggle navigation' onClick={()=>setIsMenuOpen(!isMenuOpen)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} >
            <ul className='navbar-nav  mb-2 mb-lg-0'>
              
              {!localStorage.getItem("authToken") ?
              
                <li className='nav-item'>
                  <div style={{display:"flex",justifyContent:isMenuOpen?"center":"space-between"}}>
                  <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                  
                  <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
                  </div>
                </li>
                
                : 
                 
                 
                    <li className='nav-item' >
                      <div style={{display:"flex",justifyContent:isMenuOpen?"center":"flex-end",alignItems:"center",width:isMenuOpen?null: "35vw"}}>
                  <button className="btn bg-white text-success mx-2 fw-bold" onClick={() => { setCartView(true) }}>Cart  <span className="badge badge-pill badge-danger bg-danger text-white fs-10 rounded-circle">{data.length}</span> </button>
                  
                 
                  <button className="btn bg-white text-success mx-2 fw-bold" aria-current="page" onClick={() => { setCustOrder(true) }}>Orders</button>
                  
                  <button className="btn bg-white text-danger mx-2 fw-bold" onClick={handleLogout}>Logout</button>
                  </div>
                 
                  {cartView ? <Modal onClose={() => { setCartView(false) }}><Cart onCheckout={() => { setCartView(false) }} /></Modal> : null}
                  {custOrder ? <Modal onClose={() => { setCustOrder(false) }}><CustOrderfd /></Modal> : null}

                  </li>
                }
            
          </ul>
        </div>
    </div>
      </nav >
    </div >
  );
}
