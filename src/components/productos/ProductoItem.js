import React from "react";
import { Link } from "react-router-dom";

export const ProductoItem = ({title, image, category, price, id}) => {

  const addCarrito = (id) => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || []
    carrito.push(id)
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }

  return (
    
    <div key={id} className="producto">
      <Link to={`/producto/${id}`}>
      <div className="producto__img">
        <img src={image} alt={title} />
      </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price} </p>
      </div>
      <div className="bottom d-flex justify-content-center">
        <button className="btn" onClick={() => addCarrito(id)}>Añadir al carrito</button>
      </div>
    </div>
  );
};
