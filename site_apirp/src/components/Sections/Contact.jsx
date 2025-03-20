import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
// Assets
import ProjectImg1 from "../../assets/img/projects/bulletin1.png";
import ProjectImg2 from "../../assets/img/projects/bulletin2.png";
import ProjectImg3 from "../../assets/img/projects/bulletin3.png";
import ProjectImg4 from "../../assets/img/projects/bulletin4.png";
import ProjectImg5 from "../../assets/img/projects/bulletin5.png";
import ProjectImg6 from "../../assets/img/projects/bulletin6.png";
import HeaderImage from "../../assets/img/Contact/Header-Contact.jpg";

export function Contact() {
  return (
    <HeaderWrapper className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
        <h1 className="extraBold font60">Nous
          <span className="darkColor"> contacter</span>
        </h1>
          <HeaderP className="font15">
          Pour nous signaler tout changement de coordonnées personnelles (adresse de domicile, téléphone, courriel) ou professionnelles (changement d’établissement de rattachement, de statut, etc.), merci d’envoyer un courriel à : <span className="semiBold">apirp.association@gmail.com.</span>
          <br />
          Pour les renouvellement d’adhésion et pour les commandes de plaquettes pour la promotion de l’italien, nos adhérents peuvent aussi se servir des formulaires publiés dans les deux dernières page de notre bulletin annuel.</HeaderP>
          <h3>Mail : apirp.association@gmail.com</h3><br />
          <h3>Suivez nous sur <a  href="https://m.facebook.com/APIRP/" target="_blank" className="darkColor">Facebook</a> !</h3>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9}} />
        </ImageWrapper>
       
      </RightSide>
    </HeaderWrapper>
  );
}
const HeaderWrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

