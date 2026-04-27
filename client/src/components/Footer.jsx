/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets.js'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className="mb-5 w-32" alt="logo" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Casual Wear is your go-to destination for trendy and comfortable clothing. We bring you the latest styles with quality and affordability, making everyday fashion effortless.</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 9876985478</li>
                    <li>casualweb205@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 texxt-sm text-center'>Copyright 2026@casualwear - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer