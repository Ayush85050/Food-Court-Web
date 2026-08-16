import React, { useState } from 'react'

export default function Carousal(props) {
  var [search,setSearch]=useState("")



  return (
  <div>
       <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">
  <div className="carousel-inner" id="carousal" style={{maxHeight:"400px"}}>
    <div className="carousel-caption" style={{zIndex:"10"}}>
        <div className="d-flex justifycontent-center">
            <input type="search" placeholder='Search' aria-label='Search' className="form-control me-2" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
         
        </div>
        {props.setSearchedString(search)}
    </div>
    <div className="carousel-item active" data-bs-interval="1000" >
   
      <img src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1" className="d-block w-100" alt="..." style={{objectFit:"cover"}}/>
      
    </div>
    <div className="carousel-item" data-bs-interval="1000" > 
      <img src="https://burst.shopifycdn.com/photos/two-pizzas-and-wine.jpg?width=1850&format=pjpg&exif=1&iptc=1" className="d-block w-100" alt="..." style={{ objectFit: 'cover' }}/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src="https://burst.shopifycdn.com/photos/fried-comfort-food-chicken.jpg?width=1850&format=pjpg&exif=1&iptc=1" className="d-block w-100" alt="..." style={{ objectFit: 'cover' }}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

      
    
  )
}

