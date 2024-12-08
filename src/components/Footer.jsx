import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-5">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                    {/* Contact Info Section */}
                    <div className="mb-6 lg:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <ul>
                            <li className="mb-2">
                                <p>Email: Visanavigator@gmail.com</p>
                            </li>
                            <li className="mb-2">
                                <p>Phone: +880 18456-78901</p>
                            </li>
                            <li className="mb-2">
                                <p>Address: Dhaka, Bangladesh</p>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="mb-6 lg:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Visa Navigator. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );

};

export default Footer;