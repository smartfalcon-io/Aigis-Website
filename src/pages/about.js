import React from 'react'
import '../assets/css/about.css';
import Footer from '../components/footer';
import h1 from '../assets/images/Hostel-Management.webp'
import h2 from '../assets/images/building-management-system-Final.jpg'
import all_in_one from '../assets/images/vector-light-bulb-icon.jpg'
import user_friendly from '../assets/images/8878493.png'
import data_security from '../assets/images/lock-circle-blue-1024.webp'
import contact_support from '../assets/images/309-3095068_free-download-customer-support-icon-blue-clipart-customer.png'
import h3 from '../assets/images/p1.jpg'

const about = () => {
  return (
    <div className='about'>
      <div className='section1'>
         <img src={h1} className='h1' />
      </div>
      <div className='section2'>
        <h1>About Us</h1>
        <p>At Aigis, we believe that managing a co-living or hostel business should be simple, efficient, and scalable. Our platform provides all the tools you need to manage your operations effortlessly, helping you deliver the best experience for both your guests and your team.</p>
      </div>
      <div className='section3'>
        <div className='content'> 
            <p>Founded with the aim of revolutionizing the co-living industry, we bring years of experience in hospitality and technology to create a user-friendly and feature-rich solution. Our goal is to empower hostel owners and managers to provide an exceptional stay for their guests without the hassle of manual tracking and outdated systems</p><br/>
            <p>At Aigis, we believe that modern co-living spaces deserve smart, seamless, and efficient management tools that enhance both guest experience and operational efficiency. Our platform is designed to streamline day-to-day operations, automate administrative tasks, and ensure a stress-free environment for both residents and staff.</p>
            
        </div>
        <img src={h2} />
      </div>
      <div className="why-choose-us">
            <h2 className="section-title">Why choose us?</h2>
            <div className="features-container">
                <div className="feature">
                <img src={all_in_one} alt="All-in-One Solution" />
                <h3>All-in-One Solution</h3>
                <p>From bookings to payments and security, our platform covers all aspects of hostel management in one place.</p>
                </div>
                <div className="feature">
                <img src={user_friendly} alt="User-Friendly Interface" />
                <h3>User-Friendly Interface</h3>
                <p>No technical expertise required! Our intuitive dashboard makes it easy for you and your team to manage operations seamlessly.</p>
                </div>
                <div className="feature">
                <img src={data_security} alt="Data-Driven Insights" />
                <h3>Data-Driven Insights</h3>
                <p>Make smarter decisions with advanced reporting tools that provide insights into occupancy, revenue, and guest trends.</p>
                </div>
                <div className="feature">
                <img src={contact_support} alt="24/7 Customer Support" />
                <h3>24/7 Customer Support</h3>
                <p>Our expert support team is always available to help you resolve any issues and ensure smooth operations.</p>
                </div>
            </div>
        
        </div>
            <div className='section5'>
                <img src={h3}  />
                <h1>
                Transform<br/> Your Hostel<br/> Management Today
                </h1>
            </div>
        <Footer/>
    </div>
  )
}

export default about
