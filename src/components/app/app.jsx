import { Route, Routes } from "react-router-dom"
import Menu from "../menu/menu"
import About from "../about/about"
import './app.css'
import Navbar from "../navbar/navbar"
import Comments from "../comments/comments"
import Foods from "../foods/foods"
const App = () => {
    return (
        <div className="app container ">
            <Navbar />
            <div className="routes container mx-auto px-4">
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Comments />} />
                    <Route path="/foods" element={<Foods />} />
                </Routes>
            </div>
        </div>
    )
}

export default App