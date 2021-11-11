import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #555555;
    color: white;
    text-align: center;
    padding: 5px;
    font-size: 14px;
    border-radius: 8px;
    transition-duration: 0.4s;
    height: 50px;
    width: 200px;
    font-size: 16px;
    font-family: serif;

    button:hover {
        background-color: darkgoldenrod;
    }
`

const Recipe = styled.section`
    grid-column: 2/3;
    grid-row: 4/5;

    h3 {
        font-style: italic;
        border-bottom: 1px solid black;
    }
`

const Ul = styled.ul`
    list-style: none;
`

function BioRecipe() {
    const [ ingredients, setIngredients ] = useState(false);
    const toggleRecipe = () => !ingredients ? setIngredients(true) : setIngredients(false)
    
    return (
        <Recipe>
            <h3>Recipe of the Day: Grace Bong</h3>
            <Button onClick={toggleRecipe}>Click to Toggle Recipe</Button>

            {ingredients ? 
                <Ul className="ingredients ul">
                    <li>1 slab of Korean American</li>
                    <li>1 jug of LGBTQIA+</li>
                    <li>1 julienned female</li>
                    <li>1 sprinkling of bartender/barista</li>
                    <li>1 dash of wittiness</li>
                </Ul>
                : null
            }

            <p>Take your slab of Korean American American, slather on that LGBT+ and bake for 40min at 400F. Combine your julienned female with some bartender/barista and a dash of wittiness into a large bowl and toss. Serve your slab hot and sizzling with a side of cool seasoned julienne.</p>
        </Recipe>
    );
};

export default BioRecipe;
