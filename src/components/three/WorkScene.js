import React from 'react';
import { PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'

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