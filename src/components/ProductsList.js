import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, selectProduct } from '../redux/actions';

const ProductsList = () => {
  
  const productos = useSelector(state => state.products);
  // id: 1  
  // title: ""
  // isCompleted: false

  //console.log (productos)

  const dispatch = useDispatch();

  return (
    <ul className='products-list'>
      {
       
        productos.map(producto => (
          <li key= {producto.id}>
            <h3>{producto.name}</h3>
            <div><b>Price: </b> ${producto.price}</div>
            
            <button 
                onClick={() => dispatch(deleteProduct(producto.id))}
            //  onClick={() => dispatch({ type: "DELETE_PRODUCT", payload: producto.id})}
            >   Delete
            </button>
            
            <button
                onClick={() => dispatch(selectProduct(producto))}
            > 
                  Select 
            </button>
           
          </li>
      ))
      }  
    </ul>
  );
};
export default ProductsList;

/* theCarsProps.map((car) => (
  <li key={car.id}>
    <h1>{car.model}</h1>
    <p><b>Brand: </b>{car.brand}</p>
    <p><b>Color: </b>{car.color}</p>
    <p><b>Year:  </b>{car.year }</p>
    <p><b>Price: </b>{car.price}</p>
    <button onClick={() => setCarSelected(car)}>  */
    {/*3rd Setear estado cada vez que presione boton*/}
  /*     Select this Car                            
      //{/* 1st Button*/ 
    // </button> */

/*     <button onClick={() => deleteCar(car.id)}> 
      Delete this Car                            
    </button>
  </li>
)) */

