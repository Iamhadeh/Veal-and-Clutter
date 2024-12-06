
import React from "react";


function Testimonials (props) {


    return (
        <> 
       <div className="testimonial-inner-con">
          
            <div className="testimonial-box-1">
               <img className="testimonial-img-1" src={props.imgLink} alt="" />
                <div className="testimonial-text-box">
                   <p>{props.quote} <br />
                       {props.quoteBreakPoint1} <br />
                       {props.quoteBreakPoint2} <br />
                       <span className="name-testimonial"> {props.name}, {props.company}</span>
                    </p>
                </div>
           </div>
        </div>
        <p className="arrow-back-and-front-line"> <span className="arrow-back-testimonial"arrow-back-testimonial>&#8592;</span> <span className="arrow-front-testimonial">&#8594;</span></p>
        </>
    )
}

export default Testimonials;