import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/js.png';
import gitHubIcon from '../assets/github.png';
import msOfficeIcon from '../assets/Microsoft Office.png';
import objectIcon from '../assets/obj.png';
import psqlIcon from '../assets/PostgreSQL.png';
import reactReduxIcon from '../assets/React&Redux Logo.jpeg';
import sqlIcon from '../assets/sql.png';
import vsCodeIcon from '../assets/Visual Studio Code.webp';
import websiteIcon from '../assets/website.png';
import styled from 'styled-components';

const SkillsContainer = styled.section`
    border-bottom: 2px solid black;
    grid-row: 9/10;

    h2 {
        font-style: italic;
        border-bottom: 1px solid black;
    }

    img {
        width: 100px;
        height: 100px;
    }
`

function Skills() {
    return (
        <SkillsContainer id="skills">
            <h2>Skills/Knowledge</h2>

            <img className="skills-icon" src={htmlIcon} alt="html icon" />
            <img className="skills-icon" src={cssIcon} alt="css icon" />
            <img className="skills-icon" src={jsIcon} alt="js icon" />
            <img className="skills-icon" src={gitHubIcon} alt="github icon" />
            <img className="skills-icon" src={msOfficeIcon} alt="ms office icon" />
            <img className="skills-icon" src={objectIcon} alt="object icon" />
            <img className="skills-icon" src={psqlIcon} alt="postgres icon" />
            <img className="skills-icon" src={reactReduxIcon} alt="react redux icon" />
            <img className="skills-icon" src={sqlIcon} alt="sql icon" />
            <img className="skills-icon" src={vsCodeIcon} alt="vs code icon" />
            <img className="skills-icon" src={websiteIcon} alt="website icon" />
        </SkillsContainer>
    );
};

export default Skills;
