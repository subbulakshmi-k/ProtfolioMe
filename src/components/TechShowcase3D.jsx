import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './TechShowcase3D.css';

const TechShowcase3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(300, 300);
    mount.appendChild(renderer.domElement);

    // Create cube with tech logos
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x61dafb }), // React
      new THREE.MeshBasicMaterial({ color: 0x68a063 }), // Node.js
      new THREE.MeshBasicMaterial({ color: 0xf7df1e }), // JavaScript
      new THREE.MeshBasicMaterial({ color: 0x764abc }), // Redux
      new THREE.MeshBasicMaterial({ color: 0x000000 }), // MongoDB
      new THREE.MeshBasicMaterial({ color: 0x1572b6 })  // CSS
    ];
    
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="tech-showcase-3d">
      <h3>My Tech Stack</h3>
      <div ref={mountRef} className="three-container"></div>
      <div className="tech-labels">
        <span className="tech-label">React</span>
        <span className="tech-label">Node.js</span>
        <span className="tech-label">MongoDB</span>
        <span className="tech-label">JavaScript</span>
      </div>
    </div>
  );
};

export default TechShowcase3D;
