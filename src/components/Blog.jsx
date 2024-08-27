import React from 'react'
import { Link } from 'react-router-dom';
import BlogImg from '../assets/Images/Lily.jpg'
const Blog = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>Let us make your moments unforgettable. Contact us today to start planning your dream event</h2>
                <br />
                {/* <Link to="/plan" className='block'>
                <button className='bg-blue-700 text-white font-semibold px-4 py-2 rounded hover:bg-black transition-all durartion-300' >Explore </button></Link> */}
                <p>
                In 2022, three friends, united by their passion for bringing dreams to life, decided to turn their shared vision into reality. After completing our MBA degrees, we embarked on a journey to create an event management and planning company that would stand out in a crowded market. What started as a simple idea quickly evolved into a thriving business, driven by our dedication to excellence and a keen eye for detail.
                </p>
                <br></br>
                <p>
                Our journey began with a focus on marriage events. We poured our hearts into crafting unforgettable wedding experiences, ensuring that every couple's special day was nothing short of magical. From intimate ceremonies to grand celebrations, we were committed to making every wedding a reflection of the couple's unique love story.
                </p>
                <br></br>
                <p>
                As we gained experience and honed our skills, we realized that our potential extended far beyond just weddings. In 2023, we decided to expand our services and take our company to the next level. We added wedding ceremonies, couple photoshoots, engagements, and even corporate events to our portfolio. This expansion allowed us to apply our creativity and expertise to a broader range of events, each with its own set of challenges and opportunities.
                </p>
                <br></br>
                <p>
                Our team is driven by a simple yet powerful philosophy: every event should be a seamless, stress-free experience for our clients, allowing them to focus on enjoying the moment. We believe that the key to a successful event lies in the details, and we leave no stone unturned in our pursuit of perfection.
                </p>
                <br />
                <p>
                Today, we are proud to be a trusted partner for clients who seek professional event planning services that go beyond the ordinary. Whether it's a wedding, an engagement, a couple photoshoot, or a corporate event, we bring the same level of passion, creativity, and dedication to every project we undertake.
                </p>
                <br />
                <p>
                As we continue to grow and evolve, our commitment to our clients remains unwavering. We are excited to help you create lasting memories and unforgettable experiences, no matter the occasion. Let us bring your vision to life with the care and attention it deserves.
                </p>
            </div>

            <div>
                <img src={BlogImg} alt=""className='w-96'  />
            </div>
        </div>
    </div>
  )
}

export default Blog