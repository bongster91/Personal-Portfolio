import styled from "styled-components";

const Opinion = styled.section`
    grid-row: 6/8;
    border-bottom: 1px solid #DADCE0;

    h3 {
        font-style: italic;
        border-bottom: 1px solid black;
    }
`

function Opinions() {
    return (
        <Opinion>
            <h3>Opinions & Musings</h3>

            <img src="http://placekitten.com/100/100" alt="kitten-placeholder" />

            <p>You know what they say...when life gives you lemons, make limes.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sequi dolore, alias deleniti animi ipsum. Nulla nemo quis minima inventore quaerat sit voluptatem iure reiciendis doloribus consequuntur, possimus maiores cumque.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sequi dolore, alias deleniti animi ipsum. Nulla nemo quis minima inventore quaerat sit voluptatem iure reiciendis doloribus consequuntur, possimus maiores cumque.</p>
        </Opinion>
    );
};

export default Opinions;
