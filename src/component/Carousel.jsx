import React from 'react'

const Carousel = () => {
  return (
   <section className="row">
    <div className="col-md-12">
      {/* <!-- below is the three parts of a carousel --> */}
       <div className="carousel slide " data-bs-ride="carousel" id="mycarousel" >
        {/* <!-- wrapper starts here --> */}
         <div className="carousel-inner">
          <div className="carousel-item active " >
            <img src="novels/must.jpg" alt="" className="w-100 d-block" height="300px"/>
          </div>
          <div className="carousel-item">
            <img src="novels/ghj.webp" alt="" className="w-100 d-block" height="300px"/>
          </div>
          <div className="carousel-item">
            <img src="novels/zxc.jpg" alt="" className="w-100 d-block" height="300px"/>
          </div>
         </div>
         {/* <!-- wrapper ends -->
          <!-- controller starts  --> */}
          <a href="#mycarousel" data-bs-slide="prev" className="carousel-control-prev" >
            <span className="carousel-control-prev-icon bg-danger"></span>
          </a>
          <a href="#mycarousel" data-bs-slide="next" className="carousel-control-next">
            <span className="carousel-control-next-icon bg-danger"></span>
          </a>

       </div>
    </div>
    
  </section>

  )
}

export default Carousel