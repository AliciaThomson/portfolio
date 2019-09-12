import React from 'react'
import workIllustration from '../images/leaves-illustration.svg'
import tpsBg from '../images/tps-bg.jpg'
import huronBg from '../images/huron-bg.jpg'
import tpsLogo from '../images/tps-logo.svg'
import huronLogo from '../images/huron-u-logo.svg'
import Project from './Project'

const MyWork = () => {
    return (
        <div className="my-work">
            <h2 className="section-label">Work</h2>
            <div className="container">
                <div className="half-block">
                    <h2>My Work</h2>
                    <p>Below are some of the projects that I have helped bring to life.</p>
                </div>
                <img src={workIllustration} className="work-image" alt="Design Element" />
            </div>
            <Project label='Toronto Police Service' logo={tpsLogo} image={tpsBg} body="The Toronto Police Service website was designed and developed to create a friendly, transparent and informative place where citizens can access resources and learn more about the service." />
            <Project label='Huron University' logo={huronLogo} image={huronBg} link="https://huronuc.ca/" body="The Toronto Police Service website was designed and developed to create a friendly, transparent and informative place where citizens can access resources and learn more about the service." />
            <Project label='Lambton Public Health' logo={tpsLogo} image={tpsBg} body="The Toronto Police Service website was designed and developed to create a friendly, transparent and informative place where citizens can access resources and learn more about the service." />
            <Project label='Dufferin County' logo={tpsLogo} image={tpsBg} body="The Toronto Police Service website was designed and developed to create a friendly, transparent and informative place where citizens can access resources and learn more about the service." />
            <Project label='Toronto Police Service' logo={tpsLogo} image={tpsBg} body="The Toronto Police Service website was designed and developed to create a friendly, transparent and informative place where citizens can access resources and learn more about the service." />
        </div>
    )
}

export default MyWork