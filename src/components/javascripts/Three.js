import * as THREE from 'three';

const Three = (canvas) => {
    const camera = new THREE.PerspectiveCamera(90, canvas.clientWidth / canvas.clientHeight, 1, 11000);
    camera.position.z = 500;
    const scene = new THREE.Scene();
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const group = new THREE.Group();
    for (let i = 0; i < 100; i++) {
        function getRandomColorMaterial() {
            const color = new THREE.Color(
                Math.random(),
                Math.random(),
                Math.random()
            );
            return new THREE.MeshBasicMaterial({ color });
        }
        const materials = [
            getRandomColorMaterial(),
            getRandomColorMaterial(),
            getRandomColorMaterial(),
            getRandomColorMaterial(),
            getRandomColorMaterial(),
            getRandomColorMaterial()
        ];
        const mesh = new THREE.Mesh(geometry, materials);
        mesh.position.x = Math.random() * 2000 - 1000;
        mesh.position.y = Math.random() * 2000 - 1000;
        mesh.position.z = Math.random() * 2000 - 1000;
        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.matrixAutoUpdate = false;
        mesh.updateMatrix();
        group.add(mesh);
    }
    scene.add(group);
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    document.addEventListener("mousemove", onDocumentMouseMove, false);
    window.addEventListener("resize", onWindowResize, false);
    let mouseX = 0;
    let mouseY = 0;
    function onWindowResize() {
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    }
    function onDocumentMouseMove(event) {
        const windowHalfX = canvas.clientWidth / 2;
        const windowHalfY = canvas.clientHeight / 2;
        mouseX = (event.clientX - windowHalfX) * 10;
        mouseY = (event.clientY - windowHalfY) * 10;
    }
    function animate() {
        requestAnimationFrame(animate);
        render();
    }
    function render() {
        const time = Date.now() * .001;
        const rx = Math.sin(time * .7) * .5,
            ry = Math.sin(time * .3) * .5,
            rz = Math.sin(time * .2) * .5;
        camera.position.x += (mouseX - camera.position.x) * .05;
        camera.position.y += (-mouseY - camera.position.y) * .05;
        camera.lookAt(scene.position);
        group.rotation.x = rx;
        group.rotation.y = ry;
        group.rotation.z = rz;
        renderer.render(scene, camera);
    }
    animate();
    return {
        onWindowResize,
        animate
    };
}
export default Three;