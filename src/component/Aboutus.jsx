import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Aboutus = () => {
  return (
    
    <div>
    <Navbar/>
    
    
    <img src="novels/abo.jpg" alt="" className="w-40 d-block justify-content-center mx-auto" height="300px"/>
    <div>
        <h2>
            What we believe in?
        </h2>
        <h4>
            we believe in trasparency in our services ensurintg a secure metthod of buying and selling books
        </h4>
        <h2>
            Our goal
        </h2>
        <h4>
            our goal is to create apltform in which people can trade their books with each other
        </h4>
        <h2>
            Our dream
        </h2>
        <h4>
            We dream of providing books to every no matter where they are
        </h4>
    </div>

<Footer/>
    </div>
  )
}

export default Aboutus