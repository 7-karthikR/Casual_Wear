/* eslint-disable no-unused-vars */
import React from 'react'

const NewsletterBox = () => {
const onSubmitHandler = (e) => {
    e.preventDefault();
}

  return (
    <div className='text-center'>
        <p className='text-2xl font-medum text-gray-800'>Subscribe Now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Stay updated with the latest trends and exclusive offers.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter Your Email' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>

        </form>
    </div>
  )
}

export default NewsletterBox;