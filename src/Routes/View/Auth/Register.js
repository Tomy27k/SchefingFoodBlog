import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import image from "../../../assets/images/h4-img-5.jpg";

const Register = () => {
  return (
    <main className="row auth-register">
      <div
        className="register-image col-5"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="col-7 d-flex bg-secondary align-items-center justify-content-center flex-column">
      <Link to='/' className='homepage btn btn-outline-dark  '>Ana Sayfa</Link>

        <div className="col-6">
          <h3>Get more things done with Loggin Platform</h3>
          <p>
            Access to the most powerful tool in the entire and web industry.
          </p>
          <div className="d-flex">
            <Link to="/auth/login" className="btn border-bottom border-4 ">
              Sign In
            </Link>
            <Link
              to="/auth/register"
              className="btn btn-success  border-bottom border-4 mx-3"
            >
              Sign Up
            </Link>
          </div>
          <form action="">
           <div className="input-group-item">
           <input type="text" placeholder="Full Name "/>
            <input type="email"  placeholder="E-mail" />
            <input type="password" placeholder="Password" defaultValue='' />
            <input type="password" placeholder="Password Confirm" />
           </div>
            <button className="btn btn-success">Register </button>
          </form>
        </div>
      </div>
    </main>

  );
};

export default Register;
