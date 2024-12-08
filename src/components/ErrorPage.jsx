import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <h1 className='font-bold text-4xl text-center'>404</h1>
            <p className='text-2xl font-bold'>The page looking for is not found!</p>
            <Link to='/'>
                <button className='btn btn-primary text-white mt-5'>Go Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;