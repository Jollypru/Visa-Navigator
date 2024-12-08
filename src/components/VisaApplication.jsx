import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';


const VisaApplication = () => {

    const { user } = useContext(AuthContext);
    const [applications, setApplications] = useState([]);
    const [visaDetails, setVisaDetails] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myApplications?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setApplications(data)
            });

        fetch('http://localhost:5000/visas')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setVisaDetails(data)
            });
    }, [user.email])

    const mergedApplications = applications.map((app) => {
        console.log(app.visaId);
        const visaDetail = visaDetails.find((detail) => detail._id === app.visaId);
        console.log('merged', visaDetail);
        return {
            ...app,
            visaDetail: visaDetail || {} // Merge visa details with application
        };
    });

    console.log('mergedApp', mergedApplications);


    return (
        <div className='bg-gray-200 px-5 py-10 grid grid-cols-2 gap-5'>
            {
                mergedApplications.map((application) => (
                    <div key={application._id} className='border shadow-xl rounded-lg p-10 grid gap-5 bg-white'>
                        {
                            application.visaDetail && (
                                <div>
                                    <div className='w-1/3'>
                                        <img src={application.visaDetail.countryImage} alt="" />
                                    </div>
                                    <h1 className='text-2xl font-bold text-black mb-3'>{application.visaDetail.countryName}</h1>
                                    <hr className='font-bold' />
                                    <div className='flex gap-5'>
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
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default VisaApplication;