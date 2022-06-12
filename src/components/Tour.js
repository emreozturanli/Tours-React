import React, { useState } from 'react';


const Tour = (props) =>{
    // console.log(props)
    const {id, image, info, name, price,removeTour} = props;

    const [readMore, setReadMore] = useState(false)

    return(
        <section className='tour'>
            <img src={image} alt={name}></img>
            <div className='tour-title'>
                <h4>{name}</h4>
                <h4>${price}</h4>
            </div>
            <div>
                <p className='info'>{ readMore ? info : info.slice(0,200)+'...' }</p>
                <button className='more-less' onClick={()=>setReadMore(!readMore)}>{readMore ? 'Show less' : 'Read more'}</button>
            </div>
            <div className='btn-container'>
                <button className='removeBtn' onClick={()=> removeTour(id)}>Not interested</button>
            </div>
        </section>
    )
}

export default Tour;