import axios from "axios"
import { useState } from "react"

const AddProduct = ({show}) =>{
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [category, setCategory] = useState('')
    const [sellingPrice, setPrice] = useState(0)
    
    async function CreateData(product) {
        console.log(product);

       await axios.post('https://localhost:7009/api/items', {
        name: name,
        quantity: quantity,
        category: category,
        sellingPrice: sellingPrice
       });
       alert(`${product.name} was successfully created`)
    }

    
    const onSubmit = (e) =>{
    e.preventDefault()

    if(!name || !quantity || !category ||!sellingPrice){
        alert("Fill the form with appropriate data")
        return;
    }

    //const id = Math.floor(Math.random() * 10000) + 1
    CreateData({name, quantity,category, sellingPrice})
    setName("")
    setQuantity(0)
    setCategory('')
    setPrice(0)

} 


    
    //LoadList();
    
    return(
    <div>
        {!show &&
         <form onSubmit={onSubmit}>
            <div class="form-group">

               
                <label class='control-label'>Product Name</label>
                <input type="text" autoComplete="off" class="form-control" id="Name" value={name}
                 placeholder="Enter Name"
                 onChange={((e) =>setName(e.target.value))}
                />

                <label class='control-label'>Quantity</label>
                <input type="number" autoComplete="off" class="form-control" id="quantity" value={quantity}
                 placeholder="Enter Quantity"
                 onChange={((e) =>setQuantity(e.target.value))}
                />

                <label class='control-label'>Category</label>
                <input type="text" autoComplete="off" class="form-control" id="category" value={category}
                 placeholder="Enter Category"
                 onChange={((e) =>setCategory(e.target.value))}
                />
                <label class='control-label'>Price</label>
                <input type="number" class="form-control" id="price" value={sellingPrice}
                 placeholder="Enter Price"
                 onChange={((e) =>setPrice(e.target.value))}
                />
                
            </div>            
            <button type="submit" class="btn btn-primary">Create</button>
        </form>

        }
</div>
    );
  }

  export default AddProduct;