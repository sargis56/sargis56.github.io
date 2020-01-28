//declare recurrent global variables
const scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
const clock = new THREE.Clock();

//declare global variables
var trackballControl,
controls,
plane; //this will be used to limit the position of the new objects

var turnSpeed;

function init() {
    renderer.setClearColor(new THREE.Color(0xffffff));
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;

    camera.lookAt(scene.position);

    trackballControl = new THREE.TrackballControls(camera, renderer.domElement);

}

function createCameraAndLights() {
    camera.position.x = 120;
    camera.position.y = 60;
    camera.position.z = 80;
    camera.lookAt(scene.position);

    // add subtle ambient lighting
    var ambientLight = new THREE.AmbientLight(0x292929);
    scene.add(ambientLight);

    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(-20, 40, 60);
    scene.add(directionalLight);

    let axesHelper = new THREE.AxesHelper(100);
    scene.add(axesHelper);
}

function createGeometry() {
    
    // create the ground plane
    var planeGeometry = new THREE.PlaneBufferGeometry(500, 500);
    var planeMaterial = new THREE.MeshBasicMaterial({ color: 0x3333ff });
    plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(15, -80, 0);

    // add the plane to the scene
    scene.add(plane);
    
    makeWheel(35, 30, 5, 0, 0, 0, 0.01 );

    //makeWheel(50, 40, 30, 25, 25, -100, 2 );

    //makeWheel(15, 10, 1, 0, 0, -50, 3 );

}

