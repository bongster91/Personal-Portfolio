import styled from 'styled-components';

const WelcomeHead = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 2px solid black;
    grid-row: 3;
    grid-column: 1/13;
`

function WelcomeHeader() {
    return (
        <WelcomeHead>
            <h1>Breaking News! Wild Bong Sighted!</h1>
        </WelcomeHead>
    );
};

export default WelcomeHeader;
