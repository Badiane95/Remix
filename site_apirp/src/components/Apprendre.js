import React from 'react';
import Hero from './Hero';
import UniversityTable from './UniversityTable';
import './Apprendre.css';
import heroImage from '../img/italie_rome.jpg';


const Apprendre = () => {
    const title = "Apprendre l'italien";
    const description = "Bienvenue sur notre page apprendre. Découvrez les façons d'apprendre la langue italienne en formation Post-BAC.";
    const buttonText = "Commencer";

    // Définition des données pour chaque université (c'est un exemple, tu devras remplacer ces données par les tiennes)
    const universitiesDataParis = [
        {
            name: "Université Paris 3 Sorbonne Nouvelle",
            logo: require('../img/logo_UNI_SorbonneNouvelle.png'),
            website: "https://www.exemple1.com",
            courses: 
            <ul>
              <li>Licence LLCER d'italien</li>
              <li>Licence Sciences du Langage - mineure Langues et civilisations européennes  (italien) </li>
              <li>Licence d'anglais - mineure italien </li>
              <li>Master Études Italiennes (recherche)</li>
              <li>Master MEEF (Métiers de l'enseignement, de l'éducation et de la formation) parcours italien</li>
              <li>Master pro Échanges culturels France-Italie </li>
              <li>Diplômes d'université :   DLCI  et DLCR</li>
            </ul>
        },
        {
            name: "Université Paris IV-Sorbonne",
            logo: require('../img/logo_UNI_ParisSorbonne.png'),
            website: "https://www.exemple2.com",
            courses: 
            <ul>
              <li>Deux parcours de spécialité (1. Littérature et culture ; 2. Langue et Traduction)</li>
              <li>Quatre bi-licences (Italien-Histoire ; Italien-Lettres modernes ; Italien-Lettres modernes appliquées ; Italien-Musicologie)</li>
              <li>Master recherche en Études italiennes (Littérature, Culture, Arts du spectacle et Traduction) </li>
              <li>Master recherche international en Études italiennes en co-diplomation avec l’Université La Sapienza de Rome</li>
            </ul>
        },
        // Ajoute d'autres universités si nécessaire
    ];
      const universitiesDataCreteil = [
        {
            name: " I.U.T. de Saint Denis - Campus de La Plaine",
            logo: require('../img/logo_IUT_StDenis.png'),
            website: "www.iutsd.univ-paris13.fr",
            courses: 
            <ul>
              <li>Cursus Techniques de commercialisation</li>
            </ul>
        },
        {
            name: "Paris Est Créteil Val de Marne (Paris XII)",
            logo: require('../img/logo_UNI_Upec.png'),
            website: "http://www.u-pec.fr/",
            courses: 
            <ul>
              <li>LEA : Langues Étrangères Appliquées</li>
            </ul>
        },
        {
            name: "Université Vincennes-Saint-Denis (Paris VIII)",
            logo: require('../img/logo_UNI_Paris8.png'),
            website: "https://univ-paris8.fr",
            courses: 
            <ul>
              <li>UFR langues, littératures, civilisations étrangères - langues étrangères appliquées</li>
              <li>(UFR LLCE italien -LEA anglais -italien, allemand-italien, espagnol-italien)</li>
            </ul>
        },
        // Ajoute d'autres universités si nécessaire
    ];
      const universitiesDataVersailles = [
        {
            name: "Université Paris X Nanterre",
            logo: require('../img/logo_UNI_Nanterre.png'),
            website: "https://dep-italien.parisnanterre.fr",
            courses: 
            <ul>
              <li>LLCER  (Licence mention langues, littératures et civilisations étrangères et régionales)
                <ul>
                  <li>Double licence (délivrance de deux diplômes français) en Études italiennes et Etudes anglo-américaines ou en Études italiennes et Géographie et aménagement</li>
                  <li>Licence en double diplôme (délivrance d'un diplôme français et d'un diplôme italien)</li>
                  <li>Licence en Études italiennes</li>
                  <li>Licence en "Études Européennes et Internationales" (LEEI)</li>
                  <li>Master Études Romanes-Italien</li>
                  <li>Master Parcours International</li>
                  <li>Master Parcours International en Double diplôme</li>
                </ul>
              </li>
            <li>Licence et Master Droit français – Droit italien</li>
            <li> D.U. (Diplôme d'Université) Italien: Culture et communication professionnelle </li>
            <li> LEA (Langues étrangères appliquées) : Anglais-Italien</li>
            <li>Préparation au CELI (Certificat de connaissance de la langue italienne)</li>
            <li>Doctorat en études italiennes</li>
            </ul>
        },
        {
            name: " Université de Versailles / Saint Quentin",
            logo: require('../img/logo_UNI_StQuentin.png'),
            website: "http://www.uvsq.fr/",
            courses: 
            <ul>
              <li>Licence Anglais / Droit</li>
              <li>Licence LLCE Anglais</li>
              <li>Licence LLCE Espagnol</li>
              <li>Licence de Lettres modernes</li>
              <li>Licence de Géographie</li>
            </ul>
        },
        {
            name: " Université d’Evry Val d’Essonne",
            logo: require('../img/logo_UNI_Evry.png'),
            website: "http://www.univ-evry.fr/",
            courses: 
            <ul>
              <li>LEA : Langues étrangères appliquées (jusqu’au Master) en tant que langue complémentaire (LV3)</li>
              <li>Licence d’Histoire (en tant que LV1 ou enseignement complémentaire)</li>
            </ul>
        },
        // Ajoute d'autres universités si nécessaire
    ];

    return (
        <div className="apprendre-container">
            <Hero
                title={title}
                description={description}
                heroImage= {heroImage}
                buttonText={buttonText}
            />
            <h2 className='h2-titre'>Apprendre l'italien après le BAC</h2>
            <h3 className="h3-Sections">Académie de Paris universités</h3>
            {universitiesDataParis.map((university, index) => (
                <UniversityTable key={index} university={university} />
            ))}
            <h3 className="h3-Sections">Académie de Créteil universités</h3>
            {universitiesDataCreteil.map((university, index) => (
                <UniversityTable key={index} university={university} />
            ))}
            <h3 className="h3-Sections">Académie de Versailles universités</h3>
            {universitiesDataVersailles.map((university, index) => (
                <UniversityTable key={index} university={university} />
            ))}
        </div>
    );
}

export default Apprendre;