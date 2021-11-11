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

            <img src="http://placekitten.com/100/100" alt="kitten-placeholder"/>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sequi dolore, alias deleniti animi ipsum. Nulla nemo quis minima inventore quaerat sit voluptatem iure reiciendis doloribus consequuntur, possimus maiores cumque.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sequi dolore, alias deleniti animi ipsum. Nulla nemo quis minima inventore quaerat sit voluptatem iure reiciendis doloribus consequuntur, possimus maiores cumque.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sequi dolore, alias deleniti animi ipsum. Nulla nemo quis minima inventore quaerat sit voluptatem iure reiciendis doloribus consequuntur, possimus maiores cumque.</p>
        </EditorPick>
    );
};

export default EditorPicks;
