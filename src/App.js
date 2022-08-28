import './App.css'
import { Routes, Route, HashRouter } from 'react-router-dom'
import NavBar from './components/appbar/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </HashRouter>
        </ThemeProvider>
    )
}

export default App
