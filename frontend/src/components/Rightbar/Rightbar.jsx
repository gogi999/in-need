import './Rightbar.css';

import React from 'react';

import { Users } from '../../data';
import Online from '../Online/Online';

const Rightbar = ({ user }) => {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthday-container">
                    <img 
                        className="birthday-img"
                        src="/assets/gift.png" 
                        alt="" 
                    />
                    <span className="birthday-text">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbar-ad" />
                <h4 className="rightbar-title">Online Friends</h4>
                <ul className="rightbar-friend-list">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    }

    const ProfileRightbar = () => {
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;

        return (
            <>
                <h4 className="rightbar-title">User Info</h4>
                <div className="rightbar-info">
                    <div className="rightbar-info-item">
                        <span className="rightbar-info-key">City:</span>
                        <span className="rightbar-info-value">{user.city}</span>
                    </div>
                    <div className="rightbar-info-item">
                        <span className="rightbar-info-key">From:</span>
                        <span className="rightbar-info-value">{user.from}</span>
                    </div>
                    <div className="rightbar-info-item">
                        <span className="rightbar-info-key">Relationship:</span>
                        <span className="rightbar-info-value">
                            {user.relationship === 1 
                                ? "Single" 
                                : user.relationship === 1 
                                    ? "Married"
                                    : "-"
                            }
                        </span>
                    </div>
                </div>
                <h4 className="rightbar-title">User Friends</h4>
                <div className="rightbar-followings">
                    <div className="rightbar-following">
                        <img 
                            className="rightbar-following-img" 
                            src={`${PF}person/1.jpeg`}
                            alt="" 
                        />
                        <span className="rightbar-following-name">Laura Palmer</span>
                    </div>
                    <div className="rightbar-following">
                        <img 
                            className="rightbar-following-img" 
                            src={`${PF}person/2.jpeg`} 
                            alt="" 
                        />
                        <span className="rightbar-following-name">Laura Palmer</span>
                    </div>
                    <div className="rightbar-following">
                        <img 
                            className="rightbar-following-img" 
                            src={`${PF}person/3.jpeg`} 
                            alt="" 
                        />
                        <span className="rightbar-following-name">Laura Palmer</span>
                    </div>
                    <div className="rightbar-following">
                        <img 
                            className="rightbar-following-img" 
                            src={`${PF}person/4.jpeg`} 
                            alt="" 
                        />
                        <span className="rightbar-following-name">Laura Palmer</span>
                    </div>
                    <div className="rightbar-following">
                        <img 
                            className="rightbar-following-img" 
                            src={`${PF}person/5.jpeg`} 
                            alt="" 
                        />
                        <span className="rightbar-following-name">Laura Palmer</span>
                    </div>
                    <div className="rightbar-following">
                        <img 
                            className="rightbar-following-img" 
                            src={`${PF}person/6.jpeg`} 
                            alt="" 
                        />
                        <span className="rightbar-following-name">Laura Palmer</span>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="rightbar">
            <div className="rightbar-wrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}

export default Rightbar;
