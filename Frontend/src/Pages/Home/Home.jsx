import React from 'react'
import './Home.css'
import HomeHero from '../../Components/HomeHero/HomeHero'
import AboutSection from '../../Components/AboutSection/AboutSection'
import Specializedsection from '../../Components/Specializedsection/Specializedsection'
import ServiceProvide from '../../Components/ServiceProvide/ServiceProvide'
import ProvidingService from '../../Components/ProvidingSService/ProvidingService'
import WhyChoose from '../../Components/WhyChoose/WhyChoose'
import Requirement from '../../Components/Requirement/Requirement'
import Quickdiscussionpage from '../../Components/Quickdiscussionpage/Quickdiscussionpage'
import OurProjects from '../../Components/OurProjects/OurProjects'
import WhatWeAre from '../../Components/WhatWeAre/WhatWeAre'
import LatestBlog from '../../Components/LatestBlog/LatestBlog'

const Home = () => {
  return (
    <div>
        <HomeHero />
        <AboutSection />
        <Specializedsection />
        <ServiceProvide />
        <ProvidingService />
        <WhyChoose />
        <Quickdiscussionpage />
        <OurProjects />
        <Requirement />
        <WhatWeAre />
        <LatestBlog />
    </div>
  )
}

export default Home