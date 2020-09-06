import React, { useState, useEffect } from 'react';
import database from './firebase';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

// Links to database housing images and profiles //

function TinderCards () {
    const [people, setPeople] = useState([])

    useEffect(() => {
        database
        .collection('users')
        .onSnapshot((snapshot) =>
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);
// Leaving the above dependencies blank means it will run once when the component loads

    return (
        <div>
            <div class='TinderCards__cardContainer'>
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up','down']}
                    >
                       <div
                            style={{ backgroundImage: 'url({person.url})' }}
                            className='card'
                        >
                            <h3>{person.name}</h3>
                    </div>                
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards