import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.init';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [error, setError] =useState('');
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasMinLength = password.length >= 6;

        if(!hasUpperCase){
            return 'Password must have at least one uppercase letter.'
        }
        if(!hasLowerCase){
            return 'Password must have at least one lowercase letter.'
        }
        if(!hasMinLength){
            return 'Password must have at least 6 characters.'
        }
        return null;
    }

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        console.log(name, email, photo, password);

        const passwordError = validatePassword(password);
        if(passwordError){
            setError(passwordError);
            console.error(passwordError);
            return;
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            updateProfile(user, {
                displayName: name,
                photoURL: photoURL,
            })
            .then(() => {
                console.log("User created successfully:", user);
                navigate('/');
            })
            .catch(error => {
                console.error("Error updating profile:", error.message);
                setError(error.message);
            });
        })
        .catch(error => {
            console.error("Error during registration:", error.message);
            setError(error.message);
        });
    }

    const handleGoogleRegister = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            navigate('/')
        })
        .catch(error => {
            console.log('error during google login', error.message);
            setError(error.message);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Photo</span>
                            </label>
                            <input type="text" placeholder="photo" name='photo' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        {
                            error && (
                                <div className='text-red-600 mt-2'>
                                    <p>{error}</p>
                                </div>
                            )
                        }
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-500 text-white text-xl">Register</button>
                        </div>
                        <div>
                            <button onClick={handleGoogleRegister} className='btn w-full bg-black text-white'>Sign In with Google</button>
                        </div>
                        <p>Already have an account? Please <Link to='/login' className='underline text-blue-600'>Login</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;