import { useEffect, useState } from "react";

const useFetch = (url) => {

  const [infoWeather, setinfoWeather] = useState({temperature: 25, 
    condition:':(',
    isGoodWeather:  false})
    useEffect(() => {
      const startFetching = async (url) => {

        try {
          const response = await fetch(url);
         
          if(response.ok) {
            const data = await response.json();
  
            const {condition, temperature, isGoodWeather} = data;
            
            setinfoWeather({condition, temperature, isGoodWeather})
  
          }
        } catch (error) {
          console.log(`There's an Error: ${error} `)
        }
      }
    
        startFetching(url);
    }, [])

    return infoWeather;
  }


export default useFetch;