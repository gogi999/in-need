import './Rightbar.css';

import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import {
  Add,
  Remove,
} from '@material-ui/icons';

import { AuthContext } from '../../context/AuthContext';
import { Users } from '../../data';
import Online from '../Online/Online';

const Rightbar = ({ user }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [friends, setFriends] = useState([]);
    const [followed, setFollowed] = useState(currentUser.followings.includes(user?._id));

    useEffect(() => {
        setFollowed(currentUser.followings.includes(user?._id));
    }, [currentUser, user._id]);

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get(`/users/friends/${user._id}`);
                setFriends(friendList.data);
            } catch (err) {
                console.log(err);
            }
        }
        
        getFriends();
    }, [user]);

    const handleFollow = async () => {
        try {
            if (followed) {
                await axios.put(`/users/${user._id}/unfollow`, { userId: currentUser._id });
                dispatch({ type: 'UNFOLLOW', payload: user._id });
            } else {
                await axios.put(`/users/${user._id}/follow`, { userId: currentUser._id });
                dispatch({ type: 'FOLLOW', payload: user._id });
            }
        } catch (err) {
            console.log(err);
        }

        setFollowed(!followed);
    }

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
            {user.username !== currentUser.username && (
                <button className="rightbar-follow-btn" onClick={handleFollow}>
                    {followed ? "Unfollow" : "Follow"}
                    {followed ? <Remove /> : <Add />}
                </button>
            )}
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
                    {friends.map((friend) => (
                        <Link to={`/profile/${friend.username}`} style={{ textDecoration: "none" }}>
                            <div className="rightbar-following" key={friend._id}>
                                <img 
                                    className="rightbar-following-img" 
                                    src={
                                        friend.profilePicture
                                            ? PF + friend.profilePicture
                                            : PF + "person/noAvatar.png"
                                    }
                                    alt="" 
                                />
                                <span className="rightbar-following-name">
                                    {friend.username}
                                </span>
                            </div>
                        </Link>
                    ))}
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
