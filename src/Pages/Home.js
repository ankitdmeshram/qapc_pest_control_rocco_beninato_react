import React from 'react'
import AboutSec from '../Components/AboutSec'
import HomeSlider from '../Components/HomeSlider'
import Review from '../Components/Review'
import ServiceSec from '../Components/ServiceSec'

const Home = () => {
    return (
        <>
            <HomeSlider />  
            <AboutSec />     
            <ServiceSec />
            <Review />
        </>
    )
}

export default Home
