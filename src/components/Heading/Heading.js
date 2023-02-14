import React from 'react'

const Heading = ({condition, temperature}) => {
  return (
    <div>
        <h1> <span>{condition}</span>{temperature}</h1>
    </div>
  )
}

export default Heading