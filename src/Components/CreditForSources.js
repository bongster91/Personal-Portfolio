import styled from "styled-components";

const Credit = styled.section`
    border-top: 1px solid black;
    grid-row: 10/11;

    h3 {
        font-style: italic;
        border-bottom: 1px solid black;
    }

    @media screen and (max-width: 700px) {
       grid-row: 7;
       grid-column: 1/12;
    }
`

function CreditForSources() {
    return (
        <Credit>
            <h3>Credit for icons</h3>

            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>

            <div>Icons made by 
                <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>

            <div>
                <a href="https://www.aprimo.com/marketplace/microsoft-office/">MS Office</a>
                <a href="https://www.pngfind.com/download/immiibh_react-js-transparent-logo-hd-png-download/">JS</a>

                <div>Icons made by <a href="https://www.flaticon.com/authors/juicy-fish" title="juicy_fish">juicy_fish</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

                <div>Icons made by <a href="https://www.flaticon.com/authors/phatplus" title="phatplus">phatplus</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>

            <div>
                <a href="https://www.flaticon.com/free-icons/typescript" title="typescript icons">Typescript icons created by Freepik - Flaticon</a>

                <a href="https://www.flaticon.com/free-icons/python" title="python icons">Python icons created by Freepik - Flaticon</a>

                <a href="https://www.flaticon.com/free-icons/docker" title="docker icons">Docker icons created by Freepik - Flaticon</a>

                <a href="https://www.flaticon.com/free-icons/xd" title="xd icons">Xd icons created by Maniprasanth - Flaticon</a>

                <a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Freepik - Flaticon</a>
                
                <a href="https://www.flaticon.com/free-icons/microsoft" title="microsoft icons">Microsoft icons created by Freepik - Flaticon</a>
            </div>
        </Credit>
    );
};

export default CreditForSources;