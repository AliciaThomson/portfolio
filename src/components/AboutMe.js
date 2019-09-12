import React from 'react'
import illustration from '../images/self-portrait.svg'
import AboutDesignElement from '../images/AboutDesignElement'

const AboutMe = () => {
    return (
        <div className="about-me">
            <h2 className="section-label">About</h2>
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
        </div>
    )
}

export default AboutMe