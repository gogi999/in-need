import './Topbar.css';

import React from 'react';

import {
  Chat,
  Notifications,
  Person,
  Search,
} from '@material-ui/icons';

import inNeedLogo from '../../images/in-need.jpg';

const Topbar = () => {
    return (
        <div className="topbar-container">
            <img src={inNeedLogo} alt="logo-img" className="logo-img" />
            <div className="topbar-left">
                <span className="logo">
                    InNeed
                </span>
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
                    <span className="topbar-link">Homepage</span>
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
                <img src="/assets/person/1.jpeg" alt="profile-img" className="topbar-img" />
            </div>
        </div>
    );
}

export default Topbar;
