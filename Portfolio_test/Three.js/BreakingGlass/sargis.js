//declare recurrent global variables
//Physijs.scripts.worker = '../libs/other/physijs/physijs_worker.js';
//Physijs.scripts.ammo = './ammo.js';

Physijs.scripts.worker = 'libs/other/physijs/physijs_worker.js';
Physijs.scripts.ammo = 'ammo.js';

var scene = new Physijs.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1.0, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
const clock = new THREE.Clock();
var loader = new THREE.ObjectLoader();

var filename = "sargis1";

var objects = [];

//declare global variables
var controls,
plane; //this will be used to limit the position of the new objects

var text = document.createElement('div');
var text2 = document.createElement('div');
var text3 = document.createElement('div');
var text4 = document.createElement('div');
var score = 0;

var win = false;
var lose = false;

var winLoseText = "";

var objectNum = 0;

var blueBlocks;
var stop = false;
var colorRed = new THREE.Color( "red" ); 
var colorBlue = new THREE.Color( "blue" ); 
var colorYellow = new THREE.Color( "yellow" ); 

function init() {

    text4.style.position = 'absolute';
    text4.style.width = 500;
    text4.style.height = 500;
    text4.style.top = 150 + 'px';
    text4.style.left = 500 + 'px';

    text3.style.position = 'absolute';
    text3.style.width = 500;
    text3.style.height = 500;
    text3.style.top = 25 + 'px';
    text3.style.left = 10 + 'px';

    text2.style.position = 'absolute';
    text2.style.width = 500;
    text2.style.height = 500;
    text2.innerHTML = "Remove all the blue blocks without touching the red ones";
    text2.style.top = 0 + 'px';
    text2.style.left = 10 + 'px';

    text.style.position = 'absolute';
    text.style.width = 500;
    text.style.height = 500;
    //text.style.backgroundColor = "blue";
    text.style.top = 105 + 'px';
    text.style.left = 50 + 'px';

    scene.setGravity(new THREE.Vector3(0, -10, 0));  

    renderer.setClearColor(new THREE.Color(0xffffff));
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    document.addEventListener( 'mousedown', onDocumentMouseDown, false );

}

function createCameraAndLights() {
    
    camera.position.set(0, 25, 150);
    console.log(camera.position.y);
    //camera.position.set(-100, 50, 40);
    camera.lookAt(scene.position);

    // add subtle ambient lighting
    var ambientLight = new THREE.AmbientLight(0x292929);
    scene.add(ambientLight);

    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(-20, 40, 60);
    scene.add(directionalLight);
}

function createGeometry() {

    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(60, 10, 10);
    var planeMaterial = Physijs.createMaterial(new THREE.MeshBasicMaterial({ color: "green" }));

    //Physijs.BoxMesh (new THREE.BoxGeometry

    //plane = new THREE.Mesh(planeGeometry, planeMaterial);
    //var plane = new Physijs.PlaneMesh (planeGeometry, planeMaterial, 0);
    var plane = new Physijs.BoxMesh (planeGeometry, planeMaterial, 0);
     
    // rotate and position the plane
    plane.__dirtyRotation = true;
    plane.__dirtyPosition = true;
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(15, 0, 0);

    // add the plane to the scene
    scene.add(plane);
    //readFile(3000, "sargis1");
    //readFileNoServer("sargis1");

    //createGame(scene.toJSON());

}

function createGame(data) {
    winLoseText = "";
    removeAll();
    console.log(data);

    //objectNum = data.metadata.numOfItems;
    lose = false;
    win = false;
    score = 0;
    objectNum = 0;
    blueBlocks = data.metadata.numOfBlueBoxs;

    var dataPathMat;
    var dataPathGeoPos;

    for (i = 0; i < data.metadata.numOfItems; i++) { 
        dataPathMat = data.materials[i];
        dataPathGeoPos = data.geometries[i].data.attributes.position;
        dataPathGeoShape = data.geometries[i].data.attributes.shape;

        var matBoxData = Physijs.createMaterial(new THREE.MeshLambertMaterial({ color: dataPathMat.color }));
        var meshBoxData = new Physijs.BoxMesh (new THREE.BoxGeometry(dataPathGeoShape.array[0],dataPathGeoShape.array[1],dataPathGeoShape.array[2]), matBoxData, 50);
        objects[i] = meshBoxData;
        meshBoxData.position.x = dataPathGeoPos.array[0];
        meshBoxData.position.y = dataPathGeoPos.array[1];
        meshBoxData.position.z = dataPathGeoPos.array[2];
        scene.add(meshBoxData);
    }

    objects.forEach(function(object) { 
        objectNum = objectNum +  1;
    });

    text3.innerHTML = "Score: " + score + "<br />" + "Blocks Left: " + objectNum+ "<br />" + "Blue Blocks Left: " + blueBlocks;

}

