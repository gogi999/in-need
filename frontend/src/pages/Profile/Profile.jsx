import './Profile.css';

import React from 'react';

import Feed from '../../components/Feed/Feed';
import Leftbar from '../../components/Leftbar/Leftbar';
import Rightbar from '../../components/Rightbar/Rightbar';
import Topbar from '../../components/Topbar/Topbar';

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Leftbar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img className="profile-cover-img" src="/assets/post/3.jpeg" alt="" />
                            <img className="profile-user-img" src="/assets/person/6.jpeg" alt="" />
                        </div>
                        <div className="profile-info">
                            <h4 className="profile-info-name">Gogi Petro</h4>
                            <span className="profile-info-desc">Gogi's Bio...</span>
                        </div>
                    </div>
                    <div className="profile-right-bottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