function makeWheel(outerRadius, innerRadius, axleRadius, transX, transY, transZ, speed) {
    var x = 0, y = 0;
    var shape = new THREE.Shape();

    turnSpeed = speed;

   shape.moveTo( x, y );
   outerRadius
   //shape.arc(0, 0, 35, 0, 2 * Math.PI);
   shape.arc(0, 0, outerRadius, 0, 2 * Math.PI);
   
    var hole = new THREE.Path();
    
    hole.absellipse( 0, 0 , innerRadius, innerRadius, 0, Math.PI * 2, true );
    shape.holes.push( hole );

    var extrudeSettings = {
        steps: 2,
        depth: 10,
        bevelEnabled: false,
        bevelThickness: 2.5,
        bevelSize: 2.5,
        bevelSegments: 1
    };
    
    //0x9e5c5e
    var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
    var material = new THREE.MeshStandardMaterial( { color: 0x996633 } );
    var mesh = new THREE.Mesh( geometry, material ) ;
    //mesh.rotation.x = 9;
    //scene.add( mesh );

    //var cylGeometry = new THREE.CylinderGeometry( 4, 4, 60, 32 );
    var strokeGeometry = new THREE.BoxGeometry( 6, 6, outerRadius * 2.75, 32 );
    var strokeMaterial = new THREE.MeshStandardMaterial( {color: 0xff9900} );
    var stroke = new THREE.Mesh( strokeGeometry, strokeMaterial );
    stroke.translateZ(5.5);
    stroke.rotation.x = 1.55;
    //scene.add( cylinder );

    var turnStroke = 0.525;

    var stroke2 = stroke.clone();
    stroke2.rotation.y = turnStroke;

    var stroke3 = stroke.clone();
    stroke3.rotation.y = turnStroke * 2;
    
    var stroke4 = stroke.clone();
    stroke4.rotation.y = turnStroke * 3;

    var stroke5 = stroke.clone();
    stroke5.rotation.y = turnStroke * 4;

    var stroke6 = stroke.clone();
    stroke6.rotation.y = turnStroke * 5;

    //var cylAxleGeometry = new THREE.CylinderGeometry( 5, 5, 12, 12 );
    var cylAxleGeometry = new THREE.CylinderGeometry( axleRadius, axleRadius, 12, 12 );
    var cylAxleMaterial = new THREE.MeshStandardMaterial( {color: 0x996633} );
    var cylAxleinder = new THREE.Mesh( cylAxleGeometry, cylAxleMaterial );
    cylAxleinder.translateZ(5.5);
    cylAxleinder.rotation.x = 1.55;
    //scene.add( cylAxleinder );


    var basketGeometry = new THREE.BoxGeometry( 4, 4, outerRadius/1.5, 32 );
    var basketMaterial = new THREE.MeshStandardMaterial( {color: 0xffffff} );
    var basket = new THREE.Mesh( basketGeometry, basketMaterial );
    basket.translateZ(17);
    //basket.translateY(45);
    
    var basketGeometryUp = new THREE.BoxGeometry( 4, 4, outerRadius/2, 32 );
    var basketMaterialUp = new THREE.MeshStandardMaterial( {color: 0xffffff} );
    var basketUp = new THREE.Mesh( basketGeometryUp, basketMaterialUp );
    basketUp.translateZ(17);
    //basketUp.translateY(55);
    basketUp.translateY(-8);
    basketUp.rotation.x = 1.55;

    var sphereGeometry = new THREE.SphereGeometry( 7, 8, 6, 0, 2*Math.PI, 0, 0.5 * Math.PI);
    var sphereMaterial = new THREE.MeshBasicMaterial( {color: 0xff3399} );
    sphereMaterial.side = THREE.DoubleSide;
    var basketSphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    basketSphere.translateZ(17);
    basketSphere.translateY(-12);
    basketSphere.rotation.x = 1.55 * 2;
    //basketSphere.rotation.x = 1.55;
    scene.add( basketSphere );

    basketGroup = new THREE.Object3D();
    basketGroup.add( basket );
    basketGroup.add( basketUp );
    basketGroup.add( basketSphere );
    
    //scene.add(basketGroup);

    var basketCopy2 = basket.clone();
    var basketUpCopy2 = basketUp.clone();
    var basketSphereCopy2 = basketSphere.clone();
    basketGroup2 = new THREE.Object3D();
    basketGroup2.add( basketCopy2 );
    basketGroup2.add( basketUpCopy2 );
    basketGroup2.add( basketSphereCopy2 );
    //basketGroup2.rotation.z = turnStroke;

    var basketCopy3 = basket.clone();
    var basketUpCopy3 = basketUp.clone();
    var basketSphereCopy3 = basketSphere.clone();
    basketGroup3 = new THREE.Object3D();
    basketGroup3.add( basketCopy3 );
    basketGroup3.add( basketUpCopy3 );
    basketGroup3.add( basketSphereCopy3 );
    //basketGroup3.rotation.z = turnStroke * 2;

    var basketCopy4 = basket.clone();
    var basketUpCopy4 = basketUp.clone();
    var basketSphereCopy4 = basketSphere.clone();
    basketGroup4 = new THREE.Object3D();
    basketGroup4.add( basketCopy4 );
    basketGroup4.add( basketUpCopy4 );
    basketGroup4.add( basketSphereCopy4 );
    //basketGroup4.rotation.z = turnStroke * 3;

    var basketCopy5 = basket.clone();
    var basketUpCopy5 = basketUp.clone();
    var basketSphereCopy5 = basketSphere.clone();
    basketGroup5 = new THREE.Object3D();
    basketGroup5.add( basketCopy5 );
    basketGroup5.add( basketUpCopy5 );
    basketGroup5.add( basketSphereCopy5 );
    //basketGroup5.rotation.z = turnStroke * 4;

    var basketCopy6 = basket.clone();
    var basketUpCopy6 = basketUp.clone();
    var basketSphereCopy6 = basketSphere.clone();
    basketGroup6 = new THREE.Object3D();
    basketGroup6.add( basketCopy6 );
    basketGroup6.add( basketUpCopy6 );
    basketGroup6.add( basketSphereCopy6 );
    //basketGroup6.rotation.z = turnStroke * 5;

    var basketCopy7 = basket.clone();
    var basketUpCopy7 = basketUp.clone();
    var basketSphereCopy7 = basketSphere.clone();
    basketGroup7 = new THREE.Object3D();
    basketGroup7.add( basketCopy7 );
    basketGroup7.add( basketUpCopy7 );
    basketGroup7.add( basketSphereCopy7 );
    //basketGroup7.rotation.z = turnStroke * 6;

    var basketCopy8 = basket.clone();
    var basketUpCopy8 = basketUp.clone();
    var basketSphereCopy8 = basketSphere.clone();
    basketGroup8 = new THREE.Object3D();
    basketGroup8.add( basketCopy8 );
    basketGroup8.add( basketUpCopy8 );
    basketGroup8.add( basketSphereCopy8 );
    //basketGroup8.rotation.z = turnStroke * 7;

    var basketCopy9 = basket.clone();
    var basketUpCopy9 = basketUp.clone();
    var basketSphereCopy9 = basketSphere.clone();
    basketGroup9 = new THREE.Object3D();
    basketGroup9.add( basketCopy9 );
    basketGroup9.add( basketUpCopy9 );
    basketGroup9.add( basketSphereCopy9 );
    //basketGroup9.rotation.z = turnStroke * 8;

    var basketCopy10 = basket.clone();
    var basketUpCopy10 = basketUp.clone();
    var basketSphereCopy10 = basketSphere.clone();
    basketGroup10 = new THREE.Object3D();
    basketGroup10.add( basketCopy10 );
    basketGroup10.add( basketUpCopy10 );
    basketGroup10.add( basketSphereCopy10 );
    //basketGroup10.rotation.z = turnStroke * 9;

    var basketCopy11 = basket.clone();
    var basketUpCopy11 = basketUp.clone();
    var basketSphereCopy11 = basketSphere.clone();
    basketGroup11 = new THREE.Object3D();
    basketGroup11.add( basketCopy11 );
    basketGroup11.add( basketUpCopy11 );
    basketGroup11.add( basketSphereCopy11 );
    //basketGroup11.rotation.z = turnStroke * 10;

    var basketCopy12 = basket.clone();
    var basketUpCopy12 = basketUp.clone();
    var basketSphereCopy12 = basketSphere.clone();
    basketGroup12 = new THREE.Object3D();
    basketGroup12.add( basketCopy12 );
    basketGroup12.add( basketUpCopy12 );
    basketGroup12.add( basketSphereCopy12 );
    //basketGroup12.rotation.z = turnStroke * 11;

    basketGroupAll = new THREE.Object3D();
    basketGroupAll.add( basketGroup );
    basketGroupAll.add( basketGroup2 );
    basketGroupAll.add( basketGroup3 );
    basketGroupAll.add( basketGroup4 );
    basketGroupAll.add( basketGroup5 );
    basketGroupAll.add( basketGroup6 );
    basketGroupAll.add( basketGroup7 );
    basketGroupAll.add( basketGroup8 );
    basketGroupAll.add( basketGroup9 );
    basketGroupAll.add( basketGroup10 );
    basketGroupAll.add( basketGroup11 );
    basketGroupAll.add( basketGroup12 );
    
    scene.add(basketGroupAll);


    wheelGroup = new THREE.Object3D();
    wheelGroup.add( mesh );
    wheelGroup.add( stroke );
    wheelGroup.add( stroke2 );
    wheelGroup.add( stroke3 );
    wheelGroup.add( stroke4 );
    wheelGroup.add( stroke5 );
    wheelGroup.add( stroke6 );
    wheelGroup.add( cylAxleinder );

    wheelGroup.translateZ(transZ);
    wheelGroup.translateX(transX);
    wheelGroup.translateY(transY);

    scene.add(wheelGroup);

    var wheelGroup2copy = wheelGroup.clone();

    wheelGroup2 = new THREE.Object3D();
    wheelGroup2.add( wheelGroup2copy );

    wheelGroup2.translateZ(transZ + 25);
    
    scene.add(wheelGroup2);

}

