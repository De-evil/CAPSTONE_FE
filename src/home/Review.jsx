import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar } from "react-icons/fa6"
import { Avatar } from "flowbite-react";
import ProImg from "../assets/Images/ProfileImg.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'> 
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Clients</h2>

        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/> 
                   <FaStar/> 
                   <FaStar/> 
                   <FaStar/> 
                </div>
                {/* text */}
                <div className='mt-7'>
                   <p className='mb-5'>"Wishing you a lifetime of love and happiness together!"</p>
                    <Avatar 
                    img={ProImg} 
                    alt="avatar of Jese" 
                    rounded
                    className='w-10 mb-4' />
                    <h5 className='text-lg font-medium'>Sarah</h5>
                    <p className='text-base'>Clients</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/> 
                   <FaStar/> 
                   <FaStar/> 
                   <FaStar/> 
                </div>
                {/* text */}
                <div className='mt-7'>
                   <p className='mb-5'>"Congratulations on your engagement! The journey begins."</p>
                    <Avatar 
                    img={ProImg} 
                    alt="avatar of Jese" 
                    rounded
                    className='w-10 mb-4' />
                    <h5 className='text-lg font-medium'>Arjun</h5>
                    <p className='text-base'>Clients</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/> 
                   <FaStar/> 
                   <FaStar/> 
                   <FaStar/> 
                </div>
                {/* text */}
                <div className='mt-7'>
                   <p className='mb-5'>Cheers to the newlyweds and a future filled with joy</p>
                    <Avatar 
                    img={ProImg} 
                    alt="avatar of Jese" 
                    rounded
                    className='w-10 mb-4' />
                    <h5 className='text-lg font-medium'>Sarath</h5>
                    <p className='text-base'>Clients</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/> 
                   <FaStar/> 
                   <FaStar/> 
                   <FaStar/> 
                </div>
                {/* text */}
                <div className='mt-7'>
                   <p className='mb-5'>"Two souls, one heart. Excited for your future together!"</p>
                    <Avatar 
                    img={ProImg} 
                    alt="avatar of Jese" 
                    rounded
                    className='w-10 mb-4' />
                    <h5 className='text-lg font-medium'>Lilly</h5>
                    <p className='text-base'>Customer</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/> 
                   <FaStar/> 
                   <FaStar/> 
                   <FaStar/> 
                </div>
                {/* text */}
                <div className='mt-7'>
                   <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fugit pariatur corporis odio, quisquam delectus iusto!</p>
                    <Avatar 
                    img={ProImg} 
                    alt="avatar of Jese" 
                    rounded
                    className='w-10 mb-4' />
                    <h5 className='text-lg font-medium'>Peter Griffin</h5>
                    <p className='text-base'>Customer</p>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    </div>
  )
}

export default Review