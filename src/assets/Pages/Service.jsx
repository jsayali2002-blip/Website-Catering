import { useState } from "react";
import { motion } from "framer-motion";
import LazyImage from "../Componenets/LazyImage"; 
import "./Service.scss";

export default function Services() {
  const services = [
    {
      title: "Wedding Catering",
      category: "Events",
      desc: "Premium catering for weddings with customized menus & live counters.",
      img: "https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg",
    },
    {
      title: "Corporate Events",
      category: "Events",
      desc: "Professional catering services for meetings, events, and office parties.",
      img: "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg",
    },
    {
      title: "Birthday Parties",
      category: "Events",
      desc: "Delicious menu options perfect for family and kids' birthday celebrations.",
      img: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
    },
    {
      title: "Buffet Catering",
      category: "Menu",
      desc: "Complete buffet setup with elegant presentation & serving staff.",
      img: "https://images.pexels.com/photos/5872656/pexels-photo-5872656.jpeg",
    },
    {
      title: "Live Food Counters",
      category: "Menu",
      desc: "Live dosa, chaat, Chinese, BBQ & more with professional chefs.",
      img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    },
    {
      title: "Housewarming Catering",
      category: "Special",
      desc: "Traditional and modern menus perfect for Griha Pravesh ceremonies.",
      img: "https://images.pexels.com/photos/4109993/pexels-photo-4109993.jpeg",
    },

    {
      title: "Outdoor Catering",
      category: "Events",
      desc: "Full outdoor food setup with decoration & service staff.",
      img: "https://images.pexels.com/photos/6025815/pexels-photo-6025815.jpeg",
    },
    {
      title: "Custom Event Catering",
      category: "Menu",
      desc: "Personalized menu, theme-based food & premium arrangements.",
      img: "https://images.pexels.com/photos/587739/pexels-photo-587739.jpeg",
    },
    {
  title: "Kids Party Catering",
  category: "Events",
  desc: "Fun & colorful menus perfect for kids' birthday parties.",
  img: "https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&w=800"
},


    {
      title: "Themed Catering",
      category: "Special",
      desc: "Menus designed for specific themes & party styles.",
      img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    },
  ];

  const categories = ["All", "Events", "Menu", "Special"];
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredServices =
    selectedCat === "All"
      ? services
      : services.filter((s) => s.category === selectedCat);

  const [modalService, setModalService] = useState(null);

  return (
    <div className="services-page">
      <h1 className="title">Our Services</h1>
      <p className="subtitle">
        High-quality catering services for all events with unmatched taste and
        service.
      </p>

      {/* Categories */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCat === cat ? "active" : ""}
            onClick={() => setSelectedCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Service Cards */}
      <div className="services-container">
        {filteredServices.map((service, i) => (
          <motion.div
            className="service-card"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => setModalService(service)}
          >
            <div className="img-box">
              <LazyImage src={service.img} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <button className="read-more">Read More</button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {modalService && (
        <div className="modal-backdrop" onClick={() => setModalService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{modalService.title}</h2>
            <img src={modalService.img} alt={modalService.title} />
            <p>{modalService.desc}</p>
            <button onClick={() => setModalService(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
