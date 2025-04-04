import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Makepayment = () => {
  const {product} = useLocation().state ||{}
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
 
  const img_url = "https://kangethevictor.pythonanywhere.com/static/images/"
  const navigate = useNavigate()
  
  const submit = async (e) => {
    e.preventDefault()
    setMessage("please wait")

    const data =new FormData()
    data.append("phone", phone)
    data.append("amount", product.product_cost)
    
    const response = await axios.post(
      "https://kangethevictor.pythonanywhere.com/api/mpesa_payment",
      data

    )
    setMessage(response.data.message)
  }
  
  return (
    <div>
      <nav >
        
        <Link className='m-4 mb-5 btn btn-dark' to="/">Get all products</Link>
        <h1>Makepayment-Lipa na Mpesa Online</h1>
        
      </nav>
      <div className="card justify-content-center m-4">
      <div className='row'>
      
      <div className='col-md-4 mb-4'>
      
        <div >
        <img
          src={img_url+product.product_image}
          alt=""
          className="mt-4 prod_img card-img-top"
       />
   
        </div>
      
      

      </div>
      <div className='col-md-8 mt-4'>
      <div >

      
          <h3>Product Name: {product.product_name}</h3>
          <h4>Product cost: {product.product_cost}</h4>
          <form onSubmit={submit}>
            <p>{message}</p>
            <input
            type='text'
            placeholder='phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
            <br />  <br />
            <button className='btn btn-primary' type='submit'>Pay</button>'
          </form>
          </div>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Makepayment