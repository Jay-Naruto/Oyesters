import React from 'react';
const NavPage=()=>
{
    return(
        <>
        <style>
          
        </style>
      <nav className="Frame1">
     <span>
          <img className="DSI"></img>
          <div className="DWIDASA">DWIDASA</div>
          <div className="SAMSARA">SAMSARA</div>
          <div className="INDONESIA">INDONESIA</div>
       

          
          <div className="navbar">
  <div className="dropdown" style={{alignItems:'flex-end'}}>
    <button className="dropbtn"><strong>=</strong> 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
    <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/product">Product</a>
      <a href="/technology">Technology</a>
      <a href="/about">About</a>
      <a href="/client">Client</a>
      <a href="/partner">Partner</a>
      
    </div>
  </div> 
</div>

          </span>
         
      </nav>
   


            </>
    )
}
export default NavPage;