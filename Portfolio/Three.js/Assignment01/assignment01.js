//declare recurrent global variables
const scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
const clock = new THREE.Clock();

//declare global variables
var trackballControl,
controls,
plane; //this will be used to limit the position of the new objects

var rotPlanetSpeed = 0;
var rotMoonSpeed = 0;
var cameraZoom = 250;

function init() {
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;

    camera.lookAt(scene.position);

    trackballControl = new THREE.TrackballControls(camera, renderer.domElement);

}

function createCameraAndLights() {
    camera.position.x = 120 + cameraZoom;
    camera.position.y = 60 + cameraZoom;
    camera.position.z = 80 + cameraZoom;
    camera.lookAt(scene.position);

    // add subtle ambient lighting
    var ambientLight = new THREE.AmbientLight(0x292929);
    scene.add(ambientLight);

    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(-20, 40, 60);
    scene.add(directionalLight);
}

function createGeometry() {

    let sunGeometry = new THREE.SphereGeometry(20, 32, 32);
    let sunMaterial = new THREE.MeshPhongMaterial(
        {
        color: 0xffff00, specular: 0x0000ff
        });
    let sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add( sun );

    let earthGeometry = new THREE.SphereGeometry(5, 32, 32);
    let earthMaterial = new THREE.MeshPhongMaterial(
        {
        color: 0x0066cc
        });
    let earth = new THREE.Mesh(earthGeometry, earthMaterial);

    

    let moonGeometry = new THREE.SphereGeometry(1.5, 15, 15);
    let moonMaterial = new THREE.MeshPhongMaterial(
        {
        color: 0x666633
        });
    let moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.translateX(5);
    moon.translateY(5);

    let mercuryGeometry = new THREE.SphereGeometry(3, 15, 15);
    let mercuryMaterial = new THREE.MeshPhongMaterial(
        {
        color: 0x999966
        });
    let mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

    let venusGeometry = new THREE.SphereGeometry(5, 15, 15);
    let venusMaterial = new THREE.MeshPhongMaterial(
        {
        color: 0xffcc80
        });
    let venus = new THREE.Mesh(venusGeometry, venusMaterial);

    let marsGeometry = new THREE.SphereGeometry(3, 15, 15);
    let marsMaterial = new THREE.MeshPhongMaterial(
        {
        color: 0xff9900
        });
    let mars = new THREE.Mesh(marsGeometry, marsMaterial);

    //Jupiter
    let jupiterGeometry = new THREE.SphereGeometry(10, 15, 15);
    let jupiterMaterial = new THREE.MeshPhongMaterial(
        {
        color: 0xfff9e6
        });
    let jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
    
    let jupiterMoon1Geometry = new THREE.SphereGeometry(1.5, 15, 15);
    let jupiterMoon1Material = new THREE.MeshPhongMaterial(
        {
        color: 0xf9e6ff
        });
    let jupiterMoon1 = new THREE.Mesh(jupiterMoon1Geometry, jupiterMoon1Material);
    jupiterMoon1.translateX(10);
    jupiterMoon1.translateY(5);

    let jupiterMoon2Geometry = new THREE.SphereGeometry(1.5, 15, 15);
    let jupiterMoon2Material = new THREE.MeshPhongMaterial(
        {
        color: 0xffff66
        });
    let jupiterMoon2 = new THREE.Mesh(jupiterMoon2Geometry, jupiterMoon2Material);
    jupiterMoon2.translateX(15);
    jupiterMoon2.translateY(5);

    let jupiterMoon3Geometry = new THREE.SphereGeometry(1.5, 15, 15);
    let jupiterMoon3Material = new THREE.MeshPhongMaterial(
        {
        color: 0xd24dff
        });
    let jupiterMoon3 = new THREE.Mesh(jupiterMoon3Geometry, jupiterMoon3Material);
    jupiterMoon3.translateX(20);
    jupiterMoon3.translateY(5);

    let jupiterMoon4Geometry = new THREE.SphereGeometry(1.5, 15, 15);
    let jupiterMoon4Material = new THREE.MeshPhongMaterial(
        {
        color: 0xff9966
        });
    let jupiterMoon4 = new THREE.Mesh(jupiterMoon4Geometry, jupiterMoon4Material);
    jupiterMoon4.translateX(25);
    jupiterMoon4.translateY(5);

    let jupiterMoon5Geometry = new THREE.SphereGeometry(1.5, 15, 15);
    let jupiterMoon5Material = new THREE.MeshPhongMaterial(
        {
        color: 0xffffff
        });
    let jupiterMoon5 = new THREE.Mesh(jupiterMoon5Geometry, jupiterMoon5Material);
    jupiterMoon5.translateX(30);
    jupiterMoon5.translateY(5);


    //Saturn
    let saturnGeometry = new THREE.SphereGeometry(8, 15, 15);
    let saturnMaterial = new THREE.MeshPhongMaterial(
        {
        color: 0xffc266
        });
    let saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
    let saturnRingGeometry = new THREE.CircleGeometry( 15, 50 );
    let saturnRingMaterial = new THREE.MeshBasicMaterial( { color: 0xffcc80 } );
    let saturnRing = new THREE.Mesh( saturnRingGeometry, saturnRingMaterial );
    saturnRing.material.side = THREE.DoubleSide;
    saturnRing.rotation.x = 80;
    
    let saturnMoon1Geometry = new THREE.SphereGeometry(1.5, 15, 15);
    let saturnMoon1Material = new THREE.MeshPhongMaterial(
        {
        color: 0xfff2e6
        });
    let saturnMoon1 = new THREE.Mesh(saturnMoon1Geometry, saturnMoon1Material);
    saturnMoon1.translateX(10);
    saturnMoon1.translateY(5);

    let saturnMoon2Geometry = new THREE.SphereGeometry(1.5, 15, 15);
    let saturnMoon2Material = new THREE.MeshPhongMaterial(
        {
        color: 0xffd9b3
        });
    let saturnMoon2 = new THREE.Mesh(saturnMoon2Geometry, saturnMoon2Material);
    saturnMoon2.translateX(15);
    saturnMoon2.translateY(5);

    let saturnMoon3Geometry = new THREE.SphereGeometry(1.5, 15, 15);
    let saturnMoon3Material = new THREE.MeshPhongMaterial(
        {
        color: 0xffbf80
        });
    let saturnMoon3 = new THREE.Mesh(saturnMoon3Geometry, saturnMoon3Material);
    saturnMoon3.translateX(20);
    saturnMoon3.translateY(5);

    //Uranus
    let uranusGeometry = new THREE.SphereGeometry(6, 15, 15);
    let uranusMaterial = new THREE.MeshPhongMaterial(
        {
        color: 0x00bfff
        });
    let uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);

    let neptuneGeometry = new THREE.SphereGeometry(6, 15, 15);
    let neptuneMaterial = new THREE.MeshPhongMaterial(
        {
        color: 0x0000cc
        });
    let neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);

    let plutoGeometry = new THREE.SphereGeometry(2, 15, 15);
    let plutoMaterial = new THREE.MeshPhongMaterial(
        {
        color: 0xff0000
        });
    let pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);

    //3D objecct groups
    earthMoonGroup = new THREE.Object3D();
    earthMoonGroup.add( moon );

    earthMoonPivet = new THREE.Object3D();
    earthMoonPivet.add( earthMoonGroup );
    scene.add(earthMoonPivet);

    earthGroup = new THREE.Object3D();
    earthGroup.add( earth );
    earthGroup.add( earthMoonPivet );
    scene.add( earthGroup );

    mercuryGroup = new THREE.Object3D();
    mercuryGroup.add( mercury );
    scene.add(mercuryGroup);

    venusGroup = new THREE.Object3D();
    venusGroup.add( venus );
    scene.add(venusGroup);

    marsGroup = new THREE.Object3D();
    marsGroup.add( mars );
    scene.add(marsGroup);
    
    //Jupiter
    jupiterMoon1Group = new THREE.Object3D();
    jupiterMoon1Group.add( jupiterMoon1 );
    jupiterMoon1Pivet = new THREE.Object3D();
    jupiterMoon1Pivet.add( jupiterMoon1Group );
    scene.add(jupiterMoon1Pivet);

    jupiterMoon2Group = new THREE.Object3D();
    jupiterMoon2Group.add( jupiterMoon2 );
    jupiterMoon2Pivet = new THREE.Object3D();
    jupiterMoon2Pivet.add( jupiterMoon2Group );
    scene.add(jupiterMoon2Pivet);

    jupiterMoon3Group = new THREE.Object3D();
    jupiterMoon3Group.add( jupiterMoon3 );
    jupiterMoon3Pivet = new THREE.Object3D();
    jupiterMoon3Pivet.add( jupiterMoon3Group );
    scene.add(jupiterMoon3Pivet);

    jupiterMoon4Group = new THREE.Object3D();
    jupiterMoon4Group.add( jupiterMoon4 );
    jupiterMoon4Pivet = new THREE.Object3D();
    jupiterMoon4Pivet.add( jupiterMoon4Group );
    scene.add(jupiterMoon4Pivet);

    jupiterMoon5Group = new THREE.Object3D();
    jupiterMoon5Group.add( jupiterMoon5 );
    jupiterMoon5Pivet = new THREE.Object3D();
    jupiterMoon5Pivet.add( jupiterMoon5Group );
    scene.add(jupiterMoon5Pivet);

    jupiterGroup = new THREE.Object3D();
    jupiterGroup.add( jupiter );
    jupiterGroup.add( jupiterMoon1Pivet );
    jupiterGroup.add( jupiterMoon2Pivet );
    jupiterGroup.add( jupiterMoon3Pivet );
    jupiterGroup.add( jupiterMoon4Pivet );
    jupiterGroup.add( jupiterMoon5Pivet );
    scene.add(jupiterGroup);

    //Saturn
    saturnMoon1Group = new THREE.Object3D();
    saturnMoon1Group.add( saturnMoon1 );
    saturnMoon1Pivet = new THREE.Object3D();
    saturnMoon1Pivet.add( saturnMoon1Group );
    scene.add(saturnMoon1Pivet);

    saturnMoon2Group = new THREE.Object3D();
    saturnMoon2Group.add( saturnMoon2 );
    saturnMoon2Pivet = new THREE.Object3D();
    saturnMoon2Pivet.add( saturnMoon2Group );
    scene.add(saturnMoon2Pivet);

    saturnMoon3Group = new THREE.Object3D();
    saturnMoon3Group.add( saturnMoon3 );
    saturnMoon3Pivet = new THREE.Object3D();
    saturnMoon3Pivet.add( saturnMoon3Group );
    scene.add(saturnMoon3Pivet);

    saturnGroup = new THREE.Object3D();
    saturnGroup.add( saturn );
    saturnGroup.add( saturnRing );
    saturnGroup.add( saturnMoon1Pivet );
    saturnGroup.add( saturnMoon2Pivet );
    saturnGroup.add( saturnMoon3Pivet );
    scene.add(saturnGroup);
    
    uranusGroup = new THREE.Object3D();
    uranusGroup.add( uranus );
    scene.add(uranusGroup);

    neptuneGroup = new THREE.Object3D();
    neptuneGroup.add( neptune );
    scene.add(neptuneGroup);

    plutoGroup = new THREE.Object3D();
    plutoGroup.add( pluto );
    scene.add(plutoGroup);

    //Pivets
    earthPivet = new THREE.Object3D();
    earthPivet.add( earthGroup );
    scene.add(earthPivet);

    mercuryPivet = new THREE.Object3D();
    mercuryPivet.add( mercuryGroup );
    scene.add(mercuryPivet);

    venusPivet = new THREE.Object3D();
    venusPivet.add( venusGroup );
    scene.add(venusPivet);
   
    marsPivet = new THREE.Object3D();
    marsPivet.add( marsGroup );
    scene.add(marsPivet);

    jupiterPivet = new THREE.Object3D();
    jupiterPivet.add( jupiterGroup );
    scene.add(jupiterPivet);
    
    //Saturn
    saturnPivet = new THREE.Object3D();
    saturnPivet.add( saturnGroup );
    scene.add(saturnPivet);

    //Uranus
    uranusPivet = new THREE.Object3D();
    uranusPivet.add( uranusGroup );
    scene.add(uranusPivet);

    neptunePivet = new THREE.Object3D();
    neptunePivet.add( neptuneGroup );
    scene.add(neptunePivet);

    plutoPivet = new THREE.Object3D();
    plutoPivet.add( plutoGroup );
    scene.add(plutoPivet);
}

