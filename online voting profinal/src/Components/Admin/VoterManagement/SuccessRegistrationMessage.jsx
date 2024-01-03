import React from 'react';
import { Link } from 'react-router-dom';
import './CreateStyles.css';

const SuccessRegistrationMessage = () => {
  return (
    <div className='form-container'>
      <h2>Successfully, you have registered....!</h2> 
      <h2>For Login page, Click below....</h2> 
      <h2><Link to="/voter-login">Student Login</Link></h2>
         
    </div>
    
  )
}

export default SuccessRegistrationMessage
