import React from 'react'

function About() {
    return (
        <section className="about pad" id="about">
            <div className="about-head">
                <h2 className="about-head__title">About me</h2>
                <p className="about-head__subtitle">
                    My name is Andrè Mæland, I'm 36 years old. Currently
                    attending AMO-course Kodehodet.
                </p>
                <p className="about-head__subtitle2">
                    Always up for a challenge in codewars!
                </p>
            </div>

            <div className="about-content">
                <div className="about-desc">
                    <h3 className="about-desc__title">Me</h3>
                    <p className="about-desc__text">
                        From young age I've always been interested in anything
                        computer related, from software to hardware. With
                        curiosity's drive I love to find solutions to problems
                        in anything I should come over. from Linux to modifying
                        games or debugging.
                    </p>
                    <p className="about-desc__text">
                        At the moment I'm a participant in Kodehode, an IT
                        AMO-course where I work to become a Full-Stack Developer
                    </p>
                    <p className="about-desc__text">
                        I like to learn new things and stay updated with
                        programming trends. If I don't code i like to game,
                        currently playing a bit of Lost Ark, other than that I
                        like to lift weights.
                    </p>
                </div>

                <div className="about-myskill">
                    <h3 className="about-myskill__title">Skills</h3>
                    <div className="about-myskill-box">
                        <img
                            className="about-myskill-box__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                            alt="Logo Html5"
                        />
                    </div>
                    <div className="about-myskill-box">
                        <img
                            className="about-myskill-box__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                            alt="Logo Css3"
                        />
                    </div>
                    <div className="about-myskill-box">
                        <img
                            className="about-myskill-box__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            alt="Logo Javascript"
                        />
                    </div>
                    <div className="about-myskill-box">
                        <img
                            className="about-myskill-box__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                            alt="Logo React"
                        />
                    </div>
                    <div className="about-myskill-box">
                        <img
                            className="about-myskill-box__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
                            alt="Logo Python"
                        />
                    </div>
                    <div className="about-myskill-box">
                        <img
                            className="about-myskill-box__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
                            alt="Logo Vscode"
                        />
                    </div>
                    <div className="about-myskill-box">
                        <img
                            className="about-myskill-box__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                            alt="Logo Github"
                        />
                    </div>
                    <div className="about-myskill-box">
                        <img
                            className="about-myskill-box__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                            alt="Logo Git"
                        />
                    </div>
                    <div className="about-myskill-box">
                        <img
                            className="about-myskill-box__img"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                            alt="Logo Figma"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
