import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllVisa = () => {
    const visas = useLoaderData();
    const [filteredVisas, setFilteredVisas] = useState(visas);

    const handleFilterChange = (e) => {
        const selectedType = e.target.value;
        if (selectedType === 'All') {
            setFilteredVisas(visas);
        } else {
            const filtered = visas.filter(visa => visa.visaType === selectedType);
            setFilteredVisas(filtered);
        }
    };


    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-4xl font-bold text-center my-5'>Our all available Visas</h1>

            <div className="mb-5">
                <label htmlFor="visaType" className="block text-xl font-semibold mb-2">
                    Filter by Visa Type:
                </label>
                <select
                    id="visaType"
                    onChange={handleFilterChange}
                    className="select select-bordered w-full max-w-xs"
                >
                    <option value="All">All</option>
                    <option value="Student Visa">Student Visa</option>
                    <option value="Tourist Visa">Tourist Visa</option>
                    <option value="Official Visa">Official Visa</option>
                    <option value="Work Visa">Work Visa</option>
                    <option value="Cultural Exchange Visa">Cultural Exchange Visa</option>
                    <option value="Schengen Visa">Schengen Visa</option>
                    <option value="Working Holiday Visa">Working Holiday Visa</option>
                </select>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    filteredVisas.map(visa => (
                        <div key={visa._id} className='border shadow-xl p-5 rounded-lg'>
                            <div className='h-36'>
                                <img className='h-full w-full' src={visa.countryImage} alt="" />
                            </div>
                            <div className='h-40'>
                                <h1 className='text-xl my-2'>{visa.countryName}</h1>
                                <p >Visa Type: {visa.visaType}</p>
                                <p >Validity: {visa.validity}</p>
                                <p>Fee: BDT {visa.fee}</p>
                            </div>
                            <div>
                                <Link to={`/visa-details/${visa._id}`}><button className='bg-yellow-500 text-black py-1 w-full mt-3'>View Details</button></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllVisa;