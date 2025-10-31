import React from "react";
import "./FaqHeader.css";
import { ChevronRight } from "lucide-react";

const FaqHeader = () => {
  return (
    <section className="faq-header">
      <div className="faq-header-content">
        <h1 className="faq-title">FAQ</h1>
        <div className="faq-breadcrumb">
          <a href="/" className="breadcrumb-link">
            Home
          </a>
          <ChevronRight size={16} className="breadcrumb-icon" />
          <a href="/features" className="breadcrumb-link">
            Features
          </a>
          <ChevronRight size={16} className="breadcrumb-icon" />
          <span className="breadcrumb-current">FAQ</span>
        </div>
      </div>
    </section>
  );
};

export default FaqHeader;
