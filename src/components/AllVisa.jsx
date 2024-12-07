import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllVisa = () => {

    const loadedVisas = useLoaderData();
    const [visas, setVisas] = useState(loadedVisas);

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-4xl font-bold text-center my-5'>Our all available Visas</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    visas.map(visa => (
                        <div key={visa._id} className='border shadow-xl p-5 rounded-lg'>
                            <div className='h-36'>
                                <img className='h-full w-full' src={visa.countryImage} alt="" />
                            </div>
                            <h1 className='text-xl my-2'>Country: {visa.countryName}</h1>
                            <p >Visa Type: {visa.visaType}</p>
                            <p >Validity: {visa.validity}</p>
                            <p>Fee: BDT {visa.fee}</p>
                            <Link to={`/visa-details/${visa._id}`}><button className='bg-yellow-500 text-black py-1 w-full mt-3'>View Details</button></Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllVisa;