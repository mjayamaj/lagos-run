import * as THREE from "three";
import { themeManager } from "../theme/theme.js";

export class DanfoBus {
  constructor() {
    this.mesh = new THREE.Group();
    this.materials = {};
    this.wheels = [];
    this.luggageMeshes = [];
    this.headlightBeams = [];
    this.conductorArm = null;

    // Movement & Physics
    this.targetLane = 0; // -1: Left, 0: Center, 1: Right
    this.laneWidth = 3.6;
    this.currentX = 0;
    this.targetX = 0;
    this.laneSpeed = 12.0;

    // Dynamics
    this.roll = 0;
    this.pitch = 0;
    this.bounceOffset = 0;
    this.spinAngle = 0;
    this.isSpinning = false;
    this.spinTimer = 0;

    // Power-up visual states
    this.isShielded = false; // Generator boost
    this.isSirenActive = false;
    this.shieldMesh = null;
    this.sirenMesh = null;

    this.initMaterials();
    this.buildBus();
    this.buildLuggageRack();
    this.buildDriverAndConductor();
    this.buildPowerUpAttachments();

    // Listen to theme changes to dynamically recolor bus and characters
    themeManager.onThemeChange((tokens) => this.updateTheme(tokens));
  }

  initMaterials() {
    const tokens = themeManager.getTokens();

    this.materials.body = new THREE.MeshLambertMaterial({
      color: new THREE.Color(tokens.danfo.body),
      roughness: 0.4
    });

    this.materials.stripe = new THREE.MeshLambertMaterial({
      color: new THREE.Color(tokens.danfo.stripe)
    });

    this.materials.bumper = new THREE.MeshLambertMaterial({
      color: new THREE.Color(tokens.danfo.bumper)
    });

    this.materials.glass = new THREE.MeshStandardMaterial({
      color: 0x88c0d0,
      metalness: 0.1,
      roughness: 0.2,
      transparent: true,
      opacity: 0.55
    });

    this.materials.wheel = new THREE.MeshLambertMaterial({
      color: 0x222222
    });

    this.materials.rim = new THREE.MeshLambertMaterial({
      color: 0xcccccc
    });

    this.materials.headlight = new THREE.MeshBasicMaterial({
      color: new THREE.Color(tokens.danfo.headlightGlow)
    });

    this.materials.taillight = new THREE.MeshBasicMaterial({
      color: new THREE.Color(tokens.danfo.taillightGlow)
    });

    // Character materials
    this.materials.driverSkin = new THREE.MeshLambertMaterial({
      color: new THREE.Color(tokens.character.skin)
    });

    this.materials.driverOutfit = new THREE.MeshLambertMaterial({
      color: new THREE.Color(tokens.character.outfit)
    });

    this.materials.driverCap = new THREE.MeshLambertMaterial({
      color: new THREE.Color(tokens.character.cap)
    });

    this.materials.driverGlasses = new THREE.MeshBasicMaterial({
      color: new THREE.Color(tokens.character.glasses)
    });

    this.materials.conductorOutfit = new THREE.MeshLambertMaterial({
      color: new THREE.Color(tokens.character.conductorOutfit)
    });
  }

  updateTheme(tokens) {
    if (this.materials.body) this.materials.body.color.set(tokens.danfo.body);
    if (this.materials.stripe) this.materials.stripe.color.set(tokens.danfo.stripe);
    if (this.materials.bumper) this.materials.bumper.color.set(tokens.danfo.bumper);
    if (this.materials.headlight) this.materials.headlight.color.set(tokens.danfo.headlightGlow);
    if (this.materials.taillight) this.materials.taillight.color.set(tokens.danfo.taillightGlow);
    if (this.materials.driverSkin) this.materials.driverSkin.color.set(tokens.character.skin);
    if (this.materials.driverOutfit) this.materials.driverOutfit.color.set(tokens.character.outfit);
    if (this.materials.driverCap) this.materials.driverCap.color.set(tokens.character.cap);
    if (this.materials.conductorOutfit) this.materials.conductorOutfit.color.set(tokens.character.conductorOutfit);

    this.headlightBeams.forEach(light => {
      light.color.set(tokens.danfo.headlightGlow);
    });
  }

