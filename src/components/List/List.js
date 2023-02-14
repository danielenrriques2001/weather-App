import React from 'react'
import ListElement from './ListElement/ListElement'

const List = ({filteredElements, isGoodWeather}) => {
  return (
    <>
      <p>{isGoodWeather === true ? "The weather is awsome! Go outside and:" : "Bad weather outside! Hers what you can do now:"}</p>
      
      { filteredElements.map((e) => {
      return(
        <ListElement
        key={e.id}
        name={e.name}
        />
      )
    })
   }
    </>
   
  )
}

export default List