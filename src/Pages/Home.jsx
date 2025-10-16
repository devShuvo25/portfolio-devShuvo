import React from 'react';
import Banner from '../components/Banner';
import Intro from '../components/Banner';
import HomeContent from '../components/HomeContent';
import FindMe from '../components/findMe';
import Subscribe from '../components/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HomeContent/>
            <Subscribe/>
            <FindMe/>
        </div>
    );
};

export default Home;