window.addEventListener('DOMContentLoaded', function() {
  // All the following code is entered here.
  var canvas = document.getElementById('renderCanvas');
  var engine = new BABYLON.Engine(canvas, true);
  var path = "assets/tetera/maya/obj/";
  var obj = "vaso.obj";

  var createScene = function (path, obj) {
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0,5,-10), scene);
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);
    BABYLON.SceneLoader.Append(path, obj, scene, function (scene) {
      scene.createDefaultCameraOrLight(true, true, true);
      scene.activeCamera.alpha += Math.PI;
    });
    // var sphere = BABYLON.MeshBuilder.CreateSphere('Sphere', {segments: 16, diameter: 2}, scene);
    // sphere.position.y = 1;
    // var ground = BABYLON.MeshBuilder.CreateGround('ground1', {height: 6, width: 6, subdivisions: 2}, scene);

    return scene;
  }

  var scene = createScene(path, obj);
  scene.clearColor =  new BABYLON.Color3(0.68, 0.85, 0.85);
  BABYLON.OBJFileLoader.MATERIAL_LOADING_FAILS_SILENTLY = false;

  engine.runRenderLoop(function(){
    scene.render();
  });

  window.addEventListener('resize', function () {
    engine.resize();
  });
});
