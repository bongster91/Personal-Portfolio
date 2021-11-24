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

            <p>I would love to frolic in the jungle with jaguars...as long as I have excellect wifi.</p>

            <p>Some of my favorite foods are: pizza, hotpot, steak, bibimbap, sushi, fried chicken</p>

            <p>🚀 To the moooonnn!! 🚀</p>
        </Opinion>
    );
};

export default Opinions;
