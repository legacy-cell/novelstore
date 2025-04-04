import React from 'react'

const Footer = () => {
  return (
    <div><section id="contact" className="bg-dark text-white py-5 container-fluid" width="500px" >
    <div className="container-fluid text-center " width="300px">
    <div className='row'>
    
            <div className='col-md-6'>
            <h2>Get in Touch</h2>
            <p>
                We'd love to hear from you. Reach out with any questions or feedback!
            </p>
            <a href="mailto:contact@novelmoviehub.com" className="btn btn-outline-light">
                Email Us
            </a>
            </div>
            
            <div className="col-md-6">
            <h4 className="text-center">Stay connected</h4>
            <br/>
            <a href="https://www.facebook.com">
                <img src="images/fb.png" alt=""/>
            </a>
            <a href="https://www.instagram.com">
                <img src="images/in.png" alt=""/>

            </a>
            <a href="https://.x.com">
                <img src="images/x.png" alt=""/>
            </a>
            </div>
    
    </div>
    </div>
  </section>
  {/* <!-- Footer --> */}
  <footer className="bg-secondary text-white text-center py-3">
    &copy; 2025 Novel Hub Developed by victor
  </footer></div>
  )
}

export default Footer