import React from 'react'
import Hero from '../sections/Hero.jsx';
import About from '../sections/About.jsx';
import Facts from '../sections/Facts.jsx';
import Feature from '../sections/Feature.jsx';
import Menu from '../sections/Menu.jsx';
import Team from '../sections/Team.jsx';
import Testimonial from '../sections/Testimonial.jsx';
import Blog from '../sections/Blog.jsx';
import Instagram from '../sections/Instagram.jsx';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Facts />
      <Feature />
      <Menu />
      <Team />
      <Testimonial />
      <Blog />
      <Instagram />
    </div>
  )
}

export default Home