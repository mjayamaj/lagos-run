import * as THREE from "three";
import { themeManager } from "../theme/theme.js";

export class World {
  constructor(scene) {
    this.scene = scene;
    this.roadChunks = [];
    this.chunkLength = 60;
    this.numChunks = 5;
    this.roadWidth = 14;
    this.laneWidth = 3.6;

    this.sceneryObjects = [];
    this.busStops = [];

    this.materials = {};
    this.initMaterials();
    this.buildInitialChunks();
    this.buildSkyline();

    themeManager.onThemeChange((tokens) => this.updateTheme(tokens));
  }

  initMaterials() {
    const tokens = themeManager.getTokens();

    this.materials.road = new THREE.MeshLambertMaterial({
      color: new THREE.Color(tokens.world.road)
    });

    this.materials.laneLines = new THREE.MeshBasicMaterial({
      color: new THREE.Color(tokens.world.roadLines)
    });

    this.materials.curb1 = new THREE.MeshLambertMaterial({
      color: new THREE.Color(tokens.world.curbPrimary)
    });

    this.materials.curb2 = new THREE.MeshLambertMaterial({
      color: new THREE.Color(tokens.world.curbSecondary)
    });

    this.materials.sidewalk = new THREE.MeshLambertMaterial({
      color: new THREE.Color(tokens.world.sidewalk)
    });

    this.materials.pole = new THREE.MeshLambertMaterial({
      color: 0x4a3b32
    });

    this.materials.foliage = new THREE.MeshLambertMaterial({
      color: 0x2e7d32
    });

    this.materials.trunk = new THREE.MeshLambertMaterial({
      color: 0x5d4037
    });

    this.materials.umbrella = [
      new THREE.MeshLambertMaterial({ color: 0xd32f2f }), // Red
      new THREE.MeshLambertMaterial({ color: 0xfbc02d }), // Yellow
      new THREE.MeshLambertMaterial({ color: 0x1976d2 }), // Blue
      new THREE.MeshLambertMaterial({ color: 0x388e3c })  // Green
    ];
  }

  updateTheme(tokens) {
    if (this.materials.road) this.materials.road.color.set(tokens.world.road);
    if (this.materials.laneLines) this.materials.laneLines.color.set(tokens.world.roadLines);
    if (this.materials.curb1) this.materials.curb1.color.set(tokens.world.curbPrimary);
    if (this.materials.curb2) this.materials.curb2.color.set(tokens.world.curbSecondary);
    if (this.materials.sidewalk) this.materials.sidewalk.color.set(tokens.world.sidewalk);
  }

  buildInitialChunks() {
    for (let i = 0; i < this.numChunks; i++) {
      const zPos = i * this.chunkLength - this.chunkLength;
      const chunk = this.createRoadChunk(zPos, i);
      this.scene.add(chunk);
      this.roadChunks.push({ mesh: chunk, z: zPos, index: i });
    }
  }

  createRoadChunk(zOffset, chunkIndex) {
    const chunkGroup = new THREE.Group();
    chunkGroup.position.z = zOffset;

    // 1. Asphalt Road
    const roadGeo = new THREE.PlaneGeometry(this.roadWidth, this.chunkLength);
    roadGeo.rotateX(-Math.PI / 2);
    const road = new THREE.Mesh(roadGeo, this.materials.road);
    road.receiveShadow = true;
    chunkGroup.add(road);

    // 2. Dashed Lane Dividers (Separating 3 lanes: -1, 0, 1)
    [-this.laneWidth * 0.5, this.laneWidth * 0.5].forEach((xPos) => {
      const dashCount = 8;
      const dashLen = 3.5;
      const spacing = this.chunkLength / dashCount;
      for (let d = 0; d < dashCount; d++) {
        const dashGeo = new THREE.PlaneGeometry(0.22, dashLen);
        dashGeo.rotateX(-Math.PI / 2);
        const dash = new THREE.Mesh(dashGeo, this.materials.laneLines);
        dash.position.set(xPos, 0.01, -this.chunkLength * 0.5 + d * spacing + dashLen);
        chunkGroup.add(dash);
      }
    });

    // 3. Sidewalks & Lagos Curbs (Yellow-Black Striped Curb Stones!)
    [-1, 1].forEach((side) => {
      const sideX = side * (this.roadWidth * 0.5 + 4.0);
      const walkGeo = new THREE.BoxGeometry(8, 0.25, this.chunkLength);
      const walk = new THREE.Mesh(walkGeo, this.materials.sidewalk);
      walk.position.set(sideX, 0.12, 0);
      walk.receiveShadow = true;
      chunkGroup.add(walk);

      // Striped Curbs
      const curbCount = 12;
      const curbLen = this.chunkLength / curbCount;
      for (let c = 0; c < curbCount; c++) {
        const curbGeo = new THREE.BoxGeometry(0.3, 0.35, curbLen);
        const curbMat = c % 2 === 0 ? this.materials.curb1 : this.materials.curb2;
        const curb = new THREE.Mesh(curbGeo, curbMat);
        curb.position.set(
          side * (this.roadWidth * 0.5 + 0.15),
          0.17,
          -this.chunkLength * 0.5 + c * curbLen + curbLen * 0.5
        );
        chunkGroup.add(curb);
      }
    });

    // 4. Props: NEPA Electric Poles, Palm Trees, Market Umbrellas, Billboards
    this.addChunkProps(chunkGroup, chunkIndex);

    return chunkGroup;
  }

