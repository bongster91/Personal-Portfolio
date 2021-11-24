import styled from 'styled-components';

const MiscContainer = styled.header`
    border-bottom: 1px solid #DADCE0;
    grid-row: 2;
    grid-column: 1/13;
    font-size: 18px;

    @media screen and (max-width: 700px) {
        grid-column: 1/10;
        justify-items: stretch;
    }
`

const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-right: 10px;

    @media screen and (max-width: 700px) {
        grid-row: 2;
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        margin: 0;
        padding: 0;
        justify-content: space-evenly;

        li {
            padding: 8px;
            border-top: 1px solid #DADCE0;
        }
    }

    
`

function MiscHeader() {
    const date = new Date();
    let currentDate = `${date.toLocaleDateString()}`

    return (
        <MiscContainer>
            <Ul>
                <li>Volume I No. I</li>
                <li>Pretend this is a free stock ticker api</li>
                <li>{currentDate}</li>
                <li>Weather</li>
            </Ul>
        </MiscContainer>
    );
};

export default MiscHeader;
