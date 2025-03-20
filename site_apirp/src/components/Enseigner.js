import React from 'react'
import Hero from './Hero'
import heroImage from '../img/img-venise.jpg';
import './Enseigner.css';

const Enseigner = () => {

    const title = "Enseigner grâce à notre association";
    const description = "Bienvenue sur notre page dédier à l'enseignement. Découvrez les avantages de devenir membre de notre association.";
    const buttonText = "Commencer";

    const handleScrollToContent = () => {}
        // Fonction pour faire défiler la page vers la partie suivante

    const handleScrollToSection = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <div className="enseigner-container">
            <Hero
                title={title}
                description={description}
                buttonText={buttonText}
                heroImage= {heroImage}
                scrollTo={handleScrollToContent}
            />
        <div className="enseigner-content1">
            <h1 className='h1'>Comment devenir enseignant</h1>
          <div className="content-txt">
            <p className='p'><span className='span'>La première étape</span>, pour devenir enseignant, est avoir une licence (Bac+3).  Dès la licence, des parcours ou options de préparation aux métiers de l'enseignement sont proposés aux étudiants qui désirent s'engager dans cette voie.</p>
            <p className='p'><span className='span'>La deuxième étape</span> est de vous inscrire en master MEEF (métiers de l’enseignement, de l’éducation et de la formation), qui comporte plusieurs mentions : premier degré (professeur des écoles), second degré (enseignant du secondaire), encadrement éducatif (conseiller principal d’éducation). Les différents concours auxquels vous aurez accès permettent d’enseigner dans le premier degré (écoles maternelles et primaires) ou dans le secondaire (collèges et lycées), dans le public ou dans le privé.</p>
            <p className='p'>La première année du master MEEF est surtout axée sur la préparation du concours de recrutement, qui a lieu à la fin de l’année, mais il faudra valider également la deuxième année car l’obtention du diplôme est indispensable pour exercer le métier.</p>
            <p className='p'>Ces masters sont organisés par les ESPE (écoles supérieures du professorat et de l’éducation) au sein des universités.</p>
            <p className='p'>À noter que les universités et instituts catholiques proposent aussi des masters MEEF, tout indiqués si vous envisagez une carrière de professeur dans le privé.</p>
            <p className='p'>Au programme de tous ces concours : deux épreuves écrites d’admissibilité et deux épreuves orales (une mise en situation professionnelle et un entretien).</p>
            <p className='p'>Si tout se passe bien (vous êtes admis au concours et vous avez décroché votre M1), vous poursuivez vos études en seconde année de MEEF (si vous échouez au M1 mais pas au concours, vous gardez le bénéfice du concours une année).</p>
            <p className='p'>En cas d’échec au concours, vous avez la possibilité de le repasser ou vous pouvez envisager une réorientation dans un autre master (au niveau M1 ou M2 selon que vous avez réussi ou non vos examens).</p>
            <p className='p'>La seconde année du master MEEF est considérée comme une année de formation en alternance : les étudiants deviennent fonctionnaires stagiaires et suivent des cours à l’ESPE tout en effectuant un stage en responsabilité équivalant à un mi-temps devant les élèves. Durant cette période, les enseignants stagiaires sont rémunérés entre 1.600 € et 1.700 € brut par mois.</p>
            
            <h3>En savoir plus : <a className="link" href='http://www.devenirenseignant.gouv.fr/pid33985/enseigner-au-college-ou-au-lycee-general-le-capes.html' target='_blank'>http://www.devenirenseignant.gouv.fr/pid33985/enseigner-au-college-ou-au-lycee-general-le-capes.html</a></h3>
          </div>

        </div>
    </div>
  )
}

export default Enseigner
