import './App.css'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


function App() {
    return (
        <HashRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </HashRouter>
    )
}

export default App
