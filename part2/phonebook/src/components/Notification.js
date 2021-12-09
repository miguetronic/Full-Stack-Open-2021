import React from 'react'

const Notification = (props) => {
    const message = props.message
    if (message === null) {
        return null
    }

    return (
        <div className="successful">
            {message}
        </div>
    )
}

const NotificationError = (props) => {
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

export { Notification, NotificationError }