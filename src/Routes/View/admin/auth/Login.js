import React from 'react'
import { useForm } from "react-hook-form";
const Login = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);
  return (
    <div className='admin-login d-flex justify-content-center align-items-center'>
        <div className="container ">
        <div className="row">
        <form onSubmit={handleSubmit(onSubmit)} className=' mx-auto bg-light p-3 border rounded '>
            <h3>Admin Login</h3>
            <div className="mb-3">
                <label htmlFor="" className='form-label'>E-mail</label>
                <input type="email" {...register("E-mail")} className='form-control'/>
            </div>
            <div className="mb-3">
                <label htmlFor="" className='form-label'>Password</label>
                <input type="password" {...register("Password")} className='form-control' />
            </div>
            <button type='submit' className='btn btn-dark'>Login</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Login