'use strict';

import React from 'react';

import './styles.scss';

const AboutTheCompany = (props) => {
  return (
    <section className="about-the-company">
      <div className="about-the-company__title">About <strong>Emprove, Inc.</strong></div>
      <p className="about-the-company__paragraph">We’re a collection of construction and tech industry leaders who are passionate about creative innovation. Our ambition is to fix the deep inefficiencies of the home improvement industry.</p>
      <p className="about-the-company__paragraph">Emprove is a technology platform where home owners and contractors engage with one another on a mutually informed and transparent basis, providing clarity and market efficiency.</p>
      <p className="about-the-company__paragraph">We empower home owners with interactive scope definition tools and dynamic cost estimates to initiate their projects with confidence. We service contractors by providing a free and efficient platform to submit cost proposals for projects that are well-defined, vetted, and ready to go!</p>
    </section>
  );
};

export default AboutTheCompany;
