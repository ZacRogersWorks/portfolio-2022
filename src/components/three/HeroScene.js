import React, {useRef} from 'react';
import { Environment, Float, PerspectiveCamera } from '@react-three/drei'
import Ocean from './Ocean'
import { useFrame } from '@react-three/fiber';

const HeroScene = (props) => {
    const ref = useRef(null)
    const MOVE_SPEED = .01

    useFrame(({ clock }, delta) => {
        if (props.darkMode) ref.current.rotation.y += MOVE_SPEED * delta
        
        // mesh.current.position.x += Math.sin(delta / 30) * 2
    })

    return (
        <scene>
            <Float rotationIntensity={.2} floatIntensity={.1}>
                <PerspectiveCamera makeDefault ref={ref} position={[0, 5, 100]} fov={70} rotation={props.darkMode ? [0, -80 * (Math.PI / 180), 0] : [0, -130 * (Math.PI / 180), 0]} near={1} far={20000} />
            </Float>
            <Ocean />
            <Environment
            
                files={props.darkMode ? [
                    '/nebula-cubemap/px.png',
                    '/nebula-cubemap/nx.png',
                    '/nebula-cubemap/py.png',
                    '/nebula-cubemap/ny.png',
                    '/nebula-cubemap/pz.png',
                    '/nebula-cubemap/nz.png',
                ] :
                    [
                        '/sky-cubemap/px.png',
                        '/sky-cubemap/nx.png',
                        '/sky-cubemap/py.png',
                        '/sky-cubemap/ny.png',
                        '/sky-cubemap/pz.png',
                        '/sky-cubemap/nz.png',
                    ]}

                resolution={256} background />
        </scene>
    )
}

export default HeroScene