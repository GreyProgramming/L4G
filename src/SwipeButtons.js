import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavouriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import './SwipeButtons.css';

function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons__repeat'>
                <ReplayIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__left'>
                <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__star'>
                <StarRateIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__right'>
                <FavouriteIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__bolt'>
                <FlashOnIcon fontSize='large' />
            </IconButton>
        </div>
    )
};

export default SwipeButtons;