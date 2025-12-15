import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import "./Home.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import hero from "../Images/hero.jpg";
import Img1 from "../Images/Img1.jpg";
import Birthday from "../Images/Birthday.avif"

import dish1 from "../Images/dish1.jpeg";
import dish2 from "../Images/dish2.jpg";
import dish3 from "../Images/dish3.webp";
import dish4 from "../Images/dish4.jpeg";
import dish5 from "../Images/dish5.jpeg";
import dish6 from "../Images/dish6.jpg";
import dish7 from "../Images/dish7.webp";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const heroSlides = [
    {
      img: hero,
      title: "Welcome to Our Catering Service",
      subtitle: "Delicious food delivered to your events!",
    },
    {
      img: Img1,
      title: "Make Your Event Memorable",
      subtitle: "Customized catering for weddings & parties",
    },
    {
      img: Birthday,
      title: "Delicious Moments",
      subtitle: "Fresh & tasty dishes for every occasion",
    },
  ];

  return (
    <div className="home">
      {/* Hero Slider */}
      <Swiper
        className="hero-slider"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="overlay">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Services Section */}
      <section className="services" data-aos="fade-up">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card" data-aos="zoom-in" data-aos-delay="100">
            <span className="icon">🎂</span>
            <h3>Birthday Parties</h3>
            <p>Delicious options for your celebrations</p>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="200">
            <span className="icon">💼</span>
            <h3>Corporate Events</h3>
            <p>Professional and customizable catering</p>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="300">
            <span className="icon">💍</span>
            <h3>Wedding Catering</h3>
            <p>Expert catering for your special day</p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-preview" data-aos="fade-up">
        <h2>Our Menu</h2>
        <div className="menu-items">
          {[dish1, dish2, dish3, dish4, dish5, dish6, dish7].map(
            (dish, idx) => (
              <div className="menu-card" key={idx}>
                <img src={dish} alt={`Dish ${idx + 1}`} />
              </div>
            )
          )}
        </div>

        <Link to="/menu" className="btn view-full">
          View Full Menu
        </Link>
      </section>
    </div>
  );
}
