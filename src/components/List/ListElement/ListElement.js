

import React from 'react'

const ListElement = ({name, onDeleteActivity, listId}) => {
    return (
    <div>
    <li>{name}</li>
    <button onClick={() => {onDeleteActivity(listId)}} >X</button>
    </div>
  )
}

export default ListElement