import React from 'react';
import Card from '../Card/Card';

function CardsList(props: any) {
    const {robots} = props;
    return (
        <div className='pa3'>
            {robots?.map((robot: any) => (<Card key={robot.id} {...robot}/>))}
        </div>
    )
}

export default CardsList;