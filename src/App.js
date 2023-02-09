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
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Source Code Pro', monospace;
  }

  h1, h2 {
    font-weight: bold;
    font-style: italic;
  }

  a:hover {
    color: darkgoldenrod;
  }
`

const AppContainer = styled.div`
  background-color: white;
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 50px) repeat(7, 3fr) 1fr;
  gap: 20px;

  @media screen and (max-width: 700px) {
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 50px 125px 50px repeat(2, .5fr) .25fr;
  }
`

const MainSection = styled.main`
  grid-row: 4/12;
  grid-column: 1/10;
  padding: 20px;

  @media screen and (max-width: 700px) {
    grid-column: 1/13;
    grid-row: 4/6;
  }
`

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
        <Navbar />
        <MiscHeader />
        <WelcomeHeader />

        <MainSection>
          <Bio />
          <Experience />
          <Projects />
          <Skills />
        </MainSection>

        <ContactInfo />
        <RightColumn />
    </AppContainer>
  );
};

export default App;
