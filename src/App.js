import Navbar from "./Pages/Navbar";
import MiscHeader from "./Pages/MiscHeader";
import WelcomeHeader from "./Pages/WelcomeHeader";
import Bio from "./Pages/Bio";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import ContactInfo from "./Pages/ContactInfo";
import RightColumn from "./Pages/RightColumn";
import styled from "styled-components";
import './App.css';

const AppContainer = styled.div`
  font-family: serif;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 50px) repeat(7, 3fr) 1fr;
  gap: 20px;

  @media screen and (max-width: 700px) {
    display:grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(3, .25fr) repeat(10, 3fr) .25fr;
  }
`

const MainSection = styled.main`
  grid-row: 4/11;
  grid-column: 1/10;
  padding: 20px;

  @media screen and (max-width: 700px) {
    grid-column: 1/11;
    grid-row: 4/11;
  }
`

function App() {
  return (
    <AppContainer>
        <Navbar />
        <MiscHeader />
        <WelcomeHeader />

        <MainSection>
          <Bio />
          <Projects />
          <Skills />
          <Experience />
        </MainSection>

        <ContactInfo />
        <RightColumn />
    </AppContainer>
  );
};

export default App;
