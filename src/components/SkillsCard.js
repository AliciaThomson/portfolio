import React from 'react'

const SkillsCard = props => {
    return (
        <div className="card">
            <div className="details"><p>{props.details}</p></div>
            <div>
                <img src={props.icon} className="icon" alt={props.label + ' icon'} />
                <h3>{props.label}</h3>
            </div>
        </div>
    )
}

export default SkillsCard