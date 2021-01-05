import React from 'react'

import sdata from './Sdata';
import Card from './Card';

const Services = () => {
    return (
        <>
         <section className = "d-flex align-items-center">
          <div className = "container-fluid ">
          <div className='col-10 text-center mx-auto'>
              <h1 className = "mt-5">Services</h1>
              <hr className = "w-25 mx-auto"></hr>
          </div>
            <div className  = "row">
              <div className = "col-10 mx-auto">
                 <div class="row mt-3 mb-4 gy-4">
                        {sdata.map((value,index)=>{
                            return<Card 
                                img={value.imgsrc}
                                title = {value.title}
                                content = {value.content}
                            />
                            })} 
 			        </div> 
                 </div> 
                </div>
                </div>
            </section>
  </>
    )
}

export default Services;
