/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets.js'
import NewsletterBox from '../components/NewsletterBox.jsx'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>E-commerce has become an essential part of modern business, providing customers with the convenience of shopping from anywhere, at any time. With the increasing competition in the digital marketplace, having an excellent e-commerce website is crucial for businesses to succeed. An excellent e-commerce website should be user-friendly, secure, visually appealing, and offer a seamless shopping experience.</p>
          <p>In today&apos;s digital age, e-commerce solutions are essential for businesses of all sizes. Our e-commerce website development company in Kerala provides a platform for businesses to reach a wider audience and sell their products or services online.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>We deliver a cutting edge suite of services, spanning network and infrastructure management,cyber security, cloud computing, software development, and web and mobile development. We offer top-notch managed IT services, ensuring your digital landscape stays at forefront of innovation.</p>
        </div>
      </div><br />
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US?'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We create and implement customized technologies, encompassing software selection, system integration, network design, and more, to deliver a first-class service tailored to your needs.We create and implement customized technologies, encompassing software selection, system integration, network design, and more, to deliver a first-class service tailored to your needs.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Our experts thoroughly examine the extent and potential risks, implementing proactive measures and employing optimal strategies to mitigate future risks.Our experts thoroughly examine the extent and potential risks, implementing proactive measures and employing optimal strategies to mitigate future risks.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Over the years, we have developed websites, web applications, and mobile applications that have enabled our clients to improve their engagement with their customers and expand their revenue. We understand that our clients are not simply looking for a website or an app, but rather a medium to connect with their customers and expand their business.</p>
        </div>
      </div>
      <NewsletterBox />


    </div>
  )
}

export default About