export function Assoc() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
        <HeaderInfo>
            <h1 className="font40 extraBold darkColor">L'association et ses statuts</h1><br />
            <h1 className="font30 semiBold">Présentation de l'APIRP: Association des Professeurs d'Italien de la Région Parisienn</h1><br />
            <p className="font15"> <br />
            Le 9 mai 1977 était déclarée à la Préfecture de Police de Paris la création de « L'Amicale des professeurs d'italien de la région parisienne ». Rebaptisée « Association des professeurs d'italien de la région parisienne » (APIRP) en 1984, elle eut pour président(e)s successifs(ives) des professeurs de Collège et de Lycée de l’Éducation Nationale, Jean Constantin, Pierre Méthivier, Anne Mazire, Gabrielle Kerleroux, Ketty Zanforlini et depuis janvier 2017, Romina De Lucia. 
            </p><p className="font15"> <br />
            Quarante ans après  sa création, sa vocation originelle (« établir et développer des liens de solidarité et d'amitié entre les italianistes de la région parisienne ») reste toujours d'actualité. Mais l'APIRP a évolué avec le temps. De nouvelles actions sont en effet apparues nécessaires : tout d'abord, la collecte d'informations fiables au sujet des implantations de postes dans les trois académies; ensuite, la mise en commun d'informations culturelles, de ressources pédagogiques, d'idées pour les cours; et enfin, l'entre-aide en cas de mutation, de fragilisation de poste, etc. Pour ce faire, l'APIRP entretient un dialogue régulier et constructif avec l'Inspection d'italien, en toute indépendance.
            </p><p className="font15"> <br />
            L'APIRP a élaboré une plaquette de promotion de la langue italienne à destination des parents et des élèves en situation de choix, publie un bulletin par an, réunit ses adhérents en assemblée générale au début et à la fin de chaque année scolaire et a également créé un site Internet et une page Facebook. 
            </p><p className="font15"> <br />
            Elle est présente lors de manifestations culturelles italo-françaises (Forum des association italiennes du XIIIè arrondissement, Festa del libro des Blancs Manteaux, réceptions au Centre culturel et à l'Ambassade d'Italie, entre autres). Elle représente aussi tous les professeurs d'italien de l'Ile de France au Congrès annuel de la FNAI (Fédération Nationale des Associations d'Italianistes).
            </p><p className="font15 semiBold"> <br />
            Pour nous contacter : apirp.association@gmail.com</p>
          </HeaderInfo>
        </div>
      </div>
      
      
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin: 50px 0;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
   
  }
`;




export function Elu() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
        <HeaderInfo>
        <h1 className="font40 extraBold darkColor">Les élus au C.A.</h1><br />
            <h1 className="font30 semiBold">Membres du C.A. et du Bureau élus le 16 mars 2019</h1><br />
            <p className="font15"> <br />
            Président : Olivier Morin            </p><p className="font15"> <br />
            Vice-Présidente : Ilaria Madonna            </p><p className="font15"> <br />
            Secrétaire : Estelle Paint            </p><p className="font15"> <br />
            Trésorière : Valérie Guillouet            </p><p className="font15 "> <br />
            Correspondante APIRP pour l'académie de Paris : Alexandra Martinez </p><p className="font15 "> <br />
            Correspondant APIRP pour l'académie de Créteil : Graziano Tassi            </p><p className="font15"> <br />
            Correspondante APIRP pour l'académie de Versailles : Charlotte Ostrovsky-Richard          </p><p className="font15"> <br />
            Secrétaire adjointe + correspondante “CPGE”: Gabrielle Kerleroux        </p><p className="font15"> <br />
            Trésorière adjointe : Patrizia Bisson   </p><p className="font15"> <br />
            Webmestre : Maria Letizia Gabanini      </p><p className="font15"> <br />
            Contacts avec les associations italiennes de l'Île-de-France : Patrizia Bisson et Alexandra Martinez      </p><p className="font15"> <br />
            Contact avec les Universités: Graziano Tassi      </p><p className="font15"> <br />
            Contact avec l'IIC et le Consulat : Olivier Morin - Ilaria Madonna    </p><p className="font15"> <br />
            Redactrice en chef du Bulletin : Charlotte Ostrovsky-Richard    </p><p className="font15"> <br />
            Directeur artistique du Bulletin: Francesco Forlani  </p><p className="font15"> <br />
            Présidents Honoraires : Madame Anne Mazire </p><p className="font15"> <br />
            Membre honoraire: Ketty Zanforlini        </p>
          </HeaderInfo>
        </div>
      </div>
    </Wrapper>
  );
}

export function Bulletin() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
        <HeaderInfo>
        <h1 className="font40 extraBold darkColor">Les bulletins de l'association</h1><br />
        <h1 className="font30 semiBold"> Le dernier bulletin 2018 - 2019 a été consacré à la cuisine italienne</h1><br />
        <p className="font15">Si vous souhaitez commander l'un de ces bulletin vous pouvez envoyer un chèque de 4 € à l'ordre de l'APIRP à l'adresse suivante : Mme Valérie GUILLOUET - 10, rue Blondel - 92400 COURBEVOIE</p>
        </HeaderInfo>
            <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="La carte"
                action={() => window.open('https://drive.google.com/file/d/1Iqk0kTEXSH5eEQyVRmXXjufPeTUmlwHX/view', '_blank')}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Le menu"
                action={() => window.open('https://drive.google.com/file/d/1AhBJZCmjYmjvKCe58RbusWGJzaMnC7i6/view', '_blank')}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Lettre aux adhérents"
                action={() => window.open('https://drive.google.com/file/d/1jCvJfoMlt2iwGd-ebsV9iu0X-jpdbr1n/view', '_blank')}
              />
            </div>
          </div>
          <HeaderInfo>
        <h1 className="font30 semiBold"> Ci-dessous les sommaires des derniers bulletins</h1><br />
        </HeaderInfo>
            <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Copertia bulletin"
                action={() => window.open('https://drive.google.com/file/d/18nlDFxe32kEFDDg4a_mYTsgHAW3uwTfR/view', '_blank')}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Sommaire"
                action={() => window.open('https://drive.google.com/file/d/1J_ffMlPtrx7OyrkYuz1gO14r5PcK-ms6/view', '_blank')}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Sommaire"
                action={() => window.open('https://drive.google.com/file/d/0B34j4qalEtJseHdNS1FRX0xKVGM/view?resourcekey=0-L2vbnBD7zasV7NsrSUX0GQ', '_blank')}
              />
            </div>
            
          </div>
        </div>
      </div>
    </Wrapper>
  );
}