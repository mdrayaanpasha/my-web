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
                    height="70px" 
                    viewBox="0 -960 960 960" 
                    width="70px" 
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
                        <div className="mob-nav-header">
                        <h1>Rayaan Pasha</h1>
                        <button onClick={toggleDialog}><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#808080"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/></svg></button>
                        </div>
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
                    </div>
                </div>
            )}
        </>
    );
}
