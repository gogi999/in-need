import './Friends.css';

import React from 'react';

const Friends = ({ user }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className="leftbar-friend">
            <img 
                className="leftbar-friend-img" 
                src={PF + user.profilePicture} 
                alt="" 
            />
            <span className="leftbar-friend-name">{user.username}</span>
        </li>
    );
}

export default Friends;
