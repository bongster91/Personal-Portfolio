import styled from "styled-components";

const HoroscopeContainer = styled.section`
    grid-row: 8/10;
    border-bottom: 1px solid #DADCE0;

    h3 {
        font-style: italic;
        border-bottom: 1px solid black;
    }
`

function Horoscope() {
    return (
        <HoroscopeContainer>
            <h3>Horoscope</h3>

            <p>The Sun said if you boop your cat's rabbit paws' beanies you'll get good luck today!</p>

            <p>Legends foretell of a shining circle in the skies, one during the day and one during the night...</p>

            <span>☀️ ♐</span> <br />
            <span>🌙 🦁</span> <br />
            <span>⬆️ 🦁</span> <br />

            <p>As CoStar says: 'Poetry is in the street'</p>
        </HoroscopeContainer>
    );
};

export default Horoscope;
