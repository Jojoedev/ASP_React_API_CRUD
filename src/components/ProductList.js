import { useEffect, useState } from "react";
import axios from "axios";
import UpdateItem from "./UpdateItem";
import { useFetcher } from "react-router-dom";

const ProductList = ({ look }) =>{
    
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
 const [id, setId] = useState('')
 const [name, setName] = useState('')
 const [quantity, setQuantity] = useState(0)
 const [category, setCategory] = useState('')
 const [sellingPrice, setPrice] = useState(0)
 
 
 async function UpdateHandler(product){
  
  setName(product.name)
  setQuantity(product.quantity)
  setCategory(product.category)
   setPrice(product.sellingPrice) 
   setId(product.id)
  console.log(product.id)
}

  
async function onSubmit(e) { 
 e.preventDefault() //This prevents posting form to the browser
 if(!name || !quantity || !category || !sellingPrice){
  alert("Update all fields")
  return;
 }


 console.log(Products.find((product) => product.id === id).id || id ) //This was used for checking correctness of url
try {
  await axios.put("https://localhost:7009/api/items/id?id="+Products.find((product) => product.id === id).id,
  {
    id: id,
    name : name,
    quantity: quantity,
    category: category,
    sellingPrice: sellingPrice
  });
  alert("Product updated successfully")
  setName('')
  setCategory("")
  setQuantity("")
  setPrice("")


} catch (error) {
  
  alert(error)
}

}
 
{/* 

const async onSubmit = (e) =>{
 e.preventDefault()
try{
    axios.put("https//localhost:7000/api/items/id?id="+Array.find((item) => item.id ===id).id || id),{
      id: id, //Properties must be same as the properties used at creation of the object. This must also align with
      name: name, //the properties in the Server.
      age: age,
      localGovt: localGovt
    });
    alert("Item has been updated successfully")
    

}catch((error) => {
  console.log(error)
}

}



*/}





 
 return(
  <div>
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
                  <td key ={product.id} hidden></td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.quantity}</td>
                  <td>{product.sellingPrice}</td>
                  <td> <input type="button" class="btn btn-outline-primary" value="Update" onClick={(() => UpdateHandler(product))} /> </td>
                  <td> <input type="button" class="btn btn-danger" value="Delete" onClick={(() => DeleteItem(product.id) )} /> </td>
                  <td> <input type="button" class="btn btn-outline-primary" value="Details" /> </td>
                  </tr> 
                  
              ))}
         </tbody>
         </table>
       {look &&  <div>  
        <h4>Update Form</h4>
            <form class="form-group"> 
            <label>Name</label>
            <input class="form-control" type="text" value={name} onChange={((e) => setName(e.target.value) )} placeholder="Enter Name" />

            <label>Category</label>
            <input class="form-control" type="text" value={category} onChange={((e) => setCategory(e.target.value))} placeholder="Enter Category" />

            <label>Quantity</label>
            <input class="form-control" type="number" value={quantity} onChange={((e) =>setQuantity(e.target.value) )} placeholder="Enter Quantity" />

            <label>Price</label>
            <input  class="form-control"type="number" value={sellingPrice} onChange={((e) =>setPrice(e.target.value) )} placeholder="Enter Price" />
            </form>
            <input type="submit" value="Update" onClick={onSubmit} class="btn btn-primary" />
          </div> }
        <UpdateItem  />
    </div>
    );
}

export default ProductList;