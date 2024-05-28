import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
             Welcome to <b>Restoo</b>, where culinary passion and exceptional flavors unite to create a dining experience like no other. Established in [Year], our restaurant has become a cherished culinary destination, known for our commitment to excellence and a heartfelt dedication to crafting memorable moments for our guests.


At Restooo, our story is one of love for food and a relentless pursuit of perfection. Founded by <b>Debraj </b>, our culinary journey began with a vision to blend traditional flavors with innovative techniques, resulting in dishes that not only satisfy the palate but also resonate with the soul. What started as a dream has blossomed into a culinary haven where each dish tells a story, and every ingredient is chosen with precision and care.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
