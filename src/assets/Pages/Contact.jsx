import { useState } from "react";
import "./Contact.scss";

import Offer from "/Images/Offer.jpg";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="contact-section">
      {/* Contact Form */}
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>Have a question or want to work with us? Send us a message!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" required placeholder=" " />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input type="email" required placeholder=" " />
            <label>Email</label>
          </div>

          <div className="input-group">
            <textarea required placeholder=" " rows="4"></textarea>
            <label>Message</label>
          </div>

          <button type="submit">Send Message</button>

          {submitted && <p className="success-msg">Message Sent! ✅</p>}

          <div className="circle circle-top"></div>
          <div className="circle circle-bottom"></div>
        </form>

        <div className="contact-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:info@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="info-card">
          <i className="fas fa-map-marker-alt"></i>
          <h4>Our Location</h4>
          <p>Abmbegaon Pathar, Pune.</p>
        </div>
        <div className="info-card">
          <i className="fas fa-headset"></i>
          <h4>Our Phone</h4>
          <p>+91 9168670771</p>
        </div>
        <div className="info-card">
          <i className="fas fa-envelope"></i>
          <h4>Our Email</h4>
          <p>JScatering@JsService.com</p>
        </div>
        <div className="info-card">
          <i className="fas fa-clock"></i>
          <h4>Work Hours</h4>
          <p>
            Mon to Sat: 5 am to 12 pm
            <br />
            Sun: 8 am to 5 pm
          </p>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="subscribe-section">
        <div className="subscribe-container">
          {/* Left Image */}
          <div className="subscribe-image">
            <img src={Offer} alt="Subscribe Offer" />
          </div>

          {/* Right Form */}
          <div className="subscribe-card">
            <h3>Best Catering Services</h3>
            <h2>Subscribe For Offers</h2>
            <p>
              Subscribe for early access offers, discounted rates, and you can
              cancel at any time.
            </p>
            <form onSubmit={handleSubscribe}>
              <input type="email" required placeholder="Enter your email..." />
              <button type="submit">SUBSCRIBE TODAY!</button>
            </form>
            {subscribed && <p className="success-msg">Subscribed! ✅</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
