import React, { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Instances } from '@react-three/drei'

const clamp = (value, min, max) => {
    if (value <= min) return min
    if (value >= max) return max
    return value
}

const randomChance = (odds = .5) => {
    return Math.random() <= odds
}

const rng = (min, max) => {
    return Math.random() * (randomChance() ? min : max)
}

const Bubble = ({ id }) => {

    const mesh = useRef(null)
    const [size, setSize] = useState([])
    const [position, setPosition] = useState([])

    const MOVE_SPEED = 5

    useFrame(({ clock }, delta) => {
        mesh.current.position.y += MOVE_SPEED * delta
        // mesh.current.position.x += Math.sin(delta / 30) * 2
    })

    useEffect(() => {
        //Random size
        const radius = Math.random() * .5
        setSize([radius, 12, 12])

        //Random position
        const x = rng(-15, 15)
        const y = ((Math.random() - .5) * 20) - 10
        const z = rng(-5, 5)
        setPosition([x, y, z])
    }, [])

    return (
        <mesh ref={mesh}
            position={position}
        >
            <sphereBufferGeometry args={size} />
            <meshPhysicalMaterial
                metalness={0}
                roughness={0}
                transmission={1}
                thickness={.6}
            />
        </mesh>
    )
}

export default Bubble