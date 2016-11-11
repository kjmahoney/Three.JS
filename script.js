var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("myCanvas"), antialias:true});
//set the default color of the scene
renderer.setClearColor();
//sets pixel ratio
renderer.setPixelRatio(window.devicePixelRatio);
//set size of canvas
renderer.setSize(window.innerWidth,window.innerHeight);


//parameters: Field of view, aspect ratio, near, far = tihings too close or far no longer re render
var camera =new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
// container object that holds everything
var scene = new THREE.Scene();
camera.position.set(0,0,0)//default value

//parameters: color, intensity
var light = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(light)
//works from the same point as our camera
var lightPoint = new THREE.PointLight(0xffffff, 0.5)
scene.add(lightPoint)

//defines each side of the shape
var geometry = new THREE.CubeGeometry(100,100,100)
//draws on the sides of the cubes
var material = new THREE.MeshNormalMaterial({
  color: 0xF3FFE2,
  wireframe: false
});
//enter variables into mesh
var mesh = new THREE.Mesh(geometry,material)
mesh.position.set(0,0,-1000) //change default here so that camera isnt on the mesh

scene.add(mesh);

//set up a render loop
requestAnimationFrame(render);

function render(){
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

renderer.render(scene,camera)
