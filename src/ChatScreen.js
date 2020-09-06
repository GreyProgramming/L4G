import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';


function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
//        {
//            name:
//            pic:
//            message: 
//        },
    ])

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput('');
    };

    return(
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'> Rolling with NAME since DATE </p>
            {messages.map(message =>(
                message.name ? (
                <div className='chatScreen__message'>
                    <Avatar 
                        className='chatScreen__image' 
                        alt={message.name} 
                        src={message.pic}
                    />
                    <p>{message.message}</p>
                </div>
                ): (
                    <div className='chatScreen__message'>
                        <p className='chatScreen__textUser'>
                            {message.message}
                        </p>
                    </div>
                )
            ))};

            <div className='chatScreen__input'>
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className='chatScreen__inputField'
                        placeholder='Type a message.'
                        type='text'
                    />
                    <button
                        onClick={handleSend}
                        type='submit'
                        className='chatScreen__inputButton'
                    >
                        SEND
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen;