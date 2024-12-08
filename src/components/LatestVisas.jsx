import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LatestVisas = () => {

    const [latestVisas, setLatestVisas] = useState([]);
    const navigate = useNavigate();

    // Fetching the latest 6 visas
    useEffect(() => {
        fetch('http://localhost:5000/latestSixVisas')  // Assuming the API supports a limit query parameter
            .then((res) => res.json())
            .then((data) => setLatestVisas(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-4xl text-center font-bold my-7 text-black'>Our latest visas</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestVisas.map((visa) => (
                    <div key={visa._id} className="visa-card border shadow-xl rounded-lg p-5 bg-white">
                        <div className="visa-image mb-4">
                            <img
                                src={visa.countryImage}
                                alt={visa.countryName}
                                className="w-full h-40 object-cover rounded-lg"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-black">{visa.countryName}</h3>
                            <p className="text-lg font-medium">Visa Type: {visa.visaType}</p>
                            <p className="text-lg font-medium">Processing Time: {visa.processingTime}</p>
                            <p className="text-lg font-medium">Fee: {visa.fee} BDT</p>
                            <p className="text-lg font-medium">Validity: {visa.validity}</p>
                            <p className="text-lg font-medium">Application Method: {visa.applicationMethod}</p>
                        </div>

                        <div>
                            <Link to={`/visa-details/${visa._id}`}><button className='bg-yellow-500 text-black py-1 w-full mt-3'>See Details</button></Link>
                        </div>
                    </div>
                ))}
            </div>
            {/* See All Visas Button */}
            <div className="text-center mt-6">
                <button
                    onClick={() => navigate('/allVisa')}
                    className="bg-green-600 text-white font-semibold py-2 px-5 rounded-lg"
                >
                    See All Visas
                </button>
            </div>
        </div>
    );
};

export default LatestVisas;
