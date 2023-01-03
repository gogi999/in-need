import './Online.css';

import React from 'react';

const Online = ({ user }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className="rightbar-friend">
            <div className="rightbar-img-container">
                <img 
                    src={PF + user.profilePicture} 
                    alt="" 
                    className="rightbar-profile-img" 
                />
                <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">{user.username}</span>
        </li>
    );
}

export default Online;
