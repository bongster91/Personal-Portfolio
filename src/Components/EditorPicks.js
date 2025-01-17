import styled from "styled-components";

const EditorPick = styled.section`
    border-bottom: 1px solid #DADCE0;
    grid-row: 4/6;

    h3 {
        font-style: italic;
        border-bottom: 1px solid black;
    }
`

function EditorPicks() {
    return (
        <EditorPick>
            <h3>Editor's Picks</h3>

            <p>My journey began years ago when I was trying to set cute/cool backgrounds for my MySpace and Neopets accounts. I would geek out about the color and design while trying to figure out what HTML and CSS I was reading. That same geekiness led me to figure out cheats, tips and tricks with the games I would play. I would end up searching and doing math to attain the optimal build of an in-game character, gain resources and build character stats efficiently.</p>

            <p>As I've gained work experience as a barista, bartender and software engineer, one thing is certain. I love to create. Literally anything. I love making drinks, garnishing them, making latte art and creating websites and applications. Creation gives me mental stimulation and keeps me present. I love making things from the ground up and that feeling of accomplishment and pride of my finished product is unmatched.</p>

            <p>Technologies I'm interested in:</p>
            <ul>
                <li>Rust</li>
                <li>GraphQL</li>
                <li>Python</li>
                <li>MongoDB</li>
                <li>Jenkins</li>
                <li>D3</li>
                <li>Kubernetes</li>
                <li>AWS</li>
                <li>Docker</li>
                <li>C++</li>
                <li>AI/Machine Learning</li>
            </ul>
        </EditorPick>
    );
};

export default EditorPicks;
