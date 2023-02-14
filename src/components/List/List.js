import React from 'react'
import ListElement from './ListElement/ListElement'
import Message from '../Message/Message'

const List = ({filteredElements, weather}) => {


  return (
    <>
      <Message
      weather={weather}
      />

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