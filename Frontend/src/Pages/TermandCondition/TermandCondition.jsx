import React from 'react'
import './TermandCondition.css'
import TermsAndConditionsContent from '../../Components/TermsAndConditionsContent/TermsAndConditionsContent'

const TermandCondition = () => {
  return (
    <div>
        
    <div className="Term-condition-section">
      <div className="Term-condition-content">
        <h1>
          Term and Condition
        </h1>
        <p>Privacy Policy & Term and Condition</p>
      </div>
    </div>
<TermsAndConditionsContent />

    </div>
  )
}

export default TermandCondition