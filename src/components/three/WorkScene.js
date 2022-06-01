import React, { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { LayerMaterial,  Depth, Noise } from 'lamina'

import Gradient from './Gradient'

const WorkScene = ({darkMode}) => {
    return (
        <scene>
      <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={50} near={1} far={20000} />
      <Suspense fallback={null} >
        <Gradient darkMode={darkMode} />
      </Suspense>
    </scene>
    )
}

export default WorkScene