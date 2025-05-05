import React from 'react'
import './ProductContent.css'

// Asserts
import android from '../../assets/android.webp'
import mobile from '../../assets/mobile.webp'


const ProductContent = () => {
  return (
    <>
    <div className="Product-Content-Page-service-card">
      <div className="Product-Content-Page-card-image">
        <img src={android} alt="Android App Service" />
      </div>
      <div className="Product-Content-Page-card-content">
        <div className="Product-Content-Page-card-header">
          <h2>Android Application Development Service</h2>
          <div className="Product-Content-Page-price-tag">₹ 75,000</div>
        </div>
        <p>
          A company has developed an Android application development service which can be used by anyone. 
          You can use the app to build your own apps and even connect with other app developers to share ideas. 
          The app is available for free on Google Play.
        </p>
        <table className="Product-Content-Page-card-info">
          <tbody>
            <tr>
              <td>Service Location</td>
              <td>PAN India</td>
            </tr>
            <tr>
              <td>Development Platforms</td>
              <td>Android</td>
            </tr>
            <tr>
              <td>Service Type</td>
              <td>Service</td>
            </tr>
          </tbody>
        </table>
        <button className="Product-Content-Page-interest-btn">YES, I AM INTERESTED!</button>
      </div>
    </div>

    <div className="Product-Content-Page-service-card">
      <div className="Product-Content-Page-card-image">
        <img src={mobile} alt="Mobile App Service" />
      </div>
      <div className="Product-Content-Page-card-content">
        <div className="Product-Content-Page-card-header">
          <h2>Online Mobile Application Development</h2>
          <div className="Product-Content-Page-price-tag">₹ 80,000</div>
        </div>
        <p>
          Mobile application development is becoming more and more popular. With the rise of mobile technology,
          people can be connected with a variety of different applications. This platform allows you to create
          your own mobile application in a short amount of time.
        </p>
        <table className="Product-Content-Page-card-info">
          <tbody>
            <tr>
              <td>Language Required</td>
              <td>Java and Flutter</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>Online Mobile Application</td>
            </tr>
          </tbody>
        </table>
        <button className="Product-Content-Page-interest-btn">YES, I AM INTERESTED!</button>
      </div>
    </div>
  </>
  )
}

export default ProductContent