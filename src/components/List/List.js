import React from 'react'
import ListElement from './ListElement/ListElement'
import Message from '../Message/Message'

const List = ({filteredElements, weather, onDeleteActivity}) => {
  

  return (
    <>
      <Message
      weather={weather}
      />

      { filteredElements.map((e) => {
      return(
        <ListElement
        listId={e.id}
        key={e.id}
        name={e.name}
        onDeleteActivity={onDeleteActivity}
        />
      )
    })
   }
    </>
   
  )
}

export default List