import React from "react";
// Header&Footer
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer"; 
//Pages
import Accueil from "../components/Accueil";
import Adherer from "../components/Adherer";
import Apprendre from "../components/Apprendre";
import Divers from "../components/Divers";
import Enseigner from "../components/Enseigner";
import { HeaderActivités, Activités } from "../components/Sections/Activités";
import { Assoc, Bulletin, Contact, Elu } from "../components/Sections/Contact";
import { HeaderPromouvoir, Promouvoir } from "../components/Sections/Promouvoir";
import { HeaderForum, Forum } from "../components/Sections/Forum";



export default function Landing() {
  return (
    <>
      <TopNavbar />
      <BrowserRouter>
        <Routes>
        <Route path="/accueil" element={<Accueil />} />
           <Route path="/" element={<Accueil />} /> 
          <Route path="Forum" element={<><HeaderForum /><Forum /></>} />
          <Route path="Activités" element={<><HeaderActivités /><Activités /></>} />
          <Route path="Contact" element={<><Contact /><Assoc /><Elu /><Bulletin /></>}/>
          <Route path="/adherer" element={<Adherer />} />
          <Route path="Promouvoir" element={<><HeaderPromouvoir /><Promouvoir /></>} />
          <Route path="/apprendre" element={<Apprendre />} />
          <Route path="/enseigner" element={<Enseigner />} />
          <Route path="/divers" element={<Divers />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}


