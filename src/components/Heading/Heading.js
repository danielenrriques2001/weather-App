import React from 'react'

const Heading = ({condition, temperature}) => {
  return (
    <div className='border border-black p-5 rounded-full my-4'>
        <h1 className=' text-6xl font-bold font-mono' > 
        
        <span>
          {condition}
          </span>
          {temperature}
      </h1>
    </div>
  )
}

export default Heading