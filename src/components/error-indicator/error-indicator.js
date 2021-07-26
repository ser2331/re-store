import React from 'react'
import './error-indicator.scss'
import errorImage from './error.png'
const ErrorIndicator=()=>{
    return(
        <div className='error-indicator'>
            <img src={errorImage} alt='error'/>
            <h1>Error, please waite</h1>
        </div>
    )
}
export default ErrorIndicator