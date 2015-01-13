// Emberwp.ThreeGalleryComponent = Ember.Component.extend({


//     meshArr : null,

//     camLookAt : new THREE.Vector3(0,0,0),



//     init:function(){
//         console.log("Hello Three D");

//     },

//     didInsertElement : function(){

//             var _this = this;

//             var scene, camera, renderer;
//             var geometry, material;



//             _this.meshArr = [];

//             scene = new THREE.Scene();

//             camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
//             // camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerHeight / 2, window.innerWidth / 2, window.innerHeight / 2, 1, 10000 );
//             camera.position.z = 3000;

//             camera.position.y = 10000;

//                                     camera.lookAt( new THREE.Vector3(0, 0, 0 ) );



//             //Helpers
// // var size = 10000;
// // var step = 100;

// // var gridHelper = new THREE.GridHelper( size, step );        
// // scene.add( gridHelper );

//             light = new THREE.AmbientLight( 0x404040 ); // soft white light
//             scene.add( light );

//             var intensity = 1.5;
//             var distance = 1500;
//             var c1 = 0xff0040, c2 = 0x0040ff, c3 = 0x80ff80, c4 = 0xffaa00, c5 = 0x00ffaa, c6 = 0xff1100;
//             //var c1 = 0xffffff, c2 = 0xffffff, c3 = 0xffffff, c4 = 0xffffff, c5 = 0xffffff, c6 = 0xffffff;

//             var sphere = new THREE.SphereGeometry( .5, 16, 8 );

//             light1 = new THREE.PointLight( c1, intensity, distance );
//             light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c1 } ) ) );
//             scene.add( light1 );

//             light2 = new THREE.PointLight( c2, intensity, distance );
//             light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c2 } ) ) );
//             scene.add( light2 );

//             light3 = new THREE.PointLight( c3, intensity, distance );
//             light3.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c3 } ) ) );
//             scene.add( light3 );

//             light4 = new THREE.PointLight( c4, intensity, distance );
//             light4.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c4 } ) ) );
//             scene.add( light4 );

//             light5 = new THREE.PointLight( c5, intensity, distance );
//             light5.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c5 } ) ) );
//             scene.add( light5 );

//             light6 = new THREE.PointLight( c6, intensity, distance );
//             light6.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c6 } ) ) );
//             scene.add( light6 );

//             var dlight = new THREE.DirectionalLight( 0xc51162, 0.7 );
//             dlight.position.set( 0.5, 500, 3000 ).normalize();
//             scene.add( dlight );

//             var dlight1 = new THREE.DirectionalLight( 0x64dd17, 0.7 );
//             dlight1.position.set( 3000, 500, -3000 ).normalize();
//             scene.add( dlight1 );

//             var dlight2 = new THREE.DirectionalLight( 0x304ffe, 0.7 );
//             dlight2.position.set( -3000, 500, 0.5 ).normalize();
//             scene.add( dlight2 );



//             geometry = new THREE.BoxGeometry( 300, 250, 10 );
//             // material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
//             material = new THREE.MeshPhongMaterial( { color: 0xF0F0F0, ambient: 0x111111, specular: 0xF0F0F0, metal:true });

//             var vector = new THREE.Vector3();

//             for (var i = 0; i <= 25; i++) {

//                 var mesh = new THREE.Mesh( geometry, material );
//                 mesh.callback = function(event) {

//                         _this.camLookAt = this.position;

//                         TweenMax.to(camera.position, .7,{x:this.position.x, y:this.position.y+2000, z:this.position.z ,  ease:Quart.easeOut, onUpdate:function(){

//                             // camera.updateProjectionMatrix();

//                             camera.lookAt( new THREE.Vector3(0, 0, 0 ) );
                        
//                     }});

//                 };


//                 var phi = i * 0.5 + Math.PI;
//                 mesh.position.x = (900+ (i*.5) ) * Math.sin( phi );
//                 mesh.position.y =  (i * 30)+3000;
//                 mesh.position.z = 900 * Math.cos( phi );

//                 // mesh.gotToPosition = 'wes';

