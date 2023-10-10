import { useEffect, useState } from "react";
import axios from "axios";


const ProductList = ({look}) =>{
    const [Products, setProduct] = useState([])

    async function LoadList() {
        const response = await axios('https://localhost:7009/api/items');        
        setProduct(response.data)
        console.log(response.data);
    }

   // console.log(Products)
   // useEffect((LoadList) =>{
    //},[]); 

    useEffect(() => {
        (async () => await LoadList())();
      }, []);

async function DeleteItem(id){
  
   await axios.delete(`https://localhost:7009/api/items/id?id= ${id}`);
    
    console.log(id)
    alert("Product was deleted successfully")

LoadList();
} 

    

return(
<table class="table table-bordered table-striped" align="center">
  {look &&    
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price </th>
        </tr>
      </thead> }
        <tbody> 
                  { look && Products.map((product) =>(
                  
                 <tr>
                  
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.quantity}</td>
                  <td>{product.sellingPrice}</td>
                  <td> <input type="button" class="btn btn-outline-primary" value="Update" /> </td>
                  <td> <input type="button" class="btn btn-danger" value="Delete" onClick={(() => DeleteItem(product.id) )} /> </td>
                  <td> <input type="button" class="btn btn-outline-primary" value="Details" /> </td>
                  </tr> 
                  
              ))}
         </tbody>
         </table>
    
    );
}

export default ProductList;