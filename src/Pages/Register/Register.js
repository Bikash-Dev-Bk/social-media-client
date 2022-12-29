import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
    const [isSpinnerShow, setIsSpinnerShow] = useState(false);
    const { createUser, googleSignIn } = useContext(AuthContext);
  
    const location = useLocation();
    const navigate = useNavigate();
  
    const from = location.state?.from?.pathname || "/";
  
    const handleSignUp = (event) => {
      event.preventDefault();
      setIsSpinnerShow(true);
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
  
      console.log(email, password);
  
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          navigate(from, { replace: true });
          console.log(user);
        })
        .catch((err) => console.error(err));
    };
  
    const handleSignInWithGoogle = () => {
      googleSignIn()
        .then((result) => {
          const user = result.user;
          navigate(from, { replace: true });
          console.log(user);
        })
        .catch((error) => console.error(error));
    };
  
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Here</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-6">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-400">
                  {isSpinnerShow ? <BeatLoader color="#ffffff" /> : "Register"}
                </button>
              </div>
              <p className="text-center">Or login with</p>
              <button
                onClick={handleSignInWithGoogle}
                className="btn btn-accent text-white"
              >
                Google
              </button>
            </form>
            <p className="text-center">
              Already have an account?
              <Link to="/login" className="text-orange-600 font-bold">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  };

export default Register;