import './Feed.css';

import React from 'react';

import { Posts } from '../../data';
import Post from '../Post/Post';
import Share from '../Share/Share';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed-wrapper">
                <Share />
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    );
}

export default Feed;
