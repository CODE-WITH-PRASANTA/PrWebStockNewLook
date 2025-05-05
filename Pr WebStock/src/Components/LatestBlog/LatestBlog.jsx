import React, { useState } from 'react';
import './LatestBlog.css';
import DefaultProfilePic from '../../assets/default-pic.webp';
import { FaCalendarAlt, FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const blogs = [
  'Custom software development service',
  'Web application development company',
  'SEO company in Bhubaneswar',
  'Mobile application development company in Bhubaneswar'
];

const reviews = [
  {
    name: "Pratap Patra",
    designation: "Business man at",
    company: "Studio Netramani.",
    review: "AIONINNO has been a great partner of mine. They have helped me with website development, digital marketing, and overall business development. I love how AIONINNO has helped me build my business in a very short amount of time.",
    rating: 4
  },
  {
    name: "Suman Das",
    designation: "Manager at",
    company: "Innova Solutions.",
    review: "The team provided top-quality service. Their technical expertise and support are top-notch!",
    rating: 5
  },
  {
    name: "Meera Joshi",
    designation: "Owner at",
    company: "CraftNest.",
    review: "Professional, responsive, and creative! Highly recommend AIONINNO.",
    rating: 5
  },
  {
    name: "Rohit Sen",
    designation: "Founder at",
    company: "SenTech.",
    review: "A seamless experience from start to finish. Very happy with their work.",
    rating: 4
  },
  {
    name: "Anita Behera",
    designation: "CEO at",
    company: "BizBright.",
    review: "They exceeded my expectations and delivered exactly what we needed.",
    rating: 5
  }
];

const LatestBlog = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="Latest-Blog-Container">
      <div className="Latest-Blog-Section">
        <h4 className="Latest-Blog-Heading-Small">BLOG</h4>
        <h2 className="Latest-Blog-Heading">Our Latest <span>Blog</span></h2>
        {blogs.map((title, i) => (
          <div className="Latest-Blog-Card" key={i}>
            <h3 className="Latest-Blog-Title">{title}</h3>
            <p className="Latest-Blog-Date"><FaCalendarAlt /> February 09, 2023</p>
          </div>
        ))}
      </div>

      <div className="Client-Review-Section">
        <h4 className="Latest-Blog-Heading-Small">CLIENT'S SAY</h4>
        <h2 className="Latest-Blog-Heading">What Our <span>Client's Say</span></h2>
        <div className="Client-Review-Card">
          <img src={DefaultProfilePic} alt="client" className="Client-Review-Image" />
          <p className="Client-Review-Text">{reviews[index].review}</p>
          <h4 className="Client-Review-Name">{reviews[index].name}</h4>
          <p className="Client-Review-Designation">
            {reviews[index].designation} <span className="Client-Review-Company">{reviews[index].company}</span>
          </p>
          <div className="Client-Review-Stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < reviews[index].rating ? 'filled' : 'empty'} />
            ))}
          </div>
        </div>
        <div className="Client-Review-Arrows">
          <button onClick={handlePrev}><IoIosArrowBack /></button>
          <button onClick={handleNext}><IoIosArrowForward /></button>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
