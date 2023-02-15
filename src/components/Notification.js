import React from 'react'

//notification if key has already been pressed
const Notification = ({ showNotification }) => {
    return (
        <div className={`notification-container ${showNotification ? 'show' : ''}`}>
            <p>You have already entered this letter</p>
        </div>
    )
}

export default Notification
