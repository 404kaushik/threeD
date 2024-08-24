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
import hm1 from '../../assets/recentprojects/hostel1.png'
import hm2 from '../../assets/recentprojects/hostel2.png'
import hm3 from '../../assets/recentprojects/hostel3.png'
import hm4 from '../../assets/recentprojects/hostel4.png'
import hm5 from '../../assets/recentprojects/hostel5.png'
import hm6 from '../../assets/recentprojects/hostel6.png'
import ef1 from '../../assets/recentprojects/ef1.png'
import ef2 from '../../assets/recentprojects/ef2.png'
import ef3 from '../../assets/recentprojects/ef3.png'
import ef4 from '../../assets/recentprojects/ef4.png'
import vs1 from '../../assets/recentprojects/vs1.png'
import vs2 from '../../assets/recentprojects/vs2.png'
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';


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
      alter: 'HostelMatch',
      images: [hm1, hm2, hm3, hm4, hm5, hm6], // Add multiple images for the carousel
      webLink: 'https://www.hostelmatch.com/',
      github: 'https://github.com/404kaushik/hostelmatch-project',
    },
    { 
      id: 2,
      title: 'EasyFits Website', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'EasyFits',
      images: [ef1,ef2,ef3,ef4], // Add multiple images for the carousel
      webLink: 'https://easyfits.ca/',
      github: 'https://github.com/404kaushik/easyfits_website',
    },
    { 
      id: 3,
      title: 'Photography', 
      description: `Checkout my VSCO account for a glimpse of my photography skills`,
      alter: 'VSCO',
      images: [vs1,vs2], // Add multiple images for the carousel
      webLink: 'https://vsco.co/404kaushik',
      github: 'https://github.com/your-github-username/hostelmatch',
    }
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
              <div className="live">
              <a href={project.webLink} class="btn red circular" target="_blank" rel="noopener noreferrer">Live Website</a>
              <a href={project.github} class="btn red circular" target="_blank" rel="noopener noreferrer">Project Link</a>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