function animate() {
    trackballControl.update(clock.getDelta());
    renderer.render(scene, camera);
    requestAnimationFrame(animate);

    earthGroup.position.x = 75;
    //earthGroup.rotation.y += .01 + rotPlanetSpeed;
    earthPivet.rotation.y += .007 + rotPlanetSpeed;
    earthMoonPivet.rotation.y += .02 + rotMoonSpeed;

    mercuryGroup.position.x = 25;
    mercuryPivet.rotation.y += .009 + rotPlanetSpeed;

    venusGroup.position.x = 50;
    venusPivet.rotation.y += .008 + rotPlanetSpeed;

    marsGroup.position.x = 100;
    marsPivet.rotation.y += .006 + rotPlanetSpeed;

    jupiterGroup.position.x = 150;
    jupiterPivet.rotation.y += .005 + rotPlanetSpeed;
    jupiterMoon1Pivet.rotation.y += .02 + rotMoonSpeed;
    jupiterMoon2Pivet.rotation.y += .03 + rotMoonSpeed;
    jupiterMoon3Pivet.rotation.y += .04 + rotMoonSpeed;
    jupiterMoon4Pivet.rotation.y += .05 + rotMoonSpeed;
    jupiterMoon5Pivet.rotation.y += .06 + rotMoonSpeed;

    saturnGroup.position.x = 200;
    saturnPivet.rotation.y += .004 + rotPlanetSpeed;
    saturnMoon1Pivet.rotation.y += .02 + rotMoonSpeed;
    saturnMoon2Pivet.rotation.y += .03 + rotMoonSpeed;
    saturnMoon3Pivet.rotation.y += .04 + rotMoonSpeed;

    uranusGroup.position.x = 250;
    uranusPivet.rotation.y += .003 + rotPlanetSpeed;

    neptuneGroup.position.x = 275;
    neptunePivet.rotation.y += .002 + rotPlanetSpeed;

    plutoGroup.position.x = 300;
    plutoPivet.rotation.y += .001 + rotPlanetSpeed;
}


var guiOrbitSpeed = function() {
    this.PlanetSpeed = 0;
    this.MoonSpeed = 0;
}

function createGui() {
    var speedGUI = new guiOrbitSpeed();
    var gui = new dat.GUI();

    gui.add(speedGUI, 'PlanetSpeed', 0, 1)
        .name('Planet Speed')
        .onChange((e)=>{
        rotPlanetSpeed = e;
    });

    gui.add(speedGUI, 'MoonSpeed', 0, 1)
        .name('Moon Speed')
        .onChange((e)=>{
            rotMoonSpeed = e;
    });

}

//javascript function to drive your scene
window.onload = function () {
    init();
    createCameraAndLights();
    createGeometry();
    animate();
    createGui();
}