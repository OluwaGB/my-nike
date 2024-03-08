import React from 'react'
import snickers from './img/sketchers.png'
import img1 from './img/istockphoto-1320295530-170667a.webp'
import img2 from './img/istockphoto-1303978937-170667a.webp'
import img3 from './img/istockphoto-1303978937-170667a.webp'




const Section2=()=>{
    return(
        <div className="img">
            <nav>
               <a href="#">pricing</a>
                <a href="#">Contactus</a>
  
            
            
                <a  href="#">Signin</a>
                <a href="#">Explore</a>
            </nav>
            <img id="logo" src={snickers}></img>
            <div id="flex">
                <img id="imgs" src={img1}/>
                <img id="imgs" src={img2}/>
                <img id="imgs" src={img3}/>
            </div>
        </div>
    )
}
export default Section2