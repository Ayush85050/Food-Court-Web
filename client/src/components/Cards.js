import React, { useState, useEffect } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export let setcartButtonText;

export default function Cards(props) {
  let keylist = Object.keys(props.options || {});
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const [cartButtonText, setcartButtonText] = useState("Add To Cart");

  let dispatch = useDispatchCart();
  let data = useCart();

  useEffect(() => {
    if (keylist.length > 0) {
      setSize(keylist[0]);
    }
  }, []);

  async function handleAddToCart() {
    if (!localStorage.getItem("authToken")) {
      props.setcardButton(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      await dispatch({ 
        type: "ADD", 
        id: props.id, 
        name: props.title, 
        qty: qty, 
        img: props.imglink, 
        size: size, 
        price: finalPrice 
      });
      setcartButtonText("Added ✓");
      setTimeout(() => { setcartButtonText("Add To Cart") }, 2500);
    }
  }

  let pricePerItem = props.options && size ? parseInt(props.options[size]) || 0 : 0;
  let finalPrice = qty * pricePerItem;

  const isNonVeg = props.title.toLowerCase().includes("chicken") || 
                   props.title.toLowerCase().includes("pepperoni") || 
                   props.title.toLowerCase().includes("egg") || 
                   props.title.toLowerCase().includes("meat");

  return (
    <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden position-relative" style={{ width: "100%", maxWidth: "340px", transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out" }}>
      {/* Veg / Non-Veg Indicator Badge */}
      <div className="position-absolute top-0 start-0 m-3 z-index-2 bg-white px-2 py-1 rounded-pill shadow-sm d-flex align-items-center gap-1 border">
        <span style={{ 
          display: "inline-block", 
          width: "10px", 
          height: "10px", 
          borderRadius: "50%", 
          backgroundColor: isNonVeg ? "#d9534f" : "#5cb85c" 
        }}></span>
        <small className="fw-bold text-uppercase" style={{ fontSize: "0.65rem", color: isNonVeg ? "#d9534f" : "#5cb85c" }}>
          {isNonVeg ? "Non-Veg" : "Veg"}
        </small>
      </div>

      <img 
        src={props.imglink} 
        className="card-img-top" 
        alt={props.title} 
        style={{ height: "190px", objectFit: "cover" }} 
      />

      <div className="card-body d-flex flex-column justify-content-between p-3 bg-white">
        <div>
          <h5 className="card-title fw-bold text-dark mb-1 text-truncate" title={props.title}>
            {props.title}
          </h5>
          <p className="card-text text-muted small mb-3 text-truncate-2" style={{ fontSize: "0.85rem", height: "2.5rem", overflow: "hidden" }}>
            {props.description || "Freshly cooked gourmet dish with premium ingredients."}
          </p>
        </div>

        <div>
          <div className="d-flex align-items-center justify-content-between gap-2 mb-3 bg-light p-2 rounded">
            {/* Quantity Selector */}
            <div className="d-flex align-items-center gap-1">
              <small className="text-muted fw-bold">Qty:</small>
              <select 
                className="form-select form-select-sm fw-bold border-0 bg-white shadow-sm" 
                style={{ width: "65px" }} 
                value={qty} 
                onChange={(e) => setQty(parseInt(e.target.value))}
              >
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            {/* Size / Portion Selector */}
            <div className="d-flex align-items-center gap-1">
              <small className="text-muted fw-bold">Size:</small>
              <select 
                className="form-select form-select-sm fw-bold border-0 bg-white shadow-sm text-capitalize" 
                style={{ width: "100px" }} 
                value={size} 
                onChange={(e) => setSize(e.target.value)}
              >
                {keylist.map((keyData, index) => (
                  <option key={index} value={keyData}>{keyData}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between pt-1">
            <div>
              <span className="fs-5 fw-bold text-success">₹{finalPrice}</span>
              <small className="text-muted ms-1">/-</small>
            </div>

            <button 
              className={`btn btn-sm ${cartButtonText === "Added ✓" ? "btn-success" : "btn-danger"} fw-bold px-3 py-2 shadow-sm rounded-pill`} 
              onClick={handleAddToCart}
            >
              {cartButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
