import Nav from "./nav";
import "../css/about.css";

export default function About(){
    return(
        <>
        <Nav></Nav>
        <main>
            <h1>Mohammed Rayaan Pasha</h1>
            <center>
            <p>I'm a Computer Applications student @ St. Joseph's University Bengaluru, I'm passionate about design & development of algorithms and web.</p>
            </center>

         
            <div className="cards">
            <details>
                <summary><span>Background</span> <span>&#x2b; </span></summary>
                <div class="content">
                Mohammed Rayaan Pasha is a Computer Applications student at St. Joseph's University, Bengaluru, with a deep passion for designing algorithms and web development. He combines his academic pursuits with practical experience in full-stack development and is dedicated to building efficient, user-centered digital solutions.
                </div>
            </details>
            <hr style={{width:"80vw",color:"grey"}}/>

            <details>
                <summary><span>Code Philosophy</span> <span>&#x2b; </span></summary>
                <div class="content">
                For me, coding is about balancing innovation with simplicity, ensuring that each piece of code serves a purpose without adding unnecessary complexity.
                </div>
            </details>
            <hr style={{width:"80vw",color:"grey"}}/>



            <details>
                <summary><span>Things I Love</span> <span>&#x2b; </span></summary>
                <div class="content">
                I love diving deep into algorithms, exploring their intricacies and finding the most efficient ways to solve complex problems. Web development excites me, especially building seamless, interactive experiences using technologies like MongoDB, Express.js, React.js, and Node.js (MERN). Beyond code, I have a passion for teaching, sharing knowledge, and helping others understand the beauty of math and computer science.
                </div>
            </details>
            <hr style={{width:"80vw",color:"grey"}}/>


            </div>
        </main>
        </>
    )
}