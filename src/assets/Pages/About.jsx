import "./About.scss";
import aboutImg from "../Images/AboutImg.jpg";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaCheckCircle, FaLeaf, FaSmile, FaStar } from "react-icons/fa";

export default function About() {
  return (
    <>
      {/* ABOUT SECTION WITH IMAGE */}
      <div
        className="about-section"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        <div className="overlay"></div>

        <div className="about-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            We are dedicated to serving delicious, fresh, and beautifully
            presented dishes for every occasion.
          </motion.p>

          <motion.p
            className="highlight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Quality • Taste • Trust — That’s our promise.
          </motion.p>

          <div className="stats">
            <motion.div
              className="stat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <h2>
                <CountUp end={500} duration={2} />+
              </h2>
              <p>Dishes Served</p>
            </motion.div>

            <motion.div
              className="stat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1 }}
            >
              <h2>
                <CountUp end={200} duration={2} />+
              </h2>
              <p>Happy Clients</p>
            </motion.div>

            <motion.div
              className="stat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
            >
              <h2>
                <CountUp end={50} duration={2} />+
              </h2>
              <p>Events Catered</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 🌟 WHY US SECTION - SEPARATE DIV WITHOUT BACKGROUND IMAGE */}
      <div className="why-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="why-title"
        >
          Why Choose Us?
        </motion.h2>

        <div className="why-us">
          <motion.div
            className="why-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaCheckCircle className="why-icon" />
            <h3>Premium Quality</h3>
            <p>Fresh ingredients prepared with perfection.</p>
          </motion.div>

          <motion.div
            className="why-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <FaLeaf className="why-icon" />
            <h3>Hygienic & Safe</h3>
            <p>We follow high-level cleanliness standards.</p>
          </motion.div>

          <motion.div
            className="why-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <FaSmile className="why-icon" />
            <h3>Customer Satisfaction</h3>
            <p>Your happiness is our priority.</p>
          </motion.div>

          <motion.div
            className="why-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <FaStar className="why-icon" />
            <h3>Professional Service</h3>
            <p>Trained team delivering perfect service.</p>
          </motion.div>
        </div>
      </div>
      {/* Zomato - Swiggy Availability Section */}
      <div className="delivery-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          We Are Available On
        </motion.h2>

        <div className="delivery-logos">
          <motion.div
            className="delivery-card zomato"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
              alt="Zomato"
            />
          </motion.div>

          <motion.div
            className="delivery-card swiggy"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
              alt="Swiggy"
            />
          </motion.div>
        </div>

        <p className="delivery-text">
          Now you can enjoy our delicious dishes at home by ordering through{" "}
          <strong>Zomato</strong> and <strong>Swiggy</strong>!
        </p>
      </div>
    </>
  );
}
