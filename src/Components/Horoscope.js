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

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sequi dolore, alias deleniti animi ipsum. Nulla nemo quis minima inventore quaerat sit voluptatem iure reiciendis doloribus consequuntur, possimus maiores cumque.</p>
        </HoroscopeContainer>
    );
};

export default Horoscope;
