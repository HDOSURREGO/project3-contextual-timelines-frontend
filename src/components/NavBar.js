import React from 'react'
import './NavBar.css'


export default class NavBar extends React.Component{
    render(){
        return(
            <div>
                <div className="nav">
  {/* <input type="checkbox" id="nav-check"/> */}
  <div className="nav-header">
    <div className="nav-title">
        <div className ='nav-brand'>
      TimeLine
     </div>
    
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <a href="#"  target="_blank">Home</a>
    <a href="#"  target="_blank">LogIn</a>
    <a href="#"  target="_blank">SignUp</a>
    
  </div>
</div>



            </div>
        )
    }
}