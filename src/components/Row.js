import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from '../axios';

function Row({title, fetchUrl}) {
    const [movies, setMovie] = useState([]);

    useEffect(() => {
      async function fetchData(){
        const request = await axios.get(fetchUrl);
        console.table(request);
        return request;
      } fetchData();
    }, [movies])
    
  return (
    <div className='row' >
        <h2>{title}</h2>
        <div>
            <img alt=''  />
        </div>
    </div>
  )
}

export default Row