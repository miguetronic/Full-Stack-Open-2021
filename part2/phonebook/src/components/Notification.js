import React from 'react'

const Notification = (props) => {
    const message = props.message
    if (message === null) {
      return null
    }
  
    return (
      <div className="error">
        {message}
      </div>
    )
  }

export default Notification