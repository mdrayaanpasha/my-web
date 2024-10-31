import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Research from "./research"
import Teaching from "./teaching"
import Blogs from "./blogs"
import Work from "./work"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/research" element={<Research/>}/>
                <Route path="/teaching" element={<Teaching/>}/>
                <Route path="/blogs" element={<Blogs/>}/>
                <Route path="/work" element={<Work/>}/>
            </Routes>
        </BrowserRouter>
    )
}