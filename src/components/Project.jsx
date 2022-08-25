import React from 'react'

function Project({ title, desc, imgSrc, livePage, githubRepo, logoCdns }) {
    const languageLogos = logoCdns
        .filter((language) => language.inProject)
        .map((logo, i) => {
            return (
                <img
                    key={i}
                    className="project-lang__img"
                    src={logo.src}
                    alt={logo.alt}
                />
            )
        })

    return (
        <>
            <div className="project">
                <img className="project__img" src={imgSrc} alt="Porfolio" />
            </div>
            <div className="project-desc">
                <h3 className="project-desc__title">{title}</h3>
                <p className="project-desc__text">{desc}</p>
                <div className="project-lang">{languageLogos}</div>
                {githubRepo && (
                    <a
                        className="project-desc__link"
                        href={githubRepo}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                )}
                {livePage && (
                    <a
                        className="project-desc__link"
                        href={livePage}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Github
                    </a>
                )}
            </div>
        </>
    )
}

export default Project
