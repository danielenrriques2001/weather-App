import React from 'react'
import ListElement from './ListElement/ListElement'

const List = ({filteredElements}) => {
  return (
    <>
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