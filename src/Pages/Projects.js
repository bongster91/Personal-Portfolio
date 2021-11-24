import textBasedAdventure from '../Assets/Text based Adventure Giphy.gif';
import capstone from '../Assets/capstone-giphy.gif';
import styled from 'styled-components';

const ProjectContainer = styled.section`
    border-bottom: 2px solid black;
    grid-row: 6/9;

    h2 {
        font-style: italic;
        border-bottom: 1px solid black;
    }

    .project-giphy {
        max-width: 100%;
        height: 400px;
        width: 800px;
        padding: 5px;
    }

    a {
        color: #0000FF;
        font-size: 18px;
        font-weight: bold;
    }

    a:hover {
        color: darkgoldenrod;
    }

    @media screen and (max-width: 700px) {
        grid-row: 6;
        grid-column: 1/13;
    }
`

function Projects() {
    return (
        <ProjectContainer id="projects">
            <h2>Projects</h2>
            <span>
                <a href="https://github.com/kathypurry/capstonegang">Tech Type</a>
                <p>Typing improvement game for developers.</p>
                <img className="project-giphy" src={capstone} alt="project-giphy" />
            </span>

            <span><br/>
                <a href="https://github.com/bongster91/coffee-project">JavaScript Coffee</a>
                <p>Coffee from developers, for developers.</p>
            </span>

            <span><br/>
                <a href="https://github.com/bongster91/FSW-Text-Based-Adventure">Text Based Adventure</a>
                <p>Text based, turn based, multiple ending story on terminal.</p>
                <img className="project-giphy"  src={textBasedAdventure} alt="project-giphy" />
            </span>

        </ProjectContainer>
    );
};

export default Projects;