  addChunkProps(group, chunkIndex) {
    // Electric Poles with overhead crossbeams
    [-1, 1].forEach((side) => {
      const poleX = side * (this.roadWidth * 0.5 + 3.2);
      const poleZ = (Math.random() - 0.5) * 20;

      const poleGroup = new THREE.Group();
      poleGroup.position.set(poleX, 0, poleZ);

      // Wooden/Concrete tall pole
      const poleGeo = new THREE.CylinderGeometry(0.18, 0.22, 9, 8);
      const pole = new THREE.Mesh(poleGeo, this.materials.pole);
      pole.position.y = 4.5;
      pole.castShadow = true;
      poleGroup.add(pole);

      // Cross arms
      const armGeo = new THREE.BoxGeometry(2.4, 0.15, 0.15);
      const arm = new THREE.Mesh(armGeo, this.materials.pole);
      arm.position.y = 8.2;
      poleGroup.add(arm);

      // Insulator caps
      [-1, 0, 1].forEach((iPos) => {
        const insGeo = new THREE.CylinderGeometry(0.06, 0.08, 0.2, 6);
        const insMat = new THREE.MeshBasicMaterial({ color: 0xdddddd });
        const ins = new THREE.Mesh(insGeo, insMat);
        ins.position.set(iPos * 0.9, 8.35, 0);
        poleGroup.add(ins);
      });

      group.add(poleGroup);
    });

    // Palm trees
    [-1, 1].forEach((side) => {
      if (Math.random() > 0.4) {
        const treeX = side * (this.roadWidth * 0.5 + 5.5 + Math.random() * 2);
        const treeZ = (Math.random() - 0.5) * 35;
        const tree = this.createPalmTree();
        tree.position.set(treeX, 0, treeZ);
        group.add(tree);
      }
    });

    // Market Umbrella Stalls (Hawkers, fruit sellers)
    if (Math.random() > 0.3) {
      const side = Math.random() > 0.5 ? 1 : -1;
      const stallX = side * (this.roadWidth * 0.5 + 1.8);
      const stallZ = (Math.random() - 0.5) * 30;
      const stall = this.createMarketStall();
      stall.position.set(stallX, 0, stallZ);
      group.add(stall);
    }

    // Lagos Billboard every 2 chunks
    if (chunkIndex % 2 === 0) {
      const board = this.createBillboard();
      board.position.set(this.roadWidth * 0.5 + 6.5, 0, 0);
      group.add(board);
    }
  }

  createPalmTree() {
    const tree = new THREE.Group();
    // Curved trunk
    const trunkGeo = new THREE.CylinderGeometry(0.2, 0.35, 7, 7);
    const trunk = new THREE.Mesh(trunkGeo, this.materials.trunk);
    trunk.position.y = 3.5;
    trunk.rotation.z = (Math.random() - 0.5) * 0.2;
    trunk.castShadow = true;
    tree.add(trunk);

    // Palm fronds
    for (let f = 0; f < 6; f++) {
      const angle = (f / 6) * Math.PI * 2;
      const frondGeo = new THREE.ConeGeometry(1.2, 3.8, 4);
      frondGeo.rotateX(Math.PI / 2.5);
      const frond = new THREE.Mesh(frondGeo, this.materials.foliage);
      frond.position.set(0, 6.8, 0);
      frond.rotation.y = angle;
      frond.castShadow = true;
      tree.add(frond);
    }
    return tree;
  }

