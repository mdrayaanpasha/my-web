import Nav from "./nav"
import "../css/teaching.css"
export default function Teaching(){
    return(
        <>
            <Nav></Nav>
            <main>
                <p>Spreading MATH & CS</p>
                <h1 className="main-heading">Amplifying the role of Math and CS.</h1>
            </main>
            <section className="container">
                
                <div className="teaching-card">
                    <img src="https://mdrayaanpasha.github.io/teaching/imgs/cs.jpg" alt="" />
                    <div className="description-card">
                        <center>
                            <h2 className="heading" style={{ marginBottom:"5vh",textDecoration: "overline", textDecorationThickness: "2px", textDecorationColor: "black" }}>
                            Computer Science
                            </h2>
                        </center>
                        <p style={{textAlign:"center",color:"grey"}}>I introduce the world of programming, especially OOP with Java for freshmen & sophomores studying in the ICSE curriculum in their high school. My goal is to spark algorithmic thinking.</p>
                    </div>
                </div>

                <hr style={{width:"80vw",color:"grey","marginTop":"10vh"}}/>


                <div className="teaching-card rev">
                    <div className="description-card">
                        <center>
                            <h2 className="heading" style={{ marginBottom:"5vh",textDecoration: "overline", textDecorationThickness: "2px", textDecorationColor: "black" }}>
                            Mathematics
                            </h2>
                        </center>
                        <p style={{textAlign:"center",color:"grey"}}>I teach a wide range of Math topics from Pre-calculas, geometry, statistics, and probability, tailored to meet the needs of students across ICSE, CBSE, and KSEAB systems.</p>
                    </div>
                    <img src="https://mdrayaanpasha.github.io/teaching/imgs/math.jpg" alt="" />

                </div>



            </section>
        </>
    )
}