import './Messenger.css';

import React from 'react';

import Topbar from '../../components/Topbar/Topbar';

const Messenger = () => {
    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className="chat-menu">
                    <div className="chat-menu-wrapper">
                        Menu
                    </div>
                </div>
                <div className="chat-box">
                    <div className="chat-box-wrapper">
                        Box
                    </div>
                </div>
                <div className="chat-online">
                    <div className="chat-online-wrapper">
                        Online
                    </div>
                </div>
            </div>
        </>
    );
}

export default Messenger;
