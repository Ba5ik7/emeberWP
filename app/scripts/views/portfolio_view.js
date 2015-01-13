Emberwp.PortfolioView = Ember.View.extend({

    meshArr : null,

    camLookAt : new THREE.Vector3(0,0,0),

    templateName: 'pages/portfolio',

    prevMesh: null,

    didInsertElement : function(){

            var _this = this;

            var scene, camera, renderer;
            var geometry, material;

            _this.meshArr = [];

            var scene = new THREE.Scene();

            var camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
            // camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerHeight / 2, window.innerWidth / 2, window.innerHeight / 2, 1, 10000 );
            camera.position.z = 0;
            camera.position.y = 15000;
            camera.lookAt( new THREE.Vector3(0, 0, 0 ) );

            var intensity = 2.5;
            var distance = 1500;
            var c1 = 0xff0040, c2 = 0x0040ff, c3 = 0x80ff80, c4 = 0xffaa00, c5 = 0x00ffaa, c6 = 0xff1100;
            //var c1 = 0xffffff, c2 = 0xffffff, c3 = 0xffffff, c4 = 0xffffff, c5 = 0xffffff, c6 = 0xffffff;

            var sphere = new THREE.SphereGeometry( .5, 16, 8 );

            var light1 = new THREE.PointLight( c1, intensity, distance );
            light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c1 } ) ) );
            scene.add( light1 );

            var light2 = new THREE.PointLight( c2, intensity, distance );
            light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c2 } ) ) );
            scene.add( light2 );

            var light3 = new THREE.PointLight( c3, intensity, distance );
            light3.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c3 } ) ) );
            scene.add( light3 );

            var light4 = new THREE.PointLight( c4, intensity, distance );
            light4.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c4 } ) ) );
            scene.add( light4 );

            var light5 = new THREE.PointLight( c5, intensity, distance );
            light5.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c5 } ) ) );
            scene.add( light5 );

            var light6 = new THREE.PointLight( c6, intensity, distance );
            light6.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c6 } ) ) );
            scene.add( light6 );

            light1.position.y = light2.position.y = light3.position.y = light4.position.y = light5.position.y =  light6.position.y = 4000;

            var dlight = new THREE.DirectionalLight( 0xCCCCCC, 0.8 );
            dlight.position.set( 5000, 6000, 5000 ).normalize();
            scene.add( dlight );

            var dlight1 = new THREE.DirectionalLight( 0xCCCCCC, 0.5 );
            dlight1.position.set( 3000, 10000, -3000 ).normalize();
            scene.add( dlight1 );

            // var dlight2 = new THREE.DirectionalLight( 0xCCCCCC, 0.5 );
            // dlight2.position.set( -3000, 10000, 0.5 ).normalize();
            // scene.add( dlight2 );



            var geometry = new THREE.BoxGeometry( 300, 250, 10 );
            //material = new THREE.MeshPhongMaterial( { color: 0xF0F0F0, ambient: 0x111111, specular: 0xF0F0F0, metal:true });
            var material1 = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('/images/test1.jpg')
              });
            var material2 = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('/images/test2.jpg')
              });
            var material3 = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('/images/test3.jpg')
              });
            var material4 = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('/images/test4.jpg')
              });
            var material5 = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('/images/test5.jpg')
              });
            var material6 = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('/images/test6.jpg')
              });
            var material7 = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('/images/test7.jpg')
              });
            var material8 = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('/images/test8.jpg')
              });
            var material9 = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('/images/test9.jpg')
              });
            var material10 = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('/images/test10.jpg')
              });

            var materialArr = [
                  material1,
                  material2,
                  material3,
                  material4,
                  material5,
                  material6,
                  material7,
                  material8,
                  material9,
                  material10
            ]

            var vector = new THREE.Vector3();
            var k = 0;
             for (var i = 0; i <= 65; i++) {

                    var mesh = new THREE.Mesh( geometry, materialArr[k] );
                    k >= 9 ? k = 0 : k++;


                    mesh.callback = function(event) {




                      if (_this.prevMesh) {

                        var tempMesh = _this.prevMesh;

                        TweenMax.to(tempMesh.scale, .7,{x:1, y:1, ease:Quart.easeOut});
                        TweenMax.to(tempMesh.position, 2.7,{
                                                                            x:_this.prevMesh.goToPosition.x, 
                                                                            y:_this.prevMesh.goToPosition.y, 
                                                                            z:_this.prevMesh.goToPosition.z,  
                                                                            ease:Elastic.easeOut,
                                                                            onComplete:function(){

                                                                              _this.prevMesh.position = this.position

                                                                              console.log("ture", _this.prevMesh);
                                                                            }

                                                                          });


                      }

                      _this.prevMesh = this

                      TweenMax.to(this.scale, .7,{x:2.5, y:2, ease:Quart.easeOut});
                      TweenMax.to(this.position, .7,{x:0, y:3500, z:0,ease:Quart.easeOut});

                      TweenMax.to(camera.position, .7,{
                                                                                          x:this.position.x, 
                                                                                          y:5000, 
                                                                                          z:this.position.z ,  
                                                                                          ease:Back.easeOut,
                                                                                          onUpdate:function(){
                                                                                                            // camera.updateProjectionMatrix();
                                                                                                            camera.lookAt( new THREE.Vector3(0, 3000, 0 ) );
                                                                                                        
                                                                                      }});
                      









                        // //_this.camLookAt = this.position;

                        // TweenMax.to(this.position, .7,{x:0, y:2500, z:0,  ease:Quart.easeOut, onUpdate:function(){
                        
                        // }});

                        // TweenMax.to(camera.position, .7,{x:this.position.x, y:4500, z:this.position.z ,  ease:Quart.easeOut, onUpdate:function(){

                        //     // camera.updateProjectionMatrix();
                        //     camera.lookAt( new THREE.Vector3(0, 3000, 0 ) );
                        
                        // }});

                    };


                      
                      mesh.position.x = (Math.random()*-10000)+5000;
                      mesh.position.y =  (Math.random()*-10000)+5000;
                      mesh.position.z =  (Math.random()*-10000)+5000;

                      var phi = i * 0.5 + Math.PI;
                      mesh.goToPosition = new THREE.Vector3( (400+(i*10)) * Math.sin( phi ), (i * 30)+1000, (400+(i*10)) * Math.cos( phi ) );

                      // mesh.position.x = ( 800 * Math.cos(2 * Math.PI * i / 10));
                      // mesh.position.z = ( 800 * Math.sin(2 * Math.PI * i / 10));
                      // mesh.position.y += 30 * i;


                    vector.x = 0;
                    vector.y = 0;
                    vector.z = 0;
                    mesh.lookAt( vector );


                    _this.meshArr.push( mesh );
                    scene.add( mesh );
            };




            var planeLookAt =  function (){

                    for (var i = _this.meshArr.length - 1; i >= 0; i--) {

                      _this.meshArr[i].lookAt( new THREE.Vector3(0, 0, 0 ) );
                    }
            }
            for (var i = 0; i <= _this.meshArr.length - 1; i++) {
              TweenMax.to(_this.meshArr[i].position, .5+(i*.08), {
                                                                                x:_this.meshArr[i].goToPosition.x, 
                                                                                y:_this.meshArr[i].goToPosition.y, 
                                                                                z:_this.meshArr[i].goToPosition.z, 
                                                                                ease:Elastic.easeOut, 
                                                                                onUpdate:planeLookAt
                                                                              });
            };

            




            TweenMax.to(camera.position, 5,{y:5000,  ease:Expo.easeOut, onUpdate:function(){

                // camera.updateProjectionMatrix();
                camera.lookAt( new THREE.Vector3(0, 3000, 0 ) );
            
            }});


        // group = new THREE.Group();
        // scene.add( group );
        // var geometry2 = new THREE.BoxGeometry( 5, 5, 5 );
        // for ( var i = 0; i < 1000; i++ ) {

        //   // var material = new THREE.BaiscMaterial( {
        //   //   color: Math.random() * 0x808008 + 0x808080
        //   // } );

        //   particle = new THREE.Mesh(geometry2, material );
        //   particle.position.x = Math.random() * 2000 - 1000;
        //   particle.position.y = Math.random() * 2000 + 2500;
        //   particle.position.z = Math.random() * 2000 - 1000;
        //   //particle.scale.x = particle.scale.y = Math.random() * 20 + 10;
        //   group.add( particle );
        // }
            


