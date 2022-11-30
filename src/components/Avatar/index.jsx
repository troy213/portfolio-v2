import { useEffect, useRef } from 'react'

const Avatar = () => {
  const backHairRef = useRef()
  const earsRef = useRef()
  const faceRef = useRef()
  const frontHairRef = useRef()
  const eyeBrowsRef = useRef()
  const noseRef = useRef()
  const mouthRef = useRef()
  const glassesRef = useRef()
  const eyesRef = useRef()

  const animate = (e) => {
    const innerWidth = window.innerWidth
    const innerHeight = window.innerHeight

    const backHairRect = backHairRef.current.getBoundingClientRect()
    const earsRect = earsRef.current.getBoundingClientRect()
    const faceRect = faceRef.current.getBoundingClientRect()
    const frontHairRect = frontHairRef.current.getBoundingClientRect()
    const eyeBrowsRect = eyeBrowsRef.current.getBoundingClientRect()
    const noseRect = noseRef.current.getBoundingClientRect()
    const mouthRect = mouthRef.current.getBoundingClientRect()
    const glassesRect = glassesRef.current.getBoundingClientRect()
    const eyesRect = eyesRef.current.getBoundingClientRect()

    const mouseRelativeBackHairX = e.clientX - backHairRect.left
    const mouseRelativeBackHairY = e.clientY - backHairRect.top
    const mouseRelativeEarsX = e.clientX - earsRect.left
    const mouseRelativeEarsY = e.clientY - earsRect.top
    const mouseRelativeFaceX = e.clientX - faceRect.left
    const mouseRelativeFaceY = e.clientY - faceRect.top
    const mouseRelativeFrontHairX = e.clientX - frontHairRect.left
    const mouseRelativeFrontHairY = e.clientY - frontHairRect.top
    const mouseRelativeEyeBrowsX = e.clientX - eyeBrowsRect.left
    const mouseRelativeEyeBrowsY = e.clientY - eyeBrowsRect.top
    const mouseRelativeNoseX = e.clientX - noseRect.left
    const mouseRelativeNoseY = e.clientY - noseRect.top
    const mouseRelativeMouthX = e.clientX - mouthRect.left
    const mouseRelativeMouthY = e.clientY - mouthRect.top
    const mouseRelativeGlassesX = e.clientX - glassesRect.left
    const mouseRelativeGlassesY = e.clientY - glassesRect.top
    const mouseRelativeEyesX = e.clientX - eyesRect.left
    const mouseRelativeEyesY = e.clientY - faceRect.top

    const backHairX = (mouseRelativeBackHairX / innerWidth) * 6 * -1
    const backHairY = (mouseRelativeBackHairY / innerHeight) * 7 * -1
    const earsX = (mouseRelativeEarsX / innerWidth) * 5 * -1
    const earsY = (mouseRelativeEarsY / innerHeight) * 10 * -1
    const faceX = (mouseRelativeFaceX / innerWidth) * 5
    const faceY = (mouseRelativeFaceY / innerHeight) * 5
    const frontHairX = (mouseRelativeFrontHairX / innerWidth) * 10
    const frontHairY = (mouseRelativeFrontHairY / innerHeight) * 10
    const eyeBrowsX = (mouseRelativeEyeBrowsX / innerWidth) * 15
    const eyeBrowsY = (mouseRelativeEyeBrowsY / innerHeight) * 18
    const noseX = (mouseRelativeNoseX / innerWidth) * 15
    const noseY = (mouseRelativeNoseY / innerHeight) * 15
    const mouthX = (mouseRelativeMouthX / innerWidth) * 15
    const mouthY = (mouseRelativeMouthY / innerHeight) * 15
    const glassesX = (mouseRelativeGlassesX / innerWidth) * 15
    const glassesY = (mouseRelativeGlassesY / innerHeight) * 15
    const eyesX = (mouseRelativeEyesX / innerWidth) * 25
    const eyesY = (mouseRelativeEyesY / innerHeight) * 25

    backHairRef.current.style.transform = `translate(${backHairX}px, ${backHairY}px)`
    earsRef.current.style.transform = `translate(${earsX}px, ${earsY}px)`
    faceRef.current.style.transform = `translate(${faceX}px, ${faceY}px)`
    frontHairRef.current.style.transform = `translate(${frontHairX}px, ${frontHairY}px)`
    eyeBrowsRef.current.style.transform = `translate(${eyeBrowsX}px, ${eyeBrowsY}px)`
    noseRef.current.style.transform = `translate(${noseX}px, ${noseY}px)`
    mouthRef.current.style.transform = `translate(${mouthX}px, ${mouthY}px)`
    glassesRef.current.style.transform = `translate(${glassesX}px, ${glassesY}px)`
    eyesRef.current.style.transform = `translate(${eyesX}px, ${eyesY}px)`
  }

  useEffect(() => {
    document.getElementById('hero').addEventListener('mousemove', animate)

    return () => {
      document.removeEventListener('mousemove', animate)
    }
  }, [])

  return (
    <div className='svg__container hidden'>
      <svg
        version='1.1'
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 175.932 500 398.104'
        enableBackground='new 0 175.932 500 398.104'
      >
        <g id='blob'>
          <path
            id='blob-l'
            fill='#576CDB'
            d='M487.582,303.344c-25.803-72.49-94.606-135.561-151.943-126.551
		c-57.337,9.01-103.617,90.101-169.144,144.161C100.558,374.604,15.372,401.637,1.857,445.458
		c-13.105,43.413,45.46,103.616,103.206,122.046c25.935,8.093,51.539,7.758,77.518,3.896c31.866-4.737,64.294-14.78,98.588-21.098
		c17.193-3.28,34.854-5.624,52.303-8.16c45.729-6.646,89.994-14.618,120.526-44.263
		C496.592,457.335,513.793,375.424,487.582,303.344z'
          />
          <path
            id='blob-s'
            fill='#DB896E'
            d='M40.645,248.762c4.228,11.878,11.792,19.681,24.896,20.735
		c9.479,0.763,20.709-3.064,32.28-10.801c12.645-8.455,21.978-22.58,22.41-33.22c0.302-7.424-7.448-16.977-16.91-19.998
		c-4.25-1.326-8.446-1.271-12.703-0.638c-5.22,0.776-10.533,2.421-16.152,3.457c-2.819,0.538-5.711,0.922-8.57,1.338
		c-7.493,1.089-14.746,2.395-19.749,7.252C39.169,223.531,36.351,236.951,40.645,248.762z'
          />
          <path
            id='blob-xs'
            fill='#8153DB'
            d='M429.66,552.245c0,0,8.362-20.269,32.492-11.304c24.131,8.963,18.241,17.536,18.241,17.536
		s-6.27,18.704-33.062,12.859C420.541,565.49,429.66,552.245,429.66,552.245z'
          />
        </g>
        <g id='hero'>
          <path
            id='shadow'
            display='none'
            fill='#4F64BF'
            d='M139.746,374.033c0,0,7.23,96.018,104.742,96.018
		s104.785-94.063,104.785-94.063S346.971,349.563,240,349.563C133.029,349.563,139.746,374.033,139.746,374.033z'
          />
          <path
            id='jacket'
            fill='#2B3C8F'
            d='M250,484.552c-52.805,0-96.549,38.795-104.285,89.438c12.255,0.284,24.519-0.738,36.867-2.573
		c31.866-4.737,64.294-14.78,98.588-21.098c17.193-3.28,34.854-5.624,52.303-8.16c3.272-0.476,6.536-0.96,9.789-1.456
		C325.552,507.305,290.436,484.552,250,484.552z'
          />
          <path
            id='shirt'
            fill='#FFFFFF'
            d='M266.235,485.809c-5.293-0.818-10.712-1.257-16.235-1.257c-9.706,0-19.104,1.315-28.029,3.769
		c-0.15,0.766-0.232,1.547-0.232,2.342v72.966c14.896-3.46,30.021-7.254,45.5-10.535v-62.431
		C267.238,488.973,266.887,487.344,266.235,485.809z'
          />
          <path
            id='back-hair'
            fill='#333333'
            d='M142,385.645c0,0-56.023-161.145,102.488-161.145s103.195,161.145,103.195,161.145
		S301,465.334,247,465.334S142,385.645,142,385.645z'
            ref={backHairRef}
          />
          <path
            id='neck'
            fill='#EDE3D1'
            d='M267.238,511.742c0,13.489-10.186,24.425-22.75,24.425l0,0c-12.564,0-22.75-10.936-22.75-24.425
		v-67.817c0-13.489,10.186-24.425,22.75-24.425l0,0c12.564,0,22.75,10.936,22.75,24.425V511.742z'
          />
          <path
            id='neck-shadow'
            fill='#EFCEB9'
            d='M267.238,472.973c0,10.077-10.186,18.246-22.75,18.246l0,0
		c-12.564,0-22.75-8.169-22.75-18.246v-17.51c0-10.077,10.186-18.246,22.75-18.246l0,0c12.564,0,22.75,8.169,22.75,18.246V472.973z'
          />
          <g id='ears' ref={earsRef}>
            <g id='Ear'>
              <circle fill='#EDE3D1' cx='153.155' cy='405.084' r='22.416' />
              <path
                fill='#CCAF9F'
                d='M142,395.5c0,0,16.25-6.75,20.25,7.75h-3.219C159.031,403.25,156.688,391.188,142,395.5z'
              />
            </g>
            <g id='Ear_1_'>
              <circle fill='#EDE3D1' cx='336.529' cy='405.084' r='22.416' />
              <path
                fill='#CCAF9F'
                d='M347.684,395.5c0,0-16.25-6.75-20.25,7.75h3.219C330.652,403.25,332.996,391.188,347.684,395.5z'
              />
            </g>
          </g>
          <path
            id='face'
            fill='#EDE3D1'
            d='M330.822,392.387c0,40.287-32.236,72.947-72,72.947h-28.667c-39.765,0-72-32.66-72-72.947
		v-59.438c0-40.288,32.235-72.947,72-72.947h28.667c39.764,0,72,32.659,72,72.947V392.387z'
            ref={faceRef}
          />
          <path
            id='front-hair'
            fill='#333333'
            d='M337.559,332c0,0-57.846-9.002-79.346-40.5c0,0,6.5,26.5,24.5,36.5c0,0-47.5,6-76.5-51
		c0,0-17.117,54-53.059,57.5c0,0,4.559-12.5,4.059-28.75S171.236,237,246.225,237S337.559,274.5,337.559,332z'
            ref={frontHairRef}
          />
          <g id='mouth' ref={mouthRef}>
            <path
              id='mouth-closed'
              fill='none'
              stroke='#CCAF9F'
              strokeWidth='3'
              strokeMiterlimit='10'
              d='M219.625,431
			c15.583,6.688,44.875,0,50.313-8.563'
            />
            <g id='mouth-opened' display='none'>
              <path
                id='mouth-open'
                display='inline'
                fill='#000333'
                d='M216.822,427.291c-0.375,24,54.5,25.167,55.333-1.5
				c-2.5-10.917-13.083-3.583-27.458-3.333C230.197,422.416,216.885,414.229,216.822,427.291z'
              />
              <path
                id='tounge'
                display='inline'
                fill='#FF9494'
                d='M222.47,439.007c9.863,8.207,30.254,8.841,41.611,1.005
				C257.781,427.724,232.298,421.59,222.47,439.007z'
              />
            </g>
          </g>
          <path
            id='nose'
            fill='none'
            stroke='#E2C4B3'
            strokeWidth='2'
            strokeMiterlimit='10'
            d='M232.75,398.591
		c3.75,5.909,10.917,5.909,14.5,0'
            ref={noseRef}
          />
          <g id='eyes' ref={eyesRef}>
            <g id='eyes-open'>
              <ellipse
                id='right-eyes'
                fill='#333333'
                cx='205.5'
                cy='372.668'
                rx='7.667'
                ry='10'
              />
              <ellipse
                id='left-eyes'
                fill='#333333'
                cx='274.905'
                cy='372.668'
                rx='7.667'
                ry='10'
              />
            </g>
            <g id='eyes-blink'>
              <path
                id='right-eyes-blink'
                fill='none'
                stroke='#333333'
                strokeWidth='2'
                strokeMiterlimit='10'
                d='M198.871,371.933
				c2.712,3.719,10.925,3.564,13.25,0'
              />
              <path
                id='left-eyes-blink'
                fill='none'
                stroke='#333333'
                strokeWidth='2'
                strokeMiterlimit='10'
                d='M268.28,371.933
				c2.711,3.719,10.926,3.564,13.25,0'
              />
            </g>
          </g>
          <g id='eyebrows' ref={eyeBrowsRef}>
            <path
              id='right-eyebrow'
              fill='none'
              stroke='#CCAF9F'
              strokeWidth='3'
              strokeMiterlimit='10'
              d='M192.797,346.514
			c6.813-9.188,21-7,25,0'
            />
            <path
              id='left-eyebrow'
              fill='none'
              stroke='#CCAF9F'
              strokeWidth='3'
              strokeMiterlimit='10'
              d='M262.202,346.514
			c6.813-9.188,21-7,25,0'
            />
          </g>
          <g id='glasses' ref={glassesRef}>
            <circle
              fill='none'
              stroke='#555555'
              strokeWidth='3'
              strokeMiterlimit='10'
              cx='204.196'
              cy='378.152'
              r='28.59'
            />
            <circle
              fill='none'
              stroke='#555555'
              strokeWidth='3'
              strokeMiterlimit='10'
              cx='274.94'
              cy='378.152'
              r='28.589'
            />
            <path
              fill='none'
              stroke='#555555'
              strokeWidth='3'
              strokeMiterlimit='10'
              d='M231.25,368.887
			c4.786-5.429,12.943-5.134,16.708,0'
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Avatar
