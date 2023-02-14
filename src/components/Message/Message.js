import React from 'react'

const Message = ({weather}) => {
  return (
    <div>
    <p>{weather ? 'The Weather is awesome! Go outside and:' : 'Bad Weather Outside! Here What you can do!'}</p>
    </div>
  )
}

export default Message