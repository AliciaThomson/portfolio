import React from 'react'
import BannerDesignElement from './design-elements/BannerDesignElement'

const Banner = () => {
    return (
        <div className="page-banner">
            <div className="container">
                <h2>Creating Interactive <span className="bold-text">Experiences</span></h2>
            </div>
            <BannerDesignElement />
        </div>
    );
}

export default Banner;