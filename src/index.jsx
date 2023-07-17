
import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Threejs/Experience'
import App from './components/App'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.querySelector('#root'))

// const mesh = new THREE.Mesh()
// mesh.geometry = new THREE.BoxGeometry(1, 1, 1)
// mesh.material = new THREE.MeshBasicMaterial({color: 'red'})
// Scene.add(mesh)

root.render(
    <>
    <Header/>
    <div id="mainContainer">
        <h1>ROME</h1>

    <section>
        
    </section>
    <Canvas>   
       <Experience/>  
    </Canvas>
    </div>
    </>
    
)