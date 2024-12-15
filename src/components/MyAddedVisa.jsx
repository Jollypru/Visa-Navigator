import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const MyAddedVisa = () => {
    const { user } = useContext(AuthContext);
    const [visas, setVisas] = useState([]);
    const [updateVisa, setUpdateVisa] = useState(null);

    useEffect(() => {
        if (user) {
            fetch(`https://assignment-10-server-orcin-three.vercel.app/myAddedVisas?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setVisas(data);
                })
                .catch(error => console.error('error at fetching', error))
        }
    }, [user])
    return (
        <div>
            <h1>My Added Visas</h1>
            {user ? (
                visas.length > 0 ? (
                    <div className="visas-container">
                        {visas.map((visa) => (
                            <div key={visa._id} className="visa-card">
                                <h3>Country: {visa.country}</h3>
                                <img src={visa.countryImage} alt={visa.country} />
                                <p>Visa Type: {visa.visa_type}</p>
                                <p>Processing Time: {visa.processing_time}</p>
                                <p>Fee: {visa.fee}</p>
                                <p>Validity: {visa.validity}</p>
                                <p>Application Method: {visa.application_method}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No visas added yet.</p>
                )
            ) : (
                <p>Please log in to see your added visas.</p>
            )}
        </div>
    );
};

export default MyAddedVisa;