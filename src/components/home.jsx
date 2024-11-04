import React, { useState } from "react";
import "../css/home.css";
import Nav from "./nav";
import grdImg from "../imgs/grd-des.png";
import christ from "../imgs/christ.jpg";
import nh from "../imgs/new-horizon.jpg";

export default function Home() {
    // State hooks for each dialog
    const [openDialog, setOpenDialog] = useState(null);

    // Dialog content can be mapped based on project info
    const projects = [
        {
            id: 1,
            title: "COMBINATORIAL GRADIENT DESCENT ALGORITHM",
            imgSrc: grdImg,
            tags: ["ML", "Algorithms", "Data Structures"],
            description: "A custom combinatorial gradient descent algorithm used to predict exoplanet habitability factors, coded from scratch with no dependencies.",
            link: "https://colab.research.google.com/drive/1M6tcF73M5aKoRtrVqyYwJf8dIZhTxCj4?usp=sharing",
            
        },
        {
            id: 2,
            title: "SHIP ROUTE OPTIMIZATION ALGORITHM",
            imgSrc: "https://mdrayaanpasha.github.io/projects/imgs/ship-algo.jpg",
            tags: ["Python", "Algorithms", "Data Structures"],
            description: "Enhanced Dijkstra's algorithm, factoring both risk and distance to optimize routes for major Indian ports.",
            link: "https://github.com/mdrayaanpasha/MIT-DAA/blob/main/route.py",
          
        },
        {
            id: 3,
            title: "Organizing College Bunks",
            imgSrc: "https://trackatt.vercel.app/assets/cover-home-D_iAjG5N.jpeg",
            tags: ["ReactJs", "Algorithms"],
            description: "Developed a tool for students to achieve optimal attendance by selecting classes strategically.",
            link: "https://trackatt.vercel.app/",
           
        },
        {
            id: 4,
            title: "E-COMMERCE MERN",
            imgSrc: "https://solacecraft.co.in/assets/1-DCKddiiN.png",
            tags: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs"],
            description: "Full-stack MERN e-commerce website for Solace Craft, featuring authentication, ordering, and payment functionalities.",
            link: "https://solacecraft.co.in",
          
        }
       
    ];

    // Handle opening and closing of dialogs
    const handleOpenDialog = (id) => setOpenDialog(id);
    const handleCloseDialog = () => setOpenDialog(null);

    return (
        <>
            <Nav />

            <main>
                <p>Web & Algorithm Developer</p>
                <h1 className="main-cover">Mohammed Rayaan Pasha</h1>
                <blockquote className="more-about-me">
                    <p>
                        <span style={{ fontSize: "4vh" }}>| </span> I Codify Ideas.{" "}
                        <a href="./about">More about me &rarr;</a>
                    </p>
                </blockquote>
            </main>

            <center>
                <h2
                    className="heading"
                    style={{
                        marginBottom: "8vh",
                        textDecoration: "overline",
                        textDecorationThickness: "2px",
                        textDecorationColor: "black",
                    }}
                >
                    LATEST WORK
                </h2>
            </center>

            <section className="craft">
                {projects.map((project) => (
                    <React.Fragment key={project.id}>
                        
                        <div className="craft-card" id={project.id % 2 !== 0 ? "rev-wrap" : ""} >
                        {project.id % 2 === 0 ? <>
                            <div className="neumorphic-container">
                                <img src={project.imgSrc} alt={project.title} style={project.css ? project.css : null}/>
                            </div>
                        </>: 
                        null
                        }
                            <div className="card-des">
                                <h1>{project.title}</h1>
                                <div className="tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index}>{tag}</span>
                                    ))}
                                </div>
                                <center>
                                    <button onClick={() => handleOpenDialog(project.id)}>
                                        View Work
                                    </button>
                                </center>
                            </div>
                            {project.id % 2 !== 0 ? <>
                            <div className="neumorphic-container">
                            <img src={project.imgSrc} alt={project.title} style={project.css ? project.css : null}/>
                            </div>
                        </>: 
                        null
                        }
                        </div>


                        {openDialog === project.id && (
                            <div className="dialog-overlay">
                                <div className="d-nav">
                                <h2>{project.title}</h2>
                                <h2 id="cancel" onClick={handleCloseDialog}>❌</h2>
                                </div>
                                <div className="dialog-content">
                                    
                                    <img src={project.imgSrc} alt="" />
                                    <div className="di">
                                    <p dangerouslySetInnerHTML={{ __html: project.description }} />
                                    <button onClick={e=>window.open(project.link)}>Check out!</button>
                                    </div>
                                    
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </section>
                <center id="view-more" style={{marginTop:"10vh"}}><a href="./work">View more work <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="m298-262-56-56 121-122H80v-80h283L242-642l56-56 218 218-218 218Zm222-18v-80h360v80H520Zm0-320v-80h360v80H520Zm120 160v-80h240v80H640Z"/></svg></a></center>
                <hr style={{ width: "80vw", color: "grey", marginTop: "10vh" }} />


            {/* BLOGS SECTION */}
                <center>
                <h2
                    className="heading"
                    style={{
                        marginBottom: "8vh",
                        textDecoration: "overline",
                        textDecorationThickness: "2px",
                        textDecorationColor: "black",
                    }}
                >
                    LATEST EVENTS
                </h2>
            </center>

            <div className="blog-container">

                <div className="blog-card">
                        <img src={christ} alt="" />
                        <h2>1st Place API HACKATHON</h2>
                        <p>Honoured to have been part of my first hackathon at Christ University. And grateful to have won it. it was an incredible learning experience.</p>
                        <br />
                </div>

                <div className="blog-card">
                        <img src={nh} alt="" />
                        <h2>2 * First Place</h2>
                        <p>Honoured to have been part of paper-presentation and coding event at new horizon college and grateful to win it, it was yet another learning experience.</p>
                        <br />
                </div>


                <div className="blog-card">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*-Q7HKeDLZAwXiNwMyWl8qg.png" alt="" />
                    <h2>Network Flow Algorithms</h2>
                    <p>Enhance Ford-Fulkerson algorithm with DFS to find augmenting paths in network flow graphs.</p>
                    <br />
                    <a href="https://medium.com/@mohdrayaanpasha/incremental-improvement-in-network-flow-algorithms-ford-fulkerson-with-dfs-e15c117cf077" className="btn-read">Read Now &rarr;</a>
                </div>

                <div className="blog-card">
                    <img src="https://miro.medium.com/v2/resize:fit:962/format:webp/0*t8ThXA-K7QOV3jK7.png" alt="Puzzle 3: Can I read minds now?" /> 
                    <h2>Puzzle 3: Can I Read Minds Now?</h2> 
                    <p>Crack the mind-reading puzzle! Learn the algorithm to guess the 5th card from a deck of 52 cards.</p> 
                    <br />
                    <a href="https://medium.com/@mohdrayaanpasha/puzzle-3-can-i-read-minds-now-dbc8fcfe3f7c" className="btn-read">Read Now &rarr;</a> 
                </div>


                <div className="blog-card">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*m-k8MUhbzJ_1xPX6pSjF2A.png" alt="Monty Hall & Probability" /> 
                    <h2>Monty Hall & Probability</h2> 
                    <p>Explore the Monty Hall problem, probability of winning and losing through sample spaces and probability functions.</p> 
                    <br />
                    <a href="https://medium.com/@mohdrayaanpasha/mounty-hall-probability-e825baff0667" className="btn-read">Read Now &rarr;</a> 
                </div>


                <div className="blog-card">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*kGRz_-TuaNLA_J7Md-lnjA.png" alt="" />
                    <h2>Approximation Algorithms</h2>
                    <p>Learn approximation algorithms for solving Set Partition, Vertex Cover with efficient solutions.</p>
                    <br />
                    <a href="https://medium.com/@mohdrayaanpasha/surviving-the-algorithm-apocalypse-approximation-algorithms-3d7eb90c2d6b" className="btn-read">Read Now &rarr;</a>
                </div>

                <div className="blog-card">
                    <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*tZxWXWpinNcBOjiV.png" alt="Puzzle 2: The Best Time to Party" /> 
                    <h2>Puzzle 2: The Best Time to Party</h2> 
                    <p>Learn to develop an  efficient algorithms to maximize celebrity presence in a given hour.</p> 
                    <br />
                    <a href="https://medium.com/@mohdrayaanpasha/puzzle-2-the-best-time-to-party-e93f5755113d" className="btn-read">Read Now &rarr;</a> 
                </div>


                <div className="blog-card">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*-93tc2bZVE1ZX0EeM0kizQ.png" alt="Conditional Probability" /> 
                    <h2>Conditional Probability</h2> 
                    <p>Discover independence in probability! Learn how events can be independent or dependent.</p> 
                    <br />
                    <a href="https://medium.com/@mohdrayaanpasha/conditional-probability-f43d81657778" className="btn-read">Read Now &rarr;</a> 
                </div>
    
            </div>



            <hr style={{ width: "80vw", color: "grey", marginTop: "10vh" }} />



            {/* ================================================================== */}



            {/* research Work */}
                <center>
                    <h2
                        className="heading"
                        style={{
                            marginTop:"5vh",
                            marginBottom: "8vh",
                            textDecoration: "overline",
                            textDecorationThickness: "2px",
                            textDecorationColor: "black",
                        }}
                    >
                        LATEST FINDINGS
                    </h2>
                </center>


                <section className="recent">
                    <div className="card">
                        <div className="card-text">
                        <small style={{display:"flex",alignItems:"center"}}>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg> */}
                            <b>Paper</b> | Data Structures, Efficient CRUD | 2024</small>
                        <h1>Dynamic Pointer Based Binary Search Trees</h1>
                        <p>This research combines pointer machines and binary search trees for efficient data search, achieving O( 2 * ⌊ log queryNumber ⌋.</p>
                        </div>
                        <button onClick={e=>window.open("https://zenodo.org/records/13899127")}>Read Paper</button>
                    </div>
                </section>


                <hr style={{ width: "80vw", color: "grey", marginTop: "10vh" }} />


            {/* ================================================================== */}

            
            <center>
                <h2
                    className="heading"
                    style={{
                        marginTop: "10vh",
                        marginBottom: "8vh",
                        textDecoration: "overline",
                        textDecorationThickness: "2px",
                        textDecorationColor: "black",
                    }}
                >
                    Connect
                </h2>
                <div className="connect">
                    <h3 style={{ fontWeight: "normal", color: "grey" }}>
                        You can email me: <i>mohdrayaanpasha@gmail.com</i> or DM me on{" "}
                        <i>
                            <a href="https://linkedin.com/in/mdrayaanpasha">LinkedIn</a>
                        </i>
                    </h3>
                </div>
            </center>
        </>
    );
}
