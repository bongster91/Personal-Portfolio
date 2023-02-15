import styled from "styled-components";

const Background = styled.section`
    grid-column: 1/3;
    grid-row: 5/6;

    h2 {
        font-style: italic;
        border-bottom: 1px solid black;
    }

    a:hover {
        color: darkgoldenrod;
    }
`

function BioBackground() {
    return (
        <Background>
            <h2>Background</h2>

            <p>I love to create things, whether it be cooking, writing poetry, programming or making drinks. I love the mental stimulation and innovative solutions that comes with the process of creating.</p>

            <p>This portfolio is an upgraded version of the <a href="https://codepen.io/bongster91/pen/VwaWmLz" target='_blank' rel='noreferrer'>mini site</a> that I submitted as a part of the Pursuit application. I think this portfolio is an effective and accurate measurement of the skills and knowledge I obtained since then. How memorable it would be if my portfolio launches my tech career the way the mini site got me into Pursuit.</p>
        </Background>
    );
};

export default BioBackground;
