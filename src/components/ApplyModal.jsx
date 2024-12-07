import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ApplyModal = ({ userName, userEmail, visaFee, visaId, setShowModal }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [appliedDate] = useState(new Date().toLocaleDateString())
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const applicationData = {
            visaId,
            email: userEmail,
            firstName,
            lastName,
            appliedDate,
            fee: visaFee
        };
        fetch('http://localhost:5000/applyVisas', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(applicationData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Visa Application Submitted Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    setShowModal(false);
                }
            })
    }
    return (
        <div className='absolute lg:fixed lg:top-12 lg:left-1/4 lg:right-1/4 shadow-xl rounded-md bg-orange-200 p-5'>
            <h2 className='text-2xl text-center font-semibold mb-3'>Apply for the visa</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='font-medium'>Email</label>
                    <input type="email" name="email" value={userEmail} className='input input-bordered input-sm w-full mt-2 bg-slate-100' readOnly />
                </div>
                <div>
                    <label className='font-medium'>First Name</label>
                    <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className='input input-bordered input-sm w-full mt-2 bg-gray-100' required />
                </div>
                <div>
                    <label className='font-medium'>Last Name</label>
                    <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className='input input-bordered input-sm w-full mt-2 bg-slate-100' required />
                </div>
                <div>
                    <label className='font-medium'>Applied Date</label>
                    <input type="date" name="data" value={appliedDate} className='input input-bordered input-sm w-full mt-2 bg-slate-100' readOnly />
                </div>
                <div>
                    <label className='font-medium'>Visa Fee</label>
                    <input type="number" name="fee" value={visaFee} className='input input-bordered input-sm w-full mt-2 mb-4 bg-slate-100' readOnly />
                </div>
                <div>
                    <button type='submit' className='bg-green-600 text-white rounded-md py-1 px-5 mr-3'>Apply</button>
                    <button onClick={() => setShowModal(false)} className='bg-red-600 text-white rounded-md py-1 px-5'>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default ApplyModal;