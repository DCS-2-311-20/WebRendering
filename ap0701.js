//
// 応用プログラミング 第7回 課題1 (ap0701)
// G184002021 拓殖太郎
//
"use strict"; // 厳格モード

// ライブラリのインポート
import * as THREE from "three";
import { OrbitControls } from "control";
import { CSS3DObject, CSS3DRenderer } from "CSS3D";
import GUI from "gui";

// ３Ｄページ作成関数の定義
function init() {
  // パラメータ
  const params = {
    fov: 60, // 視野角
    axes: false, // 座標軸の標示
    cameraH: 6, // カメラの高さ
    dpyW: 6.2, // ディスプレイの幅
    dpyH: 3.6, // ディスプレイの高さ
    dpyD: 0.2, // ディスプレイの厚さ
    dpyE: 0.1, // ディスプレイの縁
    stdH: 2.0, // ディスプレイスタンドの高さ
    stdW: 1.5, // ディスプレイスタンドの幅
    stdD: 1.9, // ディスプレイスタンドの奥行
    stdT: 0.1, // ディスプレイスタンドの厚さ
  };

  // シーン作成
  const scene = new THREE.Scene();

  // カメラの設定
  const camera = new THREE.PerspectiveCamera(
    params.fov, window.innerWidth/window.innerHeight, 0.01, 100);
  camera.position.set(0,0,params.cameraH);
  camera.lookAt(0,0,0);
  
  // 座標軸の設定
  const axes = new THREE.AxesHelper(18);
  scene.add(axes);

  // 光源の作成
  const dirLight = new THREE.DirectionalLight();
  dirLight.position.set(20, 35, 10);
  scene.add(dirLight);

  const ambLight = new THREE.AmbientLight(0x303030);
  scene.add(ambLight);

  // レンダラの設定
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0x406080 );
  document.getElementById("WebGL-output").appendChild(renderer.domElement);

  // CSSRenderer の追加

  // CSSRenderer で表示する iframe要素を作る


  // カメラ制御
  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enableDumping = true;

  // ディスプレイ
  const display = new THREE.Group();
  {
    // 表示部
    const silverMaterial = new THREE.MeshPhongMaterial({color: "silver"});
    const face = new THREE.Mesh(
      new THREE.BoxGeometry(params.dpyW, params.dpyH, params.dpyD),
      silverMaterial
    );
    display.add(face);
    // スタンド脚
    const standBack = new THREE.Mesh(
      
      
      
      
      
    )
    
    
    //display.add(standBack);
    // スタンド台
    const standBase = new THREE.Mesh(
      
      
    )
    
    //display.add(standBase);
    // 影の設定
  }
  scene.add(display);

  // 表示部分 (背景を白にするため)

  // デスク

  // 描画関数の定義
  function render() {
    axes.visible = params.axes;
    orbitControls.update();
    // WebGL レンダラ
    renderer.render(scene, camera);
    // CSS3D レンダラ

    requestAnimationFrame(render);
  }

  // サイズ変更
  window.addEventListener("resize", () => {
  });
  
  // GUIコントローラ
  const gui = new GUI();
  gui.add(params, "axes");
  
  // 最初の描画
  render();
}

// 3Dページ作成関数の呼び出し
init();
