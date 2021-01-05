import React, { useState } from 'react'

const Contact = () => {

const[data,SetData] = useState({
    username:'',
    email:'',
    address:'',
    phone:'',
});

const inputItem = (event)=>{
 const{name,value}  = event.target;
 SetData((prevalue)=>{
     return {
         ...prevalue,
         [name]:value,
     }
 })

}
const clickbutton = (e)=>{
            e.preventDefault();

            window.alert( `
             Name: ${data.username}
             Email:${data.email}
             Address:${data.address}
             Phone:${data.phone}`)

}


    return (
       <>
<section id = "contact">

<div class="text-center text-capitalize my-4">
    <h1>Contact us</h1>
    <hr class="w-25 mx-auto"/>
</div>

<div class="container mb-3">
  <div class="row">
      <div class="col-xxl-6 col-10 col-md-6 mx-auto">
          <form onSubmit = {clickbutton}>
              <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Username</label>
              <input type="text" class="form-control" name = "username" placeholder="username" onChange = {inputItem} value = {data.username}/>
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email</label>
              <input type="text" class="form-control"  name = "email" placeholder="Email"  onChange = {inputItem} value = {data.email}/>
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Address</label>
              <input type="text" class="form-control" name = "address" placeholder="Address"  onChange = {inputItem} value = {data.address}/>
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone</label>
              <input type="text" class="form-control" name = "phone" placeholder="Phone number" onChange = {inputItem} value = {data.phone}/>
            </div>

         

             <button type="submit" class="btn btn-primary">Sign in</button>

            
        


          </form>

      </div>
  </div>
</div>
    
</section>
       </>
    )
}

export default Contact
