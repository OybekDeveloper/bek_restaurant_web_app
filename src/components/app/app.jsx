import { Route, Routes } from "react-router-dom"
import About from "../about/about"
import './app.css'
import Navbar from "../navbar/navbar"
import Comments from "../comments/comments"
import Foods from "../foods/foods"
import Menu from "../menu/menu"
const App = () => {
    return (
        <div className="app container mb-[10px] ">
            <Navbar />
            <div className="routes container mx-auto px-4 m-0 p-0">
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/comments" element={<Comments />} />
                    <Route path="/foods/:id" element={<Foods />} />
                </Routes>
            </div>
        </div>
    )
}

export default App