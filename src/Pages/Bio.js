import headshot from '../Assets/Pursuit 7.0 - Headshot.jpg';
import popcat from '../Assets/popcat-meme.jpeg';
import BioRecipe from '../Components/BioRecipe';
import BioBackground from '../Components/BioBackground';
import styled from 'styled-components';

const BioSection = styled.section`
    border-bottom: 2px solid black;
    grid-column: 1/10;
    grid-row: 4/6;
    display: grid;
    grid-template-columns: 1fr 2fr;

    img {
        width: 200px;
        height: 200px;
        padding: 10px;
        grid-column: 1;
        grid-row: 4/5;

    @media screen and (max-width: 700px) {
        grid-column: 1/12;
    }
`

function Bio() {
    return (
        <BioSection id="bio">
            <img className="headshot" src={popcat} alt="headshot"/>
            <BioRecipe />
            <BioBackground />
        </BioSection>
    );
};

export default Bio;
