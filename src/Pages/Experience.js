import styled from "styled-components";

const ExpContainer = styled.section`
    grid-row: 10/11;
    grid-column: 1/10;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    border-bottom: 2px solid black;

    h2 {
        font-style: italic;
        border-bottom: 1px solid black;
    }

    img {
        width: 150px;
        height: 80px;
        float: right;
        padding: 5px;
    }

    .exp-section {
        padding: 5px;
    }

    .most-recent {
        grid-row: 1/2;
        grid-column: 1/7;
        padding: 5px;
        border-bottom: 1px solid #DADCE0;
    }

    .pursuit {
        grid-row: 2/3;
        grid-column: 1/3;
        border-right: 1px solid #DADCE0;
        padding: 5px;
    }

    .torch {
        grid-row: 2/3;
        grid-column: 3/5;
        border-right: 1px solid #DADCE0;
        padding: 5px;
    }

    .partners {
        grid-row: 2/3;
        grid-column: 5/7;
        padding: 5px;
    }

    @media screen and (max-width: 700px) {
        grid-row: 5/6;
        grid-column: 1/12;
        border-bottom: 1px solid black;
    }
`

function Experience() {
    return (
        <ExpContainer id="experience">
            <section className="most-recent exp-section">
                <h2>Experience</h2><br/>
                <h4>Blackstone</h4>

                <p>2022 - current</p><br />
                <span>
                    I am part of Blackstone Technology & Innovations (BXTI), the technology team at the core of each of Blackstone's businesses and new growth initiatives. Our team works to build the next generation of systems that manage risk, create efficiency, and improve transparency within the firm and across our broad community of investors and portfolio companies.

                    At BXTI, I have had the opportunity to work on projects that are changing the Alternative Asset Management industry. I work with other engineers and business analysts to design, build, deploy, and support Blackstone Innovations' suite of applications. Our custom-built applications are mostly developed in Python or C# on the .NET platform with JavaScript/React/Node.js and hosted within AWS. I have had the opportunity to work with cloud native container-based and serverless architectures and build robust data pipelines connecting to Snowflake for data analysis and visualization.
                </span>
            </section>

            <section className="pursuit exp-section">
                <h4>Pursuit</h4>

                <p>2020 - 2021</p><br />
                <span>
                    Fellow at Pursuit, an intensive 12-month, Google-funded, project based software engineering fellowship. Curriculum provides hands-on experience with JavaScript, HTML, CSS, Node, Express, React/Redux, PostgresSQL, APIs, GitHub, Data Structures, Algorithms, sprints, Agile, code reveiws and pair programming.
                </span>
            </section>

            <section className="torch exp-section">
                <h4>Torch & Crown, Malibu Farm, Momofuku</h4>

                <p>2018 - 2021</p><br />
                <span>
                    Being part of the opening team member for each new location strengthened my adaptability, collaboration, communication, fortitude and patience. No industry has fortified my conviction that teamwork and diligence are a necessity, more than the hospitality industry. Sacrifices? Made. Spirit? Tested. Spicy? Always.
                </span>
            </section>

            <section className="partners exp-section">
                <h4>Partners Coffee Roasters, Doughnut Plant</h4>
                
                <p>2016 - 2018</p><br />
                <span>
                    I applied to Partners Coffee Roasters and Doughnut Plant because I'm a coffee-addict and I love doughnuts. BUT, this was my introduction into learning, tasting and breathing specialty coffee and I can never go back. Partners(previously called Toby's Estate) smacked me silly with their blueberry-bomb-pour-overs and chocolately-velvety-espresso...and now I'm a spoiled coffee convert.</span>
            </section>
        </ExpContainer>
    );
};

export default Experience;
