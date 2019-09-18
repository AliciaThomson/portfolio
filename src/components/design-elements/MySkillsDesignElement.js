import React from 'react'
import bubble3 from '../../images/bubble-3.png'
import bubble1 from '../../images/bubble-1.png'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

const BannerDesignElement = () => (
	<Controller>
		<Scene duration={1000} >
			<Timeline wrapper={<div className="design-wrapper" />} >
				<Tween position="0" from={{ yPercent: 0, scale: 0.8 }} to={{ yPercent: -150, scale: 0.6 }}>
					<img src={bubble3} className="bubble bubble5" width="20%" alt="Design ELement" />
				</Tween>
				<Tween position="0" from={{ yPercent: 0, scale: 1.2 }} to={{ yPercent: -100, scale: 1 }}>
					<img src={bubble1} className="bubble bubble6" width="17%" alt="Design ELement" />
				</Tween>
				<Tween position="0" from={{ yPercent: 0 }} to={{ yPercent: 5 }}>
					<svg id="bg-layer-8" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 1600 742">
			<g>
				<g>
					<linearGradient id="bg-element-12" gradientUnits="userSpaceOnUse" x1="800" y1="742" x2="799.9999" y2="0.4204">
						<stop  offset="0.033" stopColor="#6363AD"/>
						<stop  offset="0.2342" stopColor="#7763AB"/>
						<stop  offset="0.535" stopColor="#8C63AA"/>
						<stop  offset="0.8004" stopColor="#9962A9"/>
						<stop  offset="1" stopColor="#9D62A8"/>
					</linearGradient>
					<path fill="url(#bg-element-12)" d="M1600,134.424c-2.916-4.454-80.039-118.964-308.687-125.979
						c-261.621-8.025-429.387,156.372-693.65,162.109C321.341,176.554,0,0.42,0,0.42V742c0,0,58.089-130.37,235.242-254.762
						c177.152-124.392,519.517-267.472,741.292-218.974c238.756,52.211,359.954,212.408,470.665,274.216
						c103.854,57.979,142.582-8.987,152.801-33.619V134.424z"/>
				</g>
				<defs>
					<filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0" y="0.42" width="1600" height="741.58">
						
							<feColorMatrix  type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" colorInterpolationFilters="sRGB" result="source"/>
					</filter>
				</defs>
				<mask maskUnits="userSpaceOnUse" x="0" y="0.42" width="1600" height="741.58" id="bg-element-13">
					<g filter="url(#Adobe_OpacityMaskFilter)">
						
						<image overflow="visible" width="6684" height="3107" href={process.env.PUBLIC_URL + '/EA382BE0384D0ACA2.jpg'}  transform="matrix(0.24 0 0 0.24 -2.0005 -1.5801)">
						</image>
					</g>
				</mask>
				<g opacity="0.14" mask="url(#bg-element-13)">
					<path fill="#010101" d="M1600,134.424c-2.916-4.454-80.039-118.964-308.687-125.979
						c-261.621-8.025-429.387,156.372-693.65,162.109C321.341,176.554,0,0.42,0,0.42V742c0,0,58.089-130.37,235.242-254.762
						c177.152-124.392,519.517-267.472,741.292-218.974c238.756,52.211,359.954,212.408,470.665,274.216
						c103.854,57.979,142.582-8.987,152.801-33.619V134.424z"/>
				</g>
			</g>
		</svg>
				</Tween>
				<Tween position="0" from={{ yPercent: -5.5 }} to={{ yPercent: 5.75 }}>
					<svg id="bg-layer-9" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1600 477">
			<g>
				<g>
					<linearGradient id="bg-element-14" gradientUnits="userSpaceOnUse" x1="800" y1="0" x2="800" y2="476.7466">
						<stop  offset="0" stopColor="#C860A5"/>
						<stop  offset="0.756" stopColor="#8162AA"/>
					</linearGradient>
					<path fill="url(#bg-element-14)" d="M1600,150.907c-8.048-26.595-47.734-122.715-205.095-144.242
						c-152.908-20.918-281.319,11.082-389.666,45.082c-108.346,34-290.777,94.418-494.218,79.712C251.093,112.669,0,24.747,0,24.747
						v452c0,0,234.205-198.213,438.29-255.84c221.205-62.461,408.442-139.159,681.315-57.159c272.873,82,289.915,178.857,389.443,162
						c72.423-12.266,87.753-51.197,90.951-68.98V150.907z"/>
				</g>
				<defs>
					<filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0" y="0" width="1600" height="476.746">
						
							<feColorMatrix  type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" colorInterpolationFilters="sRGB" result="source"/>
					</filter>
				</defs>
				<mask maskUnits="userSpaceOnUse" x="0" y="0" width="1600" height="476.746" id="bg-element-15">
					<g filter="url(#Adobe_OpacityMaskFilter)">
						<image overflow="visible" width="6684" height="2004" href={process.env.PUBLIC_URL + '/F01BA1EB6C78785.jpg'}  transform="matrix(0.24 0 0 0.24 -1.9995 -2)">
						</image>
					</g>
				</mask>
				<g opacity="0.14" mask="url(#bg-element-15)">
					<path fill="#010101" d="M1600,150.907c-8.048-26.595-47.734-122.715-205.095-144.242
						c-152.908-20.918-281.319,11.082-389.666,45.082c-108.346,34-290.777,94.418-494.218,79.712C251.093,112.669,0,24.747,0,24.747
						v452c0,0,234.205-198.213,438.29-255.84c221.205-62.461,408.442-139.159,681.315-57.159c272.873,82,289.915,178.857,389.443,162
						c72.423-12.266,87.753-51.197,90.951-68.98V150.907z"/>
				</g>
			</g>
		</svg>
				</Tween>
				<Tween position="0" from={{ yPercent: -30 }} to={{ yPercent: 30 }}>
					<svg id="bg-layer-10" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1600 142">
						<g>
							<g>
								<linearGradient id="bg-element-16" gradientUnits="userSpaceOnUse" x1="88.9248" y1="129.5391" x2="228.8479" y2="-10.384">
									<stop  offset="0" stopColor="#E460A2"/>
									<stop  offset="1" stopColor="#AB61A7"/>
								</linearGradient>
								<path fill="url(#bg-element-16)" d="M151.407,4.527c-79.071-5.257-175.075-14-145.075,38s102,58,150.667,81.45
									c48.102,23.179,157.531,36.55,147.334-40.867C297.46,30.94,230.479,9.784,151.407,4.527z"/>
							</g>
							<defs>
								<filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0.706" y="0.479" width="304.294" height="141.521">
									
										<feColorMatrix  type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" colorInterpolationFilters="sRGB" result="source"/>
								</filter>
							</defs>
							<mask maskUnits="userSpaceOnUse" x="0.706" y="0.479" width="304.294" height="141.521" id="bg-element-17">
								<g filter="url(#Adobe_OpacityMaskFilter)">
									
									<image overflow="visible" width="1285" height="607" href={process.env.PUBLIC_URL + '/7AAB493F82C671E2.jpg'}  transform="matrix(0.24 0 0 0.24 -1.2939 -1.5205)">
									</image>
								</g>
							</mask>
							<g opacity="0.14" mask="url(#bg-element-17)">
								<path fill="#010101" d="M151.407,4.527c-79.071-5.257-175.075-14-145.075,38s102,58,150.667,81.45
									c48.102,23.179,157.531,36.55,147.334-40.867C297.46,30.94,230.479,9.784,151.407,4.527z"/>
							</g>
						</g>
					</svg>
				</Tween>
				<Tween position="0" from={{ yPercent: -30 }} to={{ yPercent: 30 }}>
					<svg id="bg-layer-11" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1600 204">
						<g>
							<g>
								<linearGradient id="bg-element-18" gradientUnits="userSpaceOnUse" x1="-38.5322" y1="164.6631" x2="110.3994" y2="15.7315">
									<stop  offset="0" stopColor="#AB61A7"/>
									<stop  offset="1" stopColor="#E460A2"/>
								</linearGradient>
								<path fill="url(#bg-element-18)" d="M154.42,73.674C150.781,17.291,23.107,2.26,0,0v183.311l0.396,20.281
									C0.396,203.592,158.42,135.674,154.42,73.674z"/>
							</g>
							<defs>
								<filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0" y="0" width="154.494" height="203.592">
									
										<feColorMatrix  type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" colorInterpolationFilters="sRGB" result="source"/>
								</filter>
							</defs>
							<mask maskUnits="userSpaceOnUse" x="0" y="0" width="154.494" height="203.592" id="bg-element-19">
								<g filter="url(#Adobe_OpacityMaskFilter)">
									
									<image overflow="visible" width="661" height="865" href={process.env.PUBLIC_URL + '/E74E99EA13E5B7E02.jpg'}  transform="matrix(0.24 0 0 0.24 -1.9995 -2.0005)">
									</image>
								</g>
							</mask>
							<g opacity="0.14" mask="url(#bg-element-19)">
								<path fill="#010101" d="M154.42,73.674C150.781,17.291,23.107,2.26,0,0v183.311l0.396,20.281
									C0.396,203.592,158.42,135.674,154.42,73.674z"/>
							</g>
						</g>
					</svg>
				</Tween>
			</Timeline>
		</Scene>
	</Controller>
)

export default BannerDesignElement;
