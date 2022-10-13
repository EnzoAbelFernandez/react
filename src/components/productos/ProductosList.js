import React from 'react'
import { ProductoItem } from "./ProductoItem";
import { useState } from 'react';
import data from "../../Data"




const ProductosList = () => {
	const [prods, setProds] = useState(data)
    return (
			<>
        <div className="productos">
            {
							prods.map(producto =>(
								<ProductoItem 
									key={producto.id}
									title={producto.title}
									image={producto.image}
									category={producto.category}
									price={producto.price}
									id={producto.id}
								/>
							))
						}					
        </div>
				</>
    )
}
export default ProductosList