//                 // mesh.position.x = ( 800 * Math.cos(2 * Math.PI * i / 10));
//                 // mesh.position.z = ( 800 * Math.sin(2 * Math.PI * i / 10));
//                 // mesh.position.y += 30 * i;


//                 vector.x = 0;
//                 vector.y = 0;
//                 vector.z = 0;


//                 //declared once at the top of your code
// // var axis = new THREE.Vector3(125,125,0);//tilted a bit on x and y - feel free to plug your different axis here
// // //in your update/draw function
// // rad += 10;
// // mesh.rotateOnAxis(axis,rad);

//                 // mesh.rotation.y =  .72*i;
//                 // console.log("mesh.rotation.y ::", mesh.rotation.y);
//               mesh.lookAt( vector );

//                 _this.meshArr.push( mesh );

//                 scene.add( mesh );

//             };


// // projector
// projector = new THREE.Projector();

// // listeners
// document.addEventListener( 'mousedown', onDocumentMouseDown, false)

// // keyboard handler
// function onDocumentMouseDown( event ) {
    
//     event.preventDefault();

//     var vector = new THREE.Vector3( 
//         ( event.clientX / window.innerWidth ) * 2 - 1, 
//         - ( event.clientY / window.innerHeight ) * 2 + 1, 
//         0.5 );
    
//     projector.unprojectVector( vector, camera );
    
//     var ray = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

//     var intersects = ray.intersectObjects(  _this.meshArr );    

//     if ( intersects.length > 0 ) {
                
//         intersects[0].object.callback();
        
//     }
                    
// }








//             // renderer = new THREE.WebGLRenderer({ alpha: false });
            

//             var canvas = document.getElementById("canvas-three");
            
//             renderer = new THREE.WebGLRenderer({ alpha: true, canvas: canvas });
            
//             renderer.setSize( window.innerWidth, window.innerHeight );

//             //renderer.domElement = $('#canvas-three');
//             // document.body.appendChild( renderer.domElement );













//             animate();
//             function animate() {

//                 requestAnimationFrame( animate );

//                 // camera.lookAt(_this.camLookAt);

//                 // for (var i = _this.meshArr.length - 1; i >= 0; i--) {
//                 //     _this.meshArr[i].rotation.y += 0.03;
//                 // };

//                 var time = Date.now() * 0.00025;
//                 var z = 1, d =1200;

//                 // light1.position.x = Math.sin( time * 1.5 ) * d;
//                 // light1.position.z = Math.cos( time * 1.5 ) * d;

//                 // light2.position.x = Math.cos( time * 1.2 ) * d;
//                 // light2.position.z = Math.sin( time * 1.2 ) * d;

//                 // light3.position.x = Math.sin( time * 1.9 ) * d;
//                 // light3.position.z = Math.cos( time * 1.9 ) * d;                

//                 // light4.position.x = Math.cos( time * 2.9 ) * d;
//                 // light4.position.z = Math.sin( time * 2.9 ) * d;

//                 // light5.position.x = Math.cos( time * 2.9 ) * d;
//                 // light5.position.z = Math.sin( time * 2.9 ) * d;

//                 // light6.position.x = Math.sin( time * .5 ) * d;
//                 // light6.position.z = Math.cos( time * .5 ) * d;


//                 // console.log("_this.k < _this.targetMaxY && _this.goingDown", _this.k < _this.targetMaxY && _this.goingDown);
//                 // console.log("_this.tempY", _this.tempY, _this.k);
//                 // if (_this.tempY < _this.targetMaxY && !_this.goingDown) {
//                 //     _this.tempY += _this.speed;
                
//                 // }else{
//                 //     _this.goingDown = true;
//                 //     _this.tempY -= _this.speed;
//                 //     if(_this.tempY <= 0){
//                 //         _this.goingDown = false;
//                 //     }
//                 // };

//                 // _this.k++;
//                  //light.position.y = light1.position.y = light2.position.y = light3.position.y = light4.position.y = light5.position.y =  light6.position.y = _this.tempY;



//                 renderer.render( scene, camera );

//             }
//     },


//     tempY:2,
//     targetMaxY:3000,
//     speed:5,
//     goingDown:false,
//     k:0
// });