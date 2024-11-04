import React, { useState } from "react";
import "../css/home.css";
import Nav from "./nav";
import grdImg from "../imgs/grd-des.png";

export default function Work() {
    const [openDialog, setOpenDialog] = useState(null);

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
            link: "https://github.com/mdrayaanpasha/MIT-DAA/blob/main/route.py"
        },
        {
            id: 3,
            title: "ORGANIZING COLLEGE BUNKS",
            imgSrc: "https://trackatt.vercel.app/assets/cover-home-D_iAjG5N.jpeg",
            tags: ["ReactJs", "Algorithms"],
            description: "Developed a tool for students to achieve optimal attendance by selecting classes strategically.",
            link: "https://trackatt.vercel.app/"
        },
        {
            id: 4,
            title: "E-COMMERCE MERN",
            imgSrc: "https://solacecraft.co.in/assets/1-DCKddiiN.png",
            tags: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs"],
            description: "Full-stack MERN e-commerce website for Solace Craft, featuring authentication, ordering, and payment functionalities.",
            link: "https://solacecraft.co.in/"
        },
        {
            id: 5,
            title: "E-COMMERCE (PHP-SQL)",
            imgSrc: "https://mdrayaanpasha.github.io/projects/imgs/pritts.jpg",
            tags: ["PHP", "SQL", "JS", "HTML", "CSS"],
            description: "A fictional e-commerce site for Pritchett's Closets, complete with authentication, cart, and ordering features.",
            link: "https://github.com/mdrayaanpasha/pritchetts"
        },
        {
            id: 6,
            title: "MERN INITIALIZER",
            imgSrc: "https://mdrayaanpasha.github.io/mern-init.jpg",
            tags: ["Automation", "Algorithms", "C"],
            description: "C program to quickly scaffold a MERN project with boilerplate code, directory structure, and GitHub integration.",
            link: "https://github.com/mdrayaanpasha/MERN-INIT"
        },
        {
            id: 7,
            title: "SERVICE MARKETPLACE",
            imgSrc: "https://mdrayaanpasha.github.io/projects/imgs/market-place.jpeg",
            tags: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs"],
            description: "A service marketplace platform for professionals (doctors, teachers, lawyers) featuring appointment scheduling and authentication.",
            link: "https://github.com/mdrayaanpasha/finder"
        },
        // Additional projects can be added here...
    ];

    const handleOpenDialog = (id) => setOpenDialog(id);
    const handleCloseDialog = () => setOpenDialog(null);

    return (
        <>
            <Nav></Nav>
            <main>
                <p>Insights & Findings.</p>
                <h1 className="main-heading" style={{ marginTop: "0" }}>RE-IMAGINING DATA STRUCTURES.</h1>
            </main>
            
            <section className="craft">
                {projects.map((project) => (
                    <React.Fragment key={project.id}>
                        <div className="craft-card" id={project.id % 2 !== 0 ? "rev-wrap" : ""}>
                            {project.id % 2 === 0 ? 
                            <div className="neumorphic-container">
                            <img src={project.imgSrc} alt={project.title} />
                            </div>
                            : null}
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
                            {project.id % 2 !== 0 ?
                            <div className="neumorphic-container">
                             <img src={project.imgSrc} alt={project.title} />
                             </div> : null}
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
        </>
    );
}
