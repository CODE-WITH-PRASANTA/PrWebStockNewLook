import React, { useState } from "react";
import "./FaqSection.css";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What do I need to know before contacting you?",
    answer:
      "You should have an idea about your project scope, goals, and budget.",
  },
  {
    id: 2,
    question: "Do you have any reviews from satisfied customers?",
    answer:
      "Yes, we have multiple client testimonials showcasing our work quality.",
  },
  {
    id: 3,
    question: "How much time will it take for you to make my app?",
    answer:
      "The timeline depends on project complexity — usually 2–8 weeks.",
  },
  {
    id: 4,
    question: "How do you guarantee product quality?",
    answer:
      "We follow strict testing, feedback, and revision cycles before delivery.",
  },
  {
    id: 5,
    question: "Should I create a mobile or a web app?",
    answer:
      "That depends on your target users and platform preferences.",
  },
  {
    id: 6,
    question: "What happens after you finish my app?",
    answer:
      "We offer ongoing support, maintenance, and future updates.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently asked questions</h2>
      <p className="faq-subtext">
        We hope this section will help you better understand the issues related to software
      </p>

      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            key={faq.id}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {openIndex === index ? (
                <Minus size={20} className="faq-icon" />
              ) : (
                <Plus size={20} className="faq-icon" />
              )}
              <span>{faq.question}</span>
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
