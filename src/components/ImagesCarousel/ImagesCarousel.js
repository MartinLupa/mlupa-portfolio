import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ImagesCarousel.css";

const data = [
  {
    image: require("./images/image1.jpg"),
    caption: "Cycling Chapter 1 of 1000",
    description:
      "That day I was cycling from Randers to Vejle in Denmark, amazing summer day of 2021.",
  },
  {
    image: require("./images/image2.jpg"),
    caption: "You might notice, I love cycling",
    description: "Racing back in 2020 in Copenhagen.",
  },
  {
    image: require("./images/image3.jpg"),
    caption: "Morning coffee, life pleasures",
    description: "A good coffee first thing to do in the morning.",
  },
  {
    image: require("./images/image4.jpg"),
    caption: "Cycling trip 2020",
    description:
      "This was the day I made it to Paris during my european cycling trip. January 2020.",
  },
  {
    image: require("./images/image5.jpg"),
    caption: "Cycling trip 2020",
    description:
      "You can also take a break from cycling and still call it a cycling trip.",
  },
  {
    image: require("./images/image6.jpg"),
    caption: "Brande, Denmark",
    description: "",
  },
];

export const ImagesCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="carousel-container">
        <Carousel
          className="carousel-main"
          activeIndex={index}
          onSelect={handleSelect}
        >
          {data.map((slide, i) => {
            return (
              <Carousel.Item>
                <img
                  className="carousel-img"
                  src={slide.image}
                  alt={slide.description}
                />
                <Carousel.Caption>
                  <h3>{slide.caption}</h3>
                  <p>{slide.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
