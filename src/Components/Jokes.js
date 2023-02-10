import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const JokesContainer = styled.section`

    h3 {
        font-style: italic;
        border-bottom: 1px solid black;
    }

    button {
        border-radius: 5px;
        height: 30px;

    }
`

function Jokes() {
    const [ joke, setJoke ] = useState({});

    useEffect(() => {
      fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.json())
        .then(data => setJoke(data));
    }, []);

    function getNewJoke() {
        fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.json())
        .then(data => setJoke(data));
    };

    return (
        <JokesContainer>
            <h3>Jokes for Dayss</h3>
            <button onClick={getNewJoke}>Another Joke?</button>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
        </JokesContainer>
    );
};

export default Jokes;