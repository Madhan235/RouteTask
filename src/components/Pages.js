import React from 'react'
  
import {Button} from "react-bootstrap";

function Pages() {
  return (
   
    <div className="container pages">
      <h3>Login Screens:</h3>
      <div className="row">
<div className="col-12">

    <Button variant="primary btn-lg">
      Login</Button>
      </div>

      <div className="col-12"> 
      <Button variant="secondary btn-lg">
      Register</Button>
      </div>

      <div className="col-12"> 

      <Button variant="danger btn-lg">
      Forget Password</Button>
      </div>
      <div className="col-12"> 

      <Button variant="success btn-lg">
      404 Page</Button>
      </div>
      <div className="col-12"> 

      <Button variant="dark btn-lg">
      Blank Pages</Button>
      </div>
      </div>

    </div>
    
    
  )
}

export default Pages