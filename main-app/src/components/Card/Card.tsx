import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
    id: number;
    name: string;
    username: string;
    email: string;
}

function Card(props: CardProps){
    const {id, name, email} = props;
    return (
    <div className={`tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5 ${styles.card}`}>
        <img src={`https://robohash.org/robor${id}?100x100`} alt='robot' />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>)
}

export default Card;