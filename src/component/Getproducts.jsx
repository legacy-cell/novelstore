import  React, { use, useEffect } from "react";
import  { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Footer from "./Footer";


const Getproducts=()=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState("")
    const [error, setError] = useState("")

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); 
    const navigate = useNavigate()  

    
    
    const img_url = "https://kangethevictor.pythonanywhere.com/static/images/"
    
    
    

    const getProducts = async () => {
        setLoading("please wait we are retrieving your products")
        try {
            const response = await axios.get(
                "https://kangethevictor.pythonanywhere.com/api/get_products_details"
            )
            
            setProducts(response.data)
            setLoading("")
        } catch (error) {
            setLoading("")
            setError("Failed to fetch products")
        }
    }
    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        if(!products) return;
        const filtered = products.filter((product) =>
          product.product_name.toLowerCase().includes(searchTerm.toLowerCase())||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchTerm, products]);
        
        
    return(
        <div className="row">
            
            <Navbar/>
            <Carousel/>
            <h3 className="mt-5">Available products</h3>
            <form>
            <input
                type="text"
                placeholder="Search products"
                className="w-20 form-contol mb-5 ali"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </form>
            <br />
            {loading}
            {error}
            


            {
                filteredProducts?.map((product) =>(


                    <div className="col-md-3 mb-4 card">
                    {/* card to display a single product */}
                    <div className="row">
                        <div className="col-md-4">
                        <img
                        src={img_url+product.product_image}
                        alt=""
                        className=" product_img card-img-top"
                        />
                        </div>
                        <div className="col-md-8">
                        <div className="">
                            <h5 className="mt-2">
                                {product.product_name}
    
                            </h5>
                            <p className="text-muted  descr">
                                {product.product_description.slice(0,10)}
                            </p>
                            <p className="text-aqua">
                                {product.category}
                            </p>
                            <b className="text-dark m-2">kes 
                                {product.product_cost}
    
                            </b>
                            
                            <button
                            className="btn btn-outline-primary ml-2"
                            onClick={()=> navigate('/makepayment',
                            {state:{product}})}
                            >
                                Purchase now
                            </button>
                        </div>
                        </div>
                        
    
                    </div>
                </div>
                
                ))
            }
      
<Footer/>          
        </div>
    )
}
export default Getproducts;