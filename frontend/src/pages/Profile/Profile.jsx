import './Profile.css';

import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import { useParams } from 'react-router';

import Feed from '../../components/Feed/Feed';
import Leftbar from '../../components/Leftbar/Leftbar';
import Rightbar from '../../components/Rightbar/Rightbar';
import Topbar from '../../components/Topbar/Topbar';

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data);
        }
        fetchUser();
    }, [username]);

    return (
        <>
            <Topbar />
            <div className="profile">
                <Leftbar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img 
                                className="profile-cover-img" 
                                src={
                                    user.coverPicture
                                        ? PF + user.coverPicture
                                        : PF + "person/noCover.png"
                                } 
                                alt="" 
                            />
                            <img 
                                className="profile-user-img" 
                                src={
                                    user.profilePicture 
                                        ? PF + user.profilePicture
                                        : PF + "person/noAvatar.png"
                                } 
                                alt="" 
                            />
                        </div>
                        <div className="profile-info">
                            <h4 className="profile-info-name">{user.username}</h4>
                            <span className="profile-info-desc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profile-right-bottom">
                        <Feed username={username} />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
