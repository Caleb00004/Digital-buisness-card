import React from 'react'
import ReactDOM from 'react-dom'
import Info from "./components/Info"
import About from "./components/About"
import Interest from "./components/Interests"
import Footer from "./components/Footer"
import "./style.css"

function Main() {
    return (
        <div>
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Main />,document.getElementById('root'))