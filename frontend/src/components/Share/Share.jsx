import './Share.css';

import React from 'react';

import {
  EmojiEmotions,
  Label,
  PermMedia,
  Room,
} from '@material-ui/icons';

const Share = () => {
    return (
        <div className="share">
            <div className="share-wrapper">
                <div className="share-top">
                    <img 
                        className="share-profile-img"
                        src="/assets/person/1.jpeg" 
                        alt="share profile pic" 
                    /> 
                    <input 
                        placeholder="What's in your mind Gogi?" 
                        className="share-input" 
                    />
                </div>
                <hr className="share-hr" />
                <div className="share-bottom">
                    <div className="share-options">
                        <div className="share-option">
                            <PermMedia htmlColor="tomato" className="share-icon" />
                            <span className="share-option-text">Photo or Video</span>
                        </div>
                        <div className="share-option">
                            <Label htmlColor="blue" className="share-icon" />
                            <span className="share-option-text">Tag</span>
                        </div>
                        <div className="share-option">
                            <Room htmlColor="green" className="share-icon" />
                            <span className="share-option-text">Location</span>
                        </div>
                        <div className="share-option">
                            <EmojiEmotions htmlColor="goldenrod" className="share-icon" />
                            <span className="share-option-text">Feelings</span>
                        </div>
                    </div>
                    <button className="share-btn">Share</button>
                </div>
            </div>
        </div>
    );
}

export default Share;
