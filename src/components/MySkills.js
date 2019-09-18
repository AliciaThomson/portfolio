import React from 'react'
import bgBlob from '../images/skills-bg.svg'
import SkillsCard from './SkillsCard'
import accountableIcon from '../images/icon-accountable.svg'
import collaborationIcon from '../images/icon-collaboration.svg'
import communicationIcon from '../images/icon-communication.svg'
import magnifyingGlassIcon from '../images/icon-magnifying-glass.svg'
import MySkillsDesignElement from './design-elements/MySkillsDesignElement'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

const MySkills = () => {
    return (
        <div className="my-skills">

            <Controller>
                <Scene duration={1000}>
                    <Timeline>
                        <Tween position="0" from={{ yPercent: -20 }} to={{ yPercent: 20 }}>
                            <h2 className="section-label right-side">Skills</h2>
                        </Tween>
                        <Tween position="0" from={{ yPercent: -10 }} to={{ yPercent: 5 }}>
                            <img src={bgBlob} className="bg-blob" alt="Design ELement" />
                        </Tween>
                    </Timeline>
                </Scene>
            </Controller>

            <div className="container">
                <h2>My Skills</h2>
                <div className="cards-wrapper">
                    <SkillsCard label="Detail Oriented" icon={magnifyingGlassIcon} />
                    <SkillsCard label="Collaborative" icon={collaborationIcon} />
                    <SkillsCard label="Communication Skills" icon={communicationIcon} />
                    <SkillsCard label="Dedicated and Accountable" icon={accountableIcon} />
                </div>
            </div>
            <MySkillsDesignElement />
        </div>
    )
}

export default MySkills