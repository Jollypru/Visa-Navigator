import React from 'react';

const AddVisa = () => {
    const requiredDocuments = ['Valid Passport', 'Visa application form', "Recent passport-sized photograph"]

    const handleAddVisa = e => {
        e.preventDefault();
        const countryName = e.target.countryName.value;
        const visaType = e.target.visaType.value;
        const processingTime = e.target.processingTime.value;
        const description = e.target.description.value;
        const age = e.target.age.value;
        const fee = e.target.fee.value;
        const validity = e.target.validity.value;
        const applicationMethod = e.target.applicationMethod.value;

        console.log(countryName, visaType, processingTime, description, age, fee, validity, applicationMethod);
    }
    return (
        <div className='text-gray-800 p-10'>
            <h2 className='text-center font-bold text-4xl my-5'>Add a Visa</h2>
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
                            <option>Working Visa</option>
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
                                        type="checkbox" value={document} className="mr-2" required
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
                        <input type="number" name='age' placeholder='Enter age restriction' className='input input-bordered w-full mt-2' required />
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
        </div>
    );
};

export default AddVisa;