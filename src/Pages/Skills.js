import htmlIcon from '../Assets/html.png';
import cssIcon from '../Assets/css.png';
import jsIcon from '../Assets/js.png';
import gitHubIcon from '../Assets/github.png';
import msOfficeIcon from '../Assets/Microsoft Office.png';
import objectIcon from '../Assets/obj.png';
import psqlIcon from '../Assets/PostgreSQL.png';
import reactReduxIcon from '../Assets/React&Redux Logo.jpeg';
import sqlIcon from '../Assets/sql.png';
import vsCodeIcon from '../Assets/Visual Studio Code.webp';
import websiteIcon from '../Assets/website.png';
import apiIcon from '../Assets/api.png';
import bootstrapIcon from '../Assets/bootstrap.png';
import expressIcon from '../Assets/express-icon.jpeg';
import trelloIcon from '../Assets/trello-icon.png';
import postmanIcon from '../Assets/postman-icon.png';
import debuggingIcon from '../Assets/debugging.png';
import nodejsIcon from '../Assets/nodejs.png';
import dataIcon from '../Assets/data-list.png';
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

    @media screen and (max-width: 700px) {[
        grid-row: 7;
        grid-column: 1/12;
    
        border-bottom: none;

        
    ]}
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
            <img className="skills-icon" src={apiIcon} alt="api icon" />
            <img className="skills-icon" src={bootstrapIcon} alt="bootstrap icon" />
            <img className="skills-icon" src={expressIcon} alt="express icon" />
            <img className="skills-icon" src={trelloIcon} alt="trello icon" />
            <img className="skills-icon" src={postmanIcon} alt="postman icon" />
            <img className="skills-icon" src={debuggingIcon} alt="debugging icon" />
            <img className="skills-icon" src={nodejsIcon} alt="nodejs icon" />
            <img className="skills-icon" src={dataIcon} alt="data structure icon" />
        </SkillsContainer>
    );
};

export default Skills;