function animate() {
    trackballControl.update(clock.getDelta());
    renderer.render(scene, camera);
    requestAnimationFrame(animate);

    wheelGroup.rotation.z += turnSpeed;
    wheelGroup2.rotation.z += turnSpeed;
    basketGroupAll.rotation.z += turnSpeed;

    basketGroup.position.x = 45;
    basketGroup2.position.x = -45;
    basketGroup3.position.y = 45;
    basketGroup4.position.y = -45;

    basketGroup5.position.x = 40;
    basketGroup5.position.y = 45/2;
    basketGroup6.position.x = 40;
    basketGroup6.position.y = -45/2;
    basketGroup7.position.x = -40;
    basketGroup7.position.y = -45/2;
    basketGroup8.position.x = -40;
    basketGroup8.position.y = 45/2;

    basketGroup9.position.x = 45/2;
    basketGroup9.position.y = 40;
    basketGroup10.position.x = -45/2;
    basketGroup10.position.y = 40;
    basketGroup11.position.x = -45/2;
    basketGroup11.position.y = -40;
    basketGroup12.position.x = 45/2;
    basketGroup12.position.y = -40;

    basketGroup.rotation.z -= turnSpeed;
    basketGroup2.rotation.z -= turnSpeed;
    basketGroup3.rotation.z -= turnSpeed;
    basketGroup4.rotation.z -= turnSpeed;
    basketGroup5.rotation.z -= turnSpeed;
    basketGroup6.rotation.z -= turnSpeed;
    basketGroup7.rotation.z -= turnSpeed;
    basketGroup8.rotation.z -= turnSpeed;
    basketGroup9.rotation.z -= turnSpeed;
    basketGroup10.rotation.z -= turnSpeed;
    basketGroup11.rotation.z -= turnSpeed;
    basketGroup12.rotation.z -= turnSpeed;
}

var guiRotSpeed = function() {
    this.TurnSpeed = 0.01;
}

function createGui() {
    var speedGUI = new guiRotSpeed();
    var gui = new dat.GUI();

    gui.add(speedGUI, 'TurnSpeed', 0, 1)
        .name('Turn Speed')
        .onChange((e)=>{
        turnSpeed = e;
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