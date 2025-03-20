import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
//Assets
import HeaderImage from "../../assets/img/Activites/Header-Activites.jpg";

export function HeaderActivités() {

  return (
    <HeaderWrapper className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
        <h1 className="extraBold font60">
          <span className="darkColor">Activités</span> culutrelles
        </h1>
          <HeaderP className="font15">
          Bienvenue sur notre page activités culturelles. Explorez la richesse culturelle italienne : concerts envoûtants, expositions captivantes, et littérature inspirante !     </HeaderP>
          <BtnWrapper>
            <FullButton title="Voir Plus"/>
          </BtnWrapper>
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
export function Activités() {
  return (
    <Wrapper >
      <div className="whiteBg">
        <div className="container">
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title= "Concours Dante Dì"
                text="Le Consulat Général d’Italie à Paris, en collaboration avec l’Institut Culturel Italien de Paris, lance le concours DANTE DÌ à l’occasion du Septième Centenaire de la mort de Dante, organisé par la Société Dante Alighieri - Comites.[...]"
                tag="Lire plus"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Paolo Fresu et Daniele di Bonaventura en concert."
                text="Mercredi  21 Oct 2020 de 19h à 20h30, l'IIC (50, rue de Varenne) nous invite au concert de Paolo Fresu et Daniele di Bonaventura. Paolo Fresu est l’un des plus grands trompettistes de jazz d’aujourd’hui.[...]"
                tag="Lire plus"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Sicilia, Tunisia, ..."
                text="Sur scène à Nanterre, «Sicilia.» Ce spectacle a été joué plus de 140 fois, traduit en italien et anglais, et joué en France et à l'étranger [...]."
                tag="Lire plus"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Italissimo 2020"
                text="La cinquième édition d’ITALISSIMO, le festival de littérature et culture italiennes, qui devait se tenir en avril, aura lieu du 8 au 13 octobre 2020.[...]"
                tag="Lire plus"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Exposition Gramsci à l'IIC"
                text="Pour célébrer la richesse et la vivacité de la pensée d’Antonio Gramsci, la Fondation Gramsci et l’Institut culturel italien de Paris vous invitent à découvrir l’exposition « Les Cahiers de prison et la France »[...]"
                tag="Lire plus"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="L'essor des séries italiennes à l'IIC"
                text="Le 22 septembre 2020 à 19h, l'Institut culturel italien vous convie à une rencontre consacrée à la Fiction à l'italienne. De Gomorra à la série de Paolo Sorrentino, The young Pope.[...]"
                tag="Lire plus"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Erri De Luca, au MK2 Bibliothèque"
                text="
                L’écrivain italien Erri De Luca sera au mk2 Bibliothèque (Paris 13° ) du vendredi 18 au dimanche 20 septembre 2020 pour une série de trois entretiens et la projection d’un film qu’il présentera.[...]"
                tag="Lire plus"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Soirée de chants traditionnels italiens et stage de chant"
                text="Le Studio DTM - Danse Théâtre Musique accueille le 20 Mars 2020 à 20h30 un artiste italien, pour une soirée de chants et bals traditionnels des régions Marche et Abruzzo.[...]"
                tag="Lire plus"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Cézanne et Rêve d’Italie au Musée Marmottan."
                text="Au musée Marmottan Monet, Paris 16ème, vient de s’ouvrir une exposition inédite intitulée «Cézanne et les maîtres. Rêve d’Italie». Elle aura lieu jusqu’au 5 juillet 2020.[...]"
                tag="Lire plus"
                action={() => alert("clicked")}
              />
            </div>
          </div>
        <div className="row flexCenter">
             <div style={{ margin: "50px 0", width: "200px" }}>
               {/*<FullButton title="Load More" action={() => alert("clicked")} />*/}
            </div>
            </div>
        </div>
      </div>
    </Wrapper>
  );
}



const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;


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
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
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