import React from 'react'
import bubble1 from '../../images/bubble-1.png'
import bubble2 from '../../images/bubble-2.png'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

const FooterDesignElement = () => (
	<Controller>
		<Scene duration={1000}>
			<Timeline wrapper={<div className="design-wrapper" />} >
				<Tween position="0" from={{ yPercent: 0, scale: 0.8 }} to={{ yPercent: -150, scale: 0.6 }}>
					<img src={bubble2} className="bubble bubble7" width="20%" alt="Design ELement" />
				</Tween>
				<Tween position="0" from={{ yPercent: 0, scale: 1.2 }} to={{ yPercent: -100, scale: 1 }}>
					<img src={bubble1} className="bubble bubble8" width="17%" alt="Design ELement" />
				</Tween>
				<Tween position="0"  from={{ yPercent: 0 }} to={{ yPercent: 5 }}>
					<svg id="bg-layer-15" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1600 767">
						<g>
							<g>
								<linearGradient id="bg-element-22" gradientUnits="userSpaceOnUse" x1="800.0005" y1="767" x2="800.0004" y2="4.882812e-04">
									<stop  offset="0.033" stopColor="#6363AD"/>
									<stop  offset="0.2342" stopColor="#7763AB"/>
									<stop  offset="0.535" stopColor="#8C63AA"/>
									<stop  offset="0.8004" stopColor="#9962A9"/>
									<stop  offset="1" stopColor="#9D62A8"/>
								</linearGradient>
								<path fill="url(#bg-element-22)" d="M1600,0c-13.825,65.375-65.549,191.109-256.13,312.598
									c-310.035,197.637-764.161,133.464-988.562,72.883C226.435,350.688,92.494,261.143,0,180.628v586.257
									c50.994-75.527,123.252-143.156,223.693-164.717c264.051-56.683,612.828,151.86,894.182,163.852
									C1440.447,779.77,1553.26,645.612,1600,566.074V0z"/>
							</g>
							<defs>
								<filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0" y="0" width="1600" height="767">
									
										<feColorMatrix  type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB" result="source"/>
								</filter>
							</defs>
							<mask maskUnits="userSpaceOnUse" x="0" y="0" width="1600" height="767" id="bg-element-20">
								<g filter="url(#Adobe_OpacityMaskFilter)">
									
									<image overflow="visible" width="6684" height="3213" href={process.env.PUBLIC_URL + '/140F96C7AFDB4165.jpg'}  transform="matrix(0.24 0 0 0.24 -2 -2)">
									</image>
								</g>
							</mask>
							<g opacity="0.14" mask="url(#bg-element-20)">
								<path fill="#010101" d="M1600,0c-13.825,65.375-65.549,191.109-256.13,312.598c-310.035,197.637-764.161,133.464-988.562,72.883
									C226.435,350.688,92.494,261.143,0,180.628v586.257c50.994-75.527,123.252-143.156,223.693-164.717
									c264.051-56.683,612.828,151.86,894.182,163.852C1440.447,779.77,1553.26,645.612,1600,566.074V0z"/>
							</g>
						</g>
					</svg>
				</Tween>
				<Tween position="0"  from={{ yPercent: -10 }} to={{ yPercent: 10 }}>
					<svg id="bg-layer-16" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1600 421" >
						<g>
							<g>
								<linearGradient id="bg-element-23" gradientUnits="userSpaceOnUse" x1="800.0005" y1="421" x2="800.0005" y2="4.882812e-04">
									<stop  offset="0" stopColor="#8162AA"/>
									<stop  offset="0.7823" stopColor="#B760A5"/>
								</linearGradient>
								<path fill="url(#bg-element-23)" d="M1600,0c-16.13,38.358-61.984,99.277-189.443,169.597
									c-313.596,173.011-872.793,81.694-1106.022,51.599C165.891,203.306,66.85,162.953,0,124.185v222.378
									c74.182-54.638,191.272-97.426,369.149-64.661c378.995,69.812,670.888,152.453,832.378,137.277
									c161.49-15.178,299.209-85.216,359.581-188.877c22.284-38.264,33.409-63.453,38.892-79.656V0z"/>
							</g>
							<defs>
								<filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0" y="0" width="1600" height="421">
									
										<feColorMatrix  type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB" result="source"/>
								</filter>
							</defs>
							<mask maskUnits="userSpaceOnUse" x="0" y="0" width="1600" height="421" id="bg-element-21">
								<g filter="url(#Adobe_OpacityMaskFilter)">	
									<image overflow="visible" width="6684" height="1771" href={process.env.PUBLIC_URL + '/E74E99EA13E5B7E03.jpg'}  transform="matrix(0.24 0 0 0.24 -2 -2)">
									</image>
								</g>
							</mask>
							<g opacity="0.14" mask="url(#bg-element-21)">
								<path fill="#010101" d="M1600,0c-16.13,38.358-61.984,99.277-189.443,169.597c-313.596,173.011-872.793,81.694-1106.022,51.599
									C165.891,203.306,66.85,162.953,0,124.185v222.378c74.182-54.638,191.272-97.426,369.149-64.661
									c378.995,69.812,670.888,152.453,832.378,137.277c161.49-15.178,299.209-85.216,359.581-188.877
									c22.284-38.264,33.409-63.453,38.892-79.656V0z"/>
							</g>
						</g>
					</svg>

				</Tween>
			</Timeline>
		</Scene>
	</Controller>
)

export default FooterDesignElement;
