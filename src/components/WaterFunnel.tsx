import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// Water stream flowing down in a funnel shape
function WaterStream() {
  const streamRef = useRef<THREE.Points>(null)
  const particleCount = 3000
  
  const { positions, velocities, offsets } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount)
    const offsets = new Float32Array(particleCount)
    
    for (let i = 0; i < particleCount; i++) {
      // Distribute particles along the funnel path
      const progress = i / particleCount
      const angle = progress * Math.PI * 20 + Math.random() * Math.PI * 2
      
      // Funnel shape: wide at top, narrow at bottom
      const topRadius = 2.0
      const bottomRadius = 0.15
      const radius = topRadius * (1 - progress) + bottomRadius * progress + (Math.random() - 0.5) * 0.15
      
      // Height from top to bottom
      const topY = 4.5
      const bottomY = -1.8
      const y = topY - progress * (topY - bottomY) + (Math.random() - 0.5) * 0.3
      
      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = Math.sin(angle) * radius
      
      // Faster speed near the bottom (acceleration)
      velocities[i] = 0.015 + progress * 0.025
      offsets[i] = Math.random() * Math.PI * 2
    }
    
    return { positions, velocities, offsets }
  }, [])
  
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [positions])
  
  useFrame((state) => {
    if (!streamRef.current) return
    
    const positionArray = streamRef.current.geometry.attributes.position.array as Float32Array
    const time = state.clock.elapsedTime
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      let y = positionArray[i3 + 1]
      
      // Move down
      y -= velocities[i]
      
      // Calculate progress (0 at top, 1 at bottom)
      const topY = 4.5
      const bottomY = -1.8
      const progress = Math.max(0, Math.min(1, (topY - y) / (topY - bottomY)))
      
      // Funnel radius narrows as we go down
      const topRadius = 2.0
      const bottomRadius = 0.12
      const baseRadius = topRadius * (1 - progress) + bottomRadius * progress
      
      // Spiral rotation
      const spiralSpeed = 4 + progress * 6
      const angle = time * spiralSpeed + offsets[i] + progress * 15
      
      // Add slight turbulence
      const turbulence = Math.sin(time * 8 + i * 0.05) * 0.03 * (1 - progress)
      const currentRadius = baseRadius + turbulence
      
      positionArray[i3] = Math.cos(angle) * currentRadius
      positionArray[i3 + 2] = Math.sin(angle) * currentRadius
      
      // Reset particle to top when it reaches bottom
      if (y < bottomY) {
        y = topY + Math.random() * 0.5
        const newAngle = Math.random() * Math.PI * 2
        const newRadius = topRadius + (Math.random() - 0.5) * 0.3
        positionArray[i3] = Math.cos(newAngle) * newRadius
        positionArray[i3 + 2] = Math.sin(newAngle) * newRadius
      }
      
      positionArray[i3 + 1] = y
    }
    
    streamRef.current.geometry.attributes.position.needsUpdate = true
  })
  
  return (
    <points ref={streamRef} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        color="#00d4ff"
        transparent
        opacity={0.85}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Rising bubbles inside the funnel
function Bubbles() {
  const bubblesRef = useRef<THREE.Points>(null)
  const bubbleCount = 150
  
  const positions = useMemo(() => {
    const positions = new Float32Array(bubbleCount * 3)
    for (let i = 0; i < bubbleCount; i++) {
      const progress = Math.random()
      const angle = Math.random() * Math.PI * 2
      const topRadius = 2.0
      const bottomRadius = 0.15
      const radius = (topRadius * (1 - progress) + bottomRadius * progress) * 0.7
      const y = -1.5 + progress * 6
      
      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = Math.sin(angle) * radius
    }
    return positions
  }, [])
  
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [positions])
  
  useFrame((state) => {
    if (!bubblesRef.current) return
    
    const positionArray = bubblesRef.current.geometry.attributes.position.array as Float32Array
    const time = state.clock.elapsedTime
    
    for (let i = 0; i < bubbleCount; i++) {
      const i3 = i * 3
      let y = positionArray[i3 + 1]
      
      // Bubbles rise up
      y += 0.008 + Math.random() * 0.005
      
      // Follow the funnel shape
      const topY = 4.5
      const bottomY = -1.8
      const progress = Math.max(0, Math.min(1, (topY - y) / (topY - bottomY)))
      
      const topRadius = 2.0
      const bottomRadius = 0.15
      const baseRadius = (topRadius * (1 - progress) + bottomRadius * progress) * 0.6
      
      const angle = time * 2 + i * 0.2
      positionArray[i3] = Math.cos(angle) * baseRadius
      positionArray[i3 + 2] = Math.sin(angle) * baseRadius
      
      // Reset at top
      if (y > topY - 0.5) {
        y = bottomY + Math.random() * 0.5
        const newAngle = Math.random() * Math.PI * 2
        const newRadius = bottomRadius * 0.5
        positionArray[i3] = Math.cos(newAngle) * newRadius
        positionArray[i3 + 2] = Math.sin(newAngle) * newRadius
      }
      
      positionArray[i3 + 1] = y
    }
    
    bubblesRef.current.geometry.attributes.position.needsUpdate = true
  })
  
  return (
    <points ref={bubblesRef} geometry={geometry}>
      <pointsMaterial
        size={0.06}
        color="#a5f3fc"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Modern sink basin
function SinkBasin() {
  return (
    <group>
      {/* Inner basin surface - ceramic */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[3.0, 0.5, 2.8, 64, 1, true]} />
        <meshStandardMaterial 
          color="#fafafa" 
          metalness={0.1} 
          roughness={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Basin bottom */}
      <mesh position={[0, -1.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.4, 3.0, 64]} />
        <meshStandardMaterial 
          color="#f0f0f0" 
          metalness={0.1} 
          roughness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Outer basin */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[3.2, 2.8, 2.8, 64, 1, true]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.05} 
          roughness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Basin rim */}
      <mesh position={[0, 0.9, 0]}>
        <torusGeometry args={[3.1, 0.1, 16, 64]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.2} 
          roughness={0.15}
        />
      </mesh>
      
      {/* Drain hole - dark */}
      <mesh position={[0, -1.95, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.4, 32]} />
        <meshBasicMaterial color="#0a0a14" />
      </mesh>
      
      {/* Drain rim - chrome */}
      <mesh position={[0, -1.88, 0]}>
        <torusGeometry args={[0.4, 0.05, 8, 32]} />
        <meshStandardMaterial color="#d0d0d0" metalness={0.95} roughness={0.05} />
      </mesh>
      
      {/* Water surface at bottom */}
      <mesh position={[0, -1.7, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.35, 32]} />
        <meshStandardMaterial 
          color="#00a8cc" 
          metalness={0.3} 
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  )
}

// Lighting
function Lighting() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 6, 4]} intensity={1} color="#ffffff" />
      <pointLight position={[-4, 4, -4]} intensity={0.5} color="#00d4ff" />
      <pointLight position={[0, -2, 3]} intensity={0.4} color="#87ceeb" />
      <spotLight 
        position={[0, 8, 2]} 
        angle={0.4} 
        penumbra={0.3} 
        intensity={0.7}
        color="#ffffff"
      />
    </>
  )
}

// Camera setup
function CameraController() {
  const { camera } = useThree()
  
  useEffect(() => {
    camera.position.set(0, 1.5, 7)
    camera.lookAt(0, -0.3, 0)
  }, [camera])
  
  return null
}

// Main scene
function Scene() {
  return (
    <>
      <CameraController />
      <Lighting />
      <SinkBasin />
      <WaterStream />
      <Bubbles />
    </>
  )
}

// Export
export default function WaterFunnel() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 1.5, 7], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
