import React from 'react';

const Ceremonie = ({type, date, lieu, img}) => {
    return (
        <div>
            <img src={img} alt='symbole'/>
            <h2>{type}</h2>
            <p>{date}</p>
            <p>{lieu}</p>
        </div>
    );
};

export default Ceremonie;