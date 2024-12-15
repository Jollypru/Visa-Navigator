import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/4VSVY97/6618.jpg"
                    className="w-full h-[400px]" />
                <div className='absolute inset-0 bg-black bg-opacity-50 text-white text-center flex flex-col items-center justify-center px-10'>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Simplify Your Visa Journey</h2>
                    <p className='text-xl md:text-2xl'>From requirements to application and tracking—everything in one place.</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle btn-xs md:btn-md">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-xs md:btn-sm lg:btn-md">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/VVBYXdw/3425297.jpg"
                    className="w-full h-[400px]" />
                 <div className='absolute inset-0 bg-black bg-opacity-50 text-white text-center flex flex-col items-center justify-center'>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Your Global Gateway</h2>
                    <p className='text-2xl'>Explore visa requirements for any country with ease.</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle btn-xs md:btn-sm lg:btn-md">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-xs md:btn-sm lg:btn-md">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/Jq4jZzT/customs-officer-device-4.jpg"
                    className="w-full h-[400px]" />
                 <div className='absolute inset-0 bg-black bg-opacity-50 text-white text-center flex flex-col items-center justify-center'>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Fast & Reliable Visa Processing</h2>
                    <p className='text-xl md:text-2xl'>Apply online and stay updated on your application's status.</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle btn-xs md:btn-sm lg:btn-md">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-xs md:btn-sm lg:btn-md">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/Bwsr1YQ/4689588.jpg"
                    className="w-full h-[400px]" />
                 <div className='absolute inset-0 bg-black bg-opacity-50 text-white text-center flex flex-col items-center justify-center'>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Navigate the World With Confidence</h2>
                    <p className='text-xl md:text-2xl'>A seamless visa experience tailored for your convenience.</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle btn-xs md:btn-sm lg:btn-md">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-xs md:btn-sm lg:btn-md">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;