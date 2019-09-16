import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

const AboutDesignElement = () => (
	<Controller>
		<Scene duration={1000} >
			<Timeline wrapper={<div className="design-wrapper" />} >
				<Tween position="0" from={{ top: '0%' }} to={{ top: '-15%' }}>
					<svg version="1.1" id="bg-layer-4" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1600px" height="908px" viewBox="0 0 1600 908" enableBackground="new 0 0 1600 908" space="preserve">
					<g>
						<g>
							<linearGradient id="bg-element-7" gradientUnits="userSpaceOnUse" x1="800.0005" y1="906.9805" x2="800.0004" y2="-0.1411">
								<stop  offset="0.033" stopColor="#6362AB"/>
								<stop  offset="0.117" stopColor="#6B62AA"/>
								<stop  offset="0.464" stopColor="#8661A9"/>
								<stop  offset="0.7698" stopColor="#9761A7"/>
								<stop  offset="1" stopColor="#9D61A7"/>
							</linearGradient>
							<path fill="url(#bg-element-7)" d="M1600-0.142c-0.883,26.521-11.15,117.004-105.332,206.704
								c-112,106.664-254.641,225.734-450.236,243.274c-292.895,26.267-344.305-221.692-666.143-175.696
								C182.368,302.143,73.462,200.656,0,101.95V906.98c57.175-1.451,159.376-20.053,294.157-110.032
								c209.979-140.182,416.508-201.522,585.96-200.824c144.338,0.598,225.988,11.57,451.977,79.568
								C1558.08,743.688,1600,878.109,1600,878.109V-0.142z"/>
						</g>
						<defs>
							<filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0" y="-0.142" width="1600" height="907.122">
								
									<feColorMatrix  type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" colorInterpolationFilters="sRGB" result="source"/>
							</filter>
						</defs>
						<mask maskUnits="userSpaceOnUse" x="0" y="-0.142" width="1600" height="907.122" id="bg-element-8">
							<g filter="url(#Adobe_OpacityMaskFilter)">
								<image overflow="visible" width="1605" height="912" href={process.env.PUBLIC_URL + '/EA382BE0384D0ACA.jpg'}  transform="matrix(1 0 0 1 -2.5 -2.5)">
								</image>
							</g>
						</mask>
						<g opacity="0.14" mask="url(#bg-element-8)">
							<path d="M1600-0.142c-0.883,26.521-11.15,117.004-105.332,206.704c-112,106.664-254.641,225.734-450.236,243.274
								c-292.895,26.267-344.305-221.692-666.143-175.696C182.368,302.143,73.462,200.656,0,101.95V906.98
								c57.175-1.451,159.376-20.053,294.157-110.032c209.979-140.182,416.508-201.522,585.96-200.824
								c144.338,0.598,225.988,11.57,451.977,79.568C1558.08,743.688,1600,878.109,1600,878.109V-0.142z"/>
						</g>
					</g>
				</svg>
				</Tween>
				<Tween position="0" from={{ top: '30%' }} to={{ top: '25%' }}>
					<svg version="1.1" id="bg-layer-5" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1600px" height="528px" viewBox="0 0 1600 528" enableBackground="new 0 0 1600 528" space="preserve">
					<g>
						<g>
							<linearGradient id="bg-element-9" gradientUnits="userSpaceOnUse" x1="800.0005" y1="526.6572" x2="800.0005" y2="0">
								<stop  offset="0" stopColor="#8162AA"/>
								<stop  offset="1" stopColor="#C860A5"/>
							</linearGradient>
							<path fill="url(#bg-element-9)" d="M1600,0c-3.164,3.634-128.668,146.669-341.902,227.621c-215.99,81.996-457.975,8-489.975,0
								c-32-8.001-142.436-51.165-251.593-80.732c-75.677-20.498-210.384-10.978-298.38-0.978C130.154,155.911,0,85.912,0,85.912v440.745
								c17.186-1.965,44.423-5.963,84.157-14.096c78.156-16,232.417-93.566,372.36-143.451C667.59,293.871,877,294.563,960.002,303.901
								c150.424,16.928,224.723,13.323,398.09,47.998c157.281,31.457,239.18,136.352,241.908,139.896V0z"/>
						</g>
						<defs>
							<filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0" y="0" width="1600" height="526.658">
								
									<feColorMatrix  type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" colorInterpolationFilters="sRGB" result="source"/>
							</filter>
						</defs>
						<mask maskUnits="userSpaceOnUse" x="0" y="0" width="1600" height="526.658" id="bg-element-10">
							<g filter="url(#Adobe_OpacityMaskFilter)">
								<image overflow="visible" width="6684" height="2212" href={process.env.PUBLIC_URL + '/7AAB493F82C671E.jpg'}  transform="matrix(0.24 0 0 0.24 -1.9995 -2.0005)">
								</image>
							</g>
						</mask>
						<g opacity="0.14" mask="url(#bg-element-10)">
							<path fill="#010101" d="M1600,0c-3.164,3.634-128.668,146.669-341.902,227.621c-215.99,81.996-457.975,8-489.975,0
								c-32-8.001-142.436-51.165-251.593-80.732c-75.677-20.498-210.384-10.978-298.38-0.978C130.154,155.911,0,85.912,0,85.912v440.745
								c17.186-1.965,44.423-5.963,84.157-14.096c78.156-16,232.417-93.566,372.36-143.451C667.59,293.871,877,294.563,960.002,303.901
								c150.424,16.928,224.723,13.323,398.09,47.998c157.281,31.457,239.18,136.352,241.908,139.896V0z"/>
						</g>
					</g>
				</svg>
				</Tween>
				<Tween position="0" from={{ top: '54%' }} to={{ top: '44%' }}>
					<svg version="1.1" id="bg-layer-6" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="358px" height="216px" viewBox="0 0 1600 216" enableBackground="new 0 0 358 216" space="preserve">
					<g>
						<g>
							<linearGradient id="bg-element-11" gradientUnits="userSpaceOnUse" x1="178.3359" y1="214.2393" x2="178.3359" y2="4.882812e-04">
								<stop  offset="0" stopColor="#AB61A7"/>
								<stop  offset="1" stopColor="#E460A2"/>
							</linearGradient>
							<path fill="url(#bg-element-11)" d="M356.649,74.233c-1.49-29.999-62.506-39.997-168.501-33.998C82.154,46.233,0,0,0,0v199.838
								c3.781,9.296,9.024,14.712,16.157,14.388c43.997-2,113.994-19.999,192.232-33.999C286.628,166.226,358.139,104.231,356.649,74.233
								z"/>
						</g>
						<defs>
							<filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0" y="0" width="356.672" height="214.239">
									<feColorMatrix  type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" colorInterpolationFilters="sRGB" result="source"/>
							</filter>
						</defs>
						<mask maskUnits="userSpaceOnUse" x="0" y="0" width="356.672" height="214.239" id="12">
							<g filter="url(#Adobe_OpacityMaskFilter)">
								<image overflow="visible" width="1503" height="910" href={process.env.PUBLIC_URL + '/E74E99EA13E5B7E0.jpg'}  transform="matrix(0.24 0 0 0.24 -2.0005 -2)">
								</image>
							</g>
						</mask>
						<g opacity="0.14" mask="url(#12)">
							<path fill="#010101" d="M356.649,74.233c-1.49-29.999-62.506-39.997-168.501-33.998C82.154,46.233,0,0,0,0v199.838
								c3.781,9.296,9.024,14.712,16.157,14.388c43.997-2,113.994-19.999,192.232-33.999C286.628,166.226,358.139,104.231,356.649,74.233
								z"/>
						</g>
					</g>
				</svg>
				</Tween>
			</Timeline>
		</Scene>
	</Controller>
)

export default AboutDesignElement;
