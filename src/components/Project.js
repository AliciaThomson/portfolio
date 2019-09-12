import React from 'react'
import RoundedSquare from '../images/RoundedSquare'
import projectElement1 from '../images/project-element-1.svg'
import projectElement2 from '../images/project-element-2.svg'

const Project = props => {
    return (
        <div className="row">
            <div className="column image-container" style={{ backgroundImage: 'url(' + props.image + ')' }}>
                <div className="rounded-clip" style={{ backgroundImage: 'url(' + props.image + ')' }}>

                </div>
                <div className="logo-card">
                    <img src={projectElement1} className="project-element1" alt="Design Element" />
                    <img src={props.logo} className="logo" alt="Logo" />
                    <img src={projectElement2} className="project-element2" alt="Design Element" />
                </div>
                <RoundedSquare />
            </div>
            <div className="column">
                <div className="content-container">
                    <h3>{props.label}</h3>
                    <div className="body">
                        <p>{props.body}</p>
                    </div>
                    {props.link !== undefined ? (
                        <a href={props.link} className="button"><span class="inner">Visit Site</span></a>
                    ) : (
                            <span className="button"><span class="inner">Coming Soon</span></span>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Project