function removeAll() {
    objects.forEach(function(object) { 
        scene.remove(object);
    });
}

function readFile(filename) {
    let url = 'assets/games/' + //url path
    filename + //file name from dat.gui
    '.json'; //extension
    //console.log(url); //debugging code
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'text'; //try text if this doesn’t work
    request.send();
    request.onload = () => {
    let data = request.responseText;
    //console.log(data); //debugging code
    //createGame(data);
    //console.log(JSON);
    createGame(JSON.parse(data)); //convert text to json
    }
    //console.log(url);
}

function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
    scene.simulate();

    document.body.appendChild(text4);
    document.body.appendChild(text3);
    document.body.appendChild(text2);
    document.body.appendChild(text);

    if (blueBlocks <= 0)
    {
        win = true;
    }

    if (lose == true)
    {
        winLoseText = "You Lose";
        objectNum = 0;
        removeAll();
    }

    if (win == true)
    {
        winLoseText = "You Win";
        lose = false; 
        objectNum = 0;
    }

    text4.innerHTML = winLoseText;
    text3.innerHTML = "Score: " + score + "<br />" + "Blocks Left: " + objectNum+ "<br />" + "Blue Blocks Left: " + blueBlocks;
    text.innerHTML = "Game: " + this.filename + "<br />";

    
    objects.forEach(function(object) {
        if ((object.position.y <= -30))
        {
            scene.remove(object);
            console.log("hit1");
        }
    });

    objects.forEach(function(object) {
        if ((object.position.y < -5) && (object.position.y > -6))
        {
            if (object.material.color.equals(colorBlue))   
            {
                blueBlocks = blueBlocks - 1;
            }
            score = score + 100;
            objectNum = objectNum -  1;
            console.log("hit2");
        }
    });
}

function onDocumentMouseDown(event){

    if ((win == false) || (lose == false))
    {
        let pos = new THREE.Vector3(
            (event.clientX / window.innerWidth) * 2 - 1,
            -(event.clientY / window.innerHeight) * 2 + 1,
            0.5
        );
        console.log(pos);
        let vector = pos.unproject(camera);
        let raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
        let intersects = raycaster.intersectObjects(objects);
        objects.forEach(function(object) { object.__dirtyRotation = true; });
        objects.forEach(function(object) { object.__dirtyPosition = true; });
        
        intersects.forEach((obj) => {
        if (obj.object.material.color.equals(colorRed))
        {
            lose = true;
        }
        else if (obj.object.material.color.equals(colorBlue))   
        {
            score = score + 100;
            objectNum = objectNum - 1
            blueBlocks = blueBlocks - 1
            intersects.forEach((obj) => scene.remove(obj.object));
        }
        else if (obj.object.material.color.equals(colorYellow))   
        {
            score = score + 1000;
            objectNum = objectNum - 1
            intersects.forEach((obj) => scene.remove(obj.object));
        }
        });
        
    }
}

var guiGame = function() {
    this.FileName = "sargis1";
    this.newGame = function() {new readFile(this.FileName)};
}

function createGui() {
    var gameGUI = new guiGame();
    var gui = new dat.GUI();

    gui.add(gameGUI, 'FileName', { 1: 'sargis1', 2: 'sargis2', 3: 'sargis3', 4: 'sargis4', 5: 'sargis5' } )
        .name('Game')
        .onChange((e)=>{
        filename = e;
    });

    gui.add(gameGUI, 'newGame').name('Start Game');

}

//javascript function to drive your scene
window.onload = function () {
    init();
    createCameraAndLights();
    createGeometry();
    animate();
    createGui();
}