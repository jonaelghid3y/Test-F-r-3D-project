import { useFrame } from "@react-three/fiber"
import {useRef} from 'react'


export default function Experience() {

    const Cuberef = useRef()
    const planeRef = useRef()

    useFrame(()=>{

        
        Cuberef.current.rotation.y += 0.01
        planeRef.current.rotation.y += 0.01
    })

    return <>
        <mesh ref={Cuberef} position-y = {2}  >
            <sphereGeometry />
            <meshBasicMaterial  color={'purple'} wireframe/>

        </mesh>

        <mesh position-x = {2} >
            <boxGeometry  />
            <meshBasicMaterial  color={'purple'} wireframe/>

        </mesh>

        <mesh ref={planeRef} position-x = {-2}  >
            <planeGeometry />
            <meshBasicMaterial  color={'purple'} wireframe/>

        </mesh>
    </>
}