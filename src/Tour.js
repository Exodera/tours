import React, { useState } from 'react';
 

const Tour = ({tour, removeTours}) => {
  //const [tour, setTour] = useState([tour])
  const [readMore, setReadMore] = useState(false)


  return (
    <article className='single-tour'>
      <img src={tour.image} alt={tour.name}/>
      <footer>
        <div className='tour-info'>
          <h4>{tour.name}</h4>
        <h4 className='tour-price'>${tour.price}</h4>
        </div>
        <p>{readMore? tour.info:`${tour.info.substring(0,200)}...`}
        <button onClick={()=>setReadMore(!readMore)}>{readMore?'show less':'read more'}</button>
        </p>
        <button className='delete-btn' onClick={()=>{
          removeTours(tour.id);
        }}>Not Interested</button>
        
       

      </footer>


    </article>
    
  )
};

export default Tour;
{/* <div>
      {tour.name}
    </div> */}
