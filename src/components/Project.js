import React from 'react'
import projectElement1 from '../images/project-element-1.svg'
import projectElement2 from '../images/project-element-2.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import madHatterMsquare from '../images/mad-hatter-m-square.svg'

const Project = props => {
    return (
        <div className="row project">
            <div className="column image-container" style={{ backgroundImage: 'url(' + props.bgImage + ')' }}>
                <div className="rounded-clip" style={{ backgroundImage: 'url(' + props.bgImage + ')' }}>
                </div>
                <div className="logo-card">
                    <img src={projectElement1} className="project-element1" alt="Design Element" />
                    <img src={props.logo} className="logo" alt="Logo" />
                    <img src={projectElement2} className="project-element2" alt="Design Element" />
                </div>
                <a href="https://www.madhattertech.ca/" title="This project was created by Mad Hatter Technology Inc">
                    <img src={madHatterMsquare} className="madHatterMsquare" alt="Mad Hatter Technology Inc" />
                </a>
            </div>
            <div className="column">
                <div className="content-container">
                    <h3>{props.label}</h3>
                    <div className="body">
                        <div className="inner">
                            {props.body.map(paragraph =>
                                <p>{paragraph}</p>
                            )}
                        </div>
                    </div>
                    <ul className="tags">
                        {props.tags.map(tag =>
                            <li>{tag}</li>
                        )}
                    </ul>
                    {props.link !== undefined ? (
                        <a href={props.link} target="_blank" className="button expand"><span className="text">Visit Site</span> <FontAwesomeIcon icon={faArrowRight} /></a>
                    ) : (<span className="button">Coming Soon</span>)}
                </div>
            </div>
        </div>
    )
}

export default Project