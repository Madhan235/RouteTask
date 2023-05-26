import React from 'react'
import Base from '../Base/Base'

function Dashboard() {
  return (
    <Base>
    <div className='dashboard-container'>
<h4>Dashboard</h4>
<div className='details'>
  <div className='box'>
   <b> <p style={{color:"red"}}>Earnings(Monthly)</p>
    
    <h3>$40,000</h3>
   </b>

  </div>
  <div className='box'>
   <b> <p style={{color:"blue"}}  >Earnings(Annual)</p>
    <h3>$215,000 </h3>
   </b>

  </div>
  <div className='box'>
   <b> <p style={{color:"green"}} >Tasks</p>
    <h3>50%</h3>
   </b>

  </div>
  <div className='box'>
   <b> <p style={{color:"yellow"}} >Pending Requests</p>
    <h3>18</h3>
   </b>
  </div>
</div>

<div className="container">
    <b><h4>Earnings Overview</h4></b>
    <img src={"../charts_dashboard.png"}/>
  </div>
    </div>
    </Base>
  )
}

export default Dashboard