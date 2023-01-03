import './Feed.css';

import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

import Post from '../Post/Post';
import Share from '../Share/Share';

const Feed = ({ username }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
                ? await axios.get(`/posts/profile/${username}`)
                : await axios.get('posts/timeline/63ad731b2106f57d9afd795d');
            setPosts(res.data);
        }
        fetchPosts();
    }, [username]);

    return (
        <div className="feed">
            <div className="feed-wrapper">
                <Share />
                {posts?.map((p) => (
                    <Post key={p._id} post={p} />
                ))} 
            </div>
        </div>
    );
}

export default Feed;
