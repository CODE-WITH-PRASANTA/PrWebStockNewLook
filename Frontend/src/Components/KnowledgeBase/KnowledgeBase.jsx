import React, { useState } from "react";
import "./KnowledgeBase.css";
import { Plus, Minus } from "lucide-react";

const KnowledgeBase = () => {
  const categories = [
    { id: 1, name: "General" },
    { id: 2, name: "Account" },
    { id: 3, name: "Pricing and Support" },
    { id: 4, name: "Purchasing Online" },
    { id: 5, name: "Returns Policy" },
    { id: 6, name: "Technical Methods" },
  ];

  const faqs = {
    General: [
      {
        q: "How can I be sure you work at my project as much as you declare?",
        a: "We maintain full transparency by using project tracking tools where you can view daily updates and progress reports.",
      },
      {
        q: "What do I need to know before contacting you?",
        a: "Having a clear project goal, preferred timeline, and approximate budget helps us understand your needs quickly.",
      },
      {
        q: "How much time will it take for you to make my app?",
        a: "Project duration depends on complexity — typically between 2 to 8 weeks for most web or mobile apps.",
      },
      {
        q: "How do you guarantee product quality?",
        a: "We ensure quality through code reviews, automated testing, and user feedback rounds before deployment.",
      },
    ],
    Account: [
      {
        q: "How do I create a new account?",
        a: "Click on the 'Sign Up' button on our website, fill in your details, and verify your email address to get started.",
      },
      {
        q: "Can I change my account email address?",
        a: "Yes, you can update your email under Account Settings → Personal Information.",
      },
      {
        q: "I forgot my password. What should I do?",
        a: "Click on 'Forgot Password' on the login page and follow the instructions to reset your password via email.",
      },
      {
        q: "How can I delete my account?",
        a: "If you wish to delete your account, please contact our support team and we’ll process your request securely.",
      },
    ],
    "Pricing and Support": [
      {
        q: "Do you offer any discounts or coupons?",
        a: "We occasionally run special promotions. Subscribe to our newsletter to stay updated about offers and discounts.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept credit/debit cards, PayPal, UPI, and bank transfers depending on your region.",
      },
      {
        q: "Do you provide ongoing maintenance and support?",
        a: "Yes, we offer flexible maintenance and support packages that can be customized for your project’s needs.",
      },
      {
        q: "What is your refund policy?",
        a: "Refunds are provided based on our service agreement and the project phase. Please refer to our Terms & Conditions for details.",
      },
    ],
    "Purchasing Online": [
      {
        q: "Is it safe to purchase from your website?",
        a: "Yes, our site is protected by SSL encryption and secure payment gateways to keep your data safe.",
      },
      {
        q: "Can I download my invoice after purchase?",
        a: "Absolutely! You can download or print your invoice anytime from your account dashboard.",
      },
      {
        q: "What should I do if my payment fails?",
        a: "Try again using a different payment method or contact our support team for help resolving the issue.",
      },
      {
        q: "Do you send order confirmation emails?",
        a: "Yes, you’ll receive an automatic confirmation email with order details immediately after your purchase.",
      },
    ],
    "Returns Policy": [
      {
        q: "Can I return a digital product?",
        a: "Digital products are generally non-refundable once downloaded, except in cases of technical issues verified by our team.",
      },
      {
        q: "What if I receive the wrong product?",
        a: "Contact our support within 24 hours and we’ll immediately correct or replace your order.",
      },
      {
        q: "Do you charge for return shipping?",
        a: "For physical goods, return shipping costs are covered only if the item is defective or incorrect.",
      },
      {
        q: "How long do refunds take to process?",
        a: "Refunds typically take 5–7 business days after approval, depending on your payment method.",
      },
    ],
    "Technical Methods": [
      {
        q: "What technologies do you use to build software?",
        a: "We use modern stacks like React, Node.js, Next.js, Python, and cloud-based solutions for scalability and performance.",
      },
      {
        q: "Do you follow agile development practices?",
        a: "Yes, we use Agile and Scrum methodologies to ensure flexibility and transparent collaboration throughout projects.",
      },
      {
        q: "Can you integrate third-party APIs?",
        a: "Of course! We have experience integrating payment gateways, CRMs, and various external APIs into custom solutions.",
      },
      {
        q: "How do you ensure security in your applications?",
        a: "We implement encryption, input validation, and secure authentication to protect user data at every layer.",
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="knowledge-base">
      <div className="kb-header">
        <h2>Knowledge Base</h2>
        <p>
          We hope this section will help you better understand the issues
          related to software.
        </p>
      </div>

      <div className="kb-container">
        {/* Sidebar */}
        <div className="kb-sidebar">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`kb-category ${
                activeCategory === cat.name ? "active" : ""
              }`}
              onClick={() => {
                setActiveCategory(cat.name);
                setOpenIndex(null);
              }}
            >
              {cat.name}
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="kb-faq">
          {(faqs[activeCategory] || []).map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="icon">
                  {openIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </span>
                <h4>{item.q}</h4>
              </div>
              {openIndex === index && (
                <p className="faq-answer">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;
