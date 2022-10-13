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
                    '/nebula-cubemap/px.jpg',
                    '/nebula-cubemap/nx.jpg',
                    '/nebula-cubemap/py.jpg',
                    '/nebula-cubemap/ny.jpg',
                    '/nebula-cubemap/pz.jpg',
                    '/nebula-cubemap/nz.jpg',
                ] :
                    [
                        '/sky-cubemap/px.jpg',
                        '/sky-cubemap/nx.jpg',
                        '/sky-cubemap/py.jpg',
                        '/sky-cubemap/ny.jpg',
                        '/sky-cubemap/pz.jpg',
                        '/sky-cubemap/nz.jpg',
                    ]}

                resolution={256} background />
        </scene>
    )
}

export default HeroScene