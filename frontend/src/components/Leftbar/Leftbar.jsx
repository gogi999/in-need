import './Leftbar.css';

import React from 'react';

import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilled,
  RssFeed,
  School,
  WorkOutline,
} from '@material-ui/icons';

import { Users } from '../../data';
import Friends from '../Friends/Friends';

const Leftbar = () => {
    return (
        <div className="leftbar">
            <div className="leftbar-wrapper">
                <ul className="leftbar-list">
                    <li className="leftbar-item">
                        <RssFeed className="leftbar-icon" />
                        <span className="leftbar-item-text">
                            Feed
                        </span>
                    </li>
                    <li className="leftbar-item">
                        <Chat className="leftbar-icon" />
                        <span className="leftbar-item-text">
                            Chats
                        </span>
                    </li>
                    <li className="leftbar-item">
                        <PlayCircleFilled className="leftbar-icon" />
                        <span className="leftbar-item-text">
                            Videos
                        </span>
                    </li>
                    <li className="leftbar-item">
                        <Group className="leftbar-icon" />
                        <span className="leftbar-item-text">
                            Groups
                        </span>
                    </li>
                    <li className="leftbar-item">
                        <Bookmark className="leftbar-icon" />
                        <span className="leftbar-item-text">
                            Bookmarks
                        </span>
                    </li>
                    <li className="leftbar-item">
                        <HelpOutline className="leftbar-icon" />
                        <span className="leftbar-item-text">
                            Questions
                        </span>
                    </li>
                    <li className="leftbar-item">
                        <WorkOutline className="leftbar-icon" />
                        <span className="leftbar-item-text">
                            Jobs
                        </span>
                    </li>
                    <li className="leftbar-item">
                        <Event className="leftbar-icon" />
                        <span className="leftbar-item-text">
                            Events
                        </span>
                    </li>
                    <li className="leftbar-item">
                        <School className="leftbar-icon" />
                        <span className="leftbar-item-text">
                            Courses
                        </span>
                    </li>
                </ul>
                <button className="leftbar-btn">Show More</button>
                <hr className="leftbar-hr" />
                <ul className="leftbar-friend-list">
                    {Users.map((u) => (
                        <Friends key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Leftbar;
