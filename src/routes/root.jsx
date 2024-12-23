

import React from "react" 


import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import HamburgerMenu from "../components/hamburgerMenu.jsx";
import TestimonialInfo from "../../resources/TesTimonials.js";
import Testimonials from "../components/testimonials.jsx";
import Footer from "../components/footer.jsx";
import Menu from "../components/menu.jsx";
 

function Root() {

    const settings = {
        lazyLoad: 'onDemand',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 520,
              settings: {
                   dots: false,
                   infinite: true,
                   speed: 500,
                   slidesToShow: 1,
                   slidesToScroll: 1
                }
            }
        ]
    };



    function createTestimonials (TestimonialInfo) { 
        return (
            <Testimonials
            name={TestimonialInfo.name}
            company={TestimonialInfo.company}
            quote={TestimonialInfo.quote}
            quoteBreakPoint1={TestimonialInfo.quoteBreakPoint1}
            quoteBreakPoint2={TestimonialInfo.quoteBreakPoint2}
            imgLink={TestimonialInfo.imgLink}
            key={TestimonialInfo.id}
            />
        )
    }


    return (
    <>
    <div className="main-vid-con">
      <video className="main-vid" autoPlay loop muted>
        <source src="../Static/Vealandclutter.mp4" type="video/mp4"/>
        <source src="../Static/Vealandclutter.webm" type="video/webm"/>
       </video> 
    </div>
    {/* the div that goes over the video */}
    <div className="layer-over-box">
      <div className="top-bar">
          <div className="logo"><img src="" alt="" />VEAL & CUTTER</div>
            <Menu/>
            <HamburgerMenu/>
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
        <div className="about-us-inner-container">
            <div className="about-us-col-1">
                <img className="about-us-img" src="https://i.pinimg.com/736x/c4/3a/fa/c43afa7273b9e497de55ba79781a07ca.jpg" alt="" />
            </div>

           <div className="about-us-col-2">
              <h2 className="website-name">VEAL & CUTTER</h2>
               <p>From inception of Veal & Clutter, our journey has been marked by relenteless pursuit of excellence in shoemaking. Founded with a passion for craftmanship, we have grown into a dedicated team or artisans and designers
                committed to creating the finest footwears. Each pair of shoes we produce is a testamount of dedication
                combining premium materials with exceptional craftmanship. Our Story is just not about making shoes, it is about the people who wear them. From the pioneers who inspired our designs to the forward-thinkers of today. 
                Veal & Clutter shoes are crafted for those who shaped the world with every step they take.
               </p>
               <button className="about-VC">About Veal & Cutter</button>
           </div>
        </div>
  
    </div>


    {/* this is the third section */}
    <div className="ourservices-con">
        <h2>Our Services</h2>
        <div className="slider-container">
        <Slider {...settings}>
           <div className="our-service-img-slide-1"> 
             <img className="our-services-img" src="https://i.pinimg.com/736x/1a/50/84/1a50841cc605168d20d499236ba912c4.jpg" alt="" />
             <p className="our-service-text-line" >Design: Transform ideas into stunning designs</p>
            </div>
           <div className="our-service-slide-2"> 
             <img className="our-services-img" src="https://i.pinimg.com/736x/d5/40/ef/d540efa1a3080049a7496375f4e0c95d.jpg" alt="" />
             <p className="our-service-text-line">Design:Transform ideas into stunning designs</p>
            </div>
           <div className="our-service-slide-3"> 
            <img className="our-services-img" src="https://i.pinimg.com/736x/95/01/f8/9501f8c278aadeca46bc7bdb6d7cd218.jpg" alt="" />
            <p className="our-service-text-line" >Design: Transform ideas into stunning designs</p>
            </div>
           <div className="our-service-img-slide-4">
             <img className="our-services-img" src="https://i.pinimg.com/736x/9a/a2/3d/9aa23ddc0ea1a86c7496a3988a405e39.jpg" alt="" />
             <p className="our-service-text-line">Design: Transform ideas into stunning designs</p>
            </div>
            </Slider>
        </div>
    </div>


    <div className="your-shoe-journey">
        <div className="shoe-journey-col-1">
            <h2 className="heading-2">Your Shoe <br/> Journey</h2>
            <div className="box-text">
                <div className="shoe-journey-text-line">
                    <p className="shoe-journey-text"> Initial Consultation</p>
                    <span className="arrow"> &#8595;</span>
                </div>
                <div className="shoe-journey-text-line">
                    <p className="shoe-journey-text"> Design Phase</p>
                    <span className="arrow"> &#8595;</span>
                </div>
                <div className="shoe-journey-text-line">
                    <p className="shoe-journey-text"> Prototype Creation</p>
                    <span className="arrow"> &#8595;</span>
                </div>
                <div className="shoe-journey-text-line">
                    <p className="shoe-journey-text"> Material Selection</p>
                    <span className="arrow"> &#8595;</span>
                </div>
                <div className="shoe-journey-text-line">
                    <p className="shoe-journey-text">Feedback</p>
                    <span className="arrow"> &#8595;</span>
                </div>
                <div className="shoe-journey-text-line">
                    <p className="shoe-journey-text">Production</p>
                    <span className="arrow"> &#8595;</span>
                </div>
                <div className="shoe-journey-text-line">
                    <p className="shoe-journey-text">Delivery</p>
                    <span className="arrow"> &#8595;</span>
                </div>
            </div>
        </div>
        <div className="shoe-journey-col-2">
            <img className="shoe-journey-img" style={{width: "250px", height:"360px"}} src="https://i.pinimg.com/736x/2d/b6/29/2db6291028f54be6f5a88f0438b9ebe0.jpg" alt="" />
        </div>

    </div>


    {/* fourth section  */}
    <div className="the-world-of-veal-con">
        <h2>The World of Veal & Cutter</h2>
        <div className="first-the-world-of-veal-con">
            <div className="world-of-veal-grid-1"><img className="world-of-veal-grid-img" src="https://i.pinimg.com/736x/d4/a5/31/d4a5310f4089fccc947ee3b7ea2029ee.jpg" alt="" /></div>
            <div className="world-of-veal-grid-2"> <img className="world-of-veal-grid-img" src="https://i.pinimg.com/736x/90/ea/44/90ea440bb7964cae379bd5fa51e41f0e.jpg" alt="" /> </div>
            <div className="world-of-veal-grid-x-1"> <img className="world-of-veal-grid-img-x" src="https://i.pinimg.com/736x/2d/a1/2f/2da12f672a7324a7a84387be023c62b7.jpg" alt="" /> </div>
            <div className="world-of-veal-grid-x-2"> <img className="world-of-veal-grid-img-x" src="https://i.pinimg.com/736x/ce/5c/99/ce5c998319896335a701b8b36ffe377b.jpg" alt="" /> </div>
            <div className="world-of-veal-grid-x-3"> <img className="world-of-veal-grid-img-x" src="https://i.pinimg.com/736x/9e/02/af/9e02af8d968d6332d4eaf870f0a1afe3.jpg" alt="" /> </div>
            <div className="world-of-veal-grid-3"> <img className="world-of-veal-grid-img" src="https://i.pinimg.com/736x/13/9b/0f/139b0fa36be236eb0709e391297d22fb.jpg" alt="" /> </div>
            <div className="world-of-veal-grid-4"> <img className="world-of-veal-grid-img" src="https://i.pinimg.com/736x/05/ba/84/05ba84607f45a019ddc6def56a4708d2.jpg" alt="" /> </div>
            <div className="world-of-veal-grid-5"> <img className="world-of-veal-grid-img" src="https://i.pinimg.com/736x/68/60/ba/6860ba14bf41c8b960d30608cd2b213b.jpg" alt="" /> </div>
            <div className="world-of-veal-grid-6"> <img className="world-of-veal-grid-img" src="https://i.pinimg.com/736x/1d/5b/8f/1d5b8f40cbd7c334445983b259631918.jpg" alt="" /> </div>
        </div>
    </div>

    {/* Testimonials */}

    <div className="testimonial">
        <h3 className="heading-3">Testimonials</h3>
        {TestimonialInfo.map(createTestimonials)}
    </div>

     {/* call to action */}
     <div className="CTA">
            <h2 className="heading-4">Step Into Your Shoe Making Dream</h2>
            <p className="cta-text">Bring your design to life with our seemless production services. From concept to launch, we made things easy.</p>
            <div className="cta-input-container">
                <input type="text" /> <button className="cta-btn">Get In Touch</button>
            </div>
        </div>

        <Footer/>
    </>
    )
}

export default Root;