import React from 'react';
import {useHistory} from "react-router-dom";

function Base({children}) {
    const history = useHistory()
  return (
    <div className='base-design'>
<div className='left-content'>
      {/* <button
     onClick={()=>history.push("/Dashboard")}
      >Dashboard</button> */}
     <p>INTERFACE</p>
     <button
  onClick={()=>history.push("/components")}
  >Components</button>
  <button
  onClick={()=>history.push("/utilites")}
  >Utilites</button>
  <p>ADDONS</p>
     <button
  onClick={()=>history.push("/pages")}
     >Pages</button>
  <button
  onClick={()=>history.push("/charts")}
  >Charts</button>
      <button
   onClick={()=>history.push("/tables")}
  >Tables</button>

        </div>
        <div className='right-content'>
        {children}
        </div>

    </div>

  )
}

export default Base