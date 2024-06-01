import React from 'react';
import '../App.css';
import Map from '../section/Map';
import Legend from '../section/Legend';
const Chloropeth = () => {
   return(
     <div className='container'>
       <Map/>
       <Legend/>
     </div>
  );
};
export default Chloropeth;