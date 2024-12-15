import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const VisaApplication = () => {

    const { user } = useContext(AuthContext);
    const [applications, setApplications] = useState([]);
    const [visaDetails, setVisaDetails] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredApplications, setFilteredApplications] = useState([]);
    const [mergedApplications, setMergedApplications] = useState([]);

    useEffect(() => {
   
        fetch(`https://assignment-10-server-orcin-three.vercel.app/myApplications?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setApplications(data)
            });

        fetch('https://assignment-10-server-orcin-three.vercel.app/visas')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setVisaDetails(data);
            });
    }, [user.email]);

    useEffect(()=>{
        const merged = applications.map((app) => {
            const visaDetail = visaDetails.find((detail) => detail._id === app.visaId);
            return {
                ...app,
                visaDetail: visaDetail || {}
            };
        });
        setMergedApplications(merged);
        setFilteredApplications(merged);
    }, [applications, visaDetails]);
  
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredApplications(mergedApplications); 
        } else {
            const filtered = mergedApplications.filter(application =>
                application.visaDetail.countryName.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredApplications(filtered);
        }
    }, [searchQuery, mergedApplications]);

    const handleCancelButton = (id) => {
        fetch(`https://assignment-10-server-orcin-three.vercel.app/myApplications/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(() => {
                setApplications(previousApp => previousApp.filter(application => application._id !== id))
            })
    };

    return (
        <div className='bg-gray-200 px-5 py-10 '>
            <div className="mb-5 flex gap-3">
                {/* Search Input and Button */}
                <input
                    type="text"
                    placeholder="Search by country name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
                <button
                    onClick={() => setSearchQuery(searchQuery)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Search
                </button>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {filteredApplications.length > 0 ? (
                    filteredApplications.map((application) => (
                        <div key={application._id} className='border shadow-xl rounded-lg p-10 grid gap-5 bg-white'>
                            {
                                application.visaDetail && (
                                    <div>
                                        <div className='w-1/3'>
                                            <img src={application.visaDetail.countryImage} alt="" />
                                        </div>
                                        <h1 className='text-2xl font-bold text-black mb-3'>{application.visaDetail.countryName}</h1>
                                        <hr className='font-bold' />
                                        <div className='lg:flex gap-5'>
                                            <div>
                                                <p className='text-xl font-medium mt-3'>Visa Type:</p>
                                                <span className='text-lg'>{application.visaDetail.visaType}</span>
                                                <p className='text-xl font-medium mt-3'>Processing Time</p>
                                                <span className='text-lg'> {application.visaDetail.processingTime}</span>
                                                <p className='text-xl font-medium mt-3'>Required Documents: </p>
                                                <span className='text-lg'> {application.visaDetail.requiredDoc}</span>
                                                <p className='text-xl font-medium mt-3'>Description:</p>
                                                <span className='text-lg'>  {application.visaDetail.description}</span>
                                                <p className='text-xl font-medium mt-3'>Age Restriction: </p>
                                                <span className='text-lg'> {application.visaDetail.ageRestriction}</span>
                                                <p className='text-xl font-medium mt-3'>Fee :</p>
                                                <span className='text-lg'>  {application.visaDetail.fee} BDT</span>
                                                <p className='text-xl font-medium mt-3'>Validity : </p>
                                                <span className='text-lg'> {application.visaDetail.validity}</span>
                                            </div>
                                            <div>
                                                <p className='text-xl font-medium mt-3'>Applied Date</p>
                                                <span className='text-lg'> {application.appliedDate}</span>
                                                <p className='text-xl font-medium mt-3'>Applicants Name : </p>
                                                <span className='text-lg'> {application.firstName} {application.lastName}</span>
                                                <p className='text-xl font-medium mt-3'>Applicant's Email: </p>
                                                <span className='text-lg'> {application.email}</span>
                                            </div>
                                        </div>
                                        <button onClick={() => handleCancelButton(application._id)} className='text-white font-semibold bg-red-600 py-1 w-full rounded-lg mt-5'>Cancel</button>
                                    </div>
                                )
                            }
                        </div>
                    ))
                ) : (<p className="text-center text-gray-500">No applications found.</p>)

                }
            </div>
        </div>
    );
};

export default VisaApplication;