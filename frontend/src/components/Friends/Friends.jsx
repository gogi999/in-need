import './Friends.css';

import React from 'react';

const Friends = ({ user }) => {
    return (
        <li className="leftbar-friend">
            <img 
                className="leftbar-friend-img" 
                src={user.profilePicture} 
                alt="" 
            />
            <span className="leftbar-friend-name">{user.username}</span>
        </li>
    );
}

export default Friends;
