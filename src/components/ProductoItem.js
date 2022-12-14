import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "context/DataProvider";

export const ProductoItem = ({title, image, category, price, id}) => {

  const value = useContext(DataContext);



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
    </div>
  );
};
