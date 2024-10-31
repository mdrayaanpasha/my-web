import { useState } from "react";
import "../css/nav.css";

export default function Nav({ page }) {
    const [dialogOpen, setDialogOpen] = useState(false);

    // Function to toggle the dialog
    const toggleDialog = () => setDialogOpen(!dialogOpen);

    return (
        <>
            <nav>
                <h1 onClick={() => (window.location.href = "./")}>Rayaan Pasha</h1>
                <ul>
                    <li id={page === "research" ? "nav-page-a" : null}>
                        <a href="./research">Research</a>
                    </li>
                    <li id={page === "work" ? "nav-page-a" : null}>
                        <a href="./work">Work</a>
                    </li>
                    <li id={page === "teaching" ? "nav-page-a" : null}>
                        <a href="./teaching">Teaching</a>
                    </li>
                    <li id={page === "blogs" ? "nav-page-a" : null}>
                        <a href="./about">About</a>
                    </li>
                    <li id={page === "blogs" ? "nav-page-a" : null}>
                        <a href="./blogs">Blogs</a>
                    </li>
                </ul>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="60px" 
                    viewBox="0 -960 960 960" 
                    width="60px" 
                    fill="#808080" 
                    onClick={toggleDialog} // Open dialog on click
                    style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
                >
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                </svg>
            </nav>

            {/* Dialog overlay */}
            {dialogOpen && (
                <div className="mobile-nav" onClick={toggleDialog}>
                    <div className="mobile-nav" onClick={(e) => e.stopPropagation()}>
                        <h1>Rayaan Pasha</h1>
                        <ul>
                            <li><a href="./research">Research</a></li>
                            <hr style={{ width: "99vw", color: "grey",  }} />

                            <li><a href="./work">Work</a></li>
                            <hr style={{ width: "99vw", color: "grey",  }} />

                            <li><a href="./teaching">Teaching</a></li>
                            <hr style={{ width: "99vw", color: "grey"}} />

                            <li><a href="./blogs">Blogs</a></li>
                            <hr style={{ width: "99vw", color: "grey" }} />

                        </ul>
                        <button onClick={toggleDialog}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}
