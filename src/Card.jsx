import React from 'react'

const Card = (props) => {
    return (
       <>
   
 			    <div class="col-lg-4 col-md-4 col-12 col-xxl-4 col-sm-2 d-flex-row">
 				<div class="card group">
 				 <img src={props.img} class="card-img-top img-fluid" alt="naruto" id="myImg"/>
 					 <div class="card-body">
   					 	<h5 class="card-title">{props.title}</h5>
   						 <p class="card-text">{props.content}</p>
   					 <a href="#" class="btn btn-primary">Go somewhere</a>
  					</div>
			</div>
            </div>
           
            

       </>
    )
}

export default Card
