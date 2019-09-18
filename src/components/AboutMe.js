import React from 'react'
import illustration from '../images/self-portrait.svg'
import AboutDesignElement from './design-elements/AboutDesignElement'
import bgBlob from '../images/about-bg-blob.svg'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

const AboutMe = () => {
    return (
        <div className="about-me">
            <Controller>
                <Scene duration={1000}>
                    <Timeline>
                        <Tween position="0" from={{ yPercent: -12 }} to={{ yPercent: 12 }}>
                            <h2 className="section-label">About</h2>
                        </Tween>
                        <Tween position="0" from={{ yPercent: -10 }} to={{ yPercent: 10 }}>
                            <img src={bgBlob} className="bg-blob" alt="Design Element" />
                        </Tween>
                    </Timeline>
                </Scene>
            </Controller>

            <div className="container">
                <div className="half-block">
                    <img src={illustration} className="bg-element1" alt="Design ELement" />
                </div>
                <div className="half-block">
                    <h2 className="greeting">
                        <span className="small-text">hello, I'm</span>
                        <span className="bold-text">Alicia</span>
                        Thomson
                    </h2>
                </div>
                <p>I am passoinate about building beautiful and intuitive applications. I am based in Kitchener Ontario with over six years of experience building sites for clients ranging from small buisinesses to large government organizations. I love taking on new challenges and solving problems.</p>
            </div>
            <AboutDesignElement />
        </div >
    )
}

export default AboutMe