// projector
var projector = new THREE.Projector();

// listeners
document.addEventListener( 'mousedown', onDocumentMouseDown, false)

// keyboard handler
function onDocumentMouseDown( event ) {
    
    event.preventDefault();

    var vector = new THREE.Vector3( 
        ( event.clientX / window.innerWidth ) * 2 - 1, 
        - ( event.clientY / window.innerHeight ) * 2 + 1, 
        0.5 );
    
    projector.unprojectVector( vector, camera );
    
    var ray = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

    var intersects = ray.intersectObjects(  _this.meshArr );    

    if ( intersects.length > 0 ) {
                
        intersects[0].object.callback();
        
    }
                    
}

            renderer = new THREE.WebGLRenderer({ alpha: true });
            
            renderer.setSize( window.innerWidth, window.innerHeight );

            $("#closeMenus").prepend(renderer.domElement);








            animate();
            function animate() {

                requestAnimationFrame( animate );

                // camera.lookAt(_this.camLookAt);

                // for (var i = _this.meshArr.length - 1; i >= 0; i--) {
                //     _this.meshArr[i].rotation.x += 0.03;
                //     _this.meshArr[i].rotation.y += 0.03;
                //     _this.meshArr[i].rotation.z += 0.03;
                // };

                var time = Date.now() * 0.00025;
                var z = 1, d =1200;

                light1.position.x = Math.sin( time * 1.5 ) * d;
                light1.position.z = Math.cos( time * 1.5 ) * d;

                light2.position.x = Math.cos( time * 1.2 ) * d;
                light2.position.z = Math.sin( time * 1.2 ) * d;

                light3.position.x = Math.sin( time * 1.9 ) * d;
                light3.position.z = Math.cos( time * 1.9 ) * d;                

                light4.position.x = Math.cos( time * 2.9 ) * d;
                light4.position.z = Math.sin( time * 2.9 ) * d;

                light5.position.x = Math.cos( time * 2.9 ) * d;
                light5.position.z = Math.sin( time * 2.9 ) * d;

                light6.position.x = Math.sin( time * .5 ) * d;
                light6.position.z = Math.cos( time * .5 ) * d;




                renderer.render( scene, camera );

            }
    },

    animateIn : function (done) {

      TweenMax.to("#closeMenus canvas", .3, {opacity:'1',  right:'50', ease:Sine.easeOut});
      TweenMax.to("#canvas-background", .3, {opacity:'0',  right:'50', ease:Sine.easeOut, onComplete:done});
       // TweenMax.staggerTo("img", .5, {opacity:'1',  scale:'1', ease:Sine.easeIn }, .3, done);
    },

    animateOut : function (done) {
        TweenMax.to("#closeMenus canvas", .3, {opacity:'0',  right:'50', ease:Sine.easeOut});
        TweenMax.to("#canvas-background", .3, {opacity:'1',  right:'50', ease:Sine.easeOut, onComplete:function(){
              $( "#closeMenus canvas" ).remove();
              done();
        }});
        
        // TweenMax.staggerTo("img", .3, {opacity:'0',  right:'50', ease:Sine.easeOut }, .3, done);
    }
});