import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.init';

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [error, setError] =useState('');
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
            })
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            navigate('/')
        })
        .catch(error => {
            console.log('error during google login', error.message);
            setError(error.message)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        {
                            error && (
                                <div className='text-red-600'>
                                    <p>{error}</p>
                                </div>
                            )
                        }
                        <div className="form-control">
                            <button className="btn bg-orange-500 text-white text-xl">Login</button>
                        </div>
                        <div>
                            <button onClick={handleGoogleLogin} className='btn bg-black text-white w-full'>Sign In with Google</button>
                        </div>
                        <p>New to this website? Please <Link to='/register' className='underline text-blue-600'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;