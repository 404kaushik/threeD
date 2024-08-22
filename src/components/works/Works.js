/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'HostelMatch Website', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'React Portfolio',
      images: [Portfolio, Veritru], // Add multiple images for the carousel
    },
    { 
      id: 2,
      title: 'VeriTru Project', 
      description: `An advocacy project website built using
      MEAN stack with fact-checking tool to promote actions against
      fake news.`,
      alter: 'VeriTru Project',
      images: [Veritru, Lofo], // Add multiple images for the carousel
    },
    { 
      id: 3,
      title: 'LoFo Project', 
      description: `Logistics and Forwarding website built using
      ReactJS to design and develop its front-end.`,
      alter: 'LoFo Project',
      images: [Lofo, Startup], // Add multiple images for the carousel
    },
    { 
      id: 4,
      title: 'Startup Project', 
      description: `A website portfolio project for the Startup Dev Team
      built using MEVN stack to demonstrate the CRUD capabilities of the tech stack.`,
      alter: 'Startup Project',
      images: [Startup, Lacalle], // Add multiple images for the carousel
    },
    { 
      id: 5,
      title: 'LaCalle Cafe', 
      description: `A website project for the La Calle Cafe business
      built using Wordpress and PHP with integrated SEO tools to help
      the business ramp up its prospects and lead generation.`,
      alter: 'LaCalle Cafe Project',
      images: [Lacalle, Portfolio], // Add multiple images for the carousel
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <Carousel showThumbs={true} autoPlay={false} infiniteLoop={false}>
                {project.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`${project.alter} ${index + 1}`} />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
