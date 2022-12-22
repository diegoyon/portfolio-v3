import React, { useState } from 'react';
import './Projects.css';
import Project from './Project';
import ProjectsData from './ProjectsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
  const [title, setTitle] = useState('title');
  const [description, setDescription] = useState('description');
  // const [title, setTitle] = useState('title')
  // const [title, setTitle] = useState('title')
  const handleSlideChange = (e) => {
    setTitle(ProjectsData[e.realIndex].title);
    setDescription(ProjectsData[e.realIndex].description);
  };

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      {/* <div className="projects-list">
        {ProjectsData.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            gitHub={project.gitHub}
            live={project.live}
            description={project.description}
            skills={project.skills}
          />
        ))}
      </div> */}
      <div className="project-container">
        <Swiper
          onSlideChange={handleSlideChange}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {ProjectsData.map((project) => (
            <SwiperSlide key={project.title}>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>

            // <Project
            //   key={project.title}
            //   title={project.title}
            //   gitHub={project.gitHub}
            //   live={project.live}
            //   description={project.description}
            //   skills={project.skills}
            // />
          ))}
          {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide> */}
        </Swiper>
        {/* <h1>{title}</h1>
      <p>{description}</p> */}
        <Project
          title={title}
          gitHub={title}
          live={title}
          description={description}
          skills={['html', 'css']}
        />
      </div>
    </section>
  );
};

export default Projects;
