import React, { useEffect, useState  } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { addProduct, updateProduct } from '../redux/actions';

const ProductsForm = () => {

    const [ name, setName ] = useState("");
    const [ price, setPrice] = useState("");

    const dispatch = useDispatch();

    const productSelected = useSelector(state  => state.productSelected)
 
    useEffect(() => {
       // console.log ("Cambié ")
       if(productSelected){
            setName(productSelected.name);
            setPrice(productSelected.price)
        }
    }, [ productSelected ])

                                                                                                                                                                                    
    const submit = (e) => {
            e.preventDefault();
            const produkt = {
                id: Date.now(),
                name,
                price
            }
        if(productSelected){
            produkt.id = productSelected.id
            dispatch(updateProduct(produkt))
        }  else {
            dispatch(addProduct(produkt))
         // dispatch({ type: "ADD_PRODUCT", payload: produkt })
           // console.log(produkt);
            }
            reset();
    }

    const reset = () => {
        setName("");
        setPrice("");
    }

    return (
        <form onSubmit={submit}>
            <div className="input-container">
                <label htmlFor="name">Nombre: </label>
                <input 
                    type="text"
                    id="name"
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
            </div>

            <div className="input-container">
                <label htmlFor="name">Price: </label>
                <input 
                    type="text"
                    id="price"
                    onChange={e => setPrice(e.target.value)}
                    value={price}
                />
            </div>
            {/* <input type="checkbox" checked={toDo.isCompleted} onChange={e.target.checked} /> */}
            <button>Submit</button>
        </form>
    );

};

export default ProductsForm;

// /* import axios from 'axios';
// import React from 'react';
// import {useState, useEffect } from 'react';

// const CarsForm  = ({getCars, carSelected, setCarSelected}) => {

//     const [brand, setBrand] = useState("");        
//     const [model, setModel] = useState("");    
//     const [color, setColor] = useState("");     
//     const [year,  setYear] =  useState("");        
//     const [price, setPrice] = useState("");  

//     useEffect(() => {
//       if(carSelected){ 
//         setBrand(carSelected.brand);     {/*5th Cambiar Estados cada que cambie Auto*/}
//         //setModel(carSelected.model);
//         //setColor(carSelected.color);
//         //setYear(carSelected.year);
//         //setPrice(carSelected.price);
//      }  
//    }, [carSelected]);  {/*4th Pasar Auto seleccionado y utilizar useEffect para detectar cambios*/}

//     console.log (carSelected);

//     const submit = e => {
//         e.preventDefault();
//         const car = {
//             brand: brand,
//             model: model,
//             color: color,
//             year: year,
//             price: price,
//         }
//     if(carSelected){
//         console.log ("Se actualizará")
//         axios.put(`https://cars-crud.herokuapp.com/cars/${carSelected.id}/`, car)
//              .then(() => {
//                 getCars()
//                 setCarSelected(null)
//               });
//     } else {
//     axios.post('https://cars-crud.herokuapp.com/cars/', car)
//          .then(() => {
//             getCars();
//             setBrand("");
//             setModel("");
//             setColor("");
//             setYear("");
//             setPrice("");
//         });
//         }
//     }
    
//     return (
        
//       <form onSubmit={submit}>  
//           Formulario de Entrada
           
//         <div className="input-container">
//             <label htmlFor="brand">Brand</label>
//             <input
//             type="text"
//             onChange={e => setBrand(e.target.value)}
//             value={brand}
//             />
//         </div>

//         <div className="input-container">
//             <label htmlFor="model">Model</label>
//             <input
//             type="text"
//             onChange={e => setModel(e.target.value)}
//             value={model}
//             />
//         </div>

//         <div className="input-container">
//             <label htmlFor="color">Color</label>
//             <input
//             type="text"
//             onChange={e => setColor(e.target.value)}
//             value={color}
//             />
//         </div>

//         <div className="input-container">
//             <label htmlFor="year">Year</label>
//             <input
//             type="text"
//             onChange={e => setYear(e.target.value)}
//             value={year}
//             />
//         </div>    

//         <div className="input-container">
//             <label htmlFor="price">Price</label>
//             <input
//             type="text"
//             onChange={e => setPrice(e.target.value)}
//             value={price}
//             />
//         </div>   

//         <button> Submit </button>
//         <button onClick={() => setCarSelected(null)}> Unselect </button>
//         </form>    
           
//     );
// };

// export default CarsForm ; */