import React from 'react'
import { NavLink } from 'react-router-dom'
function Home() {
    return (
        <section className="home" id="home">
            <div className="hero-content pad">
                <h1 className="hero-content__title">Hey, I'm Andrè Mæland</h1>
                <p className="hero-content__subtitle">
                    Full-Stack Web Developer
                </p>
                <p className="hero-content__subtitle2">
                    Loving all things
                    <span className="subtitle2-bracket">&#123;</span>
                    <span className="subtitle2-code">code</span>
                    <span className="subtitle2-bracket">&#125;</span>
                </p>
                <NavLink
                    className="hero-content__project-button"
                    to="/projects"
                >
                    Projects
                </NavLink>
            </div>
        </section>
    )
}

export default Home
