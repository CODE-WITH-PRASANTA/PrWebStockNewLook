import React from 'react'
import './Faq.css';
import FaqHeader from '../../Components/FaqHeader/FaqHeader';
import FaqSection from '../../Components/FaqSection/FaqSection';
import KnowledgeBase from '../../Components/KnowledgeBase/KnowledgeBase';

const Faq = () => {
  return (
    <div>
        <FaqHeader/>
        <FaqSection/>
        <KnowledgeBase/>


    </div>
  )
}

export default Faq