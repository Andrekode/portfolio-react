import React from 'react'
import portfolioSrc from '../assets/images/Projects/project-portfolio.png'
import fmCalcSrc from '../assets/images/Projects/project-fm-cal.png'
import toDoSrc from '../assets/images/Projects/project-todo.png'
import teamProjectChristmasSrc from '../assets/images/Projects/team-project-fjosniss-lussi.png'
import timeTrackingSrc from '../assets/images/Projects/project-fm-timetracking.png'

function Projects() {
    return (
        <section className="projects pad" id="projects">
            <div className="projects-head">
                <h2 className="project-head__title">Projects</h2>
                <p className="project-head__subtitle">
                    These are some of the projects I've done.
                </p>
            </div>

            <div className="projects-content">
                <div className="project">
                    <img
                        className="project__img"
                        src={portfolioSrc}
                        alt="Porfolio"
                    />
                </div>
                <div className="project-desc">
                    <h3 className="project-desc__title">Portfolio</h3>
                    <p className="project-desc__text">My portfolio</p>
                    <div className="project-lang">
                        <img
                            className="project-lang__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                            alt="Logo Html5"
                        />

                        <img
                            className="project-lang__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                            alt="Logo CSS"
                        />

                        <img
                            className="project-lang__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            alt="Logo JS"
                        />
                    </div>
                    <a
                        className="project-desc__link"
                        href="https://github.com/Andrekode/Portfolio"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </div>
                <div className="project">
                    <img
                        className="project__img"
                        src={fmCalcSrc}
                        alt="todo"
                    />
                </div>
                <div className="project-desc">
                    <h3 className="project-desc__title">
                        Frontend Mentor: Calculator
                    </h3>
                    <p className="project-desc__text">
                        Frontend-Mentor challenge done with React and styled
                        components. Responsive desktop/mobile
                    </p>
                    <div className="project-lang">
                        <img
                            className="project-lang__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                            alt="Logo JS"
                        />
                    </div>
                    <a
                        className="project-desc__link"
                        href="https://github.com/Andrekode/fm-calculator-app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                    <a
                        className="project-desc__link"
                        href="https://andrekode.github.io/fm-calculator-app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Github
                    </a>
                </div>

                <div className="project">
                    <img
                        className="project__img"
                        src={toDoSrc}
                        alt="todo"
                    />
                </div>
                <div className="project-desc">
                    <h3 className="project-desc__title">Simple To-do</h3>
                    <p className="project-desc__text">
                        Simple Project I did on my own for fun to see how I
                        could do it with my own logic
                    </p>
                    <div className="project-lang">
                        <img
                            className="project-lang__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                            alt="Logo Html5"
                        />

                        <img
                            className="project-lang__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                            alt="Logo CSS"
                        />

                        <img
                            className="project-lang__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            alt="Logo JS"
                        />
                    </div>

                    <a
                        className="project-desc__link"
                        href="https://github.com/Andrekode/todoRedo"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                    <a
                        className="project-desc__link"
                        href="https://andrekode.github.io/todoRedo/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Github
                    </a>
                </div>

                <div className="project">
                    <img
                        className="project__img"
                        src={teamProjectChristmasSrc}
                        alt="teamProject"
                    />
                </div>
                <div className="project-desc">
                    <h3 className="project-desc__title">
                        Team project: Kodehodet Christmas
                    </h3>
                    <p className="project-desc__text">
                        Project working with a team of 4 where the task was to
                        make a website about Fjosnissen and Lussi
                    </p>
                    <div className="project-lang">
                        <img
                            className="project-lang__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                            alt="Logo Html5"
                        />

                        <img
                            className="project-lang__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                            alt="Logo CSS"
                        />

                        <img
                            className="project-lang__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            alt="Logo JS"
                        />
                    </div>
                    <a
                        className="project-desc__link"
                        href="https://github.com/Andrekode/Project-fjoslussi"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </div>
                <div className="project">
                    <img
                        className="project__img"
                        src={timeTrackingSrc}
                        alt="timetracking"
                    />
                </div>
                <div className="project-desc">
                    <h3 className="project-desc__title">
                        Frontend-Mentor: TimeTracking
                    </h3>
                    <p className="project-desc__text">
                        A frontend mentor challenge
                    </p>
                    <div className="project-lang">
                        <img
                            className="project-lang__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                            alt="Logo Html5"
                        />

                        <img
                            className="project-lang__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                            alt="Logo CSS"
                        />

                        <img
                            className="project-lang__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            alt="Logo JS"
                        />
                    </div>
                    <a
                        className="project-desc__link"
                        href="https://github.com/Andrekode/timetrackingdashboard"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                    <a
                        className="project-desc__link"
                        href="https://andrekode.github.io/timetrackingdashboard/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Github
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
