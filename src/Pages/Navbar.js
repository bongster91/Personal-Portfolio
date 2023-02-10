import styled from 'styled-components';

const Nav = styled.nav`
    max-width: 1300px;
    background-color: white;
    border-bottom: 2px solid black;
    grid-column: 1/13;
    grid-row: 1;
    align-items: center;
    position: fixed;
    margin: auto;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1;

    @media screen and (max-width: 700px) {
        grid-column: 1/10;
    }
`

const Ul = styled.ul`
    list-style: none;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    justify-content: space-evenly;

    a {
        text-decoration: none;
        color: black;
    };

    a:hover {
        color: darkgoldenrod;
    };
`


function Navbar() {
    return (
        <Nav>
            <Ul>
                <li><a href="#bio">Bio</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href='#games'>Games</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </Ul>
        </Nav>
    );
};

export default Navbar;
