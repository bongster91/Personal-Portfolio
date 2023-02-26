import textBasedAdventure from '../Assets/Text based Adventure Giphy.gif';
import capstone from '../Assets/capstone-giphy.gif';
import jsCoffee from '../Assets/JSCoffee-giphy.gif';
import instaclone from '../Assets/instaclone homepage.png';
import adminAnalytics from '../Assets/admin analytics.png';
import styled from 'styled-components';

const ProjectContainer = styled.section`
    border-bottom: 2px solid black;
    grid-row: 6/9;

    .project-container {
        max-width: 100%;
        justify-content: center;
        align-items: center;
    }

    .project-giphy {
        max-width: 100%;
        height: 400px;
        width: 800px;
        padding: 5px;
        border-bottom: 1px solid #DADCE0;
    }

    @media screen and (max-width: 700px) {
        grid-row: 6;
        grid-column: 1/13;
    }
`

function Projects() {
    return (
        <ProjectContainer id="projects">
            <h2>Projects Progression</h2>

            <span className='project-container'>
                <p>Currently working on:    
                    <a href='https://github.com/bongster91/admin-dashboard' target='_blank' rel='noreferrer'>Admin Analytics</a>
                </p>
                <p>Admin Dashboard practice</p>
                <img className="project-giphy" src={adminAnalytics} alt="project-giphy" />
                <br />
            </span>

            <span className='project-container'>
                <a href='https://github.com/bongster91/insta-clone' target='_blank' rel='noreferrer'>Insta Clone</a>
                <p>MERN fullstack social media app</p>
                <img className="project-giphy" src={instaclone} alt="project-giphy" />
                <br />
            </span>

            <span className='project-container'>
                <a href="https://github.com/kathypurry/capstonegang" target='_blank' rel='noreferrer'>Tech Type</a>
                <p>Typing game aimed at helping developers improve their syntactic fluency.</p>
                <img className="project-giphy" src={capstone} alt="project-giphy" />
            </span>

            <span className='project-container'><br/>
                <a href="https://github.com/bongster91/coffee-project" target='_blank' rel='noreferrer'>JavaScript Coffee</a>
                <p>PERN stack e-commerce coffee site by developers for developers.</p>
                <img className="project-giphy" src={jsCoffee} alt="project-giphy" />
            </span>

            <span className='project-container'><br/>
                <a href="https://github.com/bongster91/FSW-Text-Based-Adventure" target='_blank' rel='noreferrer'>Text Based Adventure</a>
                <p>Text based, turn based, multiple ending story on terminal.</p>
                <img className="project-giphy"  src={textBasedAdventure} alt="project-giphy" />
            </span>

        </ProjectContainer>
    );
};

export default Projects;
