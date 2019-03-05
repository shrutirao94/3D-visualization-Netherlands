let canvas = document.getElementById ('fullscreen');
let SCREEN_WIDTH = window.innerWidth;
let SCREEN_HEIGHT = window.innerHeight;
let camera, scene, renderer;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth;
let windowHalfY = window.innerHeight;

// document.addEventListener( 'mousemove', onDocumentMouseMove, false );
window.addEventListener('resize', onWindowResize, false);

function init(file) {
  //CAMERA
  camera = new THREE.PerspectiveCamera(50, SCREEN_WIDTH / SCREEN_HEIGHT, 0.01, 100000);
  camera.position.z = 10000;

  //SCENE
  scene = new THREE.Scene();
  // scene.background = new THREE.Color(0x29a329);

  // LIGHTS
  let hemisphere = new THREE.HemisphereLight(0x040404);
  scene.add(hemisphere);

  let light = new THREE.SpotLight(0xffeedd, 1.2, 650, Math.PI / 6);
  light.position.set(0, - 100, 500);

  light.castShadow = true;
  light.shadow.mapWidth = 1024;
  light.shadow.mapHeight = 1024;

  controls = new THREE.TrackballControls( camera );
        controls.rotateSpeed = 5.0;
        controls.zoomSpeed = 2;
        controls.panSpeed = 1;
        controls.noZoom = false;
        controls.noPan = false;
        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.5;
        controls.keys = [ 65, 83, 68 ];
        controls.addEventListener( 'change', render );


  // RENDERER
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
  renderer.domElement.style.position = "relative";

  renderer.gammaInput = true;
  renderer.gammaOutput = true;
  renderer.shadowMap.enabled = true;

  // EVENTS

  let loader = new THREE.CTMLoader();
  console.log(file);
  loader.load(file, function (geometry) {
    let material = new THREE.MeshLambertMaterial(0xbf8040);
    material.roughness = 0.50; // attenuates roughnessMap
    material.metalness = 0.50; // attenuates metalnessMap

    callbackModel(geometry, 1, material, 0, 0, 0, 0, 0);
  }, function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    { useWorker: true });
}

function callbackModel(geometry, s, material, x, y, z, rx, ry) {
  let mesh = new THREE.Mesh( geometry, material );

  mesh.position.set( x, y, z );
  mesh.scale.set( s, s, s );
  mesh.rotation.x = rx;
  mesh.rotation.z = ry;
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  scene.add(mesh);
}

function onWindowResize() {
  SCREEN_WIDTH = window.innerWidth;
  SCREEN_HEIGHT = window.innerHeight;
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
  camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
  camera.updateProjectionMatrix();
}

function onDocumentMouseMove( event ) {
  // event.preventDefault();
  mouseX = ( event.clientX - windowHalfX );
  mouseY = ( event.clientY - windowHalfY );
}

// function onMouseWheel( event ) {
// 	event.preventDefault();
// }

function animate() {
  requestAnimationFrame(animate);
  render();
  controls.update();

}

function render() {
  // camera.position.x += ( mouseX - camera.position.x ) * .05;
  // camera.position.y += ( mouseY - camera.position.y ) * .05;
  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}

function main(num) {
  let file = `assets/tile_${num}.ctm`

  init(file);
  animate();
  canvas.style.display = 'inline-block';
}
