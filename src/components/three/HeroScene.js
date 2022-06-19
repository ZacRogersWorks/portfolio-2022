import React from 'react';
import { Environment, Float, PerspectiveCamera } from '@react-three/drei'
import Ocean from './Ocean'

const HeroScene = (props) => {
    
    return (
        <scene>
            <Float rotationIntensity={.2} floatIntensity={.1}>
                <PerspectiveCamera makeDefault position={[0, 5, 100]} fov={110} rotation={[0, -80 * (Math.PI / 180), 0]} near={1} far={20000} />
            </Float>
                <Ocean />
                <Environment files={props.darkMode ? '/nebula.hdr' : '/sky.hdr'} resolution={1024} background />
        </scene>
    )
}

export default HeroScene