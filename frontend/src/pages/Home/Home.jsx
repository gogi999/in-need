import './Home.css';

import React from 'react';

import Feed from '../../components/Feed/Feed';
import Leftbar from '../../components/Leftbar/Leftbar';
import Rightbar from '../../components/Rightbar/Rightbar';
import Topbar from '../../components/Topbar/Topbar';

const Home = () => {
    return (
        <>
            <Topbar />
            <div className="home-container">
                <Leftbar />
                <Feed />
                <Rightbar />
            </div>
        </>
    );
}

export default Home;
