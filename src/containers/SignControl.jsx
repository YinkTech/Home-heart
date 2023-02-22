import React from 'react'
import { Link } from 'react-router-dom'

const SignControl = () => {
  return (
    <div>
       <div className='sig-group'>
        <Link to={`/signin`}></Link>
        <Link to={`/signup`}></Link>
        </div>
    </div>
  )
}

export default SignControl