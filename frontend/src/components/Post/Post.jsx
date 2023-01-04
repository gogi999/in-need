import './Post.css';

import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

import { MoreVert } from '@material-ui/icons';

import { AuthContext } from '../../context/AuthContext';

const Post = ({ post }) => {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser } = useContext(AuthContext);

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));
    }, [currentUser._id, post.likes]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        }
        fetchUser();
    }, [post.userId]);

    const likeHandler = async () => {
        try {
            await axios.put(`/posts/${post._id}/like`, { userId: currentUser._id });
        } catch (err) {
            console.log(err);
        }

        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <Link to={`/profile/${user.username}`} style={{ textDecoration: "none" }}>
                            <img
                                className="post-profile-img" 
                                src={
                                    user.profilePicture 
                                        ? PF + user.profilePicture 
                                        : PF + "person/noAvatar.png"
                                } 
                                alt="" 
                            />
                        </Link>
                        <span className="post-username">
                            {user.username}
                        </span>
                        <span className="post-date">{format(post.createdAt)}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">
                        {post?.desc}
                    </span>
                    <img 
                        className="post-img"
                        src={PF + post.img} 
                        alt="" 
                    />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img 
                            className="like-icon"
                            src={`${PF}like.png`} 
                            alt="" 
                            onClick={likeHandler}
                        />
                        <img 
                            className="like-icon"
                            src={`${PF}heart.png`} 
                            alt="" 
                            onClick={likeHandler}
                        />
                        <span className="post-like-counter">{like} people like it</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comment-text">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
