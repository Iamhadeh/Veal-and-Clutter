


import React from "react"

function Root() {

    return (
    <>
    <div className="main-vid-con">
      <video className="main-vid" autoPlay muted>
        <source src="../Static/Vealandclutter.mp4" type="video/mp4"/>
        <source src="../Static/Vealandclutter.webm" type="video/webm"/>
       </video> 
    </div>
    {/* the div that goes over the video */}
    <div className="layer-over-box">
      <div className="top-bar">
          <div className="logo"><img src="" alt="" />VEAL & CUTTER</div>
           <div className="menu">
             <button className="menu-btn">Home</button>
             <button className="menu-btn">About Us</button>
             <button className="menu-btn">Services</button>
             <button className="menu-btn">How It Works</button>
             <button className="menu-btn">Testimonials</button>
            </div>
            <div className="book-call-con">
             <button className="bookbtn">Book A Call</button>
            </div>
        </div>
    
       {/* call to action */}
      <div className="main-CTA-con">
          <h1>Achieve 10+% Savings With Precision Marketing</h1>
          <p className="main-text">Transform your business with efficient shoe production</p>
          <p className="main-text">Experience savings, superior quality, and increased profitability</p>
          <button className="request-quote-btn">Request A Quote</button>
       </div>    
    </div>

    {/* second section start here --- about Veal and cutter */}

    <div className="about-con">
        <h2 className="website-name">VEAL & CUTTER</h2>
        <div>
            <p>From inception of Veal & Clutter, our journey has been marked by relenteless pursuit of excellence in shoemaking. Founded with a passion for craftmanship, we have grown into a dedicated team or artisans and designers
                committed to creating the finest footwears. Each pair of shoes we produce is a testamount of dedication
                combining premium materials with exceptional craftmanship. Our Story is just not about making shoes, it is about the people who wear them. From the pioneers who inspired our designs to the forward-thinkers of today. 
                Veal & Clutter shoes are crafted for those who shaped the world with every step they take.</p>
        </div>
        <button className="about-VC">About Veal $ Cutter</button>
    </div>

    {/* this is the third section */}
    <div className="ourservices-con">
        <h2>Our Services</h2>
        <div className="our-service-img-grid">
           <div className="our-service-img-grid-1"> 
             <img className="our-services-img" src="https://i.pinimg.com/736x/1a/50/84/1a50841cc605168d20d499236ba912c4.jpg" alt="" />
             <p className="our-service-text-line" >Design: Transform ideas into stunning designs</p>
            </div>
           <div className="our-service-img-grid-2"> 
             <img className="our-services-img-x" src="https://i.pinimg.com/736x/d5/40/ef/d540efa1a3080049a7496375f4e0c95d.jpg" alt="" />
             <p className="our-service-text-line">Design:Transform ideas into stunning designs</p>
            </div>
           <div className="our-service-img-grid-3"> 
            <img className="our-services-img-x" src="https://i.pinimg.com/736x/95/01/f8/9501f8c278aadeca46bc7bdb6d7cd218.jpg" alt="" />
            <p className="our-service-text-line" >Design: Transform ideas into stunning designs</p>
            </div>
           <div className="our-service-img-grid-4">
             <img className="our-services-img" src="https://i.pinimg.com/736x/9a/a2/3d/9aa23ddc0ea1a86c7496a3988a405e39.jpg" alt="" />
             <p className="our-service-text-line">Design: Transform ideas into stunning designs</p>
            </div>
        </div>
    </div>

    {/* Third section  */}
    <div className="how-it-works-con">
        <p>How It Works</p>
        <div className="second-how-it-works-con">
            <h2>Follow These Steps To Bring Your Ideas To Live</h2>
            <div className="third-how-it-works-con">
            <div className="steps-for-ideas">
                <div className="icon-idea-con"> <img src="" alt="" /></div>
                <h3>Share Your Vision</h3>
                <p>Share your ideas with our experts and we will work to understand your vision and objectives...</p>
            </div>

            <div className="steps-for-ideas">
                <div className="icon-idea-con"> <img src="" alt="" /></div>
                <h3>Collaborate on Design</h3>
                <p>Share your ideas with our experts and we will work to understand your vision and objectives...</p>
            </div>

            <div className="steps-for-ideas">
                <div className="icon-idea-con"> <img src="" alt="" /></div>
                <h3>Materials and Prototype</h3>
                <p>Share your ideas with our experts and we will work to understand your vision and objectives... </p>
            </div>

            <div className="steps-for-ideas">
                <div className="icon-idea-con"> <img src="" alt="" /></div>
                <h3>Manufacture & Launch</h3>
                <p>Share your ideas with our experts and we will work to understand your vision and objectives...</p>
            </div>

            </div>
        </div>
    </div>


    {/* fourth section  */}
    <div className="the-world-of-veal-con">
        <h2>The World of Veal & Cutter</h2>
        <div className="first-the-world-of-veal-con">
            <div className="world-of-veal-grid-1"><img className="world-of-veal-grid-img" src="" alt="" /></div>
            <div className="world-of-veal-grid-2"> <img className="world-of-veal-grid-img" src="" alt="" /> </div>
            <div className="world-of-veal-grid-x-1"> <img className="world-of-veal-grid-img-x" src="" alt="" /> </div>
            <div className="world-of-veal-grid-x-2"> <img className="world-of-veal-grid-img-x" src="" alt="" /> </div>
            <div className="world-of-veal-grid-x-3"> <img className="world-of-veal-grid-img-x" src="" alt="" /> </div>
            <div className="world-of-veal-grid-3"> <img className="world-of-veal-grid-img" src="" alt="" /> </div>
            <div className="world-of-veal-grid-4"> <img className="world-of-veal-grid-img" src="" alt="" /> </div>
            <div className="world-of-veal-grid-5"> <img className="world-of-veal-grid-img" src="" alt="" /> </div>
            <div className="world-of-veal-grid-6"> <img className="world-of-veal-grid-img" src="" alt="" /> </div>
        </div>
    </div>
    </>
    )
}

export default Root;