  createMarketStall() {
    const stall = new THREE.Group();
    // Metal/wood pole
    const standGeo = new THREE.CylinderGeometry(0.06, 0.06, 2.4, 6);
    const standMat = new THREE.MeshLambertMaterial({ color: 0x444444 });
    const stand = new THREE.Mesh(standGeo, standMat);
    stand.position.y = 1.2;
    stall.add(stand);

    // Colorful Nigerian umbrella (striped cone)
    const umbrellaGeo = new THREE.ConeGeometry(1.4, 0.6, 8);
    const randMat = this.materials.umbrella[Math.floor(Math.random() * this.materials.umbrella.length)];
    const umbrella = new THREE.Mesh(umbrellaGeo, randMat);
    umbrella.position.y = 2.4;
    umbrella.rotation.y = Math.random() * Math.PI;
    stall.add(umbrella);

    // Table with goods / cartons
    const tableGeo = new THREE.BoxGeometry(1.2, 0.7, 0.8);
    const tableMat = new THREE.MeshLambertMaterial({ color: 0x8d6e63 });
    const table = new THREE.Mesh(tableGeo, tableMat);
    table.position.y = 0.35;
    stall.add(table);

    // Goods (tomatoes / plantain boxes)
    const goodsGeo = new THREE.BoxGeometry(0.9, 0.2, 0.6);
    const goodsMat = new THREE.MeshLambertMaterial({ color: 0xe53935 });
    const goods = new THREE.Mesh(goodsGeo, goodsMat);
    goods.position.y = 0.75;
    stall.add(goods);

    return stall;
  }

  createBillboard() {
    const slogans = [
      "NO CONDITION IS PERMANENT",
      "START.NG - BUILD THE FUTURE",
      "GBEDU FM 105.5 - NO DULLING",
      "GOD'S TIME MOTORS NAIJA",
      "HOT LAGOS PARTY JOLLOF"
    ];
    const slogan = slogans[Math.floor(Math.random() * slogans.length)];

    const boardGroup = new THREE.Group();
    // Metal pillars
    [-1.2, 1.2].forEach(pX => {
      const pillarGeo = new THREE.CylinderGeometry(0.12, 0.12, 6, 6);
      const pillarMat = new THREE.MeshLambertMaterial({ color: 0x37474f });
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      pillar.position.set(pX, 3.0, 0);
      boardGroup.add(pillar);
    });

    // Board canvas texture
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#FFC107";
    ctx.fillRect(0, 0, 512, 256);
    ctx.strokeStyle = "#1A1A1A";
    ctx.lineWidth = 14;
    ctx.strokeRect(10, 10, 492, 236);

    ctx.fillStyle = "#1A1A1A";
    ctx.font = "bold 32px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("LAGOS EXPRESSWAY", 256, 75);

    ctx.fillStyle = "#D32F2F";
    ctx.font = "bold 26px sans-serif";
    ctx.fillText(slogan, 256, 145);

    const texture = new THREE.CanvasTexture(canvas);
    const boardMat = new THREE.MeshBasicMaterial({ map: texture });
    const boardGeo = new THREE.BoxGeometry(4.2, 2.2, 0.2);
    const board = new THREE.Mesh(boardGeo, boardMat);
    board.position.y = 6.0;
    boardGroup.add(board);

    return boardGroup;
  }

  buildSkyline() {
    // Stylized silhouette buildings in the far distance
    this.skylineGroup = new THREE.Group();
    const tokens = themeManager.getTokens();
    const colors = tokens.world.buildingColors;

    for (let i = 0; i < 28; i++) {
      const w = 12 + Math.random() * 18;
      const h = 25 + Math.random() * 55;
      const d = 15;
      const x = (i - 14) * 22;
      const z = 180 + Math.random() * 40;

      const col = colors[i % colors.length];
      const mat = new THREE.MeshLambertMaterial({ color: new THREE.Color(col) });
      const geo = new THREE.BoxGeometry(w, h, d);
      const building = new THREE.Mesh(geo, mat);
      building.position.set(x, h * 0.5 - 2, z);
      this.skylineGroup.add(building);
    }

    this.scene.add(this.skylineGroup);
  }

  update(busZ, forwardSpeed, delta) {
    // Keep skyline locked to bus forward movement so it stays on the horizon
    if (this.skylineGroup) {
      this.skylineGroup.position.z = busZ;
    }

    // Scroll road chunks endlessly
    this.roadChunks.forEach((chunk) => {
      // If chunk is behind player camera, recycle forward
      if (chunk.mesh.position.z < busZ - this.chunkLength * 1.5) {
        chunk.mesh.position.z += this.chunkLength * this.numChunks;
      }
    });
  }
}
