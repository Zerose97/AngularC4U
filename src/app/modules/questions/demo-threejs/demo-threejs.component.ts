import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader';
import Stats from 'three/examples/jsm/libs/stats.module';

@Component({
  selector: 'app-demo-threejs',
  templateUrl: './demo-threejs.component.html',
  styleUrls: ['./demo-threejs.component.scss']
})
export class DemoThreejsComponent implements OnInit {
  ngOnInit() {
    // this.fbxLoader();
    this.gLTFLoader();
  }

  threeJsCube() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    camera.position.z = 5;
    renderer.render(scene, camera);
    animate();
  }

  fbxLoader() {
    const scene = new THREE.Scene()
    scene.add(new THREE.AxesHelper(5))

    const light = new THREE.PointLight()
    // light.position.set(0.8, 1.4, 1.0)
    // light.position.set(0.8, 1.4, 1.0)
    // scene.add(light)

    const ambientLight = new THREE.AmbientLight()
    scene.add(ambientLight)

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(0.8, 1.4, 1.0)

    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);

    const container: any = document.getElementById( 'canvas' );
    document.body.appendChild( container ); 

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(800, 800);
    container.appendChild( renderer.domElement );

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.target.set(0, 1, 0)

    //const material = new THREE.MeshNormalMaterial()

    const manager = new THREE.LoadingManager();
    // add handler for TGA textures
    manager.addHandler(/\.tga$/i, new TGALoader());

    const fbxLoader = new FBXLoader(manager)
    // fbxLoader.load('assets/fbx/Fish/BarramundiFish.fbx',
    fbxLoader.load('assets/fbx/SkinTest/SM_Skin.fbx',
      (object) => {
        // object.traverse(function (child) {
        //     if ((child as THREE.Mesh).isMesh) {
        //         // (child as THREE.Mesh).material = material
        //         if ((child as THREE.Mesh).material) {
        //             ((child as THREE.Mesh).material as THREE.MeshBasicMaterial).transparent = false
        //         }
        //     }
        // })

        object.traverse(async function (child) {
          console.log(child);
          if ((child as THREE.Mesh).isMesh) {
            const textureLoader = new THREE.TextureLoader();
            // const [ diffuseMap, normalMap ] = await Promise.all( [
            //   textureLoader.loadAsync( 'assets/fbx/NormalSkin/Textures/Normal_Skin_ExpForTexture_blinn1_BaseColor.png' ),
            //   textureLoader.loadAsync( 'assets/fbx/NormalSkin/Textures/Normal_Skin_ExpForTexture_blinn1_Roughness.png' ),
            //   textureLoader.loadAsync( 'assets/fbx/NormalSkin/Textures/Normal_Skin_ExpForTexture_blinn1_Height.png' ),
            //   textureLoader.loadAsync( 'assets/fbx/NormalSkin/Textures/Normal_Skin_ExpForTexture_blinn1_Metallic.png' ),
            //   textureLoader.loadAsync( 'assets/fbx/NormalSkin/Textures/Normal_Skin_ExpForTexture_blinn1_Normal.png' ),
            // ] );
            
            const [ diffuseMap ] = await Promise.all( [
              textureLoader.loadAsync('assets/fbx/SkinTest/MI_Skin_Color.png'),
            ] );

            // const part = mesh.getObjectByName( 'Body1_low' );
            // part.material.map = diffuseMap; 
            // part.material.normalMap = normalMap;

            
            ((child as THREE.Mesh).material as any).map = diffuseMap;
            // ((child as THREE.Mesh).material as any).normalMap = normalMap;
            ((child as THREE.Mesh).material as any).needsupdate = true;

            console.log(((child as THREE.Mesh).geometry.attributes as any).uv);

            child.castShadow = true;
            child.receiveShadow = true;

            object.scale.set(.5, .5, .5)
            scene.add(object)
          }
        })
        // object.scale.set(.03, .03, .03)
        // object.scale.set(.5, .5, .5)
        // console.log(object);
        setTimeout(() => {
          // scene.add(object)
        }, 2000);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      },
      (error) => {
        console.log(error)
      }
    )

    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      render()
    }

    const stats = new Stats()
    document.body.appendChild(stats.dom)

    function animate() {
      requestAnimationFrame(animate)

      controls.update()

      render()

      stats.update()
    }

    function render() {
      renderer.render(scene, camera)
    }

    animate()
  }

  gLTFLoader() {
    const scene = new THREE.Scene()
    scene.add(new THREE.AxesHelper(5))

    const light = new THREE.SpotLight()
    light.position.set(0.8, 1.4, 1.0)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight()
    scene.add(ambientLight)

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    // camera.position.z = 2
    camera.position.set(0.8, 1.4, 1.0)

    // const renderer = new THREE.WebGLRenderer()
    // // renderer.physicallyCorrectLights = true //deprecated
    // // renderer.useLegacyLights = false //use this instead of setting physicallyCorrectLights=true property
    // // renderer.shadowMap.enabled = true
    // // renderer.outputEncoding = THREE.sRGBEncoding
    // renderer.setSize(window.innerWidth, window.innerHeight)
    // document.body.appendChild(renderer.domElement)

    const container: any = document.getElementById( 'canvas' );
    document.body.appendChild( container ); 

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(800, 800);
    container.appendChild( renderer.domElement );

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.target.set(0, 1, 0)

    const gltfLoader = new GLTFLoader()
    gltfLoader.load('assets/glb/SM_OilSkin.glb', 
      (object) => {
        // gltf.scene.traverse(function (child) {
        //     if ((child as THREE.Mesh).isMesh) {
        //         const m = (child as THREE.Mesh)
        //         m.receiveShadow = true
        //         m.castShadow = true
        //     }
        //     if (((child as THREE.Light)).isLight) {
        //         const l = (child as THREE.Light)
        //         l.castShadow = true
        //         l.shadow.bias = -.003
        //         l.shadow.mapSize.width = 2048
        //         l.shadow.mapSize.height = 2048
        //     }
        // })
        scene.add(object.scene)
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      },
      (error) => {
        console.log(error)
      }
    )

    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      render()
    }

    const stats = new Stats()
    document.body.appendChild(stats.dom)

    function animate() {
      requestAnimationFrame(animate)

      controls.update()

      render()

      stats.update()
    }

    function render() {
      renderer.render(scene, camera)
    }

    animate()
  }
}
