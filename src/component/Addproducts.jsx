    import React from "react";
    
    import { useState } from "react";   
    import axios from "axios";
    

    const Addproducts = () =>{
        const [product_name, setProductname] = useState("");
        const [product_cost, setProductcost] = useState("");
        const [category, setCategory] = useState("")
        const [product_description, setProductdescription] = useState("");
        const [product_image, setProductimage] = useState([]);

        const[message, setMessage] = useState("")
        const[loading, setLoading] = useState("")
        const[error, setError] = useState("")

        const submit = async (e) => {
            e.preventDefault()
            setLoading("please wait")
            try {
                const data= new FormData()
                data.append("product_name",product_name)
                data.append("product_cost",product_cost)
                data.append("product_description",product_description)
                data.append("product_image",product_image)
                data.append("category",category)
                
                
                const response= await axios.post(
                    "https://kangethevictor.pythonanywhere.com/api/add_product",
                    data

                )
                setLoading("")
                setMessage("Product added successfully")
                
                
                
            } catch (error) {

                setLoading("")
                setError("Failed to add product")
                
                
            }
            
        }
        
        return(
            <div className="row justify-content-center mt-4">
                <div className="col-md-6 card shadow p-5">
                    
                    <h2>Upload Product</h2>
                    {loading}
                    {error}
                    {message}
                    <form onSubmit={submit}>
                        <input
                        type="text"
                        placeholder="Enter Product Name"
                        className="form-control"
                        value={product_name}
                        onChange={(e)=>setProductname(e.target.value)}
                        required
                        />
                        <br />
                        <input
                        type="number"
                        placeholder="Enter Product cost"
                        className="form-control"
                        value={product_cost}
                        onChange={(e)=>setProductcost(e.target.value)}
                        required
                        />
                        <br />
                        <input
                        type="text"
                        placeholder="Enter product category"
                        className="form-control"
                        value={category}
                        onChange={(e)=>setCategory(e.target.value)}
                        required
                        />
                        <br />
                        
                        <textarea
                        placeholder="Describe your product"
                        className="form-control"
                        value={product_description}
                        onChange={(e)=>setProductdescription(e.target.value)}
                        required
                        ></textarea>

                        <br />
                        <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={(e)=>setProductimage(e.target.files[0])}

                        required
                        />
                        <br />
                        <button className="btn btn-primary">Upload Product</button>
                        
                        
                    </form>
                </div>
                
            </div>
        )
    } 
    export default Addproducts;