import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import FaceIcon from '@material-ui/icons/Face';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Header({ backButton }) {
    return(
        <div className="header">
            {backButton ? (
                <Link to='/'>
                    <IconButton>
                        <ArrowBackIcon className="header__icon" fontSize="large" />
                    </IconButton>
                </Link>
            ): (
                <Link to='/profile'>
                    <IconButton>
                        <FaceIcon className="header__icon" fontSize="large" />
                    </IconButton>
                </Link>
            )}

            
            <Link to='/'>
                <IconButton>
                    <img
                        className="header__logo"
                        src='./Logo.png'
                        alt='L4G logo'
                    />
                </IconButton>
            </Link>

            <Link to='/chats'>
                <IconButton>
                    <QuestionAnswerIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header