import React from 'react'
import skillsbg from '../images/skills-bg.svg'
import SkillsCard from './SkillsCard'
import accountableIcon from '../images/icon-accountable.svg'
import collaborationIcon from '../images/icon-collaboration.svg'
import communicationIcon from '../images/icon-communication.svg'
import magnifyingGlassIcon from '../images/icon-magnifying-glass.svg'
import MySkillsDesignElement from '../images/MySkillsDesignElement'

const MySkills = () => {
    return (
        <div className="my-skills">
            <h2 className="section-label right-side">Skills</h2>
            <div className="container">
                <h2>My Skills</h2>
                <div className="cards-wrapper">
                    <SkillsCard label="Detail Oriented" icon={magnifyingGlassIcon} />
                    <SkillsCard label="Collaborative" icon={collaborationIcon} />
                    <SkillsCard label="Communication Skills" icon={communicationIcon} />
                    <SkillsCard label="Dedicated and Accountable" icon={accountableIcon} />
                </div>
            </div>
            <img src={skillsbg} className="bg-blob" alt="Design ELement" />
            <MySkillsDesignElement />
        </div>
    )
}

export default MySkills