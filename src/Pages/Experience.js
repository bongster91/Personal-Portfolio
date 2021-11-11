import styled from "styled-components";

const ExpContainer = styled.section`
    grid-row: 10/11;
    grid-column: 1/10;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 10px;

    h2 {
        font-style: italic;
        border-bottom: 1px solid black;
    }

    .pursuit {
        grid-row: 1/7;
        grid-column: 1/3;
        border-right: 1px solid #DADCE0;
        padding 5px;
    }

    .torch {
        grid-row: 1/7;
        grid-column: 3/5;
        border-right: 1px solid #DADCE0;
        padding: 5px;
    }

    .partners {
        grid-row: 1/7;
        grid-column: 5/8;
        padding: 5px;
    }
`

function Experience() {
    return (
        <ExpContainer id="experience">
            <section className="pursuit">
                <h2>Experience</h2>
                <h4>Pursuit</h4>

                <p>2020 - 2021</p>
                <span>Fellow at Pursuit, an intensive 12-month, Google-funded, project based software engineering fellowship. Curriculum provides hands-on experience with JavaScript, HTML, CSS, Node, Express, React/Redux, PostgresSQL, APIs, GitHub, Data Structures, Algorithms, sprints, Agile, code reveiws and pair programming.</span>
            </section>

            <section className="torch">
                <h4>Torch & Crown, Malibu Farm, Momofuku</h4>

                <p>2018 - 2021</p>
                <span>
                    Being part of the opening team member for each new location strengthened my adaptability, collaboration, communication, fortitude and patience. No industry has fortified my conviction that teamwork and diligence are a necessity, more than the hospitality industry. Sacrifices? Made. Spirit? Tested. Spicy? Always.
                </span>
            </section>

            <section className="partners">
                <h4>Partners Coffee Roasters, Doughnut Plant</h4>
                
                <p>2016 - 2018</p>
                <span>Honestly, I applied to Partners Coffee Roasters and Doughnut Plant because I'm a coffee-addict and I love doughnuts. BUT, this was my introduction into learning, tasting and breathing specialty coffee and I can never go back. Partners(previously called Toby's Estate) smacked me silly with their blueberry-bomb-pour-overs and chocolately-velvety-espresso...and now I'm a spoiled coffee convert.</span>
            </section>
        </ExpContainer>
    );
};

export default Experience;
