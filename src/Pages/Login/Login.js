import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import img from '../../assets/images/login/login.svg'
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const {login} = useContext(AuthContext);
    const handelLogin = event=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password)
        .then(result => {
          const user = result.user;
          console.log(user);
      })
      .catch(err => console.error(err));
        
    }
  return (
    <div className="hero w-full my-20">
      <div className="hero-content gap-20 grid grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  py-20 bg-base-100">
        <h1 className="text-5xl font-bold text-center">Login</h1>
          <form onSubmit={handelLogin } className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value='Login' />
              
            </div>
          </form>
          <p className="text-center">New to? <Link className="text-orange-600 font-bold" to='/singup'>Sing Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
