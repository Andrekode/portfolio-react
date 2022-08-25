import portfolioSrc from '../assets/images/Projects/project-portfolio.png'
import fmCalcSrc from '../assets/images/Projects/project-fm-cal.png'
import toDoSrc from '../assets/images/Projects/project-todo.png'
import timeTrackingSrc from '../assets/images/Projects/project-fm-timetracking.png'

const projectsObject = [
    {
        id: 1,
        title: 'Portfolio',
        desc: 'My portfolio',
        imgSrc: portfolioSrc,
        livePage: 'https://andrekode.github.io/Portfolio/',
        githubRepo: 'https://github.com/Andrekode/Portfolio',
        languageLogoCdns: [
            {
                inProject: true,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
                alt: 'Logo Html5',
            },
            {
                inProject: true,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
                alt: 'Logo CSS',
            },
            {
                inProject: true,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                alt: 'Logo JS',
            },
            {
                inProject: false,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
                alt: 'Logo React',
            },
        ],
    },
    {
        id: 2,
        title: 'Frontend Mentor: Calculator',
        desc: 'Frontend-Mentor challenge done with React and styled components. Responsive.',
        imgSrc: fmCalcSrc,
        livePage: 'https://andrekode.github.io/fm-calculator-app/',
        githubRepo: 'https://github.com/Andrekode/fm-calculator-app',
        languageLogoCdns: [
            {
                inProject: false,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
                alt: 'Logo Html5',
            },
            {
                inProject: true,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
                alt: 'Logo CSS',
            },
            {
                inProject: false,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                alt: 'Logo JS',
            },
            {
                inProject: true,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
                alt: 'Logo React',
            },
        ],
    },
    {
        id: 3,
        title: 'Simple To-do',
        desc: 'Simple To-do app',
        imgSrc: toDoSrc,
        livePage: 'https://andrekode.github.io/todoRedo/',
        githubRepo: 'https://github.com/Andrekode/todoRedo',
        languageLogoCdns: [
            {
                inProject: false,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
                alt: 'Logo Html5',
            },
            {
                inProject: true,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
                alt: 'Logo CSS',
            },
            {
                inProject: true,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                alt: 'Logo JS',
            },
            {
                inProject: false,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
                alt: 'Logo React',
            },
        ],
    },
    {
        id: 4,
        title: 'Frontend Mentor TimeTracking',
        desc: 'A frontend mentor challenge',
        imgSrc: timeTrackingSrc,
        livePage: 'https://andrekode.github.io/timetrackingdashboard/',
        githubRepo: 'https://github.com/Andrekode/timetrackingdashboard',
        languageLogoCdns: [
            {
                inProject: true,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
                alt: 'Logo Html5',
            },
            {
                inProject: true,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
                alt: 'Logo CSS',
            },
            {
                inProject: true,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                alt: 'Logo JS',
            },
            {
                inProject: false,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
                alt: 'Logo React',
            },
        ],
    },
]

export { projectsObject }
