import React from 'react';
import './TabImg.css';

const TabImg = ({ imageUrl, imageAlt, title, description }) => {
    return (
        <div className="tab-img-container">
            <img src={imageUrl} alt={imageAlt} className="tab-img" />
            
            <div className="tab-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default TabImg;