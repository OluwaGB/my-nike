import React from 'react'
import '../App.css'
import logo from './img/nike-removebg-preview.png'
import snickers from './img/sketchers.png'
import img1 from './img/istockphoto-1320295530-170667a.webp'
import img2 from './img/istockphoto-1303978937-170667a.webp'
import img3 from './img/istockphoto-1303978937-170667a.webp'
const Sections = () =>{

    return(<section>
       <nav>
            <img id="logos"src={logo}/>
            <a id="a" href="#">Home</a>
            <a id="a" href="#">About</a>
        </nav>
        <div id="sct1">
        <div id="Texts">
            <h3>Our summer collections</h3>
          <div id="flexs"><h1>The New Arrival <br/><strong> Nike </strong>Shoes</h1><div id="div"></div></div>
            <p>Discover stylish Nike arrivals quality<br/>
            comfort,and innovation for your active life</p>
            <button>Shop now</button></div>
            <div className="flex"><div className="counter">
                <italics>1K+</italics>
                <p>Branches</p></div>
                <div className="counter">
                <italics>500k+</italics>
                <p>Shops</p></div>
                <div className="counter">
                <italics>250K+</italics>
                <p>Customers</p></div>
                </div>
        </div>
        
        </section>
    )
}

export default Sections