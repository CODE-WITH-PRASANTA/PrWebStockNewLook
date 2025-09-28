import React, { useState, useEffect } from 'react';
import './LatestBlog.css';
import DefaultProfilePic from '../../assets/default-pic.webp';
import { FaCalendarAlt, FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import axios from 'axios';
import { API_URL } from '../../Api'; // API_URL = 'http://localhost:5000/api/blogs'

const reviews = [
  {
    name: "Dr. Avishek Kumar",
    designation: "Founder at",
    company: "URU",
    review: "Working with PR WEBSTOCK was a game-changer for our company. Their technical expertise and creative solutions helped us scale rapidly. Truly professional and highly responsive team!",
    rating: 5
  },
  {
    name: "Akshit Kumar",
    designation: "CEO at",
    company: "Fly Den AI",
    review: "PR WEBSTOCK delivered beyond our expectations. From web development to digital strategy, they ensured our project was smooth, efficient, and on time. Highly recommended!",
    rating: 5
  },
  {
    name: "Pratap Patra",
    designation: "Businessman at",
    company: "Studio Netramani",
    review: "PR WEBSTOCK has been a great partner. Their team helped me with website development, SEO, and digital marketing. The results were remarkable and delivered on time.",
    rating: 4
  },
  {
    name: "Suman Das",
    designation: "Manager at",
    company: "Innova Solutions",
    review: "Exceptional service and technical expertise. The team guided us through the project efficiently and delivered exactly what we envisioned. Very professional!",
    rating: 5
  },
  {
    name: "Meera Joshi",
    designation: "Owner at",
    company: "CraftNest",
    review: "PR WEBSTOCK’s team is highly creative and responsive. They helped transform our ideas into a beautiful, functional website. Definitely recommend them for any digital project!",
    rating: 5
  },
  {
    name: "Rohit Sen",
    designation: "Founder at",
    company: "SenTech",
    review: "Smooth collaboration from start to finish. Their attention to detail and technical skills were top-notch. I'm extremely satisfied with the final product.",
    rating: 4
  },
  {
    name: "Anita Behera",
    designation: "CEO at",
    company: "BizBright",
    review: "Exceeded our expectations. PR WEBSTOCK delivered exactly what we needed with a professional and proactive approach. A truly reliable digital partner!",
    rating: 5
  },
  {
    name: "Rahul Sharma",
    designation: "CTO at",
    company: "TechNova Solutions",
    review: "Impressive work and dedication. PR WEBSTOCK understood our vision clearly and executed flawlessly. The team is creative, professional, and highly skilled.",
    rating: 5
  },
  {
    name: "Neha Patil",
    designation: "Marketing Head at",
    company: "Bright Minds Academy",
    review: "Their team is attentive, professional, and solution-oriented. PR WEBSTOCK helped us grow our online presence tremendously. We couldn’t be happier with the results!",
    rating: 5
  }
];

const LatestBlog = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [reviewIndex, setReviewIndex] = useState(0);

  // Fetch latest blogs from backend
  const fetchLatestBlogs = async () => {
    try {
      const res = await axios.get(`${API_URL}/blogs/get-latest-blogs`);
      if (res.data.success) {
        setLatestBlogs(res.data.blogs);
      }
    } catch (error) {
      console.error("Error fetching latest blogs:", error);
    }
  };

  useEffect(() => {
    fetchLatestBlogs();
  }, []);

  // Client review carousel
  const handleNextReview = () => setReviewIndex((prev) => (prev + 1) % reviews.length);
  const handlePrevReview = () => setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="Latest-Blog-Container">

      {/* Latest Blogs Section */}
      <div className="Latest-Blog-Section">
        <h4 className="Latest-Blog-Heading-Small">BLOG</h4>
        <h2 className="Latest-Blog-Heading">Our Latest <span>Blog</span></h2>

        {latestBlogs.length === 0 ? (
          <p>Loading latest blogs...</p>
        ) : (
          latestBlogs.map((blog) => (
            <div className="Latest-Blog-Card" key={blog._id}>
              <h3 className="Latest-Blog-Title">{blog.title}</h3>
              <p className="Latest-Blog-Date">
                <FaCalendarAlt /> {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Client Reviews Section */}
      <div className="Client-Review-Section">
        <h4 className="Latest-Blog-Heading-Small">CLIENT'S SAY</h4>
        <h2 className="Latest-Blog-Heading">What Our <span>Client's Say</span></h2>

        <div className="Client-Review-Card">
          <img src={DefaultProfilePic} alt="client" className="Client-Review-Image" />
          <p className="Client-Review-Text">{reviews[reviewIndex].review}</p>
          <h4 className="Client-Review-Name">{reviews[reviewIndex].name}</h4>
          <p className="Client-Review-Designation">
            {reviews[reviewIndex].designation} <span className="Client-Review-Company">{reviews[reviewIndex].company}</span>
          </p>
          <div className="Client-Review-Stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < reviews[reviewIndex].rating ? 'filled' : 'empty'} />
            ))}
          </div>
        </div>

        <div className="Client-Review-Arrows">
          <button onClick={handlePrevReview}><IoIosArrowBack /></button>
          <button onClick={handleNextReview}><IoIosArrowForward /></button>
        </div>
      </div>

    </div>
  );
};

export default LatestBlog;
