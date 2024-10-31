import "../css/blogs.css";
import Nav from "./nav";

export default function Blogs() {
    return (
        <>
            <Nav />
            <main>
                <p>ALGORITHMS & MATH</p>
                <h1 className="main-heading">Insights & Learnings of My Journey in CS</h1>
            </main>
            <center>
                <h2 className="heading" style={{marginTop:"10vh", marginBottom:"2vh",textDecoration: "overline", textDecorationThickness: "2px", textDecorationColor: "black" }}>
                Design & Analysis of Algorithms
                </h2>
            </center>
            <div className="blog-container">
                <div className="blog-card">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*xRaJpBeWLND5FsvCjRw7NQ.png" alt="" />
                    <h2>Distributed Algorithms</h2>
                    <p>Discover how synchronous distributed algorithms can help you tackle complex challenges.</p>
                    <br />
                    <a href="https://medium.com/@mohdrayaanpasha/synchronous-distributed-algorithms-e1398a04fd3a" className="btn-read">Read Now &rarr;</a>
                </div>

                <div className="blog-card">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*kGRz_-TuaNLA_J7Md-lnjA.png" alt="" />
                    <h2>Approximation Algorithms</h2>
                    <p>Learn approximation algorithms for solving Set Partition, Vertex Cover with efficient solutions.</p>
                    <br />
                    <a href="https://medium.com/@mohdrayaanpasha/surviving-the-algorithm-apocalypse-approximation-algorithms-3d7eb90c2d6b" className="btn-read">Read Now &rarr;</a>
                </div>

                <div className="blog-card">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*-Q7HKeDLZAwXiNwMyWl8qg.png" alt="" />
                    <h2>Network Flow Algorithms</h2>
                    <p>Enhance Ford-Fulkerson algorithm with DFS to find augmenting paths in network flow graphs, improving maximum flow problem solutions.</p>
                    <br />
                    <a href="https://medium.com/@mohdrayaanpasha/incremental-improvement-in-network-flow-algorithms-ford-fulkerson-with-dfs-e15c117cf077" className="btn-read">Read Now &rarr;</a>
                </div>

                <div className="blog-card">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ZX3hdAawPJqRq0kmwN264A.png" alt="" />
                    <h2>Advanced DP</h2>
                    <p>Explore advanced dynamic programming techniques with MIT's expert guidance and solve complex problems like Longest Sub Palindrome and Coin Game!</p>
                    <br />
                    <a href="https://medium.com/@mohdrayaanpasha/advance-dynamic-programming-with-mit-18c110cc32a7" className="btn-read">Read Now &rarr;</a>
                </div>
            </div>



            <center>
                <h2 className="heading" style={{marginTop:"10vh", marginBottom:"2vh",textDecoration: "overline", textDecorationThickness: "2px", textDecorationColor: "black" }}>
                    Programming for the puzzled
                </h2>
            </center>


            <div className="blog-container">
    <div className="blog-card">
        <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*_fmNHKBN28Vq1IDH.png" alt="Puzzle 1: Are we conformed?" /> 
        <h2>Puzzle 1: Are We Conformed?</h2> 
        <p>Solve the 'Hat Orientation' puzzle with Prof. Srini Devadas and discover three efficient solutions to align hats in a row!</p> 
        <br />
        <a href="https://medium.com/@mohdrayaanpasha/puzzle-1-are-we-conformed-3b3c6aed37c2" className="btn-read">Read Now &rarr;</a> 
    </div>
    
    <div className="blog-card">
        <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*tZxWXWpinNcBOjiV.png" alt="Puzzle 2: The Best Time to Party" /> 
        <h2>Puzzle 2: The Best Time to Party</h2> 
        <p>Learn to develop an  efficient algorithms to maximize celebrity presence in a given hour.</p> 
        <br />
        <a href="https://medium.com/@mohdrayaanpasha/puzzle-2-the-best-time-to-party-e93f5755113d" className="btn-read">Read Now &rarr;</a> 
    </div>
    
    <div className="blog-card">
        <img src="https://miro.medium.com/v2/resize:fit:962/format:webp/0*t8ThXA-K7QOV3jK7.png" alt="Puzzle 3: Can I read minds now?" /> 
        <h2>Puzzle 3: Can I Read Minds Now?</h2> 
        <p>Crack the mind-reading puzzle! Learn the algorithm to guess the 5th card from a deck of 52 cards.</p> 
        <br />
        <a href="https://medium.com/@mohdrayaanpasha/puzzle-3-can-i-read-minds-now-dbc8fcfe3f7c" className="btn-read">Read Now &rarr;</a> 
    </div>
    
    <div className="blog-card">
        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*iv8Vo-aye3l3lVp1.png" alt="Puzzle 5 & 6: PLEASE STAY QUEEN!" /> 
        <h2>Puzzle 5 & 6: PLEASE STAY QUEEN!</h2> 
        <p>Solve the N Queens puzzle! Learn backtracking & optimize solutions to place N queens on a chessboard.</p> 
        <br />
        <a href="https://medium.com/@mohdrayaanpasha/puzzle-5-6-please-stay-queen-e681840fb8f0" className="btn-read">Read Now &rarr;</a> 
    </div>
    
    <div className="blog-card">
        <img src="https://miro.medium.com/v2/resize:fit:1054/format:webp/0*o-zKV3buU4XrvLQ4.png" alt="Puzzle 7: Tile That Courtyard Please" /> 
        <h2>Puzzle 7: Tile That Courtyard Please</h2> 
        <p>Learn to tile a 2<sup>n</sup> x 2<sup>n</sup> courtyard with trominoes! Discover the recursive algorithm and code implementation.</p> 
        <br />
        <a href="https://medium.com/@mohdrayaanpasha/puzzle-7-tile-that-courtyard-please-d0aa0086d93e" className="btn-read">Read Now &rarr;</a> 
    </div>
    
    <div className="blog-card">
        <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*eNMxCzv0gpxOWhGj.png" alt="Puzzle 10: A weekend to remember!" /> 
        <h2>Puzzle 10: Weekend to Remember!</h2> 
        <p>Learn to schedule parties without conflicts with DFS algo to separate guests who don't get along.</p> 
        <br />
        <a href="https://medium.com/@mohdrayaanpasha/puzzle-10-a-weekend-to-remember-d9e4e8874c8d" className="btn-read">Read Now &rarr;</a> 
    </div>
</div>

<center>
                <h2 className="heading" style={{marginTop:"10vh", marginBottom:"2vh",textDecoration: "overline", textDecorationThickness: "2px", textDecorationColor: "black" }}>
                    Math For CS
                </h2>
            </center>

<div className="blog-container">
    <div className="blog-card">
        <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Diq92sgQWwaKZIlzvF5RCg.png" alt="Counting - I" /> 
        <h2>Counting - I</h2> 
        <p>Explore counting principles, functions, relations, and pigeonhole theory with engaging examples.</p> 
        <br />
        <a href="https://medium.com/@mohdrayaanpasha/counting-i-math-for-cs-6c22c6c44641" className="btn-read">Read Now &rarr;</a> 
    </div>
    
    <div className="blog-card">
        <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*m-k8MUhbzJ_1xPX6pSjF2A.png" alt="Monty Hall & Probability" /> 
        <h2>Monty Hall & Probability</h2> 
        <p>Explore the Monty Hall problem, probability of winning and losing through sample spaces and probability functions.</p> 
        <br />
        <a href="https://medium.com/@mohdrayaanpasha/mounty-hall-probability-e825baff0667" className="btn-read">Read Now &rarr;</a> 
    </div>
    
    <div className="blog-card">
        <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*-93tc2bZVE1ZX0EeM0kizQ.png" alt="Conditional Probability" /> 
        <h2>Conditional Probability</h2> 
        <p>Discover independence in probability! Learn how events can be independent or dependent.</p> 
        <br />
        <a href="https://medium.com/@mohdrayaanpasha/conditional-probability-f43d81657778" className="btn-read">Read Now &rarr;</a> 
    </div>
    
    <div className="blog-card">
        <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*oViMQ-08W1iXBv9UMkdjnQ.png" alt="Independence in Probability" /> 
        <h2>Independence in Probability</h2> 
        <p>Discover how events can be connected or separate through real-life examples.</p> 
        <br />
        <a href="https://medium.com/@mohdrayaanpasha/independence-in-probability-03878845067a" className="btn-read">Read Now &rarr;</a> 
    </div>
</div>


        </>
    );
}
