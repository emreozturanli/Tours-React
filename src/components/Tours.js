import React from 'react';

import Tour from './Tour';

const Tours = ({allTours, removeTour, refresh}) =>{
    return(
        <main>
            <article>
                {
                allTours.map((tour)=>{
                    return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                })
                }

            </article>
            <div className='btn-container'>
                <button className='refreshBtn' onClick={refresh}>REFRESH</button>
            </div>
        </main>
    )
}

export default Tours;