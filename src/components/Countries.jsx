import React, { use, useState } from 'react';
import Country from './country/Country';
import "./Countries.css"




const Countries = ({countriesPromise}) => {
    const [visitedCountries,setVisitedCountries]=useState([]);
    const handleVisitedCountries=()=>{
        console.log(`visited country`);
        
    }
    const countriesData= use(countriesPromise)
    const countries=countriesData.countries;
    // console.log(countries);
    
    return (
        <div>
            <h1>Countries</h1>
            <div className='countries'>
  {
                countries.map(country  =><Country
                     key={country.cca3.cca3}
                      country={country}
                      handleVisitedCountries={handleVisitedCountries}
                      ></Country>)
            }
            </div>
          
        </div>
    );
};

export default Countries;