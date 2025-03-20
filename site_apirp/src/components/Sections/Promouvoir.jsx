import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage2 from "../../assets/img/Promouvoir/Promouvoir-1.jpg";
import HeaderImage from "../../assets/img/Promouvoir/Header-Promouvoir.jpg";
import AddImage3 from "../../assets/img/Promouvoir/Promouvoir-2.jpg";

export function HeaderPromouvoir() {
  return (
    <HeaderWrapper className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
        <h1 className="extraBold font60">
          <span className="darkColor">Promouvoir</span> l'italien
        </h1>
          <HeaderP className="font15">
          Bienvenue sur notre page promouvoir l'italien. Dans le paysage culturel et linguistique mondial, la langue italienne brille de sa propre lumière. Au cœur de cette vitalité linguistique se trouve l'engagement passionné de notre association dévouées à sa promotion.</HeaderP>
          <BtnWrapper>
            <FullButton title="Voir Plus" />
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

export function Promouvoir() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
        <HeaderInfo>
            <h1 className="font40 extraBold">La plaquette éditée par l'APIRP</h1>
            <p className="font15"> <br />
            L'APIRP a édité un dépliant pour la promotion de l'apprentissage de la langue italienne dans les établissements scolaires de l'Île-de-France.
            </p>
          </HeaderInfo>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
            </AddLeft>
            <AddRight>
            <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage3} alt="add" />
            </ImgWrapper>
            </AddRight>
          </Advertising>
          </div>
          </div>
          <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
          <AddLeft>
            <h4 className="font15"> <br />
            Télécharger le bon de commande pour pouvoir commander les dépliants :
            </h4>
          </AddLeft>
          <AddRight>
          <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Adhérent"action={() => window.open('https://drive.google.com/file/d/0B34j4qalEtJsMGlEcmFFWlJmY1E/view?resourcekey=0-19mliwKeZAoPK9XBmNVPwg', '_blank')} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Non adhérent" action={() => window.open('https://drive.google.com/file/d/0B34j4qalEtJsd2xZM3dxclI2UTg/view?resourcekey=0-AK-KZe_UzMKDFomtWhSyGA', '_blank')}  />
                  </div>
          </ButtonsRow>
          </AddRight>
          </Advertising>
        </div>
      </div>
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo >
            <h4 className="font15">Réponses au Quizz de la plaquette</h4>
            <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <button className="button1" onClick={() => window.open('https://drive.google.com/file/d/0B34j4qalEtJsd2psVS1tN3plaFU/view?resourcekey=0-nlUxtG1Hf7kOX6BhtZuY2w', '_blank')}> Les réponses </button>
                  </div>
            </ButtonsRow>
          </HeaderInfo>
          </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0 ;
  margin: 50px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
    
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 30px 0 30px 0;
    margin: 50px 0 50px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
