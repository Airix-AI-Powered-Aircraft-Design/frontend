"use client"
import { useGLTF } from '@react-three/drei'
// import { useControls } from 'leva'

export function HomePageModel(props: any){

    const { scene } = useGLTF('/models/f-22_raptor.glb')

    // Finalized Coordinates
    const position: [number, number, number] = [9.5, -16.0, -35.6]
    const rotation: [number, number, number] = [-0.23, 3.35, 0.00]

    /* 
    const { posX, posY, posZ } = useControls('Position', {
        posX: { value: 9.5, min: -100, max: 100, step: 0.1 },
        posY: { value: -16.0, min: -100, max: 100, step: 0.1 },
        posZ: { value: -35.6, min: -200, max: 100, step: 0.1 },
    })

    const { rotX, rotY, rotZ } = useControls('Rotation', {
        rotX: { value: -0.23, min: -Math.PI, max: 6, step: 0.01 },
        rotY: { value: 3.35, min: -Math.PI, max: 6, step: 0.01 },
        rotZ: { value: 0.00, min: -Math.PI, max: 6, step: 0.01 },
    })
    */

    return <primitive object={scene} scale={1} position={position} rotation={rotation} {...props} />

}