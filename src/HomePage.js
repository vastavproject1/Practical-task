import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import sliderImage from "./assets/Images/sliderImage.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import location from "./assets/Images/location.svg";
import Line from "./assets/Images/Line.svg";
import reviewtwo from "./assets/Images/reviewtwo.svg";

export default function HomePage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const items = [
    {
      title: "What is the difference between IV therapy and oral supplements?",
      content:
        "IV means Intravenous and is the route used to deliver nutrients and medicines directly into the blood stream. which increases the absorption of the vitamins and minerals. Anything taken orally has to pass via the gastrointestinal tract and the amount of vitamins absorbed will be dependent on many individual factors.",
    },
    {
      title: "Can I have a therapy at home? ",
      content:
        "IV means Intravenous and is the route used to deliver nutrients and medicines directly into the blood stream. which increases the absorption of the vitamins and minerals. Anything taken orally has to pass via the gastrointestinal tract and the amount of vitamins absorbed will be dependent on many individual factors.",
    },
    {
      title: "Can I have a therapy at home? ",
      content:
        "IV means Intravenous and is the route used to deliver nutrients and medicines directly into the blood stream. which increases the absorption of the vitamins and minerals. Anything taken orally has to pass via the gastrointestinal tract and the amount of vitamins absorbed will be dependent on many individual factors.",
    },
    {
      title: "Can I have a therapy at home? ",
      content:
        "IV means Intravenous and is the route used to deliver nutrients and medicines directly into the blood stream. which increases the absorption of the vitamins and minerals. Anything taken orally has to pass via the gastrointestinal tract and the amount of vitamins absorbed will be dependent on many individual factors.",
    },
    {
      title: "Can I have a therapy at home? ",
      content:
        "IV means Intravenous and is the route used to deliver nutrients and medicines directly into the blood stream. which increases the absorption of the vitamins and minerals. Anything taken orally has to pass via the gastrointestinal tract and the amount of vitamins absorbed will be dependent on many individual factors.",
    },
  ];

  return (
    <div>
      <Header />
      <div className="section1">
        <div className="slider-root">
          <Slider {...settings}>
            <div className="slider-slide">
              <img src={sliderImage} alt="slideImage" />
              <div className="slider-content">
                <h5>IV Drip Therapies</h5>
                <p>
                  The smarter way to optimise your nutritional health,
                  personally prescribed to you
                </p>
                <a href="">View all IV Drip Therapies</a>
              </div>
            </div>
            <div className="slider-slide">
              <img src={sliderImage} alt="slideImage" />
              <div className="slider-content">
                <h5>IV Drip Therapies</h5>
                <p>
                  The smarter way to optimise your nutritional health,
                  personally prescribed to you
                </p>
                <a href="">View all IV Drip Therapies</a>
              </div>
            </div>
            <div className="slider-slide">
              <img src={sliderImage} alt="slideImage" />
              <div className="slider-content">
                <h5>IV Drip Therapies</h5>
                <p>
                  The smarter way to optimise your nutritional health,
                  personally prescribed to you
                </p>
                <a href="">View all IV Drip Therapies</a>
              </div>
            </div>
            <div className="slider-slide">
              <img src={sliderImage} alt="slideImage" />
              <div className="slider-content">
                <h5>IV Drip Therapies</h5>
                <p>
                  The smarter way to optimise your nutritional health,
                  personally prescribed to you
                </p>
                <a href="">View all IV Drip Therapies</a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="section3">
        <marquee>
          <ul>
            <li>Key nutrients</li>
            <li>Hydromax IvHy</li>
            <li>Key nutrients</li>
            <li>Key nutrients</li>
            <li>Hydromax IvHy</li>
            <li>Key nutrients</li>
          </ul>
        </marquee>
      </div>
      <div className="section4">
        {/* <img src={Line} alt={Line} /> */}
        <div className="border-left"></div>
        <div className="faqroot-clinic">
          <div className="clinic-location">
            <img src={location} alt="location" />
            <a>Deansgate Square Manchester</a>
          </div>
          <a href="#" className="change-clinic-btn">
            Change your clinic
          </a>
        </div>
        <div className="border-right"></div>
      </div>
      <div className="faqlist">
        <div className="faqlist-grid">
          <div className="faqlist-left">
            <h5>Precision Nutrition FAQs</h5>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et
              </p>
              <img src={reviewtwo} alt="reviewtwo" />
            </div>
          </div>

          <div className="faq-right">
            <div className="faq-right-inner">
              {items.map((item, index) => (
                <div key={item.title}>
                  <div
                    onClick={() => handleClick(index)}
                    className={
                      index === activeIndex
                        ? "accordian-title active-accordian"
                        : " accordian-title"
                    }
                  >
                    {item.title}
                    <div>{index === activeIndex ? "-" : "+"}</div>
                  </div>
                  {index === activeIndex && (
                    <p className="accordiant-content">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
