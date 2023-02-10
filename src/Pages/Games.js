import React from 'react';
import styled from "styled-components";
import notWordle from '../Assets/not-wordle.png';

const GamesContainer = styled.section`
    border-bottom: 2px solid black;
    grid-row: 9/10;

    .game-container {
        max-width: 100%;
        justify-content: center;
        align-items: center;
    }

    .game-pic {
        max-width: 100%;
        height: 200px;
        width: 200px;
        padding: 5px;
        border-bottom: 1px solid #DADCE0;
    }

    @media screen and (max-width: 700px) {
        grid-row: 7;
        grid-column: 1/13;
    }

`

function Games() {
    return (
        <GamesContainer id='games'>
            <h2>Games</h2>

            <span className='game-container'>
                <a href='https://sunny-salamander-de5cb6.netlify.app/'>Not Wordle</a>
                <p>Definitely not unlimited Wordle</p>
                
                <a href='https://github.com/bongster91/not-wordle'>
                    <img className="game-pic"  src={notWordle} alt="not wordle screenshot" />
                </a>
                <br />
            </span>

        </GamesContainer>
    );
};

export default Games;