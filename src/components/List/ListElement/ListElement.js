

import React from 'react'

const ListElement = ({name, onDeleteActivity, listId}) => {
    return (
    <div className="flex justify-between gap-10 border border-black shadow-2xl p-2 px-10 my-3 bg-slate-400  rounded-2xl py-5">
    <li className='list-none font-mono' >{name}</li>
    <button 
    className="bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded"
    onClick={() => {onDeleteActivity(listId)}} >X</button>
    </div>
  )
}

export default ListElement