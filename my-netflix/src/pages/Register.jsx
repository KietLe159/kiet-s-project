import React from 'react'
import { useState, useRef } from 'react'
import "../scss/register.scss"

const Register = () => {
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  
  const handleSetEmail= (e)=>{
    e.preventDefault();
    setEmail(emailRef.current.value);
  }

  const handleSetPassword= (e)=>{
    e.preventDefault();
    setPassword(passwordRef.current.value);
  }
  
  return (
    <div className='register-container'>
        <div className='register-nav'>
            <img src="https://firebasestorage.googleapis.com/v0/b/shop-cart-8f373.appspot.com/o/Netflix_logo.svg.png?alt=media&token=cad434be-6be7-4fe8-ab5c-31593e90ac7a" alt="" />
            <span>Login</span>
        </div>
        <div className='register-form'>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h2>Watch anywhere. Cancel anytime</h2>
            <p>Ready to watch? Enter your email to create or restart your membership</p>

             { !email &&<form className='form-handle' onSubmit={e=>handleSetEmail(e)}>
                <input ref={emailRef} type="email" className='form-text'/>
                <input type="submit" className='form-submit' value="Get started" />

            </form>
              }
              {email&&<form className='form-handle' onSubmit={e=>handleSetPassword(e)}>
                <input ref={passwordRef} type="password" className='form-text'/>
                <input type="submit" className='form-submit' value="Start" />
            </form>
              }
        </div>
    </div>
  )
}

export default Register