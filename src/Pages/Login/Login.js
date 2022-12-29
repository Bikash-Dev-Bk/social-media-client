import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
  
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
  
    const from = location.state?.from?.pathname || "/";
  
    const [success, setSuccess] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [isSpinnerShow, setIsSpinnerShow] = useState(false);
  
    const handleLogin = (event) => {
      event.preventDefault();
      setSuccess(false);
      setIsSpinnerShow(true);
  
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      setPasswordError("");
  
      signIn(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setSuccess(true);
          form.reset();
          navigate(from, { replace: true });
          setIsSpinnerShow(false);
        })
        .catch((err) => {
          console.error(err);
          setPasswordError(err.message);
        });
    };
  
    const handleSignInWithGoogle = () => {
      googleSignIn()
        .then((result) => {
          const user = result.user;
          
          navigate(from, { replace: true });
          setIsSpinnerShow(false);
          console.log(user);
        })
        .catch((error) => console.error(error));
    };
  
    return (
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login Here</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-6">
            <form onSubmit={handleLogin} className="card-body">
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
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              {success && (
                <p className="text-green-500">
                  Successfully login to the account
                </p>
              )}
  
              {passwordError && (
                <p className="text-red-500">Wrong password or email</p>
              )}
              <div className="form-control mt-6">
                <button className="btn bg-blue-400">
                  {isSpinnerShow ? (
                    <BeatLoader color="#ffffff" />
                  ) : (
                    "Login"
                  )}
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
              New in Instatown?{" "}
              <Link to="/register" className="text-orange-600 font-bold">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  };

export default Login;