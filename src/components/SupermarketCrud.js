import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import AddProduct from "./AddProduct";
import {Routes, Route} from 'react-router-dom';
import ProductList from "./ProductList";

function SupermarketCrud() {
 
  const [changeUi, setUi] = useState(true)
  const [text, setText] = useState(true)

 
  
  const ChangeLook = () =>{
    setUi(!changeUi)
    setText(!text)
}

    return (
      <div className='header'>
        <h3>Supermarket </h3>
        
      <br></br>
        <Routes>
        
        </Routes>
        
        <button onClick={ChangeLook} class="btn btn-primary"> {text? "Create" : "List"}</button>
        <br></br>

        < ProductList look = {changeUi} />
        <AddProduct show = {changeUi} />


      </div>
    );
  }
  
  export default SupermarketCrud;
  