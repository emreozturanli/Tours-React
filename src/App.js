import React, { useEffect, useState } from 'react';
import './index.css';
import Header from './components/Header';
import Tours from './components/Tours';
import Footer from './components/Footer';
import Loading from './components/Loading';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) =>{
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  const fetchURL =  async () => {
    try {
      const response = await fetch(url);
      const fetchedTours = await response.json();
      setTours(fetchedTours);
      console.log(tours)
      setIsLoading(false);
    }catch(error){
      console.log(error)
      setIsLoading(true);
    };
  }

  useEffect(()=>{
    fetchURL()
  },[])

  if(isLoading){
    return <Loading />
  }

  if(tours.length === 0){
    return (
    <section>
      <h1 className='no-tours'>We Have No Tours Left</h1>
      <div className='btn-container'>
            <button className='refreshBtn' onClick={fetchURL}>REFRESH</button>
      </div>
    </section>
    )
  }

  return (
   <div className='container'>
      <Header />
      <Tours allTours={tours} removeTour={removeTour} refresh={fetchURL}/>
      <Footer />
   </div>
  );
}

export default App;
