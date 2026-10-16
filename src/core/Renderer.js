import * as THREE from "three";
import { themeManager } from "../theme/theme.js";

export class RendererManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();

    // Responsive camera
    this.camera = new THREE.PerspectiveCamera(
      58,
      window.innerWidth / window.innerHeight,
      0.1,
      350
    );

    // Optimized WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: "high-performance"
    });

    // Mobile performance: cap pixel ratio at 1.8
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Lighting setup
    this.ambientLight = null;
    this.sunLight = null;
    this.hemisphereLight = null;

    // Screen shake
    this.shakeIntensity = 0;
    this.shakeDecay = 5.0;

    // NEPA darkness state
    this.isNepaBlackout = false;
    this.originalLightIntensity = { ambient: 0.9, sun: 1.4 };

    this.initLightingAndAtmosphere();

    window.addEventListener("resize", () => this.onResize());
    themeManager.onThemeChange((tokens) => this.updateTheme(tokens));
  }

  initLightingAndAtmosphere() {
    const tokens = themeManager.getTokens();

    // Atmospheric Fog
    this.scene.fog = new THREE.FogExp2(
      new THREE.Color(tokens.world.fogColor),
      0.011
    );
    this.scene.background = new THREE.Color(tokens.world.skyBottom);

    // Ambient Light
    this.ambientLight = new THREE.AmbientLight(
      new THREE.Color(tokens.world.ambientLight),
      0.85
    );
    this.scene.add(this.ambientLight);

    // Hemisphere Light (sky / ground gradient)
    this.hemisphereLight = new THREE.HemisphereLight(
      new THREE.Color(tokens.world.skyTop),
      new THREE.Color(tokens.world.road),
      0.65
    );
    this.scene.add(this.hemisphereLight);

    // Golden Sunset Directional Light (Sun)
    this.sunLight = new THREE.DirectionalLight(
      new THREE.Color(tokens.world.sunLight),
      1.35
    );
    this.sunLight.position.set(25, 45, 50);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 1024;
    this.sunLight.shadow.mapSize.height = 1024;
    this.sunLight.shadow.camera.near = 10;
    this.sunLight.shadow.camera.far = 160;
    this.sunLight.shadow.camera.left = -25;
    this.sunLight.shadow.camera.right = 25;
    this.sunLight.shadow.camera.top = 25;
    this.sunLight.shadow.camera.bottom = -25;
    this.scene.add(this.sunLight);

    // Visible stylized Sun sphere on horizon
    const sunGeo = new THREE.SphereGeometry(18, 16, 16);
    const sunMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(tokens.world.sunColor)
    });
    this.sunSphere = new THREE.Mesh(sunGeo, sunMat);
    this.sunSphere.position.set(20, 22, 280);
    this.scene.add(this.sunSphere);
  }

  updateTheme(tokens) {
    if (this.scene.fog) {
      this.scene.fog.color.set(tokens.world.fogColor);
    }
    if (this.scene.background) {
      this.scene.background.set(tokens.world.skyBottom);
    }
    if (this.ambientLight) {
      this.ambientLight.color.set(tokens.world.ambientLight);
    }
    if (this.hemisphereLight) {
      this.hemisphereLight.color.set(tokens.world.skyTop);
      this.hemisphereLight.groundColor.set(tokens.world.road);
    }
    if (this.sunLight) {
      this.sunLight.color.set(tokens.world.sunLight);
    }
    if (this.sunSphere) {
      this.sunSphere.material.color.set(tokens.world.sunColor);
    }
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
  }

  triggerScreenShake(intensity = 0.45) {
    this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
  }

  setNepaBlackout(active) {
    this.isNepaBlackout = active;
    if (active) {
      if (this.ambientLight) this.ambientLight.intensity = 0.08;
      if (this.sunLight) this.sunLight.intensity = 0.05;
      if (this.scene.fog) this.scene.fog.density = 0.025;
      if (this.scene.background) this.scene.background.set(0x05050a);
    } else {
      const tokens = themeManager.getTokens();
      if (this.ambientLight) this.ambientLight.intensity = 0.85;
      if (this.sunLight) this.sunLight.intensity = 1.35;
      if (this.scene.fog) {
        this.scene.fog.density = 0.011;
        this.scene.fog.color.set(tokens.world.fogColor);
      }
      if (this.scene.background) this.scene.background.set(tokens.world.skyBottom);
    }
  }

  updateCamera(busPosition, delta) {
    // Screen shake decay
    let shakeX = 0;
    let shakeY = 0;
    if (this.shakeIntensity > 0.001) {
      shakeX = (Math.random() - 0.5) * this.shakeIntensity;
      shakeY = (Math.random() - 0.5) * this.shakeIntensity;
      this.shakeIntensity -= this.shakeDecay * delta * this.shakeIntensity;
    }

    // Camera following Danfo bus with smooth offset
    const targetCamX = busPosition.x * 0.45 + shakeX;
    const targetCamY = 4.2 + shakeY;
    const targetCamZ = busPosition.z - 9.2;

    this.camera.position.x += (targetCamX - this.camera.position.x) * Math.min(1, 8.0 * delta);
    this.camera.position.y += (targetCamY - this.camera.position.y) * Math.min(1, 8.0 * delta);
    this.camera.position.z = targetCamZ;

    // Look slightly ahead of bus
    this.camera.lookAt(
      busPosition.x * 0.25,
      busPosition.y + 1.6,
      busPosition.z + 18
    );

    // Keep sunlight shadows centered on bus
    if (this.sunLight) {
      this.sunLight.position.set(busPosition.x + 25, 45, busPosition.z + 40);
      this.sunLight.target.position.set(busPosition.x, 0, busPosition.z + 10);
      this.sunLight.target.updateMatrixWorld();
    }

    if (this.sunSphere) {
      this.sunSphere.position.z = busPosition.z + 280;
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
