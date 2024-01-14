import { Route, Routes } from "react-router-dom"
import Menu from "../menu/menu"
import About from "../about/about"
import Comments from "../comments/comments"
import Navbar from "../navbar/navbar"
import './app.css'

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="routes">
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Comments />} />
                </Routes>
            </div>
        </div>
    )
}

export default App