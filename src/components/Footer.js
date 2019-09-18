import React from 'react'
import Navigation from './Navigation'
import FooterDesignElement from './design-elements/FooterDesignElement'

const Footer = () => {
    // The Theme Toggler Button receives not only the theme
    // but also a toggleTheme function from the context
    return (
        <div className="page-footer">
            <FooterDesignElement />
            <div className="container">
                <a href="#top" className="logo"><span className="bold-text">Alicia</span> Thomson</a>
                <Navigation menuItems={[
                    { anchor: '#about', text: 'About' },
                    { anchor: '#skills', text: 'Skills' },
                    { anchor: '#work', text: 'Work' },
                    { anchor: '#contact', text: 'Contact' }
                ]} />
            </div>
        </div>
    );
}

export default Footer;