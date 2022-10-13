import data from "../Data"
import { Link } from "react-router-dom";

const get = () => {
	let carrito = JSON.parse(localStorage.getItem("carrito"))
	let productos = []
	for (let id of carrito) {
		productos.push(data[id-1])
	}
	console.log(productos);
	return productos
}

const comprar = () => {
	localStorage.removeItem("carrito")
}

const Carrito = () => {
	let carrito = get()



  return (
    <div>
      <div>
        <h2>Su Carrito</h2>
        <div className="carrito__center">
					{
					carrito.length === 0 ? <h2 style={{textAlign: "center", fontSize: "3rem"}}>Carrito Vacio</h2> :<>
					{
					carrito.map((producto) => (
            <div className="carrito__item" key={producto.id}>
            	<img src={producto.image} alt={producto.title} />
            	<div>
                	<h3> {producto.title} </h3>
                	<p className="price">${producto.price}</p>
            	</div>
            </div>
					))
				};
					
					</>
					}
        </div>

        <div className="carrito__footer">
          <button className="btn" onClick={() => comprar()}><Link to={"/"} >Comprar</Link></button>
        </div>
      </div>
    </div>
  );
};
export default Carrito