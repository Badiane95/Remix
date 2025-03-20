import React from 'react';
import './Actualite.css';

const Actualite = ({ image, title, description, url }) => {
    // Limite de caractères pour le titre
    const maxTitleLength = 50;
    // Vérifie si le titre dépasse la limite
    const trimmedTitle = title.length > maxTitleLength ? title.substring(0, maxTitleLength) + "..." : title;
    
    // Limite de caractères pour la description
    const maxDescriptionLength = 250;
    // Vérifie si la description dépasse la limite
    const trimmedDescription = description.length > maxDescriptionLength ? description.substring(0, maxDescriptionLength) + "..." : description;

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="actualite-link"> {/* Ajoutez la balise a avec l'URL comme href */}
            <div className="actualite">
                <img src={image} alt={title} className="actualite-image" />
                <h3 className="actualite-title">{trimmedTitle}</h3>
                <p className="actualite-description">{trimmedDescription}</p>
            </div>
        </a>
    );
}

export default Actualite;