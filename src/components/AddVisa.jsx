import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddVisa = () => {
    const [loading, setLoading] = useState(false);
    const requiredDocuments = ['Valid Passport', 'Visa application form', "Recent passport-sized photograph", "Health insurance", "Proof of financial support", "Employment contract", "Certificate of Eligibility", "English language proficiency test results", "Travel itinerary"]

    const handleAddVisa = e => {
        setLoading(true);
        e.preventDefault();

        const countryImage = e.target.countryImage.value;
        const countryName = e.target.countryName.value;
        const visaType = e.target.visaType.value;
        const processingTime = e.target.processingTime.value;
        const requiredDoc = Array.from(e.target.querySelectorAll('input[name="requiredDoc[]"]:checked')).map(el => el.value);
        const description = e.target.description.value;
        const ageRestriction = e.target.ageRestriction.value;
        const fee = e.target.fee.value;
        const validity = e.target.validity.value;
        const applicationMethod = e.target.applicationMethod.value;

        const newVisa = { countryImage, countryName, visaType, processingTime, requiredDoc, description, ageRestriction, fee, validity, applicationMethod }
        console.log(newVisa);

        fetch('https://assignment-10-server-orcin-three.vercel.app/visas', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newVisa)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Visa Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    setLoading(false);
                }
            })
    }
    return (
        <div className='text-gray-800 p-10'>
            <h2 className='text-center font-bold text-4xl my-5'>Add a Visa</h2>
            {
                loading ? (
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
                    </div>
                ) : (
                    <form onSubmit={handleAddVisa}>
                        <div className='md:flex gap-5 mb-3'>
                            <div className='md:w-1/2'>
                                <label>
                                    <span className='text-xl'>Country Image URL</span>
                                </label>
                                <input type="text" name='countryImage' className='input input-bordered w-full mt-2' required />
                            </div>
                            <div className='form-control md:w-1/2'>
                                <label>
                                    <span className='text-xl'>Country Name</span>
                                </label>
                                <input type="text" name='countryName' className='input input-bordered w-full mt-2' required />
                            </div>
                        </div>
                        <div className='md:flex gap-5 mb-3'>
                            <div className='md:w-1/2 flex flex-col'>
                                <label>
                                    <span className='text-xl'>Visa Type</span>
                                </label>
                                <select name="visaType" id="" className='input input-bordered mt-2' required>
                                    <option>Select visa type</option>
                                    <option>Student Visa</option>
                                    <option>Tourist Visa</option>
                                    <option>Official Visa</option>
                                    <option>Work Visa</option>
                                    <option>Cultural Exchange Visa</option>
                                    <option>Schengen Visa</option>
                                    <option>Working Holiday Visa</option>

                                </select>
                            </div>
                            <div className='form-control md:w-1/2'>
                                <label>
                                    <span className='text-xl'>Processing Time</span>
                                </label>
                                <input type="text" name='processingTime' placeholder='Enter Processing Time' className='input input-bordered w-full mt-2' required />
                            </div>
                        </div>
                        <div className='md:flex gap-5 mb-3'>
                            <div className='md:w-1/2'>
                                <label>
                                    <span className='text-xl'>Required Documents</span>
                                </label>
                                {
                                    requiredDocuments.map(document => (
                                        <div key={document}>
                                            <input
                                                type="checkbox" value={document} name='requiredDoc[]' className="mr-2" required
                                            />
                                            <span>{document}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='form-control md:w-1/2'>
                                <label>
                                    <span className='text-xl'>Description</span>
                                </label>
                                <input type="text" name='description' placeholder='Enter description' className='input input-bordered w-full mt-2' required />
                            </div>
                        </div>
                        <div className='md:flex gap-5 mb-3'>
                            <div className='md:w-1/2'>
                                <label>
                                    <span className='text-xl'>Age Restriction</span>
                                </label>
                                <input type="number" name='ageRestriction' placeholder='Enter age restriction' className='input input-bordered w-full mt-2' required />
                            </div>
                            <div className='form-control md:w-1/2'>
                                <label>
                                    <span className='text-xl'>Fee</span>
                                </label>
                                <input type="number" name='fee' placeholder='Enter the fee' className='input input-bordered w-full mt-2' required />
                            </div>
                        </div>
                        <div className='md:flex gap-5 mb-8'>
                            <div className='md:w-1/2'>
                                <label>
                                    <span className='text-xl'>Validity</span>
                                </label>
                                <input type="text" name='validity' placeholder='Enter validity of the visa' className='input input-bordered w-full mt-2' required />
                            </div>
                            <div className='form-control md:w-1/2'>
                                <label>
                                    <span className='text-xl'>Application Method</span>
                                </label>
                                <input type="text" name='applicationMethod' placeholder='Enter application method' className='input input-bordered w-full mt-2' required />
                            </div>
                        </div>
                        <button type='submit' className='w-full bg-orange-500 rounded-md py-2 text-white text-xl'>Add Visa</button>
                    </form>
                )
            }

        </div>
    );
};

export default AddVisa;