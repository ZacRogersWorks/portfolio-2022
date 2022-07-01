import React from 'react';
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Instance, Instances } from '@react-three/drei';

const MOVE_SPEED = 5

const randomChance = (odds = .5) => {
    return Math.random() <= odds
}

const rng = (min, max) => {
    return Math.random() * (randomChance() ? min : max)
}

const bubbleProps = () => {
    return {
        radius: Math.random() * (.7 - .01) + .01,
        xPosition: rng(-15, 15),
        yPosition: ((Math.random() - .5) * 20) - 20,
        zPosition: rng(-5, 5)
    }
}

const bubbleInstance = Array.from({ length: 20 }, () => bubbleProps())

const Bubbles = () => {
    const ref = useRef()
    const [bubbleArray, setBubbleArray] = useState(bubbleInstance)

    // useEffect(() => {
    //     // setInterval(() => {
    //         setBubbleArray(prev => {
    //             let newArray = [...prev]
    //             console.log('newArray', newArray)
    //             newArray.push({
    //                 radius: Math.random(),
    //                 xPosition: rng(-15, 15),
    //                 yPosition: ((Math.random() - .5) * 20) - 10,
    //                 zPosition: rng(-5, 5)
    //             })
    //             return newArray
    //         })
    //     // })
    // }, [])

    return (
        <Instances limit={50} ref={ref} position={[0, 0, 0]}>
            <sphereGeometry args={[1, 12, 12]} />
            <meshPhysicalMaterial
                metalness={0}
                roughness={0}
                transmission={1}
                thickness={.6}
            />
            <Bubble />
            {
                bubbleArray && bubbleArray.map((data, i) => (
                    <Bubble key={i}
                        scale={data.radius}
                        xPosition={data.xPosition}
                        yPosition={data.yPosition}
                        zPosition={data.zPosition}
                    />
                ))
            }
        </Instances>
    )
}

const Bubble = ({ scale, xPosition, yPosition, zPosition }) => {
    const ref = useRef(null)
    const MOVE_SPEED = (Math.random() * (5 - 2.5)) + 2.5;

    useEffect(() => {
        ref.current.scale.x = scale
        ref.current.scale.y = scale
        ref.current.scale.z = scale
        ref.current.position.x = xPosition
        ref.current.position.y = yPosition
        ref.current.position.z = zPosition
        setInterval(() => {
            if (ref.current.position != null) {
                ref.current.position.z = rng(-15, 15)
                ref.current.position.y = ((Math.random() - .5) * 20) - 20
                ref.current.position.z = rng(-5, 5)
            }
        },  (Math.random() * (18000 - 14000) + 14000));
    }, [])

    useFrame(({ clock }, delta) => {
        ref.current.position.y += MOVE_SPEED * delta
    })

    return (
        <Instance ref={ref} />
    )
}

export default Bubbles