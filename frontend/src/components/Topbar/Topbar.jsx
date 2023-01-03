import './Topbar.css';

import React from 'react';

import { Link } from 'react-router-dom';

import {
  Chat,
  Notifications,
  Person,
  Search,
} from '@material-ui/icons';

import inNeedLogo from '../../images/in-need.jpg';

const Topbar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="topbar-container">
            <Link to="/" style={{ textDecoration: "none" }}>
                <img src={inNeedLogo} alt="logo-img" className="logo-img" />
            </Link>
            <div className="topbar-left">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">InNeed</span>
                </Link>
            </div>
            <div className="topbar-center">
                <div className="searchbar">
                    <Search className="search-icon" />
                    <input 
                        placeholder="Search for friends, posts or video..." 
                        className="search-input" 
                    />                    
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbar-links">
                    <span className="topbar-link">Home</span>
                    <span className="topbar-link">Timeline</span>
                </div>
                <div className="topbar-icons">
                    <div className="topbar-icon">
                        <Person />
                        <span className="topbar-badge">1</span>
                    </div>
                    <div className="topbar-icon">
                        <Chat />
                        <span className="topbar-badge">1</span>
                    </div>
                    <div className="topbar-icon">
                        <Notifications />
                        <span className="topbar-badge">1</span>
                    </div>
                </div>
                {/* <Link to={`/profile/${user.username}`}> */}
                    <img
                        src={PF + "person/1.jpeg"}
                        alt=""
                        className="topbar-img"
                    />
                {/* </Link> */}
            </div>
        </div>
    );
}

export default Topbar;
