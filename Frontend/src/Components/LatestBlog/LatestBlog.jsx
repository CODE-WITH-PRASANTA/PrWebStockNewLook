import React, { useState } from 'react';
import './LatestBlog.css';
import DefaultProfilePic from '../../assets/default-pic.webp';
import { FaCalendarAlt, FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// ✅ Dummy Blog Data
const dummyBlogs = [
  {
    _id: '1',
    title: 'The Future of Web Development: 2025 Trends',
    createdAt: '2025-10-20T12:00:00Z',
  },
  {
    _id: '2',
    title: 'How to Optimize Your Website for SEO in 2025',
    createdAt: '2025-09-18T12:00:00Z',
  },
  {
    _id: '3',
    title: 'Top 10 React Libraries Every Developer Should Know',
    createdAt: '2025-08-15T12:00:00Z',
  },
  {
    _id: '4',
    title: 'Building Scalable Backends with Node.js & Express',
    createdAt: '2025-07-12T12:00:00Z',
  },
];

// ✅ Dummy Client Reviews
const reviews = [
  {
    name: "Dr. Avishek Kumar",
    designation: "Founder at",
    company: "URU",
    review:
      "Working with PR WEBSTOCK was a game-changer for our company. Their technical expertise and creative solutions helped us scale rapidly. Truly professional and highly responsive team!",
    rating: 5,
  },
  {
    name: "Akshit Kumar",
    designation: "CEO at",
    company: "Fly Den AI",
    review:
      "PR WEBSTOCK delivered beyond our expectations. From web development to digital strategy, they ensured our project was smooth, efficient, and on time. Highly recommended!",
    rating: 5,
  },
  {
    name: "Pratap Patra",
    designation: "Businessman at",
    company: "Studio Netramani",
    review:
      "PR WEBSTOCK has been a great partner. Their team helped me with website development, SEO, and digital marketing. The results were remarkable and delivered on time.",
    rating: 4,
  },
  {
    name: "Suman Das",
    designation: "Manager at",
    company: "Innova Solutions",
    review:
      "Exceptional service and technical expertise. The team guided us through the project efficiently and delivered exactly what we envisioned. Very professional!",
    rating: 5,
  },
];

const LatestBlog = () => {
  const [reviewIndex, setReviewIndex] = useState(0);

  // Handle Review Carousel
  const handleNextReview = () =>
    setReviewIndex((prev) => (prev + 1) % reviews.length);
  const handlePrevReview = () =>
    setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="Latest-Blog-Container">

      {/* ✅ Latest Blogs Section */}
      <div className="Latest-Blog-Section">
        <h4 className="Latest-Blog-Heading-Small">BLOG</h4>
        <h2 className="Latest-Blog-Heading">
          Our Latest <span>Blog</span>
        </h2>

        {dummyBlogs.map((blog) => (
          <div className="Latest-Blog-Card" key={blog._id}>
            <h3 className="Latest-Blog-Title">{blog.title}</h3>
            <p className="Latest-Blog-Date">
              <FaCalendarAlt /> {new Date(blog.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>

      {/* ✅ Client Reviews Section */}
      <div className="Client-Review-Section">
        <h4 className="Latest-Blog-Heading-Small">CLIENT'S SAY</h4>
        <h2 className="Latest-Blog-Heading">
          What Our <span>Client's Say</span>
        </h2>

        <div className="Client-Review-Card">
          <img
            src={DefaultProfilePic}
            alt="client"
            className="Client-Review-Image"
          />
          <p className="Client-Review-Text">{reviews[reviewIndex].review}</p>
          <h4 className="Client-Review-Name">{reviews[reviewIndex].name}</h4>
          <p className="Client-Review-Designation">
            {reviews[reviewIndex].designation}{' '}
            <span className="Client-Review-Company">
              {reviews[reviewIndex].company}
            </span>
          </p>
          <div className="Client-Review-Stars">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < reviews[reviewIndex].rating ? 'filled' : 'empty'
                }
              />
            ))}
          </div>
        </div>

        <div className="Client-Review-Arrows">
          <button onClick={handlePrevReview}>
            <IoIosArrowBack />
          </button>
          <button onClick={handleNextReview}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
