import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import './Chat.css';

function Chat({ name, message, pic, time }) {
    return (
        <Link to={'/chat/${name}'}>
            <div className='Chat'>
                <Avatar 
                    className='chat__image' 
                    alt={name} 
                    src={pic}
                />
                <div className='chat__details'>
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className='chat__time'>{time}</p>
            </div>
        </Link>
    )
}

export default Chat;