import React from 'react'

const Message = ({weather}) => {
  return (
    <div>
    <p className=" font-bold font-sans  text-2xl font-mono">
      {weather ? 'The Weather is awesome! Go outside and:' : 'Bad Weather Outside! Here What you can do!'}</p>
    </div>
  )
}

export default Message