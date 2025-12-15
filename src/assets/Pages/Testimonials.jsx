import { useState } from "react";
import "./Testimonials.scss";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      message:
        "The catering service was exceptional! Food quality, presentation and taste were outstanding.",
      img: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=ff9800&color=fff&size=150",
      rating: 5,
    },
    {
      name: "Sneha Patil",
      message:
        "Amazing experience! Excellent food and professional service. Perfect for our corporate event.",
      img: "https://ui-avatars.com/api/?name=Sneha+Patil&background=ff9800&color=fff&size=150",
      rating: 4,
    },
    {
      name: "Amit Verma",
      message:
        "They managed everything seamlessly. Guests loved the menu. Highly recommended!",
      img: "https://ui-avatars.com/api/?name=Amit+Verma&background=ff9800&color=fff&size=150",
      rating: 5,
    },
    {
      name: "Anjali Joshi",
      message:
        "Fantastic service! The team was professional and very accommodating.",
      img: "https://ui-avatars.com/api/?name=Anjali+Joshi&background=ff9800&color=fff&size=150",
      rating: 5,
    },
    {
      name: "Rohit Kumar",
      message:
        "Delicious food and excellent service. Will definitely hire again!",
      img: "https://ui-avatars.com/api/?name=Rohit+Kumar&background=ff9800&color=fff&size=150",
      rating: 4,
    },
    {
      name: "Priya Singh",
      message:
        "Highly recommended! Everything was perfect from start to finish.",
      img: "https://ui-avatars.com/api/?name=Priya+Singh&background=ff9800&color=fff&size=150",
      rating: 5,
    },
    {
      name: "Amitraj Sharma",
      message:
        "Good experience, food was tasty but service could improve slightly.",
      img: "https://ui-avatars.com/api/?name=Amitraj+Sharma&background=ff9800&color=fff&size=150",
      rating: 3,
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        style={{ color: i < count ? "#FFB45E" : "#ccc", marginRight: "2px" }}
      >
        ★
      </span>
    ));
  };

  const displayedReviews = showAll ? reviews : reviews.slice(0, 4);

  return (
    <div className="testimonial-page">
      <h1 className="title">What Our Clients Say</h1>

      <div className="review-container">
        {displayedReviews.map((item, i) => (
          <div
            className={`review-card ${activeCard === i ? "active" : ""}`}
            key={i}
            style={{ "--i": i }}
            onClick={() => setActiveCard(activeCard === i ? null : i)}
          >
            <div className="avatar-glow">
              <img src={item.img} alt={item.name} className="avatar" />
            </div>

            <h3>{item.name}</h3>

            <div className="stars">{renderStars(item.rating)}</div>

            <p className="message">{item.message}</p>
          </div>
        ))}
      </div>

      {reviews.length > 4 && (
        <div className="show-more-container">
          <button
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}







