import React from 'react';
import './UniversityTable.css';

const UniversityTable = ({ university }) => {
    return (
        <div className="university-row">
            <div className="university-column">
                <h3>{university.name}</h3>
                <img src={university.logo} alt={university.name} />
                <a href={university.website} target="_blank" rel="noopener noreferrer">Site Université</a>
            </div>
            <div className="university-column">
                <h4 className='h4'>Cursus proposés</h4>
                <p>{university.courses}</p>
            </div>
        </div>
    );
}

export default UniversityTable;