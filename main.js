import {cube, pyramid, square} from './models.js';
//import {doubleSquare} from './models.js';
import {Camera} from './camera.js';
import {toMesh} from './mesh.js';
import {createRenderer} from './render.js';

const canvas = document.querySelector('canvas');

const render = createRenderer(canvas);

const scene = [
    toMesh(cube),
    toMesh(pyramid),
    toMesh(square)
];

scene[0].color = 'red';
scene[1].color = 'blue';
scene[2].color = 'yellow';

const mesh = toMesh(cube);

const camera = new Camera();
camera.pos.z = 200;
camera.zoom = 12;

function animate(time) {
    camera.pos.z += 0.1;

    {
        const mesh = scene[0];
        mesh.rotation.x += 0.1;
        mesh.rotation.y += 0.01;
        mesh.rotation.z += 0.1;

        mesh.position.x = Math.sin(time / 300) * 50;
        mesh.position.y = Math.cos(time / 500) * 80;
    }

    {
        const mesh = scene[1];
        mesh.rotation.x -= 0.1;
        mesh.rotation.y += 0.03;

        mesh.position.x = Math.cos(time / 800) * 80;
    }


    {
        const mesh = scene[2];
        mesh.rotation.x -= 0.01;
        mesh.rotation.y += 0.0001;

        mesh.position.x = Math.sin(time / 300) * 80;
    }

    render(scene, camera);
    requestAnimationFrame(animate);
}

animate(0);
//drawMesh(mesh);
console.log(mesh);