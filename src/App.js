import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductsList from "./components/ProductsList";
import ProductsForm from "./components/ProductsForm";
import { set } from "react-hook-form";

function App() {

 // const [cars, setCars] = useState([]);
  //const [carSelected, setCarSelected] = useState(null); {/* 2nd Estado para poder  pasar info entre list y form */}


  /* useEffect(() => {
    axios
      .get("https://cars-crud.herokuapp.com/cars/")
      .then((res) => setCars(res.data));
  }, []);
 */

  /* const getCars = () => {
    axios.get('https://cars-crud.herokuapp.com/cars/')
          .then(res => setCars(res.data)); 

}
 */

/* const deleteCar = carIdentity => {
  const index = cars.findIndex(car => car.id === carIdentity)
  console.log(index)
  cars.splice(index, 1)
  // const filteredCars = cars.filter(car => car.id !== carIdentity)
  console.log(cars)
  setCars([...cars]); 
  // setCars(filteredCars)
} */



  return (
    <div className="App">
        <h1>eCommerce Portal</h1>
        <h2>Amazing!</h2>
       
        <ProductsList /> 
        <ProductsForm />
    </div>
  );
}

export default App;


// https://products-app-academlo.herokuapp.com/swagger/
// https://users-crud1.herokuapp.com/swagger/
