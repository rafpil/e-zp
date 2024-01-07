import React from 'react'
import InfoIcon from '../../Images/InfoIcon'

import './Alert.css'

const Alert = ({ message = 'No set message' }) => {
    return (
        <div className='alert' role='alert'>
            <InfoIcon className='w-8 h-8' />
            <span className="sr-only">Info alert</span>
            <div>
                <span>{message}</span>
            </div>
        </div>
    )
}

export default Alert