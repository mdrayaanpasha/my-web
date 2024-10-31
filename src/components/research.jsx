import Nav from "./nav"
import "../css/research.css"

export default function Research(){
    return(
        <>
        <Nav></Nav>
        <main>
            <p>Insights & Findings.</p>
            <h1 className="main-heading">RE-IMAGINING DATA STRUCTURES.</h1>
        </main>
        <center>
            <h2 className="heading" style={{textDecoration:"overline",fontWeight:"normal"}}>Recent Research</h2>
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
        </>
    )
}