  applyCharacterStyle(style) {
    if (!style) return;
    if (style.skinColor && this.materials.driverSkin) {
      this.materials.driverSkin.color.set(style.skinColor);
    }
    if (style.primaryColor && this.materials.driverOutfit) {
      this.materials.driverOutfit.color.set(style.primaryColor);
    }
    if (style.secondaryColor && this.materials.conductorOutfit) {
      this.materials.conductorOutfit.color.set(style.secondaryColor);
    }
    if (style.hairColor && this.materials.driverCap) {
      this.materials.driverCap.color.set(style.hairColor);
    }
  }

  buildBus() {
    // Danfo Bus dimensions (typical Volkswagen Transporter / LT van)
    const busW = 2.1;
    const busH = 2.2;
    const busL = 4.8;

    // 1. Lower Body (Yellow Danfo)
    const lowerBodyGeo = new THREE.BoxGeometry(busW, 1.1, busL);
    const lowerBody = new THREE.Mesh(lowerBodyGeo, this.materials.body);
    lowerBody.position.y = 0.95;
    lowerBody.castShadow = true;
    lowerBody.receiveShadow = true;
    this.mesh.add(lowerBody);

    // 2. Iconic Black Stripes (Two horizontal bands wrapping around the bus)
    const stripeGeo = new THREE.BoxGeometry(busW + 0.03, 0.18, busL + 0.02);
    const stripe1 = new THREE.Mesh(stripeGeo, this.materials.stripe);
    stripe1.position.y = 0.95;
    this.mesh.add(stripe1);

    const stripe2 = new THREE.Mesh(stripeGeo, this.materials.stripe);
    stripe2.position.y = 0.65;
    this.mesh.add(stripe2);

    // 3. Cabin & Roof (Upper frame)
    const cabinGeo = new THREE.BoxGeometry(busW * 0.95, 1.1, busL * 0.95);
    const cabin = new THREE.Mesh(cabinGeo, this.materials.body);
    cabin.position.y = 1.95;
    cabin.castShadow = true;
    this.mesh.add(cabin);

    // 4. Windows (Front Windshield, Side windows, Back window)
    // Windshield
    const windGeo = new THREE.PlaneGeometry(busW * 0.85, 0.85);
    const wind = new THREE.Mesh(windGeo, this.materials.glass);
    wind.position.set(0, 1.95, busL * 0.475 + 0.01);
    wind.rotation.x = -0.15;
    this.mesh.add(wind);

    // Rear window
    const rearWind = new THREE.Mesh(windGeo, this.materials.glass);
    rearWind.position.set(0, 1.95, -busL * 0.475 - 0.01);
    rearWind.rotation.y = Math.PI;
    this.mesh.add(rearWind);

    // Side windows (Left and Right)
    [-1, 1].forEach((side) => {
      const sideGeo = new THREE.PlaneGeometry(busL * 0.75, 0.75);
      const sideWindow = new THREE.Mesh(sideGeo, this.materials.glass);
      sideWindow.position.set(side * (busW * 0.475 + 0.01), 1.95, 0);
      sideWindow.rotation.y = side * (Math.PI / 2);
      this.mesh.add(sideWindow);
    });

    // 5. Front Grill & Bumpers
    const grillGeo = new THREE.BoxGeometry(busW * 0.7, 0.35, 0.1);
    const grill = new THREE.Mesh(grillGeo, this.materials.bumper);
    grill.position.set(0, 0.75, busL * 0.5 + 0.02);
    this.mesh.add(grill);

    const bumperGeo = new THREE.BoxGeometry(busW + 0.1, 0.22, 0.2);
    const fvBumper = new THREE.Mesh(bumperGeo, this.materials.bumper);
    fvBumper.position.set(0, 0.45, busL * 0.5 + 0.08);
    this.mesh.add(fvBumper);

    const rvBumper = new THREE.Mesh(bumperGeo, this.materials.bumper);
    rvBumper.position.set(0, 0.45, -busL * 0.5 - 0.08);
    this.mesh.add(rvBumper);

    // 6. Headlights (Twin circular/square headlights)
    [-0.7, 0.7].forEach((xPos) => {
      const headGeo = new THREE.BoxGeometry(0.3, 0.25, 0.1);
      const headlight = new THREE.Mesh(headGeo, this.materials.headlight);
      headlight.position.set(xPos, 0.8, busL * 0.5 + 0.05);
      this.mesh.add(headlight);

      // Spot/Point light beam for NEPA night / realism
      const beam = new THREE.SpotLight(0xfff59d, 4.0, 45, Math.PI / 4, 0.4);
      beam.position.set(xPos, 0.8, busL * 0.5 + 0.1);
      beam.target.position.set(xPos * 0.5, 0, busL * 0.5 + 25);
      this.mesh.add(beam);
      this.mesh.add(beam.target);
      this.headlightBeams.push(beam);
    });

    // 7. Taillights
    [-0.8, 0.8].forEach((xPos) => {
      const tailGeo = new THREE.BoxGeometry(0.25, 0.3, 0.08);
      const taillight = new THREE.Mesh(tailGeo, this.materials.taillight);
      taillight.position.set(xPos, 0.85, -busL * 0.5 - 0.03);
      this.mesh.add(taillight);
    });

    // 8. Wheels (4 low-poly wheels with rims)
    const wheelPositions = [
      { x: -busW * 0.48, y: 0.45, z: 1.5 },
      { x: busW * 0.48, y: 0.45, z: 1.5 },
      { x: -busW * 0.48, y: 0.45, z: -1.5 },
      { x: busW * 0.48, y: 0.45, z: -1.5 }
    ];

    wheelPositions.forEach((pos) => {
      const wheelGroup = new THREE.Group();
      wheelGroup.position.set(pos.x, pos.y, pos.z);

      const tireGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.35, 14);
      tireGeo.rotateZ(Math.PI / 2);
      const tire = new THREE.Mesh(tireGeo, this.materials.wheel);
      tire.castShadow = true;
      wheelGroup.add(tire);

      const rimGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.36, 10);
      rimGeo.rotateZ(Math.PI / 2);
      const rim = new THREE.Mesh(rimGeo, this.materials.rim);
      wheelGroup.add(rim);

      this.mesh.add(wheelGroup);
      this.wheels.push(wheelGroup);
    });
  }

  buildLuggageRack() {
    this.rackGroup = new THREE.Group();
    this.rackGroup.position.set(0, 2.55, 0);

    // Metal bars
    const barMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const sideRailGeo = new THREE.BoxGeometry(1.8, 0.1, 3.8);
    const rail = new THREE.Mesh(sideRailGeo, barMat);
    this.rackGroup.add(rail);

    this.mesh.add(this.rackGroup);
  }

  // Roof luggage stacks higher as player earns naira & picks up passengers!
  updateLuggage(passengerCount) {
    // Clear old luggage
    this.luggageMeshes.forEach(mesh => this.rackGroup.remove(mesh));
    this.luggageMeshes = [];

    // Max 14 luggage items stacked neatly in tiers
    const count = Math.min(14, Math.floor(passengerCount * 1.2));
    if (count <= 0) return;

    // Colorful Nigerian luggage palette: Ghana-Must-Go red/blue/black, cartons, tarpaulins, yam bundles
    const bagColors = [0xb71c1c, 0x0d47a1, 0x1b5e20, 0xef6c00, 0x4e342e, 0xfdd835, 0x37474f];

    const slots = [
      // Layer 1
      { x: -0.45, y: 0.25, z: 1.0, w: 0.7, h: 0.45, d: 0.9 },
      { x: 0.45, y: 0.25, z: 1.0, w: 0.65, h: 0.4, d: 0.85 },
      { x: -0.45, y: 0.25, z: 0.0, w: 0.75, h: 0.48, d: 0.9 },
      { x: 0.45, y: 0.25, z: 0.0, w: 0.7, h: 0.45, d: 0.95 },
      { x: -0.45, y: 0.25, z: -1.0, w: 0.7, h: 0.42, d: 0.8 },
      { x: 0.45, y: 0.25, z: -1.0, w: 0.68, h: 0.46, d: 0.9 },

      // Layer 2 (higher stack!)
      { x: -0.3, y: 0.65, z: 0.6, w: 0.65, h: 0.4, d: 0.75 },
      { x: 0.3, y: 0.65, z: 0.6, w: 0.6, h: 0.42, d: 0.7 },
      { x: -0.3, y: 0.65, z: -0.4, w: 0.65, h: 0.38, d: 0.8 },
      { x: 0.3, y: 0.65, z: -0.4, w: 0.6, h: 0.4, d: 0.75 },

      // Layer 3 (Epic towering Lagos Danfo stack!)
      { x: 0.0, y: 1.05, z: 0.2, w: 0.8, h: 0.42, d: 0.9 },
      { x: -0.15, y: 1.05, z: -0.6, w: 0.6, h: 0.35, d: 0.6 },
      { x: 0.15, y: 1.45, z: 0.0, w: 0.5, h: 0.32, d: 0.6 },
      { x: 0.0, y: 1.75, z: -0.1, w: 0.4, h: 0.3, d: 0.45 }
    ];

    for (let i = 0; i < count; i++) {
      const slot = slots[i];
      const col = bagColors[i % bagColors.length];
      const mat = new THREE.MeshLambertMaterial({ color: col });
      const geo = new THREE.BoxGeometry(slot.w, slot.h, slot.d);
      const bag = new THREE.Mesh(geo, mat);
      bag.position.set(slot.x, slot.y, slot.z);
      bag.castShadow = true;

      // Add ropes across bags for that authentic strapped-down look
      const ropeGeo = new THREE.CylinderGeometry(0.015, 0.015, slot.w * 1.1);
      ropeGeo.rotateZ(Math.PI / 2);
      const ropeMat = new THREE.MeshBasicMaterial({ color: 0x222222 });
      const rope = new THREE.Mesh(ropeGeo, ropeMat);
      rope.position.y = slot.h * 0.5 + 0.01;
      bag.add(rope);

      this.rackGroup.add(bag);
      this.luggageMeshes.push(bag);
    }
  }

  buildDriverAndConductor() {
    // 1. Driver (seated on right side in Nigeria RHD/LHD mix)
    const driverGroup = new THREE.Group();
    driverGroup.position.set(-0.45, 1.35, 1.2);

    // Torso
    const torsoGeo = new THREE.BoxGeometry(0.45, 0.5, 0.3);
    const torso = new THREE.Mesh(torsoGeo, this.materials.driverOutfit);
    driverGroup.add(torso);

    // Head
    const headGeo = new THREE.BoxGeometry(0.28, 0.3, 0.28);
    const head = new THREE.Mesh(headGeo, this.materials.driverSkin);
    head.position.y = 0.4;
    driverGroup.add(head);

    // Cap
    const capGeo = new THREE.BoxGeometry(0.32, 0.1, 0.36);
    const cap = new THREE.Mesh(capGeo, this.materials.driverCap);
    cap.position.set(0, 0.55, 0.04);
    driverGroup.add(cap);

    // Sunglasses
    const glassesGeo = new THREE.BoxGeometry(0.26, 0.08, 0.08);
    const glasses = new THREE.Mesh(glassesGeo, this.materials.driverGlasses);
    glasses.position.set(0, 0.42, 0.16);
    driverGroup.add(glasses);

    this.mesh.add(driverGroup);

    // 2. Conductor (hanging out of left side sliding door!)
    const conductorGroup = new THREE.Group();
    conductorGroup.position.set(1.15, 1.2, 0.3);

    // Body angled outward
    conductorGroup.rotation.y = -Math.PI / 3;

    const cTorso = new THREE.Mesh(torsoGeo, this.materials.conductorOutfit);
    conductorGroup.add(cTorso);

    const cHead = new THREE.Mesh(headGeo, this.materials.driverSkin);
    cHead.position.y = 0.4;
    conductorGroup.add(cHead);

    // Conductor waving arm shouting "Ojuelegba straight!"
    const armGeo = new THREE.BoxGeometry(0.12, 0.45, 0.12);
    this.conductorArm = new THREE.Mesh(armGeo, this.materials.driverSkin);
    this.conductorArm.position.set(0.3, 0.35, 0);
    this.conductorArm.rotation.z = -Math.PI / 4;
    conductorGroup.add(this.conductorArm);

    this.mesh.add(conductorGroup);
  }

  buildPowerUpAttachments() {
    // 1. Generator Shield (pulsing bubble)
    const shieldGeo = new THREE.SphereGeometry(3.0, 16, 16);
    const shieldMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.35,
      wireframe: true
    });
    this.shieldMesh = new THREE.Mesh(shieldGeo, shieldMat);
    this.shieldMesh.position.y = 1.5;
    this.shieldMesh.visible = false;
    this.mesh.add(this.shieldMesh);

    // 2. Siren Light (VIP Escort Convoy)
    this.sirenMesh = new THREE.Group();
    this.sirenMesh.position.set(0, 2.7, 1.5);

    const redLight = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 0.2, 8),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    redLight.position.x = -0.3;
    this.sirenMesh.add(redLight);

    const blueLight = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 0.2, 8),
      new THREE.MeshBasicMaterial({ color: 0x0055ff })
    );
    blueLight.position.x = 0.3;
    this.sirenMesh.add(blueLight);

    this.sirenMesh.visible = false;
    this.mesh.add(this.sirenMesh);
  }

  // Controls & Lane Switch
  setLane(lane) {
    this.targetLane = Math.max(-1, Math.min(1, lane));
    this.targetX = this.targetLane * this.laneWidth;
  }

  shiftLeft() {
    this.setLane(this.targetLane - 1);
  }

  shiftRight() {
    this.setLane(this.targetLane + 1);
  }

  triggerSpin() {
    if (this.isSpinning) return;
    this.isSpinning = true;
    this.spinTimer = 0;
  }

  setShield(active) {
    this.isShielded = active;
    if (this.shieldMesh) this.shieldMesh.visible = active;
  }

  setSiren(active) {
    this.isSirenActive = active;
    if (this.sirenMesh) this.sirenMesh.visible = active;
  }

  update(delta, currentSpeed) {
    // 1. Lane interpolation
    const dx = this.targetX - this.currentX;
    this.currentX += dx * Math.min(1, this.laneSpeed * delta);
    this.mesh.position.x = this.currentX;

    // 2. Wheel rotation based on forward speed
    const wheelRot = (currentSpeed * delta * 2.5);
    this.wheels.forEach(w => {
      w.children.forEach(c => {
        c.rotation.x += wheelRot;
      });
    });

    // 3. Dynamic banking/roll when changing lanes
    const targetRoll = -dx * 0.08;
    this.roll += (targetRoll - this.roll) * Math.min(1, 10.0 * delta);

    // 4. Conductor animated waving
    if (this.conductorArm) {
      this.conductorArm.rotation.x = Math.sin(Date.now() * 0.008) * 0.4;
      this.conductorArm.rotation.z = -Math.PI / 4 + Math.sin(Date.now() * 0.01) * 0.2;
    }

    // 5. Spin out handling (from flood)
    if (this.isSpinning) {
      this.spinTimer += delta;
      this.spinAngle += delta * 14.0;
      if (this.spinTimer > 0.8) {
        this.isSpinning = false;
        this.spinAngle = 0;
      }
    }

    // 6. Suspension bounce / natural road vibration
    const rumble = Math.sin(Date.now() * 0.03) * 0.02 * (currentSpeed / 20);
    this.mesh.position.y = this.bounceOffset + rumble;

    // Apply combined rotations
    this.mesh.rotation.z = this.roll;
    this.mesh.rotation.y = this.isSpinning ? this.spinAngle : 0;

    // 7. Power-up animations
    if (this.isShielded && this.shieldMesh) {
      this.shieldMesh.rotation.y += delta * 4;
      this.shieldMesh.rotation.x += delta * 2;
    }

    if (this.isSirenActive && this.sirenMesh) {
      const flash = Math.sin(Date.now() * 0.025);
      this.sirenMesh.children[0].visible = flash > 0;
      this.sirenMesh.children[1].visible = flash <= 0;
    }
  }

  // Get 3D bounding box for collision detection (chassis-only, strictly within current lane)
  getBoundingBox() {
    const posX = this.mesh.position.x;
    const posY = this.mesh.position.y;
    const posZ = this.mesh.position.z;

    // Danfo Bus chassis dimensions (laneWidth is 3.6m):
    // Half-width 0.85m gives a 1.7m wide bus, leaving nearly 1m safety space on each side!
    const halfW = 0.85;
    const halfL = 2.1;
    const height = 2.0;

    return new THREE.Box3(
      new THREE.Vector3(posX - halfW, posY + 0.1, posZ - halfL),
      new THREE.Vector3(posX + halfW, posY + 0.1 + height, posZ + halfL)
    );
  }
}
