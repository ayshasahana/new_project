


import React from 'react';
import './Form.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FrameImage from "../assets/img/images/images/Frame.png"; // Import the image


const EnquiryForm = () => {
  return (
    <div>
      <Header/>
      <div className="enquiry-page">
        <div className="left-section">
          <h1>Have A Project In <br /> Mind? Let’s Talk.</h1>
        </div>
        <div className="right-section">
          <div className="enquiry-box">
            <h2>Enquire Now</h2>
            <br />
            <form>
              <div className="input-row">
                <div className="form-container">
                  <div className="input-group">
                    <input type="text" placeholder="Type here" required />
                    <label>FirstName</label>
                  </div>
                </div>
                <div className="form-container">
                  <div className="input-group">
                    <input type="email" placeholder="Type here" required />
                    <label>LastName</label>
                  </div>
                </div>
              </div>

              <div className="input-row">
                <div className="form-container">
                  <div className="input-group">
                    <input type="tel" placeholder="Type here" required />
                    <label>Email</label>
                  </div>
                </div>
                <div className="form-container">
                  <div className="input-group">
                    <input type="text" placeholder="Type here" required />
                    <label>PhoneNumber</label>
                  </div>
                </div>
              </div>

              <div className="form-container">
                <div className="input-group">
                  <input type="text" placeholder="Type here" required className="message-box" />
                  <label>Message</label>
                </div>
              </div>

              <div className="checkbox-container">
                <input type="checkbox" id="robotCheck" />
                <label htmlFor="robotCheck">I am not a robot</label>
                <img src={FrameImage} alt="Image" className="robot-image" /> 
                
              </div>

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EnquiryForm;
