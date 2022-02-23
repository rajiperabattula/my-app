import React from "react";

function DetailsPage(props){
    return (
        <>
        <div className="details-container"> 
        <div className='details_img_div'>
        <img src={props.details.categoryId===0? "images/laptop1.png" : "images/mobile1.png"} alt='image'/>
        </div>
            <div className="details-content"> 
            <h3>{props.details.name}</h3>
            <p>Rs. {props.details.price}</p>
            <span>{props.details.description}</span>
            </div>
        </div>
        </>
    )
}

export default DetailsPage;