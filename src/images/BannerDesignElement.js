import React from 'react'
import bubble1 from '../images/bubble-1.svg'
import bubble2 from '../images/bubble-2.svg'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const BannerDesignElement = () => (
		<Controller>
			<Scene duration={1000} >
				<Timeline wrapper={<div className="design-wrapper" />} >
					<Tween position="0" from={{ top: '80%', scale: 1.5 }} to={{ top: '-50%', scale: 0.5 }}>
						<img src={bubble1} className="bubble bubble1" alt="Design ELement" />
					</Tween>
					<Tween position="0" from={{ top: '140%', scale: 1.5 }} to={{ top: '-50%', scale: 0.5 }}>
						<img src={bubble2} className="bubble bubble2" alt="Design ELement" />
					</Tween>
					<Tween position="0" from={{ top: '0%' }} to={{ top: '-15%' }}>
						<svg version="1.1" id="bg-layer-1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1600px" height="950px" viewBox="0 0 1600 950" enableBackground="new 0 0 1600 950" space="preserve">
							<g>
								<g>
									<linearGradient id="bg-element-1" gradientUnits="userSpaceOnUse" x1="800.0005" y1="950" x2="800.0004" y2="1.3438">
										<stop offset="0.033" stopColor="#6363AD"/>
										<stop offset="0.2342" stopColor="#7763AB"/>
										<stop offset="0.535" stopColor="#8C63AA"/>
										<stop offset="0.8004" stopColor="#9962A9"/>
										<stop offset="1" stopColor="#9D62A8"/>
									</linearGradient>
									<path fill="url(#bg-element-1)" d="M1495.487,2.076C1288.436-8.858,1116.94,103.14,958.781,297.103
										C819,468.523,635.071,528.348,404.509,495.351C141.163,457.664,79.249,315.82,34.579,219.707
										C13.909,175.23,4.118,128.892,0,88.051v762.257c38.136-94.887,95.947-157.542,274.549-183.638
										c257.538-37.632,516.565,272.312,862.72,282.625c307.818,9.171,446.174-73.998,462.731-84.758V12.794
										C1575.976,8.371,1542.338,4.55,1495.487,2.076z"/>
								</g>
								<defs>
									<filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0" y="1.343" width="1600" height="948.657">
										
											<feColorMatrix  type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" colorInterpolationFilters="sRGB" result="source"/>
									</filter>
								</defs>
								<mask maskUnits="userSpaceOnUse" x="0" y="1.343" width="1600" height="948.657" id="bg-element-2">
									<g filter="url(#Adobe_OpacityMaskFilter)">
										
										<image overflow="visible" width="6684" height="3970" href={process.env.PUBLIC_URL + '/332FC2A4872CB08C.jpg'}  transform="matrix(0.24 0 0 0.24 -2 -0.6567)">
										</image>
									</g>
								</mask>
								<g opacity="0.2" mask="url(#bg-element-2)">
									<path fill="#010101" d="M1495.487,2.076C1288.436-8.858,1116.94,103.14,958.781,297.103
										C819,468.523,635.071,528.348,404.509,495.351C141.163,457.664,79.249,315.82,34.579,219.707
										C13.909,175.23,4.118,128.892,0,88.051v762.257c38.136-94.887,95.947-157.542,274.549-183.638
										c257.538-37.632,516.565,272.312,862.72,282.625c307.818,9.171,446.174-73.998,462.731-84.758V12.794
										C1575.976,8.371,1542.338,4.55,1495.487,2.076z"/>
								</g>
							</g>
						</svg>
					</Tween>
					<Tween position="0" from={{ top: '14%' }} to={{ top: '11%' }}>
						<svg version="1.1" id="bg-layer-2" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1600px" height="710px" viewBox="0 0 1600 710" enableBackground="new 0 0 1600 710" space="preserve">
							<g>
								<g>
									<linearGradient id="bg-element-3" gradientUnits="userSpaceOnUse" x1="800.0005" y1="708.582" x2="800.0004" y2="4.882812e-04">
										<stop  offset="0" stopColor="#8162AA"/>
										<stop  offset="1" stopColor="#B760A5"/>
									</linearGradient>
									<path fill="url(#bg-element-3)" d="M1281.479,56.869c-209.975,125.642-275.447,260.509-492.975,353.859
										c-157.635,67.648-334.449,63.832-514.619,19.298C125.444,393.339,48.336,335.034,16.043,296.798
										C9.628,289.203,4.346,281.357,0,273.682v321.09c0.69-0.771,1.365-1.529,2.078-2.321c46.539-51.704,146.28-95.332,252.228-103.206
										c105.944-7.876,195.268,8.171,353.868,53.184c172.994,49.1,328.612,162.579,499.333,165.967
										c289.371,5.744,445.279-122.664,492.494-169.656V26.608C1542.008,0.884,1424.498-28.709,1281.479,56.869z"/>
								</g>
								<defs>
									<filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0" y="0" width="1600" height="708.582">
										
											<feColorMatrix  type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" colorInterpolationFilters="sRGB" result="source"/>
									</filter>
								</defs>
								<mask maskUnits="userSpaceOnUse" x="0" y="0" width="1600" height="708.582" id="bg-element-4">
									<g filter="url(#Adobe_OpacityMaskFilter)">
										
										<image overflow="visible" width="6684" height="2970" href={process.env.PUBLIC_URL + '/EDDB3C31B300708E.jpg'}  transform="matrix(0.24 0 0 0.24 -1.9995 -2)">
										</image>
									</g>
								</mask>
								<g opacity="0.2" mask="url(#bg-element-4)">
									<path fill="#010101" d="M1281.479,56.869c-209.975,125.642-275.447,260.509-492.975,353.859
										c-157.635,67.648-334.449,63.832-514.619,19.298C125.444,393.339,48.336,335.034,16.043,296.798
										C9.628,289.203,4.346,281.357,0,273.682v321.09c0.69-0.771,1.365-1.529,2.078-2.321c46.539-51.704,146.28-95.332,252.228-103.206
										c105.944-7.876,195.268,8.171,353.868,53.184c172.994,49.1,328.612,162.579,499.333,165.967
										c289.371,5.744,445.279-122.664,492.494-169.656V26.608C1542.008,0.884,1424.498-28.709,1281.479,56.869z"/>
								</g>
							</g>
						</svg>
					</Tween>
					<Tween position="0" from={{ top: '36%' }} to={{ top: '25%' }}>
						<svg version="1.1" id="bg-layer-3" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="614px" height="454px" viewBox="0 0 1600 454" enableBackground="new 0 0 614 454" space="preserve">
						<g>
							<g>
								
									<linearGradient id="bg-element-5" gradientUnits="userSpaceOnUse" x1="705.3691" y1="488.3955" x2="705.3691" y2="36.5249" gradientTransform="matrix(-1.0197 -0.0549 -0.0553 1.026 1041.1396 -5.9487)">
									<stop  offset="0" stopColor="#AB61A7"/>
									<stop  offset="1" stopColor="#E460A2"/>
								</linearGradient>
								<path fill="url(#bg-element-5)" d="M596.515,218.909c-14.98,34.942-32.096,92.661-100.486,151.167
									c-67.309,57.573-176.637,87.668-253.053,83.551c-76.41-4.117-223.562-40.829-241.029-101.171
									C-17.431,285.491,112.352,247.34,194.23,166.651C274.398,87.646,313.874,21.913,420.458,4.267
									c106.58-17.66,167.562,35.246,184.408,71.121S611.499,183.968,596.515,218.909z"/>
							</g>
							<defs>
								<filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0" y="0.756" width="613.582" height="453.244">
									
										<feColorMatrix  type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" colorInterpolationFilters="sRGB" result="source"/>
								</filter>
							</defs>
							<mask maskUnits="userSpaceOnUse" x="0" y="0.756" width="613.582" height="453.244" id="bg-element-6">
								<g filter="url(#Adobe_OpacityMaskFilter)">
									
									<image overflow="visible" width="2574" height="1906" href={process.env.PUBLIC_URL + '/E855628590F77503.jpg'}  transform="matrix(0.24 0 0 0.24 -2 -1.2437)">
									</image>
								</g>
							</mask>
							<g opacity="0.2" mask="url(#bg-element-6)">
								<path fill="#010101" d="M596.515,218.909c-14.98,34.942-32.096,92.661-100.486,151.167
									c-67.309,57.573-176.637,87.668-253.053,83.551c-76.41-4.117-223.562-40.829-241.029-101.171
									C-17.431,285.491,112.352,247.34,194.23,166.651C274.398,87.646,313.874,21.913,420.458,4.267
									c106.58-17.66,167.562,35.246,184.408,71.121S611.499,183.968,596.515,218.909z"/>
							</g>
						</g>
					</svg>
					</Tween>
				</Timeline>
			</Scene>
		</Controller>
)

export default BannerDesignElement;
