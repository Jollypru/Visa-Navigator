import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ApplyModal from './ApplyModal';
import { AuthContext } from '../Providers/AuthProviders';

const VisaDetails = () => {

    const visas = useLoaderData();
    const { _id, countryImage, countryName, visaType, processingTime, requiredDoc, description, ageRestriction, fee, validity, applicationMethod } = visas;
    const [showModal, setShowModal] = useState(false);
    const {user} = useContext(AuthContext);

    const handleApplyButton = (applicationData) => {
       setShowModal(true);
    }
    
    return (
        <div className='bg-gray-200 py-10'>
            <div className='w-3/4 mx-auto border shadow-xl rounded-lg p-10 grid grid-cols-3 gap-5 bg-white'>
                <div className='col-span-2'>
                    <h1 className='text-4xl font-bold text-black mb-3'>{countryName}</h1>
                    <hr className='font-bold'/>
                    <p className='text-2xl font-medium mt-3'>Visa Type:</p>
                    <span className='text-lg'>{visaType}</span>
                    <p className='text-2xl font-medium mt-3'>Processing Time</p>
                    <span className='text-lg'> {processingTime}</span>
                    <p className='text-2xl font-medium mt-3'>Required Documents: </p>
                    <ul className='text-lg'>
                        {requiredDoc && requiredDoc.map((doc, index) => (
                            <li key={index}>{index + 1}. {doc}</li>
                        ))}
                    </ul>
                    <p className='text-2xl font-medium mt-3'>Description:</p>
                    <span className='text-lg'>  {description}</span>
                    <p className='text-2xl font-medium mt-3'>Age Restriction: </p>
                    <span className='text-lg'> {ageRestriction}</span>
                    <p className='text-2xl font-medium mt-3'>Fee :</p>
                    <span className='text-lg'>  {fee} BDT</span>
                    <p className='text-2xl font-medium mt-3'>Validity : </p>
                    <span className='text-lg'> {validity}</span>
                    <p className='text-2xl font-medium mt-3'>Application Method : </p>
                    <span className='text-lg'> {applicationMethod}</span>
                </div>
                <div>
                    <img src={countryImage} alt="" />
                </div>
                <button onClick={handleApplyButton} className='bg-orange-500 rounded-md py-1 mt-5 text-white'>Apply for the visa</button>
                {
                    showModal && (
                        <ApplyModal userName={user?.displayName} userEmail={user?.email} visaFee={fee} visaId={_id} setShowModal={setShowModal}></ApplyModal>
                    )
                }
            </div>
            
        </div>
    );
};

export default VisaDetails;