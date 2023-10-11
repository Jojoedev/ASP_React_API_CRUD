import { useEffect, useState } from "react";
import axios from "axios";

const UpdateItem = ({look, updateProduct}) =>{


const[upName, setUpName] = useState('');
const[qty, setQty] = useState(0);
const[upCategory, setupdateCategory] = useState('');
const[upPrice, setupPrice] = useState(0);

async function onSubmit(e) {
    e.preventDefault()
    if(!upName || !qty || !upCategory || !upPrice){
        alert("Update the form")
        return;
    }

    updateProduct({upName, qty, upCategory, upPrice})
}




    return(
        <div>

       {look && <div>

          <form class="form-group" onSubmit={onSubmit}> 
            <label>Name</label>
            <input class="form-control" type="text" value={upName} onChange={((e) => setUpName(e.target.value) )} placeholder="Enter Name" />

            <label>Category</label>
            <input class="form-control" type="text" value={upCategory} onChange={((e) => setupdateCategory(e.target.value))} placeholder="Enter Category" />

            <label>Quantity</label>
            <input class="form-control" type="number" value={qty} onChange={((e) =>setQty(e.target.value) )} placeholder="Enter Quantity" />

            <label>Name</label>
            <input  class="form-control"type="number" value={upPrice} onChange={((e) =>setupPrice(e.target.value) )} placeholder="Enter Price" />
            </form>
            <input type="submit" value="Update" class="btn btn-primary" />
        </div> }
        </div>
    );
}

export default UpdateItem;