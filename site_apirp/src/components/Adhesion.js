import { Form, useActionData } from '@remix-run/react';
import Hero from './Hero';
import './Adherer.css';
import heroImage from '../img/drapeau_italie.jpg';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  // Ici vous pourriez ajouter la logique de traitement des données
  // Exemple : envoi par email ou sauvegarde en base de données

  return { success: true, values };
};

const Adherer = () => {
  const actionData = useActionData();
  const title = "Adhérer à notre association";
  const description = "Formulaire d'adhésion en ligne à l'APIRP";
  
  return (
    <div className="adherer-container">
      <Hero
        title={title}
        description={description}
        heroImage={heroImage}
      />

      {actionData?.success && (
        <div className="confirmation-message">
          Merci pour votre adhésion ! Votre formulaire a bien été reçu.
        </div>
      )}

      <Form method="post" className="adherer-form" encType="multipart/form-data">
        {/* Section Informations Personnelles */}
        <fieldset>
          <legend>Informations Personnelles</legend>
          
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input 
              type="text" 
              id="nom" 
              name="nom" 
              required 
              placeholder="Votre nom"
            />
          </div>

          <div className="form-group">
            <label htmlFor="prenom">Prénom</label>
            <input 
              type="text" 
              id="prenom" 
              name="prenom" 
              required 
              placeholder="Votre prénom"
            />
          </div>

          <div className="form-group">
            <label htmlFor="adresse">Adresse</label>
            <input 
              type="text" 
              id="rue" 
              name="rue" 
              required 
              placeholder="N° et nom de rue"
            />
            <div className="inline-fields">
              <input
                type="text"
                id="code_postal"
                name="code_postal"
                required
                placeholder="Code postal"
                pattern="\d{5}"
              />
              <input
                type="text"
                id="ville"
                name="ville"
                required
                placeholder="Ville"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Coordonnées</label>
            <div className="inline-fields">
              <input
                type="tel"
                id="telephone"
                name="telephone"
                placeholder="Téléphone fixe"
                pattern="[0-9]{10}"
              />
              <input
                type="tel"
                id="portable"
                name="portable"
                required
                placeholder="Portable"
                pattern="[0-9]{10}"
              />
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Adresse e-mail"
              />
            </div>
          </div>
        </fieldset>

        {/* Section Établissement */}
        <fieldset>
          <legend>Informations sur l'Établissement</legend>
          
          <div className="form-group">
            <label htmlFor="etablissement">Nom de l'établissement</label>
            <input 
              type="text" 
              id="etablissement" 
              name="etablissement" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Typologie</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="typologie" value="public" required />
                Public
              </label>
              <label>
                <input type="radio" name="typologie" value="prive" required />
                Privé
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="academie">Académie</label>
            <input 
              type="text" 
              id="academie" 
              name="academie" 
              required 
            />
          </div>
        </fieldset>

        {/* Type d'adhésion */}
        <fieldset>
          <legend>Type d'adhésion</legend>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="adhesion_type" value="renouvellement" />
              Renouvellement d'adhésion
            </label>
            <label>
              <input type="checkbox" name="adhesion_type" value="nouvelle" />
              Nouvelle adhésion
            </label>
            <label>
              <input type="checkbox" name="adhesion_type" value="changement" />
              Changement de coordonnées
            </label>
            <label>
              <input type="checkbox" name="adhesion_type" value="resiliation" />
              Résiliation d'adhésion
            </label>
          </div>
        </fieldset>

        {/* Autorisation */}
        <div className="form-group authorization">
          <label>
            <input 
              type="checkbox" 
              name="autorisation" 
              required 
            />
            J'autorise l'APIRP à transmettre mes coordonnées aux instances institutionnelles
          </label>
        </div>

        {/* Signature */}
        <div className="form-group">
          <label htmlFor="signature">Signature électronique</label>
          <input
            type="file"
            id="signature"
            name="signature"
            accept="image/*,application/pdf"
            required
          />
        </div>

        <div className="montant-cotisation">
          <p>Montant de la cotisation :</p>
          <div className="montant-options">
            <label>
              <input type="radio" name="cotisation" value="23" required />
              23 € (cotisation normale)
            </label>
            <label>
              <input type="radio" name="cotisation" value="30" />
              30 € (cotisation de soutien)
            </label>
          </div>
        </div>

        <button type="submit" className="button">
          Soumettre l'adhésion
        </button>
      </Form>
    </div>
  );
};

export default Adherer;
