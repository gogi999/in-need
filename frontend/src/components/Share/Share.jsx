import './Share.css';

import React, {
  useContext,
  useRef,
  useState,
} from 'react';

import axios from 'axios';

import {
  EmojiEmotions,
  Label,
  PermMedia,
  Room,
} from '@material-ui/icons';

import { AuthContext } from '../../context/AuthContext';

const Share = () => {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }

        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append('file', file);
            data.append('name', fileName);
            newPost.img = fileName;

            try {
                await axios.post('/upload', data);
            } catch (err) {
                console.log(err);
            }
        }

        try {
            await axios.post('/posts', newPost);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="share">
            <div className="share-wrapper">
                <div className="share-top">
                    <img 
                        className="share-profile-img"
                        src={
                            user.profilePicture 
                                ? PF + user.profilePicture 
                                : PF + "person/noAvatar.png"
                        } 
                        alt="share profile pic" 
                    /> 
                    <input 
                        placeholder={`What's in your mind ${user.username}?`} 
                        className="share-input" 
                        ref={desc}
                    />
                </div>
                <hr className="share-hr" />
                <form className="share-bottom" onSubmit={handleSubmit}>
                    <div className="share-options">
                        <label htmlFor="file" className="share-option">
                            <PermMedia htmlColor="tomato" className="share-icon" />
                            <span className="share-option-text">Photo or Video</span>
                            <input 
                                style={{ display: "none" }}
                                type="file" 
                                id="file" 
                                accept=".png,.jpeg,.jpg" 
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </label>
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
                    <button type="submit" className="share-btn">
                        Share
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Share;
