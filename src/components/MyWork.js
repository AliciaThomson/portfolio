import React from 'react'
import workIllustration from '../images/leaves-illustration.svg'
import tpsBg from '../images/tps-bg.jpg'
import lphBg from '../images/lph-bg.jpg'
import huronBg from '../images/huron-bg.jpg'
import dufferinBg from '../images/dufferin-bg.jpg'
import mandyBg from '../images/mandy-bg.jpg'
import tpsLogo from '../images/tps-logo.svg'
import lphLogo from '../images/lph-logo.svg'
import huronLogo from '../images/huron-u-logo.svg'
import dufferinLogo from '../images/dufferin-logo.svg'
import mandyLogo from '../images/mandy-logo.svg'
import bgBlob from '../images/work-bg-blob.svg'
import Project from './Project'
import bubble3 from '../images/bubble-3.png'
import bubble2 from '../images/bubble-2.png'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

const MyWork = () => {
    const myProjects = [
        {
            label: 'Toronto Police Service',
            logo: tpsLogo,
            bgImage: tpsBg,
            body: [
                'The Toronto Police Service website was designed and developed to create a friendly, transparent and informative place where citizens can access resources and learn more about the service.',
                'Leveraged Django CMS to build a fully customizable web application on the Python framework. Built custom components for all sections of the design to ensure blocks could be moved and edited as needed. Created a resource centre UI where users could find and filter a variety of different content.',
            ]
        }, {
            label: 'Huron University',
            logo: huronLogo,
            link: 'https://huronuc.ca/',
            bgImage: huronBg,
            body: [
                'Huron University is an elite Liberal Arts University offering a personalized learning experience. This website was built to provide an optimized online presence where new and current students can learn about the programs.',
                'The Huron University website was designed and developed to be a dynamic block based website where content writers can easily add and update content that fits the design. News, events and alumni stories blocks were created so content could be added to pages dynamically. A robust contact directory was built to allow administrators the ability for contacts to be added and featured on all relevant pages.',
            ]
        }, {
            label: 'Lambton Public Health',
            logo: lphLogo,
            link: 'https://lambtonpublichealth.ca/',
            bgImage: lphBg,
            body: [
                'The Public Health Department of the Lambton County was looking to build an innovative website where the general public could access information regarding public health reports, signup for classes and events and book appointments with clinics. In addition to the public facing website they wanted to create a dynamic portal where public health professionals could access resources and reports.',
                'Leveraged Django CMS to build a fully customizable web application on the Python framework. Built custom components for all sections of the design to ensure blocks could be moved and edited as needed. Created a resource centre UI where users could find and filter a variety of different content.',
            ]
        }, {
            label: 'Dufferin County',
            logo: dufferinLogo,
            link: 'https://www.dufferincounty.ca',
            bgImage: dufferinBg,
            body: [
                'Dufferin County is a forward thinking community who puts their residents first. This website was built to open the lines of communication between the County departments and the community.',
                'News and event feeds were built and designed to allow users to stay up to date with what’s going on in their community. Discovery sessions were organized around each department and the content architecture was constructed to help users find the information they are looking for. A private news and resources area called Raising the Bar was built to promote and support early childhood educators.',
            ]
        }, {
            label: 'Mandy Madness',
            logo: mandyLogo,
            bgImage: mandyBg,
            body: [
                '',
                '',
            ]
        },
    ]
    return (
        <div className="my-work">

            <Controller>
                <Scene duration={4000}>
                    <Timeline>
                        <Tween position="0" from={{ yPercent: -10 }} to={{ yPercent: 50 }}>
                            <h2 className="section-label">Work</h2>
                        </Tween>
                        <Tween position="0" from={{ yPercent: 0 }} to={{ yPercent: 15 }}>
                            <img src={bgBlob} className="bg-blob" alt="Design Element" />
                        </Tween>
                        <Tween position="0" from={{ yPercent: 0, scale: 0.8 }} to={{ yPercent: -250, scale: 0.6 }}>
                            <img src={bubble3} className="bubble bubble9" width="20%" alt="Design ELement" />
                        </Tween>
                        <Tween position="0" from={{ yPercent: 0, scale: 1.2 }} to={{ yPercent: -300, scale: 1 }}>
                            <img src={bubble2} className="bubble bubble10" width="10%" alt="Design ELement" />
                        </Tween>
                    </Timeline>
                </Scene>
            </Controller>
            <div className="container">
                <div className="half-block">
                    <h2>My Work</h2>
                    <p>Below are some of the projects that I have helped bring to life.</p>
                </div>
                <img src={workIllustration} className="work-image" alt="Design Element" />
            </div>
            <div className="projects">
                {myProjects.map(project =>
                    <Project {...project} />
                )}
            </div>
        </div>
    )
}

export default MyWork