import React from 'react';

const Advantage = ({icon,title,desc}) => {
    return (

            <div className="advantage-container">
            <p className="advantages-icon">{icon}</p>
            <h3 className="advantages-title">{title}</h3>
            <p className="advantages-description">{desc}</p>
            </div>
    );
}

export default Advantage;
