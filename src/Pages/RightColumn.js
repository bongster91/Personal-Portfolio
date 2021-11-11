import Opinions from "../Components/Opinions";
import EditorPicks from "../Components/EditorPicks";
import Horoscope from "../Components/Horoscope";
import RightSideMiscAPI from "../Components/RightSideMiscAPI";
import CreditForSources from "../Components/CreditForSources";
import styled from "styled-components";

const RightSection = styled.section`
    grid-column: 10/13;
    grid-row: 4/11;
    justify-content: center;
    border-left: 2px solid black;
    padding: 20px;

    @media screen and (max-width: 700px) {
        grid-row: 7/9;
        grid-column: 1/13;
        border-left: none;
    }
`

function RightColumn() {
    return (
        <RightSection>
            <EditorPicks />
            <Opinions />
            <Horoscope />
            <RightSideMiscAPI />
            <CreditForSources />
        </RightSection>
    );
};

export default RightColumn;
