import React, { useState } from 'react';
import "./Country.css"

const Country = ({country,handleVisitedCountries}) => {
    // console.log(country.name.common);
    // console.log(country.flags.flags.png);
    
    const [visited,setVisited]=useState(false);
    const handleClick=()=>{
    //   if (visited) {
    //     setVisited(false)
    //   }else{
    //     setVisited(true)
    //   }
    // 2nd system 
        // setVisited (visited?false:true);
        // last 
        setVisited(!visited);
        handleVisitedCountries(country);
   
        
    }
    return (
        // <div className={`country ${visited?'visited':'not-visited'} `}>
        <div className={`country ${visited&&'visited'} `}>
           
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
             <h2>name: {country.name.common}</h2>
            <p>Capital:{country.capital.capital}</p>
            <p>Area: {country.area.area>30000 ?"Big country":"Small country"}</p>
            <button onClick={handleClick}> {visited?'Visited':"Not visited"} </button>
        </div>
    );
};

export default Country;