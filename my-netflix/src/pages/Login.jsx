import React from 'react'
import "../scss/login.scss"
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className='login-container'>
        <Link to="/">
        <div className='login-navbar'>
        <img src="https://firebasestorage.googleapis.com/v0/b/shop-cart-8f373.appspot.com/o/Netflix_logo.svg.png?alt=media&token=cad434be-6be7-4fe8-ab5c-31593e90ac7a" alt="" />
        </div>
        </ Link>
        <div className='login-form'>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input type='email' {...register("example", { required: true}) } placeholder="Enter your email or phone number"/>
                {errors.example && <span>This field is required</span>}
                <input type="password" {...register("exampleRequired", { required: true })} placeholder="Password"/>
                
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" value="Sign in" />
    </form>
        <h3>New to Netflix? <Link to='/register'>Sign up now</Link></h3>
        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link to=''>Learn more.</Link>
        </p>
        </div>
    </div>
  )
}

export default Login