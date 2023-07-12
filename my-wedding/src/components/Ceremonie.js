import React from 'react';

const Ceremonie = ({type, date, lieu, adresse}) => {
    return (
        <div className='ceremonie_box'>
            <h2>{type}</h2>
            <p>{date}</p>
            <p>{lieu}</p>
            <p>{adresse}</p>
        </div>
    );
};

export default Ceremonie;