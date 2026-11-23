/* Form 2 Assessment — offline-first inspection app */

const I18N = {
  en: {
    app: "Form 2 Assessment",
    inspections: "Inspections",
    newTree: "New tree inspection",
    noRecords: "No inspections yet. Start one in the field.",
    treeInfo: "Tree information",
    treeId: "Tree ID / tag",
    species: "Species",
    speciesSearch: "Search Chinese or scientific name",
    speciesNone: "No matching species",
    site: "Site / location",
    nearby: "Nearby environment",
    targets: "Targets",
    inspector: "Inspector",
    comments: "Assessment comments",
    notes: "Notes",
    treePhotos: "Tree photos (at least 1)",
    addTreePhoto: "Take / add tree photos",
    gps: "Capture GPS",
    gpsOff: "No GPS yet",
    saveTree: "Save tree & continue",
    drills: "Drillings",
    addDrill: "Add drilling",
    noDrills: "No drillings yet.",
    height: "Height above ground",
    unit: "Unit",
    feedSpeed: "Feed speed (cm/min)",
    drillSpeed: "Drilling speed (r/min)",
    direction: "Drilling direction",
    captureDir: "Capture compass direction",
    recapture: "Recapture",
    manualDir: "Or type START face (0=N, 90=E, 180=S, 270=W)",
    standHint: "Point the top of the phone the same way the drill needle goes into the tree. The number recorded is the START face (where you begin), not the needle path. Example: drilling North → South, phone faces south, record is North.",
    startFace: "Start face",
    facingPhone: "Phone / needle toward",
    calibrate: "Wave the phone in a figure-8 away from the steel drill, then hold it flat",
    tiltWarn: "Tilted — lay the phone flat like iPhone Compass",
    relativeWarn: "Relative heading only — tap Enable compass, or type the start face",
    enableCompass: "Enable compass",
    compassLive: "Compass live",
    compassNeedPerm: "Compass permission needed",
    compassUnavailable: "Compass not available — type the bearing",
    holdSteady: "Hold phone level, away from steel tools",
    photoA: "Photo 1 — drill position",
    photoB: "Photo 2 — printout / screen",
    takePhoto: "Take photo",
    replacePhoto: "Replace",
    saveDrill: "Save drilling",
    needHeight: "Enter height",
    needDir: "Capture or enter direction",
    need2photos: "Take 2 photos for this drilling",
    need1treePhoto: "Add at least 1 tree photo before export",
    photoCaption: "Caption (optional)",
    markPhoto: "Mark photo",
    toolArrow: "Arrow",
    toolCircle: "Circle",
    toolDash: "Dashed line",
    strokeThin: "Thin",
    strokeMedium: "Medium",
    strokeThick: "Thick",
    markHint: "Drag on the photo to draw. Curve a dashed line to make an arc.",
    arcLengthHint: "Drag the mark to move it. Drag the ends to change arc length, or the middle to change the curve.",
    moveMarkHint: "Drag the mark to move it.",
    undoMark: "Undo",
    clearMarks: "Clear marks",
    rotatePhoto: "Rotate 90°",
    saveMarks: "Save",
    cancel: "Cancel",
    movePrev: "Move earlier",
    moveNext: "Move later",
    stampOn: "Date/time stamp: ON",
    stampOff: "Date/time stamp: OFF",
    back: "Back",
    open: "Open",
    delete: "Delete",
    export: "Export Word",
    exportJson: "Backup JSON",
    print: "Print / PDF",
    captured: "Captured",
    magnetic: "Magnetic",
    toward: "Needle toward",
    from: "Entry from",
    date: "Date",
    drillsCount: "drillings",
    photos: "photos",
    saved: "Saved",
    deleted: "Deleted",
    confirmDelete: "Delete this inspection and its photos?",
    confirmDeleteDrill: "Delete this drilling?",
    reportTitle: "Form 2 Assessment",
    optionalNotes: "Drill notes (sound wood, decay, depth…)",
    lang: "中文",
    heading: "Heading",
    ready: "Ready",
    waiting: "Waiting for compass…",
    accuracy: "Keep the phone flat like a compass",
  },
  zh: {
    app: "表格2評估",
    inspections: "檢查記錄",
    newTree: "新增樹木檢查",
    noRecords: "尚未有記錄。在現場開始一筆即可。",
    treeInfo: "樹木資料",
    treeId: "樹木編號 / 標籤",
    species: "樹種",
    speciesSearch: "搜尋中文名或學名",
    speciesNone: "沒有符合的樹種",
    site: "地點",
    nearby: "附近環境",
    targets: "目標",
    comments: "評估意見",
    inspector: "檢查員",
    notes: "備註",
    treePhotos: "樹木照片（至少 1 張）",
    addTreePhoto: "拍攝 / 一次過加入樹木照片",
    gps: "擷取 GPS",
    gpsOff: "尚未有 GPS",
    saveTree: "儲存並繼續",
    drills: "鑽孔記錄",
    addDrill: "新增鑽孔",
    noDrills: "尚未有鑽孔。",
    height: "離地高度",
    unit: "單位",
    feedSpeed: "進給速度 (cm/min)",
    drillSpeed: "鑽速 (r/min)",
    direction: "鑽孔方向",
    captureDir: "擷取指南針方向",
    recapture: "重新擷取",
    manualDir: "或手動輸入開始面（0=北、90=東、180=南、270=西）",
    standHint: "將手機頂端對準鑽針進入樹幹的方向（對住樹）。記錄的是「開始鑽孔的一面」，不是鑽針去向。例如由北鑽向南：指南針朝南，記錄為北。",
    startFace: "開始面",
    facingPhone: "手機／鑽針朝向",
    calibrate: "將手機拿到鋼製儀器外，畫 8 字校準，再平放讀數",
    tiltWarn: "傾側中 — 請將手機平放，像 iPhone 指南針",
    relativeWarn: "現為相對方向 — 請再按開啟指南針，或手動輸入開始面",
    enableCompass: "開啟指南針",
    compassLive: "指南針運作中",
    compassNeedPerm: "需要指南針權限",
    compassUnavailable: "無法使用指南針 — 請手動輸入方位角",
    holdSteady: "手機保持水平，遠離鋼製工具",
    photoA: "照片 1 — 鑽孔位置",
    photoB: "照片 2 — 列印紙 / 螢幕",
    takePhoto: "拍照",
    replacePhoto: "更換",
    saveDrill: "儲存鑽孔",
    needHeight: "請輸入高度",
    needDir: "請擷取或輸入方向",
    need2photos: "此鑽孔需要 2 張照片",
    need1treePhoto: "匯出前請至少加入 1 張樹木照片",
    photoCaption: "說明（可留空）",
    markPhoto: "標註相片",
    toolArrow: "箭咀",
    toolCircle: "圓圈",
    toolDash: "虛線",
    strokeThin: "細",
    strokeMedium: "中",
    strokeThick: "粗",
    markHint: "喺相片上拖曳即可畫。虛線可以拉成弧型。",
    arcLengthHint: "拉住標示就可以移動。拖兩端可以改弧長，拖中間可以改彎度。",
    moveMarkHint: "拉住標示就可以移動。",
    undoMark: "復原",
    clearMarks: "清除標註",
    rotatePhoto: "旋轉 90°",
    saveMarks: "儲存",
    cancel: "取消",
    movePrev: "往前移",
    moveNext: "往後移",
    stampOn: "日期時間戳：開",
    stampOff: "日期時間戳：關",
    back: "返回",
    open: "開啟",
    delete: "刪除",
    export: "匯出 Word",
    exportJson: "備份 JSON",
    print: "列印 / PDF",
    captured: "已擷取",
    magnetic: "磁方位",
    toward: "鑽針朝向",
    from: "進入面",
    date: "日期",
    drillsCount: "個鑽孔",
    photos: "張照片",
    saved: "已儲存",
    deleted: "已刪除",
    confirmDelete: "刪除此檢查及其照片？",
    confirmDeleteDrill: "刪除此鑽孔？",
    reportTitle: "表格2評估",
    optionalNotes: "鑽孔備註（健全材、腐朽、深度…）",
    lang: "EN",
    heading: "方位角",
    ready: "就緒",
    waiting: "等待指南針…",
    accuracy: "將手機平放如指南針",
  },
};

const DB_NAME = "form2-field";
const DB_VER = 1;
let db;
let lang = localStorage.getItem("rf-lang") || "en";
let currentTreeId = null;
let currentDrillId = null;
let liveHeading = null;       // phone facing / needle-toward, magnetic
let liveStartHeading = null;  // opposite: start / entry face
let compassWatching = false;
let orientationHandler = null;
let absSensor = null;
let compassMode = "none"; // webkit | absolute | relative
let lastRawHeading = null;
let compassTicksReady = false;

function t(key) {
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
}

function uid() {
  return crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2);
}

function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 1800);
}

function openDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VER);
    req.onupgradeneeded = () => {
      const d = req.result;
      if (!d.objectStoreNames.contains("trees")) d.createObjectStore("trees", { keyPath: "id" });
      if (!d.objectStoreNames.contains("photos")) d.createObjectStore("photos", { keyPath: "id" });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function txDone(tx) {
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
}

async function putTree(tree) {
  const tx = db.transaction("trees", "readwrite");
  tx.objectStore("trees").put(tree);
  await txDone(tx);
}

async function getTree(id) {
  return new Promise((resolve, reject) => {
    const req = db.transaction("trees").objectStore("trees").get(id);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function allTrees() {
  return new Promise((resolve, reject) => {
    const req = db.transaction("trees").objectStore("trees").getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

async function deleteTree(id) {
  const tree = await getTree(id);
  const photoIds = [];
  if (tree) {
    (tree.treePhotoIds || []).forEach((p) => photoIds.push(p));
    (tree.drills || []).forEach((d) => (d.photoIds || []).forEach((p) => photoIds.push(p)));
  }
  const tx = db.transaction(["trees", "photos"], "readwrite");
  tx.objectStore("trees").delete(id);
  photoIds.forEach((pid) => tx.objectStore("photos").delete(pid));
  await txDone(tx);
}

async function putPhoto(id, blob) {
  const tx = db.transaction("photos", "readwrite");
  tx.objectStore("photos").put({ id, blob, createdAt: Date.now() });
  await txDone(tx);
}

async function getPhoto(id) {
  return new Promise((resolve, reject) => {
    const req = db.transaction("photos").objectStore("photos").get(id);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function deletePhoto(id) {
  const tx = db.transaction("photos", "readwrite");
  tx.objectStore("photos").delete(id);
  await txDone(tx);
}

function cardinalFromDeg(deg) {
  if (deg == null || Number.isNaN(deg)) return "—";
  const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const i = Math.round((((deg % 360) + 360) % 360) / 45) % 8;
  return dirs[i];
}

function oppositeDeg(deg) {
  return (((deg + 180) % 360) + 360) % 360;
}

function headingLabel8(deg) {
  if (deg == null || Number.isNaN(Number(deg))) return "";
  const d = ((Number(deg) % 360) + 360) % 360;
  const rounded = Math.round(d) % 360;
  let card;
  if (rounded === 0) card = "N";
  else if (rounded === 90) card = "E";
  else if (rounded === 180) card = "S";
  else if (rounded === 270) card = "W";
  else if (rounded > 0 && rounded < 90) card = "NE";
  else if (rounded > 90 && rounded < 180) card = "SE";
  else if (rounded > 180 && rounded < 270) card = "SW";
  else card = "NW";
  return card + String(rounded);
}

function formatHeading(startDeg) {
  if (startDeg == null || Number.isNaN(Number(startDeg))) return "—";
  return headingLabel8(startDeg);
}

function norm360(deg) {
  return ((Number(deg) % 360) + 360) % 360;
}

function smoothHeading(prev, next, alpha) {
  if (prev == null || Number.isNaN(prev)) return next;
  let delta = next - prev;
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  return norm360(prev + alpha * delta);
}

function screenAngle() {
  if (screen.orientation && typeof screen.orientation.angle === "number") return screen.orientation.angle;
  if (typeof window.orientation === "number") return window.orientation;
  return 0;
}

function buildCompassTicks() {
  const wrap = document.getElementById("compassTicks");
  if (!wrap || compassTicksReady) return;
  const rose = document.getElementById("compassRose");
  const size = (rose && rose.offsetWidth) || 280;
  const originY = size / 2 - 12;
  let html = "";
  for (let i = 0; i < 72; i++) {
    const deg = i * 5;
    const major = deg % 30 === 0;
    html += `<span class="${major ? "major" : ""}" style="transform:rotate(${deg}deg);transform-origin:50% ${originY}px"></span>`;
  }
  wrap.innerHTML = html;
  compassTicksReady = true;
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.toggle("active", s.id === id));
  if (id !== "screen-drill") stopCompass();
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });
  document.getElementById("langBtn").textContent = t("lang");
  document.title = t("app");
  updateStampButtons();
}

async function toggleLang() {
  if (currentTreeId) await saveTreeFields();
  lang = lang === "en" ? "zh" : "en";
  localStorage.setItem("rf-lang", lang);
  applyI18n();
  if (document.getElementById("screen-home").classList.contains("active")) renderHome();
  if (document.getElementById("screen-tree").classList.contains("active") && currentTreeId) openTree(currentTreeId);
}

function speciesLabel(item) {
  const chi = (item.chi || "").trim();
  const sci = (item.sci || "").trim();
  if (chi && chi !== "-" && sci) return `${chi} (${sci})`;
  return chi && chi !== "-" ? chi : sci;
}

function filterSpecies(query) {
  const list = Array.isArray(window.SPECIES_LIST) ? window.SPECIES_LIST : [];
  const q = (query || "").trim().toLowerCase();
  if (!q) return list;
  const exact = [];
  const start = [];
  const mid = [];
  for (const item of list) {
    const chi = (item.chi || "").toLowerCase();
    const sci = (item.sci || "").toLowerCase();
    const hay = `${chi} ${sci}`;
    if (chi === q || sci === q) exact.push(item);
    else if (chi.startsWith(q) || sci.startsWith(q)) start.push(item);
    else if (hay.includes(q)) mid.push(item);
  }
  return exact.concat(start, mid).slice(0, 80);
}

function hideSpeciesSuggest() {
  const box = document.getElementById("speciesSuggest");
  if (!box) return;
  box.classList.remove("open");
  box.innerHTML = "";
}

function showSpeciesSuggest(query) {
  const box = document.getElementById("speciesSuggest");
  const input = document.getElementById("f-species");
  if (!box || !input) return;
  if (!Array.isArray(window.SPECIES_LIST) || !window.SPECIES_LIST.length) {
    box.classList.add("open");
    box.innerHTML = `<div class="suggest-empty">${t("speciesNone")} (list missing)</div>`;
    return;
  }
  const matches = filterSpecies(query);
  if (!matches.length) {
    box.classList.add("open");
    box.innerHTML = `<div class="suggest-empty">${t("speciesNone")}</div>`;
    return;
  }
  box.classList.add("open");
  box.innerHTML = matches
    .map((item, i) => {
      const title = item.chi && item.chi !== "-" ? item.chi : item.sci;
      return `<button type="button" class="suggest-item" data-species-i="${i}">
        <span class="chi">${escapeHtml(title)}</span>
        <span class="sci">${escapeHtml(item.sci || "")}</span>
      </button>`;
    })
    .join("");

  // Track touch movement so scrolling doesn't select
  let touchStartY = 0;
  let moved = false;
  box.ontouchstart = (e) => {
    touchStartY = e.touches[0].clientY;
    moved = false;
  };
  box.ontouchmove = (e) => {
    if (Math.abs(e.touches[0].clientY - touchStartY) > 6) moved = true;
  };

  box.querySelectorAll("[data-species-i]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      const item = matches[Number(btn.getAttribute("data-species-i"))];
      if (!item) return;
      input.value = speciesLabel(item);
      hideSpeciesSuggest();
      input.blur();
    });
  });
}

function wireSpeciesPicker() {
  const input = document.getElementById("f-species");
  const box = document.getElementById("speciesSuggest");
  if (!input || !box) return;
  input.setAttribute("autocomplete", "off");
  input.setAttribute("autocapitalize", "off");
  input.setAttribute("spellcheck", "false");
  input.addEventListener("focus", () => showSpeciesSuggest(input.value));
  input.addEventListener("click", () => showSpeciesSuggest(input.value));
  input.addEventListener("input", () => showSpeciesSuggest(input.value));
  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideSpeciesSuggest();
  });
  document.addEventListener("pointerdown", (e) => {
    if (e.target === input || box.contains(e.target)) return;
    hideSpeciesSuggest();
  });
}

/* ---------- Compass ---------- */

function headingFromEvent(ev) {
  if (typeof ev.webkitCompassHeading === "number" && !Number.isNaN(ev.webkitCompassHeading)) {
    compassMode = "webkit";
    return {
      heading: norm360(ev.webkitCompassHeading),
      accuracy: typeof ev.webkitCompassAccuracy === "number" ? ev.webkitCompassAccuracy : null,
      tilt: tiltFromEvent(ev),
    };
  }
  if (typeof ev.alpha !== "number") return null;
  const isAbs = ev.absolute === true || ev.type === "deviceorientationabsolute";
  if (compassMode === "webkit") return null;
  if (!isAbs && compassMode === "absolute") return null;
  compassMode = isAbs ? "absolute" : "relative";
  return {
    heading: norm360(360 - ev.alpha + screenAngle()),
    accuracy: isAbs ? 15 : 45,
    tilt: tiltFromEvent(ev),
  };
}

function tiltFromEvent(ev) {
  const beta = typeof ev.beta === "number" ? ev.beta : 0;
  const gamma = typeof ev.gamma === "number" ? ev.gamma : 0;
  return Math.max(Math.abs(beta), Math.abs(gamma));
}

function applyCompassReading(rawHeading, accuracy, tilt) {
  if (rawHeading == null || Number.isNaN(rawHeading)) return;
  const smooth = compassMode === "relative" ? 0.35 : 0.22;
  lastRawHeading = smoothHeading(lastRawHeading, rawHeading, smooth);
  liveHeading = lastRawHeading;
  liveStartHeading = oppositeDeg(liveHeading);

  const rose = document.getElementById("compassRose");
  if (rose) rose.style.transform = `rotate(${-liveHeading}deg)`;

  const degEl = document.getElementById("liveDeg");
  const cardEl = document.getElementById("liveCard");
  if (degEl) degEl.textContent = `${liveStartHeading.toFixed(0)}°`;
  if (cardEl) {
    cardEl.innerHTML = `${t("startFace")} <b>${cardinalFromDeg(liveStartHeading)}</b> · ${t("facingPhone")} ${cardinalFromDeg(liveHeading)}`;
  }

  const st = document.getElementById("compassStatus");
  const hint = document.getElementById("compassHint");
  const badAcc = accuracy != null && (accuracy < 0 || accuracy > 25);
  const tilted = tilt != null && tilt > 28;

  if (st) {
    if (compassMode === "relative") {
      st.className = "status-pill warn";
      st.textContent = t("relativeWarn");
    } else if (tilted) {
      st.className = "status-pill warn";
      st.textContent = t("tiltWarn");
    } else if (badAcc) {
      st.className = "status-pill warn";
      st.textContent = t("calibrate");
    } else {
      st.className = "status-pill";
      st.textContent = t("compassLive");
    }
  }
  if (hint) {
    hint.textContent = tilted ? t("tiltWarn") : badAcc ? t("calibrate") : t("holdSteady");
  }
}

function onOrientation(ev) {
  const reading = headingFromEvent(ev);
  if (!reading) return;
  applyCompassReading(reading.heading, reading.accuracy, reading.tilt);
}

function onCalibrationNeeded() {
  const st = document.getElementById("compassStatus");
  if (st) {
    st.className = "status-pill warn";
    st.textContent = t("calibrate");
  }
}

async function startAbsoluteSensor() {
  if (!("AbsoluteOrientationSensor" in window)) return false;
  try {
    if (absSensor) {
      absSensor.stop();
      absSensor = null;
    }
    const sensor = new AbsoluteOrientationSensor({ frequency: 30, referenceFrame: "screen" });
    sensor.addEventListener("reading", () => {
      if (compassMode === "webkit") return;
      const q = sensor.quaternion;
      if (!q) return;
      const [x, y, z, w] = q;
      const yaw = Math.atan2(2 * (w * z + x * y), 1 - 2 * (y * y + z * z));
      const heading = norm360((-yaw * 180) / Math.PI);
      compassMode = "absolute";
      applyCompassReading(heading, 12, 0);
    });
    sensor.start();
    absSensor = sensor;
    return true;
  } catch (err) {
    return false;
  }
}

async function startCompass() {
  const st = document.getElementById("compassStatus");
  buildCompassTicks();
  try {
    if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
      const perm = await DeviceOrientationEvent.requestPermission();
      if (perm !== "granted") {
        if (st) {
          st.className = "status-pill warn";
          st.textContent = t("compassNeedPerm");
        }
        return false;
      }
    }
    if (typeof DeviceMotionEvent !== "undefined" && typeof DeviceMotionEvent.requestPermission === "function") {
      try { await DeviceMotionEvent.requestPermission(); } catch (e) {}
    }
    stopCompass();
    compassMode = "none";
    lastRawHeading = null;
    orientationHandler = onOrientation;
    window.addEventListener("deviceorientationabsolute", orientationHandler, true);
    window.addEventListener("deviceorientation", orientationHandler, true);
    window.addEventListener("compassneedscalibration", onCalibrationNeeded, true);
    await startAbsoluteSensor();
    compassWatching = true;
    if (st) {
      st.className = "status-pill";
      st.textContent = t("waiting");
    }
    return true;
  } catch (err) {
    if (st) {
      st.className = "status-pill bad";
      st.textContent = t("compassUnavailable");
    }
    return false;
  }
}

function stopCompass() {
  if (orientationHandler) {
    window.removeEventListener("deviceorientationabsolute", orientationHandler);
    window.removeEventListener("deviceorientation", orientationHandler);
    orientationHandler = null;
  }
  window.removeEventListener("compassneedscalibration", onCalibrationNeeded, true);
  if (absSensor) {
    try { absSensor.stop(); } catch (e) {}
    absSensor = null;
  }
  compassWatching = false;
}

function captureHeading() {
  let startDeg = liveStartHeading;
  const manual = document.getElementById("manualHeading").value;
  if (startDeg == null && manual !== "") startDeg = Number(manual);
  if (startDeg == null || Number.isNaN(Number(startDeg))) {
    toast(t("needDir"));
    return;
  }
  startDeg = norm360(startDeg);
  document.getElementById("capturedHeading").value = String(Math.round(startDeg * 10) / 10);
  document.getElementById("capturedLabel").textContent = `${t("captured")}: ${formatHeading(startDeg)}`;
  toast(`${t("captured")} ${formatHeading(startDeg)}`);
}

/* ---------- Photos ---------- */

function stampEnabled() {
  return localStorage.getItem("rf-stamp") === "1";
}

function updateStampButtons() {
  document.querySelectorAll("[data-stamp-toggle]").forEach((btn) => {
    btn.textContent = stampEnabled() ? t("stampOn") : t("stampOff");
  });
}

function toggleStamp() {
  localStorage.setItem("rf-stamp", stampEnabled() ? "0" : "1");
  updateStampButtons();
}

function photoStampText(d = new Date()) {
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}/${p(d.getMonth() + 1)}/${p(d.getDate())}  ${p(d.getHours())}:${p(d.getMinutes())}`;
}

function asciiAt(view, offset, len) {
  let s = "";
  for (let i = 0; i < len && offset + i < view.byteLength; i++) {
    const c = view.getUint8(offset + i);
    if (c === 0) break;
    s += String.fromCharCode(c);
  }
  return s;
}

function parseExifDateString(s) {
  const m = String(s || "").trim().match(/^(\d{4})[:\-](\d{2})[:\-](\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?/);
  if (!m) return null;
  const y = +m[1], mo = +m[2], d = +m[3], ho = +m[4], mi = +m[5], se = +(m[6] || 0);
  if (y < 1980 || y > 2100 || mo < 1 || mo > 12 || d < 1 || d > 31 || ho > 23 || mi > 59) return null;
  return new Date(y, mo - 1, d, ho, mi, se);
}

function parseTiffExif(view, tiffStart) {
  if (tiffStart + 8 > view.byteLength) return null;
  const endian = asciiAt(view, tiffStart, 2);
  const le = endian === "II";
  if (!le && endian !== "MM") return null;
  const u16 = (o) => view.getUint16(o, le);
  const u32 = (o) => view.getUint32(o, le);
  if (u16(tiffStart + 2) !== 42) return null;

  const readIfd = (ifdOffset, wantPtr) => {
    const dates = {};
    if (ifdOffset < tiffStart || ifdOffset + 2 > view.byteLength) return dates;
    const n = u16(ifdOffset);
    for (let i = 0; i < n; i++) {
      const entry = ifdOffset + 2 + i * 12;
      if (entry + 12 > view.byteLength) break;
      const tag = u16(entry);
      const type = u16(entry + 2);
      const count = u32(entry + 4);
      const valOff = entry + 8;
      const typeSize = type === 2 ? 1 : type === 3 ? 2 : type === 4 ? 4 : 1;
      let dataOff = valOff;
      if (count * typeSize > 4) dataOff = tiffStart + u32(valOff);
      if (tag === 0x8769 && wantPtr) dates.exifIfd = tiffStart + u32(valOff);
      if (tag === 0x9003 || tag === 0x9004 || tag === 0x0132) {
        const d = parseExifDateString(asciiAt(view, dataOff, Math.min(count, 32)));
        if (!d) continue;
        if (tag === 0x9003) dates.original = d;
        else if (tag === 0x9004) dates.digitized = d;
        else dates.modify = d;
      }
    }
    return dates;
  };

  const d0 = readIfd(tiffStart + u32(tiffStart + 4), true);
  const dE = d0.exifIfd ? readIfd(d0.exifIfd, false) : {};
  return dE.original || dE.digitized || d0.original || d0.modify || null;
}

function scanAsciiDate(view) {
  for (let i = 0; i < view.byteLength - 18; i++) {
    const c0 = view.getUint8(i);
    if (c0 < 0x31 || c0 > 0x32) continue;
    const d = parseExifDateString(asciiAt(view, i, 19));
    if (d) return d;
  }
  return null;
}

async function readPhotoTakenAt(file) {
  if (!file) return null;
  try {
    const buf = await file.slice(0, Math.min(file.size, 512 * 1024)).arrayBuffer();
    const view = new DataView(buf);
    if (view.byteLength >= 2 && view.getUint16(0) === 0xFFD8) {
      let offset = 2;
      while (offset + 4 <= view.byteLength) {
        if (view.getUint8(offset) !== 0xFF) break;
        const marker = view.getUint8(offset + 1);
        if (marker === 0xDA || marker === 0xD9) break;
        const size = view.getUint16(offset + 2);
        if (size < 2) break;
        if (marker === 0xE1 && offset + 10 <= view.byteLength && asciiAt(view, offset + 4, 4) === "Exif") {
          const d = parseTiffExif(view, offset + 10);
          if (d) return d;
        }
        offset += 2 + size;
      }
    }
    const scanned = scanAsciiDate(view);
    if (scanned) return scanned;
  } catch (e) {}
  if (file.lastModified) return new Date(file.lastModified);
  return null;
}

function stampTextForFile(file, takenAt) {
  const d = takenAt || (file && file.lastModified ? new Date(file.lastModified) : null);
  return d ? photoStampText(d) : "";
}

function drawPhotoStamp(ctx, w, h, text) {
  const fontSize = Math.max(21, Math.round(Math.min(w, h) * 0.0357));
  ctx.save();
  ctx.font = `bold ${fontSize}px Arial, Helvetica, sans-serif`;
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";
  const padX = Math.max(12, Math.round(w * 0.03));
  const padY = Math.max(10, Math.round(h * 0.025));
  ctx.fillStyle = "#FF6A00";
  ctx.fillText(text, w - padX, h - padY);
  ctx.restore();
}

function loadImageViaElement(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("image load failed"));
    };
    img.src = url;
  });
}

async function loadImageSource(file) {
  if (typeof createImageBitmap === "function") {
    try {
      return await createImageBitmap(file, { imageOrientation: "from-image" });
    } catch (e1) {
      try {
        return await createImageBitmap(file);
      } catch (e2) {}
    }
  }
  return loadImageViaElement(file);
}

function canvasToJpegBlob(canvas, quality = 0.88) {
  return new Promise((resolve, reject) => {
    if (canvas.toBlob) {
      canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("toBlob failed"))), "image/jpeg", quality);
    } else {
      try {
        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        const bin = atob(dataUrl.split(",")[1]);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
        resolve(new Blob([arr], { type: "image/jpeg" }));
      } catch (err) {
        reject(err);
      }
    }
  });
}

async function drawImageToPortraitCanvas(img, maxEdge = 1920, quality = 0.88, stampText = "") {
  const srcW = img.width || img.naturalWidth;
  const srcH = img.height || img.naturalHeight;
  if (!srcW || !srcH) throw new Error("invalid image size");
  let canvasW;
  let canvasH;
  if (srcW / srcH > 3 / 4) {
    canvasH = Math.max(srcH, Math.round(srcW * 4 / 3));
    canvasW = Math.round(canvasH * 3 / 4);
  } else {
    canvasW = srcW;
    canvasH = srcH;
  }
  const scale = Math.min(1, maxEdge / Math.max(canvasW, canvasH));
  canvasW = Math.max(1, Math.round(canvasW * scale));
  canvasH = Math.max(1, Math.round(canvasH * scale));
  const canvas = document.createElement("canvas");
  canvas.width = canvasW;
  canvas.height = canvasH;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("no canvas context");
  ctx.fillStyle = "#0a140f";
  ctx.fillRect(0, 0, canvasW, canvasH);
  const fit = Math.min(canvasW / srcW, canvasH / srcH);
  const dw = Math.max(1, Math.round(srcW * fit));
  const dh = Math.max(1, Math.round(srcH * fit));
  const dx = Math.round((canvasW - dw) / 2);
  const dy = Math.round((canvasH - dh) / 2);
  ctx.drawImage(img, dx, dy, dw, dh);
  if (stampText) drawPhotoStamp(ctx, canvasW, canvasH, stampText);
  return canvasToJpegBlob(canvas, quality);
}

async function fileToJpegBlob(file, maxEdge = 1920, quality = 0.88, opts = {}) {
  const img = await loadImageSource(file);
  const stampText = stampEnabled() ? stampTextForFile(file, await readPhotoTakenAt(file)) : "";
  let blob;
  if (opts.forcePortrait) {
    blob = await drawImageToPortraitCanvas(img, maxEdge, quality, stampText);
  } else {
    const srcW = img.width || img.naturalWidth;
    const srcH = img.height || img.naturalHeight;
    if (!srcW || !srcH) throw new Error("invalid image size");
    const scale = Math.min(1, maxEdge / Math.max(srcW, srcH));
    const w = Math.max(1, Math.round(srcW * scale));
    const h = Math.max(1, Math.round(srcH * scale));
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("no canvas context");
    ctx.drawImage(img, 0, 0, w, h);
    if (stampText) drawPhotoStamp(ctx, w, h, stampText);
    blob = await canvasToJpegBlob(canvas, quality);
  }
  if (typeof img.close === "function") {
    try { img.close(); } catch (e) {}
  }
  return blob;
}

async function ensurePortraitBlob(blob, maxEdge = 1920, quality = 0.88) {
  const img = await loadImageSource(blob);
  const w = img.width || img.naturalWidth;
  const h = img.height || img.naturalHeight;
  if (w && h && w / h <= 3 / 4) {
    if (typeof img.close === "function") {
      try { img.close(); } catch (e) {}
    }
    return blob;
  }
  const out = await drawImageToPortraitCanvas(img, maxEdge, quality, false);
  if (typeof img.close === "function") {
    try { img.close(); } catch (e) {}
  }
  return out;
}

function marksForPhoto(tree, pid) {
  if (!tree || !tree.treePhotoMarks) return [];
  return Array.isArray(tree.treePhotoMarks[pid]) ? tree.treePhotoMarks[pid] : [];
}

function rotateMarksCW(marks) {
  return (marks || []).map((m) => {
    if (m.type === "arrow" || m.type === "dash") {
      const next = Object.assign({}, m, { x1: 1 - m.y1, y1: m.x1, x2: 1 - m.y2, y2: m.x2 });
      if (m.mx != null && m.my != null) {
        next.mx = 1 - m.my;
        next.my = m.mx;
      }
      return next;
    }
    if (m.type === "circle") {
      return Object.assign({}, m, { cx: 1 - m.cy, cy: m.cx });
    }
    return m;
  });
}

async function rotateBlobCW(blob) {
  const img = await loadImageSource(blob);
  const w = img.width || img.naturalWidth;
  const h = img.height || img.naturalHeight;
  const canvas = document.createElement("canvas");
  canvas.width = h;
  canvas.height = w;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("no canvas context");
  ctx.translate(h, 0);
  ctx.rotate(Math.PI / 2);
  ctx.drawImage(img, 0, 0, w, h);
  if (typeof img.close === "function") {
    try { img.close(); } catch (e) {}
  }
  return canvasToJpegBlob(canvas);
}

function applyMarkStroke(ctx, mark, minEdge) {
  ctx.strokeStyle = mark.color || "#e63935";
  ctx.fillStyle = mark.color || "#e63935";
  ctx.lineWidth = Math.max(2, (mark.width || 0.009) * minEdge);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
}

function paintArrow(ctx, x1, y1, x2, y2, mark, minEdge) {
  applyMarkStroke(ctx, mark, minEdge);
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const head = Math.max(12, minEdge * 0.035);
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - head * Math.cos(angle - Math.PI / 6), y2 - head * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(x2 - head * Math.cos(angle + Math.PI / 6), y2 - head * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fill();
}

function circleThrough3(x1, y1, x2, y2, x3, y3) {
  const d = 2 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
  if (Math.abs(d) < 1e-6) return null;
  const t1 = x1 * x1 + y1 * y1;
  const t2 = x2 * x2 + y2 * y2;
  const t3 = x3 * x3 + y3 * y3;
  const cx = (t1 * (y2 - y3) + t2 * (y3 - y1) + t3 * (y1 - y2)) / d;
  const cy = (t1 * (x3 - x2) + t2 * (x1 - x3) + t3 * (x2 - x1)) / d;
  const r = Math.hypot(x1 - cx, y1 - cy);
  if (!isFinite(cx) || !isFinite(cy) || !isFinite(r) || r < 1) return null;
  return { cx, cy, r };
}

function farthestFromChord(points, w, h) {
  if (!points || points.length < 3) return null;
  const a = points[0];
  const b = points[points.length - 1];
  const ax = a.x * w, ay = a.y * h, bx = b.x * w, by = b.y * h;
  const vx = bx - ax, vy = by - ay;
  const len2 = vx * vx + vy * vy;
  if (len2 < 1) return null;
  let best = null;
  let bestD = 0;
  for (let i = 1; i < points.length - 1; i++) {
    const px = points[i].x * w, py = points[i].y * h;
    const t = ((px - ax) * vx + (py - ay) * vy) / len2;
    const qx = ax + t * vx, qy = ay + t * vy;
    const d = Math.hypot(px - qx, py - qy);
    if (d > bestD) {
      bestD = d;
      best = points[i];
    }
  }
  if (!best || bestD < 6) return null;
  return best;
}

function dashGeometry(mark, w, h) {
  if (!mark || mark.mx == null || mark.my == null) return null;
  const x1 = mark.x1 * w, y1 = mark.y1 * h, x2 = mark.x2 * w, y2 = mark.y2 * h;
  const mx = mark.mx * w, my = mark.my * h;
  const circ = circleThrough3(x1, y1, mx, my, x2, y2);
  if (!circ) return null;
  const a1 = Math.atan2(y1 - circ.cy, x1 - circ.cx);
  const am = Math.atan2(my - circ.cy, mx - circ.cx);
  const a2 = Math.atan2(y2 - circ.cy, x2 - circ.cx);
  const tau = Math.PI * 2;
  const ccw = (am - a1 + tau) % tau <= (a2 - a1 + tau) % tau;
  return { cx: circ.cx, cy: circ.cy, r: circ.r, a1, am, a2, ccw };
}

function pointOnCircleNorm(geom, angle, w, h) {
  return { x: (geom.cx + geom.r * Math.cos(angle)) / w, y: (geom.cy + geom.r * Math.sin(angle)) / h };
}

function midAngleOnArc(a1, a2, ccw) {
  const tau = Math.PI * 2;
  const span = ccw ? (a2 - a1 + tau) % tau : (a1 - a2 + tau) % tau;
  return ccw ? a1 + span / 2 : a1 - span / 2;
}

function setDashMidToArcCenter(mark, geom, w, h) {
  const mid = pointOnCircleNorm(geom, midAngleOnArc(geom.a1, geom.a2, geom.ccw), w, h);
  mark.mx = mid.x;
  mark.my = mid.y;
}

function adjustDashEnd(mark, which, p, w, h) {
  const geom = dashGeometry(mark, w, h);
  if (!geom) {
    if (which === "start") { mark.x1 = p.x; mark.y1 = p.y; }
    else { mark.x2 = p.x; mark.y2 = p.y; }
    return;
  }
  const tau = Math.PI * 2;
  const ang = Math.atan2(p.y * h - geom.cy, p.x * w - geom.cx);
  if (which === "start") {
    const span = geom.ccw ? (geom.a2 - ang + tau) % tau : (ang - geom.a2 + tau) % tau;
    if (span * geom.r < 8 || span > tau - 0.08) return;
    const pt = pointOnCircleNorm(geom, ang, w, h);
    mark.x1 = pt.x;
    mark.y1 = pt.y;
    geom.a1 = ang;
  } else {
    const span = geom.ccw ? (ang - geom.a1 + tau) % tau : (geom.a1 - ang + tau) % tau;
    if (span * geom.r < 8 || span > tau - 0.08) return;
    const pt = pointOnCircleNorm(geom, ang, w, h);
    mark.x2 = pt.x;
    mark.y2 = pt.y;
    geom.a2 = ang;
  }
  setDashMidToArcCenter(mark, geom, w, h);
}

function peMarkHandles(mark, w, h) {
  if (!mark) return [];
  if (mark.type === "dash") {
    const list = [
      { name: "start", px: mark.x1 * w, py: mark.y1 * h },
      { name: "end", px: mark.x2 * w, py: mark.y2 * h },
    ];
    if (mark.mx != null && mark.my != null) {
      list.splice(1, 0, { name: "mid", px: mark.mx * w, py: mark.my * h });
    } else {
      list.splice(1, 0, { name: "mid", px: ((mark.x1 + mark.x2) / 2) * w, py: ((mark.y1 + mark.y2) / 2) * h });
    }
    return list;
  }
  if (mark.type === "arrow") {
    return [
      { name: "start", px: mark.x1 * w, py: mark.y1 * h },
      { name: "end", px: mark.x2 * w, py: mark.y2 * h },
    ];
  }
  if (mark.type === "circle") {
    const minEdge = Math.min(w, h);
    const r = (mark.r || 0) * minEdge;
    const ang = pe.radiusAng || 0;
    return [{ name: "radius", px: mark.cx * w + r * Math.cos(ang), py: mark.cy * h + r * Math.sin(ang) }];
  }
  return [];
}

function translateMark(mark, dx, dy) {
  if (!mark || (!dx && !dy)) return;
  const pts = [];
  if (mark.type === "circle") {
    pts.push({ x: mark.cx, y: mark.cy });
  } else {
    pts.push({ x: mark.x1, y: mark.y1 }, { x: mark.x2, y: mark.y2 });
    if (mark.mx != null && mark.my != null) pts.push({ x: mark.mx, y: mark.my });
  }
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const p of pts) {
    minX = Math.min(minX, p.x);
    maxX = Math.max(maxX, p.x);
    minY = Math.min(minY, p.y);
    maxY = Math.max(maxY, p.y);
  }
  if (minX + dx < 0) dx = -minX;
  if (maxX + dx > 1) dx = 1 - maxX;
  if (minY + dy < 0) dy = -minY;
  if (maxY + dy > 1) dy = 1 - maxY;
  if (!dx && !dy) return;
  if (mark.type === "circle") {
    mark.cx += dx;
    mark.cy += dy;
    return;
  }
  mark.x1 += dx;
  mark.y1 += dy;
  mark.x2 += dx;
  mark.y2 += dy;
  if (mark.mx != null) mark.mx += dx;
  if (mark.my != null) mark.my += dy;
  if (mark.points) {
    for (const p of mark.points) {
      p.x += dx;
      p.y += dy;
    }
  }
}

function peDrawHandles(ctx, mark, w, h) {
  const r = Math.max(10, Math.min(w, h) * 0.014);
  ctx.save();
  ctx.setLineDash([]);
  for (const hnd of peMarkHandles(mark, w, h)) {
    ctx.beginPath();
    ctx.fillStyle = hnd.name === "mid" ? "#ffd60a" : "#ffffff";
    ctx.strokeStyle = "#111111";
    ctx.lineWidth = Math.max(2, r * 0.18);
    ctx.arc(hnd.px, hnd.py, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  ctx.restore();
}

function peHitHandle(pt, mark, w, h) {
  const hit = Math.max(28, Math.min(w, h) * 0.035);
  let best = null;
  let bestD = hit;
  for (const hnd of peMarkHandles(mark, w, h)) {
    const d = Math.hypot(pt.x - hnd.px, pt.y - hnd.py);
    if (d <= bestD) {
      bestD = d;
      best = hnd.name;
    }
  }
  return best;
}

function distToDashMark(mark, pt, w, h) {
  const geom = dashGeometry(mark, w, h);
  if (geom) {
    const ang = Math.atan2(pt.y - geom.cy, pt.x - geom.cx);
    const tau = Math.PI * 2;
    const midSpan = (geom.am - geom.a1 + tau) % tau;
    const ccwSpan = (geom.a2 - geom.a1 + tau) % tau;
    const onCcw = midSpan <= ccwSpan;
    const span = onCcw ? ccwSpan : (geom.a1 - geom.a2 + tau) % tau;
    const fromStart = onCcw ? (ang - geom.a1 + tau) % tau : (geom.a1 - ang + tau) % tau;
    const onArc = fromStart <= span + 0.04;
    const radial = Math.abs(Math.hypot(pt.x - geom.cx, pt.y - geom.cy) - geom.r);
    if (onArc) return radial;
    return Math.min(
      Math.hypot(pt.x - mark.x1 * w, pt.y - mark.y1 * h),
      Math.hypot(pt.x - mark.x2 * w, pt.y - mark.y2 * h)
    );
  }
  const ax = mark.x1 * w, ay = mark.y1 * h, bx = mark.x2 * w, by = mark.y2 * h;
  const vx = bx - ax, vy = by - ay;
  const len2 = vx * vx + vy * vy;
  if (len2 < 1) return Math.hypot(pt.x - ax, pt.y - ay);
  const t = Math.max(0, Math.min(1, ((pt.x - ax) * vx + (pt.y - ay) * vy) / len2));
  return Math.hypot(pt.x - (ax + t * vx), pt.y - (ay + t * vy));
}

function distToSegment(px, py, ax, ay, bx, by) {
  const vx = bx - ax, vy = by - ay;
  const len2 = vx * vx + vy * vy;
  if (len2 < 1) return Math.hypot(px - ax, py - ay);
  const t = Math.max(0, Math.min(1, ((px - ax) * vx + (py - ay) * vy) / len2));
  return Math.hypot(px - (ax + t * vx), py - (ay + t * vy));
}

function distToMark(mark, pt, w, h) {
  if (mark.type === "dash") return distToDashMark(mark, pt, w, h);
  if (mark.type === "arrow") return distToSegment(pt.x, pt.y, mark.x1 * w, mark.y1 * h, mark.x2 * w, mark.y2 * h);
  if (mark.type === "circle") {
    const r = (mark.r || 0) * Math.min(w, h);
    return Math.abs(Math.hypot(pt.x - mark.cx * w, pt.y - mark.cy * h) - r);
  }
  return Infinity;
}

function peHitMark(pt, w, h) {
  const thresh = Math.max(22, Math.min(w, h) * 0.03);
  let best = -1;
  let bestD = thresh;
  for (let i = pe.marks.length - 1; i >= 0; i--) {
    const d = distToMark(pe.marks[i], pt, w, h);
    if (d <= bestD) {
      bestD = d;
      best = i;
    }
  }
  return best;
}

function peSetHint(key) {
  const el = document.querySelector(".pe-hint");
  if (el) el.textContent = t(key);
}

function peSelectMark(index) {
  pe.selected = index;
  const mark = pe.marks[index];
  if (!mark) peSetHint("markHint");
  else if (mark.type === "dash") peSetHint("arcLengthHint");
  else peSetHint("moveMarkHint");
}

function paintDash(ctx, mark, w, h, minEdge) {
  applyMarkStroke(ctx, mark, minEdge);
  const dash = Math.max(8, minEdge * 0.02);
  ctx.setLineDash([dash, dash * 0.7]);
  const x1 = mark.x1 * w, y1 = mark.y1 * h, x2 = mark.x2 * w, y2 = mark.y2 * h;
  const mid = (mark.mx != null && mark.my != null) ? { x: mark.mx, y: mark.my } : farthestFromChord(mark.points, w, h);
  ctx.beginPath();
  if (mid) {
    const mx = mid.x * w, my = mid.y * h;
    const circ = circleThrough3(x1, y1, mx, my, x2, y2);
    if (circ) {
      const a1 = Math.atan2(y1 - circ.cy, x1 - circ.cx);
      const am = Math.atan2(my - circ.cy, mx - circ.cx);
      const a2 = Math.atan2(y2 - circ.cy, x2 - circ.cx);
      const tau = Math.PI * 2;
      const ccwSpan = (a2 - a1 + tau) % tau;
      const midSpan = (am - a1 + tau) % tau;
      ctx.arc(circ.cx, circ.cy, circ.r, a1, a2, midSpan <= ccwSpan);
    } else {
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
    }
  } else {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
  }
  ctx.stroke();
  ctx.setLineDash([]);
}

function paintCircle(ctx, cx, cy, r, mark, minEdge) {
  applyMarkStroke(ctx, mark, minEdge);
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.stroke();
}

function drawMarks(ctx, marks, w, h, draft) {
  const minEdge = Math.min(w, h);
  const all = (marks || []).concat(draft ? [draft] : []);
  for (const m of all) {
    if (m.type === "arrow") {
      paintArrow(ctx, m.x1 * w, m.y1 * h, m.x2 * w, m.y2 * h, m, minEdge);
    } else if (m.type === "dash") {
      paintDash(ctx, m, w, h, minEdge);
    } else if (m.type === "circle") {
      paintCircle(ctx, m.cx * w, m.cy * h, (m.r || 0) * minEdge, m, minEdge);
    }
  }
}

async function blobWithMarks(blob, marks) {
  if (!blob) return blob;
  if (!marks || !marks.length) return blob;
  const img = await loadImageSource(blob);
  const w = img.width || img.naturalWidth;
  const h = img.height || img.naturalHeight;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("no canvas context");
  ctx.drawImage(img, 0, 0, w, h);
  drawMarks(ctx, marks, w, h);
  if (typeof img.close === "function") {
    try { img.close(); } catch (e) {}
  }
  return canvasToJpegBlob(canvas);
}

async function photoDisplayUrl(tree, pid) {
  const rec = await getPhoto(pid);
  if (!rec || !rec.blob) return "";
  const blob = await blobWithMarks(rec.blob, marksForPhoto(tree, pid));
  return URL.createObjectURL(blob);
}

async function exportSizedPhoto(tree, pid) {
  const rec = await getPhoto(pid);
  if (!rec || !rec.blob) return null;
  const marked = await blobWithMarks(rec.blob, marksForPhoto(tree, pid));
  const blob = await ensurePortraitBlob(marked);
  const sized = await blobToBytesAndSize(blob);
  return {
    bytes: sized.bytes,
    w: sized.w,
    h: sized.h,
    caption: (tree.treePhotoCaptions && tree.treePhotoCaptions[pid]) || "",
  };
}

const PE_COLORS = ["#e63935", "#ffd60a", "#ffffff", "#111111"];
const PE_WIDTHS = { thin: 0.005, medium: 0.009, thick: 0.016 };

const pe = {
  open: false,
  photoId: null,
  marks: [],
  workingBlob: null,
  image: null,
  tool: "arrow",
  color: "#e63935",
  width: 0.009,
  draft: null,
  drawing: false,
  selected: -1,
  dragHandle: null,
  lastP: null,
  radiusAng: 0,
};

function peCanvas() {
  return document.getElementById("peCanvas");
}

function peNormFromEvent(ev) {
  const canvas = peCanvas();
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return { x: 0, y: 0 };
  const x = (ev.clientX - rect.left) / rect.width;
  const y = (ev.clientY - rect.top) / rect.height;
  return { x: Math.min(1, Math.max(0, x)), y: Math.min(1, Math.max(0, y)) };
}

function peRedraw() {
  const canvas = peCanvas();
  if (!canvas || !pe.image) return;
  const w = canvas.width;
  const h = canvas.height;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(pe.image, 0, 0, w, h);
  drawMarks(ctx, pe.marks, w, h, pe.draft);
  if (pe.selected >= 0 && pe.marks[pe.selected]) {
    peDrawHandles(ctx, pe.marks[pe.selected], w, h);
  }
}

function peSetTool(tool) {
  pe.tool = tool;
  document.querySelectorAll("[data-pe-tool]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-pe-tool") === tool);
  });
}

function peSetWidth(name) {
  pe.width = PE_WIDTHS[name] || PE_WIDTHS.medium;
  document.querySelectorAll("[data-pe-width]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-pe-width") === name);
  });
}

function peRenderColors() {
  const box = document.getElementById("peColors");
  if (!box) return;
  box.innerHTML = PE_COLORS.map((c) =>
    `<button type="button" class="pe-swatch${c === pe.color ? " active" : ""}" data-pe-color="${c}" style="background:${c}" aria-label="${c}"></button>`
  ).join("");
  box.querySelectorAll("[data-pe-color]").forEach((btn) => {
    btn.addEventListener("click", () => {
      pe.color = btn.getAttribute("data-pe-color");
      peRenderColors();
    });
  });
}

async function peLoadImage(blob) {
  if (pe.image && typeof pe.image.close === "function") {
    try { pe.image.close(); } catch (e) {}
  }
  const img = await loadImageSource(blob);
  pe.image = img;
  const canvas = peCanvas();
  canvas.width = img.width || img.naturalWidth;
  canvas.height = img.height || img.naturalHeight;
  peRedraw();
}

async function openPhotoEditor(photoId) {
  const tree = await getTree(currentTreeId);
  const rec = await getPhoto(photoId);
  if (!tree || !rec || !rec.blob) return;
  pe.open = true;
  pe.photoId = photoId;
  pe.marks = marksForPhoto(tree, photoId).map((m) => Object.assign({}, m));
  pe.workingBlob = rec.blob;
  pe.draft = null;
  pe.drawing = false;
  pe.selected = -1;
  pe.dragHandle = null;
  pe.lastP = null;
  pe.tool = "arrow";
  pe.color = "#e63935";
  pe.width = PE_WIDTHS.medium;
  document.getElementById("photoEditor").hidden = false;
  document.body.classList.add("pe-open");
  peSetTool("arrow");
  peSetWidth("medium");
  peRenderColors();
  applyI18n();
  await peLoadImage(pe.workingBlob);
}

function closePhotoEditor() {
  pe.open = false;
  pe.photoId = null;
  pe.marks = [];
  pe.workingBlob = null;
  pe.draft = null;
  pe.drawing = false;
  pe.selected = -1;
  pe.dragHandle = null;
  pe.lastP = null;
  if (pe.image && typeof pe.image.close === "function") {
    try { pe.image.close(); } catch (e) {}
  }
  pe.image = null;
  document.getElementById("photoEditor").hidden = true;
  document.body.classList.remove("pe-open");
}

function peEventCanvasPoint(ev) {
  const canvas = peCanvas();
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return { x: 0, y: 0 };
  return {
    x: (ev.clientX - rect.left) * (canvas.width / rect.width),
    y: (ev.clientY - rect.top) * (canvas.height / rect.height),
  };
}

function peOnPointerDown(ev) {
  if (!pe.open || ev.button != null && ev.button !== 0) return;
  ev.preventDefault();
  peCanvas().setPointerCapture(ev.pointerId);
  const canvas = peCanvas();
  const w = canvas.width, h = canvas.height;
  const pt = peEventCanvasPoint(ev);
  const p = peNormFromEvent(ev);
  if (pe.selected >= 0 && pe.marks[pe.selected]) {
    const handle = peHitHandle(pt, pe.marks[pe.selected], w, h);
    if (handle) {
      pe.dragHandle = handle;
      pe.lastP = p;
      pe.drawing = false;
      pe.draft = null;
      peRedraw();
      return;
    }
  }
  const hit = peHitMark(pt, w, h);
  if (hit >= 0) {
    peSelectMark(hit);
    const handle = peHitHandle(pt, pe.marks[hit], w, h);
    pe.dragHandle = handle || "move";
    pe.lastP = p;
    pe.drawing = false;
    pe.draft = null;
    peRedraw();
    return;
  }
  peSelectMark(-1);
  pe.dragHandle = null;
  pe.lastP = null;
  pe.drawing = true;
  const base = { color: pe.color, width: pe.width };
  if (pe.tool === "circle") {
    pe.draft = Object.assign({ type: "circle", cx: p.x, cy: p.y, r: 0 }, base);
  } else if (pe.tool === "dash") {
    pe.draft = Object.assign({ type: "dash", x1: p.x, y1: p.y, x2: p.x, y2: p.y, points: [{ x: p.x, y: p.y }] }, base);
  } else {
    pe.draft = Object.assign({ type: pe.tool, x1: p.x, y1: p.y, x2: p.x, y2: p.y }, base);
  }
  peRedraw();
}

function peOnPointerMove(ev) {
  if (pe.dragHandle && pe.selected >= 0 && pe.marks[pe.selected]) {
    ev.preventDefault();
    const canvas = peCanvas();
    const w = canvas.width, h = canvas.height;
    const p = peNormFromEvent(ev);
    const mark = pe.marks[pe.selected];
    if (pe.dragHandle === "move") {
      const from = pe.lastP || p;
      translateMark(mark, p.x - from.x, p.y - from.y);
      pe.lastP = p;
    } else if (pe.dragHandle === "radius" && mark.type === "circle") {
      const minEdge = Math.min(w, h);
      pe.radiusAng = Math.atan2(p.y * h - mark.cy * h, p.x * w - mark.cx * w);
      mark.r = Math.max(0.012, Math.hypot((p.x - mark.cx) * w, (p.y - mark.cy) * h) / minEdge);
    } else if (mark.type === "dash") {
      if (pe.dragHandle === "mid") {
        mark.mx = p.x;
        mark.my = p.y;
      } else {
        adjustDashEnd(mark, pe.dragHandle, p, w, h);
      }
    } else if (mark.type === "arrow") {
      if (pe.dragHandle === "start") { mark.x1 = p.x; mark.y1 = p.y; }
      else if (pe.dragHandle === "end") { mark.x2 = p.x; mark.y2 = p.y; }
    }
    peRedraw();
    return;
  }
  if (!pe.drawing || !pe.draft) return;
  ev.preventDefault();
  const p = peNormFromEvent(ev);
  if (pe.draft.type === "circle") {
    const canvas = peCanvas();
    const minEdge = Math.min(canvas.width, canvas.height);
    const dx = (p.x - pe.draft.cx) * canvas.width;
    const dy = (p.y - pe.draft.cy) * canvas.height;
    pe.draft.r = Math.hypot(dx, dy) / minEdge;
  } else if (pe.draft.type === "dash") {
    pe.draft.x2 = p.x;
    pe.draft.y2 = p.y;
    const pts = pe.draft.points || (pe.draft.points = []);
    const last = pts[pts.length - 1];
    if (!last || Math.hypot(p.x - last.x, p.y - last.y) >= 0.004) pts.push({ x: p.x, y: p.y });
    const canvas = peCanvas();
    const mid = farthestFromChord(pts, canvas.width, canvas.height);
    if (mid) {
      pe.draft.mx = mid.x;
      pe.draft.my = mid.y;
    } else {
      delete pe.draft.mx;
      delete pe.draft.my;
    }
  } else {
    pe.draft.x2 = p.x;
    pe.draft.y2 = p.y;
  }
  peRedraw();
}

function peOnPointerUp() {
  if (pe.dragHandle) {
    pe.dragHandle = null;
    pe.lastP = null;
    peRedraw();
    return;
  }
  peFinishDraft();
}

function peFinishDraft() {
  if (!pe.drawing) return;
  pe.drawing = false;
  const d = pe.draft;
  pe.draft = null;
  if (!d) return;
  if (d.type === "circle") {
    if ((d.r || 0) >= 0.012) {
      pe.marks.push(d);
      peSelectMark(pe.marks.length - 1);
    }
  } else if (d.type === "dash") {
    const canvas = peCanvas();
    const len = Math.hypot((d.x2 - d.x1) * canvas.width, (d.y2 - d.y1) * canvas.height);
    if (len >= 8) {
      const mid = farthestFromChord(d.points, canvas.width, canvas.height);
      const mark = { type: "dash", x1: d.x1, y1: d.y1, x2: d.x2, y2: d.y2, color: d.color, width: d.width };
      if (mid) {
        mark.mx = mid.x;
        mark.my = mid.y;
      }
      pe.marks.push(mark);
      peSelectMark(pe.marks.length - 1);
    }
  } else {
    const canvas = peCanvas();
    const len = Math.hypot((d.x2 - d.x1) * canvas.width, (d.y2 - d.y1) * canvas.height);
    if (len >= 8) {
      pe.marks.push(d);
      peSelectMark(pe.marks.length - 1);
    }
  }
  peRedraw();
}

async function peSave() {
  if (!pe.open || !pe.photoId || !currentTreeId) return;
  const tree = await getTree(currentTreeId);
  if (!tree) return;
  await putPhoto(pe.photoId, pe.workingBlob);
  tree.treePhotoMarks = tree.treePhotoMarks || {};
  tree.treePhotoMarks[pe.photoId] = pe.marks.slice();
  tree.updatedAt = Date.now();
  await putTree(tree);
  closePhotoEditor();
  toast(t("saved"));
  await renderTreePhotos(tree);
}

async function peCancel() {
  closePhotoEditor();
}

async function peUndo() {
  if (pe.marks.length) pe.marks.pop();
  pe.draft = null;
  pe.dragHandle = null;
  pe.lastP = null;
  peSelectMark(pe.marks.length ? pe.marks.length - 1 : -1);
  peRedraw();
}

async function peClearMarks() {
  if (!pe.marks.length) return;
  if (!confirm(t("clearMarks") + "?")) return;
  pe.marks = [];
  pe.draft = null;
  pe.dragHandle = null;
  pe.lastP = null;
  peSelectMark(-1);
  peRedraw();
}

async function peRotate() {
  if (!pe.workingBlob) return;
  pe.workingBlob = await rotateBlobCW(pe.workingBlob);
  pe.marks = rotateMarksCW(pe.marks);
  pe.draft = null;
  await peLoadImage(pe.workingBlob);
}

async function peDeletePhoto() {
  if (!pe.photoId || !currentTreeId) return;
  if (!confirm(t("delete") + "?")) return;
  const tree = await getTree(currentTreeId);
  const pid = pe.photoId;
  if (!tree) return;
  tree.treePhotoIds = (tree.treePhotoIds || []).filter((x) => x !== pid);
  if (tree.treePhotoCaptions) delete tree.treePhotoCaptions[pid];
  if (tree.treePhotoMarks) delete tree.treePhotoMarks[pid];
  await deletePhoto(pid);
  tree.updatedAt = Date.now();
  await putTree(tree);
  closePhotoEditor();
  toast(t("deleted"));
  await renderTreePhotos(tree);
}

function wirePhotoEditor() {
  const canvas = peCanvas();
  if (!canvas || canvas.dataset.wired) return;
  canvas.dataset.wired = "1";
  canvas.addEventListener("pointerdown", peOnPointerDown);
  canvas.addEventListener("pointermove", peOnPointerMove);
  canvas.addEventListener("pointerup", peOnPointerUp);
  canvas.addEventListener("pointercancel", peOnPointerUp);
  document.querySelectorAll("[data-pe-tool]").forEach((btn) => {
    btn.addEventListener("click", () => peSetTool(btn.getAttribute("data-pe-tool")));
  });
  document.querySelectorAll("[data-pe-width]").forEach((btn) => {
    btn.addEventListener("click", () => peSetWidth(btn.getAttribute("data-pe-width")));
  });
  document.getElementById("peSave").addEventListener("click", peSave);
  document.getElementById("peCancel").addEventListener("click", peCancel);
  document.getElementById("peUndo").addEventListener("click", peUndo);
  document.getElementById("peClear").addEventListener("click", peClearMarks);
  document.getElementById("peRotate").addEventListener("click", peRotate);
  document.getElementById("peDelete").addEventListener("click", peDeletePhoto);
}

async function photoUrl(id) {
  const rec = await getPhoto(id);
  if (!rec || !rec.blob) return "";
  return URL.createObjectURL(rec.blob);
}

async function renderPhotoSlot(container, photoId, emptyLabel) {
  if (!photoId) {
    container.innerHTML = `<div class="empty">${emptyLabel}</div>`;
    container.classList.add("empty");
    return;
  }
  container.classList.remove("empty");
  const url = await photoUrl(photoId);
  container.innerHTML = `<img src="${url}" alt="">`;
}

/* ---------- Screens ---------- */

async function renderHome() {
  showScreen("screen-home");
  currentTreeId = null;
  const list = document.getElementById("inspectionList");
  const trees = (await allTrees()).sort((a, b) => {
    const ao = a.order != null ? a.order : (a.updatedAt || 0);
    const bo = b.order != null ? b.order : (b.updatedAt || 0);
    return ao - bo;
  });
  if (!trees.length) {
    list.innerHTML = `<div class="empty-state">${t("noRecords")}</div>`;
    return;
  }
  list.innerHTML = trees
    .map((tr) => {
      const photos = (tr.treePhotoIds || []).length;
      const when = tr.date || "";
      return `<div class="item" style="display:flex;gap:8px;align-items:flex-start" data-tree="${tr.id}">
        <input type="checkbox" class="tree-check" data-id="${tr.id}" style="width:22px;height:22px;margin-top:4px;flex:0 0 auto">
        <div style="flex:1" data-open="${tr.id}">
          <div class="title">${escapeHtml(tr.treeId || "—")} <span class="muted">· ${escapeHtml(tr.species || "")}</span></div>
          <div class="small muted">${escapeHtml(tr.site || "")} ${when ? "· " + escapeHtml(when) : ""}</div>
          <div style="margin-top:6px">
            <span class="badge">${photos} ${t("photos")}</span>
          </div>
        </div>
      </div>`;
    })
    .join("");
  list.querySelectorAll("[data-open]").forEach((el) => {
    el.addEventListener("click", () => openTree(el.getAttribute("data-open")));
  });
  list.querySelectorAll(".tree-check").forEach((cb) => {
    cb.addEventListener("click", (e) => e.stopPropagation());
  });
}

function naturalCompare(a, b) {
  return String(a || "").localeCompare(String(b || ""), undefined, { numeric: true, sensitivity: "base" });
}

async function sortTreesById() {
  const trees = await allTrees();
  trees.sort((a, b) => naturalCompare(a.treeId, b.treeId));
  for (let i = 0; i < trees.length; i++) {
    trees[i].order = i;
    await putTree(trees[i]);
  }
  toast("Sorted by Tree ID");
  await renderHome();
}

function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function newTree() {
  const existing = await allTrees();
  const maxOrder = existing.reduce((m, t) => Math.max(m, t.order != null ? t.order : 0), -1);
  const tree = {
    id: uid(),
    treeId: "",
    species: "",
    site: "",
    nearby: "",
    targets: "",
    inspector: localStorage.getItem("rf-inspector") || "",
    notes: "",
    comments: "",
    date: new Date().toISOString().slice(0, 10),
    gps: null,
    treePhotoIds: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
    order: maxOrder + 1,
  };
  await putTree(tree);
  await openTree(tree.id);
}

async function openTree(id) {
  currentTreeId = id;
  const tree = await getTree(id);
  if (!tree) return renderHome();
  showScreen("screen-tree");
  document.getElementById("f-treeId").value = tree.treeId || "";
  document.getElementById("f-species").value = tree.species || "";
  document.getElementById("f-site").value = tree.site || "";
  document.getElementById("f-nearby").value = tree.nearby || "";
  document.getElementById("f-targets").value = tree.targets || "";
  document.getElementById("f-inspector").value = tree.inspector || "";
  document.getElementById("f-date").value = tree.date || "";
  document.getElementById("f-notes").value = tree.notes || "";
  document.getElementById("f-recommendation").value = tree.recommendation || "";
  document.getElementById("f-comments").value = tree.comments || buildCommentsText(tree.treeId, tree.species, tree.site, tree.nearby, tree.targets, tree.recommendation);
  document.getElementById("gpsLabel").textContent = tree.gps
    ? `${tree.gps.lat.toFixed(6)}, ${tree.gps.lng.toFixed(6)}`
    : t("gpsOff");
  refreshSuggestionLists();
  await renderTreePhotos(tree);
}

const RECOMMENDATION_OPTIONS = [
  "Crown cleaning",
  "Crown reduction",
  "Crown raising",
  "Regular crown size control",
  "Re-inspection in 6 months",
  "Keep monitoring",
  "Tree removal",
  "Resistography test",
  "Sonic Tomography test",
  "No mitigation measure is needed",
];

const COMMON_NEARBY = [
  "footpath",
  "traffic road",
  "building",
  "playground",
  "car park",
  "pedestrian walkway",
  "cycle track",
  "sitting-out area",
  "park",
  "school",
  "residential area",
  "bus stop",
  "open space",
];

const COMMON_TARGETS = [
  "pedestrians",
  "vehicles",
  "building",
  "cyclists",
  "park users",
  "students",
  "residents",
  "passers-by",
  "road users",
  "property",
];

function loadHistory(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function splitToSingles(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/^\s*and\s+/g, "")
    .split(/\s*,\s*|\s+and\s+/)
    .map((s) => s.replace(/^\s*and\s+/i, "").trim())
    .filter(Boolean)
    .filter((s) => !/^and\s/.test(s) && s !== "and");
}

function saveHistory(key, value) {
  const parts = splitToSingles(value);
  if (!parts.length) return;
  const list = loadHistory(key).flatMap(splitToSingles);
  const next = [...parts, ...list.filter((x) => !parts.includes(x))];
  const uniq = [...new Set(next)].slice(0, 40);
  localStorage.setItem(key, JSON.stringify(uniq));
}

function fillDatalist(listId, values) {
  const dl = document.getElementById(listId);
  if (!dl) return;
  const uniq = [...new Set(values.map((v) => String(v || "").trim()).filter(Boolean))];
  dl.innerHTML = uniq.map((v) => `<option value="${escapeHtml(v)}"></option>`).join("");
}

function joinWithAnd(items) {
  const arr = items.map((s) => String(s || "").trim()).filter(Boolean);
  if (!arr.length) return "";
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return arr[0] + " and " + arr[1];
  return arr.slice(0, -1).join(", ") + ", and " + arr[arr.length - 1];
}

function renderChips(containerId, common, history, inputId) {
  const box = document.getElementById(containerId);
  if (!box) return;
  const seen = new Set();
  const items = [];
  for (const v of [...common, ...history]) {
    const s = String(v || "").trim();
    const key = s.toLowerCase();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    items.push({ v: s, hist: history.includes(key) || history.includes(s) });
  }
  const current = document.getElementById(inputId)?.value || "";
  const currentParts = current.split(/\s*,\s*|\s+and\s+/).map((p) => p.trim()).filter(Boolean);
  const known = new Set(items.map((it) => it.v.toLowerCase()));
  box.innerHTML = items
    .map((it) => {
      const selected = currentParts.some((p) => p.toLowerCase() === it.v.toLowerCase());
      return `<button type="button" class="chip${it.hist ? " chip-hist" : ""}${selected ? " selected" : ""}" data-val="${escapeHtml(it.v)}">${escapeHtml(it.v)}</button>`;
    })
    .join("");
  box.querySelectorAll(".chip").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      btn.classList.toggle("selected");
      const selected = [...box.querySelectorAll(".chip.selected")].map((c) => c.getAttribute("data-val"));
      const input = document.getElementById(inputId);
      if (input) {
        // Re-read current value so typed content is not lost
        const live = input.value || "";
        const liveParts = live.split(/\s*,\s*|\s+and\s+/).map((p) => p.trim()).filter(Boolean);
        const custom = liveParts.filter((p) => !known.has(p.toLowerCase()));
        input.value = joinWithAnd([...custom, ...selected]);
        if (inputId === "f-recommendation") applyRecommendationToComments(input.value);
        saveTreeFields();
      }
    });
  });
}

function refreshSuggestionLists() {
  // Clean any previously saved combined values into singles
  ["f2-site-history", "f2-nearby-history", "f2-targets-history"].forEach((key) => {
    const raw = loadHistory(key);
    const cleaned = [...new Set(raw.flatMap(splitToSingles))];
    if (cleaned.length !== raw.length || cleaned.some((v, i) => v !== raw[i])) {
      localStorage.setItem(key, JSON.stringify(cleaned));
    }
  });
  const siteHist = loadHistory("f2-site-history");
  const nearbyHist = loadHistory("f2-nearby-history");
  const targetsHist = loadHistory("f2-targets-history");
  renderChips("siteChips", siteHist, [], "f-site");
  renderChips("nearbyChips", COMMON_NEARBY, nearbyHist, "f-nearby");
  renderChips("targetsChips", COMMON_TARGETS, targetsHist, "f-targets");
  renderChips("recChips", RECOMMENDATION_OPTIONS, [], "f-recommendation");
}

function formatSpeciesForComments(label) {
  const s = String(label || "").trim();
  const m = s.match(/^(.*)\(([^)]+)\)\s*$/);
  if (!m) return s;
  const outside = m[1].trim();
  const inside = m[2].trim();
  const outsideChi = /[\u4e00-\u9fff]/.test(outside);
  const insideSci = /[A-Za-z]/.test(inside) && !/[\u4e00-\u9fff]/.test(inside);
  if (outsideChi && insideSci) return `${inside} (${outside})`;
  return s;
}

function titleCase(s) {
  return String(s || "")
    .trim()
    .split(/\s+/)
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w))
    .join(" ");
}

function articleFor(name) {
  const s = String(name || "").trim();
  if (!s) return "a";
  return /^[aeiou]/i.test(s) ? "an" : "a";
}

function recommendationClosing(rec) {
  const s = String(rec || "").trim();
  if (!s || /^no mitigation measure is needed\.?$/i.test(s)) {
    return "No mitigation measure is needed at current stage.";
  }
  const body = /[.!?]$/.test(s) ? s : `${s}.`;
  return `The following is recommended: ${body}`;
}

function buildCommentsText(treeId, species, site, nearby, targets, recommendation) {
  const id = treeId || "—";
  const sp = formatSpeciesForComments(species) || "—";
  const art = articleFor(sp);
  const s = titleCase(site) || "—";
  const n = nearby || "—";
  const t = targets || "—";
  return (
    `The inspected tree (${id}) is ${art} ${sp} situated in the landscape area at ${s}. The tree is next to ${n}, which is considered frequently used. The targets of the tree cover ${t}.\n\n` +
    `The overall health condition of the tree was normal at the time of inspection, as evidenced by typical color, size, and density of the foliage. Structurally, no significant defects were observed along the main trunk and branches.\n\n` +
    `In conclusion, the overall health and structural condition of the tree are considered acceptable. ${recommendationClosing(recommendation)}`
  );
}

function applyRecommendationToComments(recommendation) {
  const el = document.getElementById("f-comments");
  if (!el) return;
  const text = el.value || "";
  if (!text.trim()) {
    const form = readTreeForm();
    el.value = buildCommentsText(form.treeId, form.species, form.site, form.nearby, form.targets, recommendation);
    return;
  }
  const parts = text.split(/\n\s*\n/);
  const last = (parts[parts.length - 1] || "").trim();
  if (!/^In conclusion,/i.test(last)) return;
  parts[parts.length - 1] = `In conclusion, the overall health and structural condition of the tree are considered acceptable. ${recommendationClosing(recommendation)}`;
  el.value = parts.join("\n\n");
}

function refreshCommentsFromFields() {
  const form = readTreeForm();
  const el = document.getElementById("f-comments");
  if (!el) return;
  el.value = buildCommentsText(form.treeId, form.species, form.site, form.nearby, form.targets, form.recommendation);
}

function readTreeForm() {
  const read = (id) => {
    const el = document.getElementById(id);
    return el ? String(el.value || "") : "";
  };
  return {
    treeId: read("f-treeId").trim(),
    species: read("f-species").trim(),
    site: read("f-site").trim(),
    nearby: read("f-nearby").trim().toLowerCase(),
    targets: read("f-targets").trim().toLowerCase(),
    inspector: read("f-inspector").trim(),
    date: read("f-date"),
    notes: read("f-notes").trim(),
    recommendation: read("f-recommendation").trim(),
    comments: read("f-comments").trim(),
  };
}

async function saveTreeFields() {
  if (!currentTreeId) return null;
  const tree = await getTree(currentTreeId);
  if (!tree) return null;
  const form = readTreeForm();
  tree.treeId = form.treeId || tree.treeId || "";
  tree.species = form.species || tree.species || "";
  tree.site = form.site || tree.site || "";
  tree.nearby = form.nearby || tree.nearby || "";
  tree.targets = form.targets || tree.targets || "";
  if (tree.site) saveHistory("f2-site-history", tree.site);
  if (tree.nearby) saveHistory("f2-nearby-history", tree.nearby);
  if (tree.targets) saveHistory("f2-targets-history", tree.targets);
  tree.inspector = form.inspector || tree.inspector || "";
  tree.date = form.date || tree.date || "";
  tree.notes = form.notes || tree.notes || "";
  tree.recommendation = form.recommendation || tree.recommendation || "";
  tree.comments = form.comments || tree.comments || "";
  tree.updatedAt = Date.now();
  if (tree.inspector) localStorage.setItem("rf-inspector", tree.inspector);
  await putTree(tree);
  return tree;
}

async function moveTreePhoto(pid, delta) {
  const tree = await getTree(currentTreeId);
  if (!tree || !tree.treePhotoIds) return;
  const ids = tree.treePhotoIds.slice();
  const i = ids.indexOf(pid);
  const j = i + delta;
  if (i < 0 || j < 0 || j >= ids.length) return;
  const tmp = ids[i];
  ids[i] = ids[j];
  ids[j] = tmp;
  tree.treePhotoIds = ids;
  tree.updatedAt = Date.now();
  await putTree(tree);
  await renderTreePhotos(tree);
}

const PHOTO_CAPTION_OPTIONS = [
  "Whole view",
  "Crown condition",
  "Trunk condition",
  "Trunk base condition",
];

let captionOptionsVisible = false;

async function renderTreePhotos(tree) {
  const wrap = document.getElementById("treePhotos");
  wrap.innerHTML = "";
  tree.treePhotoCaptions = tree.treePhotoCaptions || {};
  const ids = tree.treePhotoIds || [];
  for (let i = 0; i < ids.length; i++) {
    const pid = ids[i];
    const slot = document.createElement("div");
    slot.className = "photo-slot";
    const url = await photoDisplayUrl(tree, pid);
    const cap = tree.treePhotoCaptions[pid] || "";
    slot.innerHTML = `
      <div class="photo-tools">
        <span class="order">#${i + 1}</span>
        <button type="button" class="mini" data-act="edit">${t("markPhoto")}</button>
        <button type="button" class="mini" data-act="prev" ${i === 0 ? "disabled" : ""}>${t("movePrev")}</button>
        <button type="button" class="mini" data-act="next" ${i === ids.length - 1 ? "disabled" : ""}>${t("moveNext")}</button>
        <button type="button" class="mini danger" data-act="del">${t("delete")}</button>
      </div>
      <div class="photo-frame">
        <img src="${url}" alt="">
      </div>
      <input class="caption-input" type="text" maxlength="120" placeholder="${escapeHtml(t("photoCaption"))}" value="${escapeHtml(cap)}">
      <div class="chip-box" data-cap-chips ${captionOptionsVisible ? "" : "hidden"}></div>`;
    const img = slot.querySelector("img");
    const input = slot.querySelector("input");
    const openEdit = (e) => {
      e.stopPropagation();
      openPhotoEditor(pid);
    };
    img.addEventListener("click", openEdit);
    slot.querySelector('[data-act="edit"]').addEventListener("click", openEdit);
    slot.querySelector('[data-act="del"]').addEventListener("click", async (e) => {
      e.stopPropagation();
      if (!confirm(t("delete") + "?")) return;
      const latest = await getTree(currentTreeId);
      if (!latest) return;
      latest.treePhotoIds = (latest.treePhotoIds || []).filter((x) => x !== pid);
      if (latest.treePhotoCaptions) delete latest.treePhotoCaptions[pid];
      if (latest.treePhotoMarks) delete latest.treePhotoMarks[pid];
      await deletePhoto(pid);
      latest.updatedAt = Date.now();
      await putTree(latest);
      await renderTreePhotos(latest);
    });
    slot.querySelector('[data-act="prev"]').addEventListener("click", (e) => {
      e.stopPropagation();
      moveTreePhoto(pid, -1);
    });
    slot.querySelector('[data-act="next"]').addEventListener("click", (e) => {
      e.stopPropagation();
      moveTreePhoto(pid, 1);
    });
    const saveCap = async () => {
      const latest = await getTree(currentTreeId);
      if (!latest) return;
      latest.treePhotoCaptions = latest.treePhotoCaptions || {};
      latest.treePhotoCaptions[pid] = input.value.trim();
      latest.updatedAt = Date.now();
      await putTree(latest);
      tree.treePhotoCaptions = latest.treePhotoCaptions;
    };
    input.addEventListener("change", saveCap);
    input.addEventListener("blur", saveCap);

    const capChips = slot.querySelector("[data-cap-chips]");
    const currentParts = cap.toLowerCase().split(/\s*,\s*|\s+and\s+/).map((p) => p.trim()).filter(Boolean);
    capChips.innerHTML = PHOTO_CAPTION_OPTIONS.map((opt) => {
      const sel = currentParts.includes(opt.toLowerCase()) ? " selected" : "";
      return `<button type="button" class="chip${sel}" data-val="${opt}">${opt}</button>`;
    }).join("");
    capChips.querySelectorAll(".chip").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        btn.classList.toggle("selected");
        const selected = [...capChips.querySelectorAll(".chip.selected")].map((c) => c.getAttribute("data-val"));
        input.value = joinWithAnd(selected);
        saveCap();
      });
    });

    wrap.appendChild(slot);
  }
}

function renderDrillList(tree) {
  const list = document.getElementById("drillList");
  const drills = tree.drills || [];
  if (!drills.length) {
    list.innerHTML = `<div class="empty-state">${t("noDrills")}</div>`;
    return;
  }
  list.innerHTML = drills
    .map((d, i) => {
      const h = d.height ? `${d.height} ${d.unit || "m"}` : "—";
      const dir = formatHeading(d.heading);
      const ok = (d.photoIds || []).filter(Boolean).length >= 2 && d.heading != null && d.height;
      return `<div class="item" data-drill="${d.id}">
        <div class="title">#${i + 1} · ${escapeHtml(h)} · ${escapeHtml(dir)}</div>
        <div class="small muted">${ok ? t("ready") : "…"} · ${(d.photoIds || []).filter(Boolean).length}/2 ${t("photos")}</div>
      </div>`;
    })
    .join("");
  list.querySelectorAll("[data-drill]").forEach((el) => {
    el.addEventListener("click", () => openDrill(el.getAttribute("data-drill")));
  });
}

async function addDrill() {
  await saveTreeFields();
  const tree = await getTree(currentTreeId);
  const drill = {
    id: uid(),
    height: "",
    unit: "cm",
    heading: null,
    photoIds: [null, null],
    notes: "",
    feedSpeed: localStorage.getItem("rf-feed") || "",
    drillSpeed: localStorage.getItem("rf-rpm") || "",
    createdAt: Date.now(),
  };
  tree.drills = tree.drills || [];
  tree.drills.push(drill);
  tree.updatedAt = Date.now();
  await putTree(tree);
  await openDrill(drill.id);
}

async function openDrill(drillId) {
  currentDrillId = drillId;
  const tree = await getTree(currentTreeId);
  const drill = (tree.drills || []).find((d) => d.id === drillId);
  if (!drill) return openTree(currentTreeId);
  showScreen("screen-drill");
  document.getElementById("f-height").value = drill.height || "";
  document.getElementById("f-unit").value = drill.unit || "cm";
  document.getElementById("f-drillNotes").value = drill.notes || "";
  document.getElementById("f-feed").value = drill.feedSpeed || "";
  document.getElementById("f-rpm").value = drill.drillSpeed || "";
  document.getElementById("manualHeading").value = drill.heading != null ? String(drill.heading) : "";
  document.getElementById("capturedHeading").value = drill.heading != null ? String(drill.heading) : "";
  document.getElementById("capturedLabel").textContent =
    drill.heading != null ? `${t("captured")}: ${formatHeading(drill.heading)}` : t("direction");
  await renderDrillPhotos(drill);
  startCompass();
}

async function renderDrillPhotos(drill) {
  const a = document.getElementById("photoA");
  const b = document.getElementById("photoB");
  const ids = drill.photoIds || [null, null];
  if (ids[0]) {
    a.classList.remove("empty");
    a.innerHTML = `<img src="${await photoUrl(ids[0])}" alt=""><div class="cap">${t("photoA")}</div>`;
  } else {
    a.className = "photo-slot empty";
    a.innerHTML = `<div>${t("photoA")}</div>`;
  }
  if (ids[1]) {
    b.classList.remove("empty");
    b.innerHTML = `<img src="${await photoUrl(ids[1])}" alt=""><div class="cap">${t("photoB")}</div>`;
  } else {
    b.className = "photo-slot empty";
    b.innerHTML = `<div>${t("photoB")}</div>`;
  }
}

async function saveDrill() {
  const tree = await getTree(currentTreeId);
  const drill = (tree.drills || []).find((d) => d.id === currentDrillId);
  if (!drill) return;
  const height = document.getElementById("f-height").value.trim();
  const headingRaw = document.getElementById("capturedHeading").value || document.getElementById("manualHeading").value;
  const heading = headingRaw === "" ? null : Number(headingRaw);
  const photos = (drill.photoIds || []).filter(Boolean);
  if (!height) {
    toast(t("needHeight"));
    return false;
  }
  if (heading == null || Number.isNaN(heading)) {
    toast(t("needDir"));
    return false;
  }
  if (photos.length < 2) {
    toast(t("need2photos"));
    return false;
  }
  drill.height = height;
  drill.unit = document.getElementById("f-unit").value;
  drill.heading = ((heading % 360) + 360) % 360;
  drill.notes = document.getElementById("f-drillNotes").value.trim();
  drill.feedSpeed = document.getElementById("f-feed").value;
  drill.drillSpeed = document.getElementById("f-rpm").value;
  if (drill.feedSpeed) localStorage.setItem("rf-feed", drill.feedSpeed);
  if (drill.drillSpeed) localStorage.setItem("rf-rpm", drill.drillSpeed);
  tree.updatedAt = Date.now();
  await putTree(tree);
  toast(t("saved"));
  await openTree(currentTreeId);
  return true;
}

async function deleteCurrentDrill() {
  if (!confirm(t("confirmDeleteDrill"))) return;
  const tree = await getTree(currentTreeId);
  const drill = (tree.drills || []).find((d) => d.id === currentDrillId);
  if (drill) {
    for (const pid of (drill.photoIds || []).filter(Boolean)) await deletePhoto(pid);
  }
  tree.drills = (tree.drills || []).filter((d) => d.id !== currentDrillId);
  tree.updatedAt = Date.now();
  await putTree(tree);
  toast(t("deleted"));
  await openTree(currentTreeId);
}

function captionFromFileName(file) {
  const raw = String((file && file.name) || "").trim();
  if (!raw) return "";
  let base = raw.replace(/^.*[/\\]/, "");
  const dot = base.lastIndexOf(".");
  if (dot > 0) base = base.slice(0, dot);
  try { base = decodeURIComponent(base); } catch (e) {}
  return base.replace(/\s+/g, " ").trim().slice(0, 120);
}

async function handleTreePhotos(files) {
  const list = [...(files || [])].filter(Boolean);
  if (!list.length) return;
  await saveTreeFields();
  const tree = await getTree(currentTreeId);
  if (!tree) return;
  tree.treePhotoIds = tree.treePhotoIds || [];
  tree.treePhotoCaptions = tree.treePhotoCaptions || {};
  let ok = 0;
  let fail = 0;
  for (const file of list) {
    try {
      const blob = await fileToJpegBlob(file, 1920, 0.88, { forcePortrait: true });
      const id = uid();
      await putPhoto(id, blob);
      tree.treePhotoIds.push(id);
      tree.treePhotoCaptions[id] = captionFromFileName(file);
      ok++;
    } catch (err) {
      console.error(err);
      fail++;
    }
  }
  tree.updatedAt = Date.now();
  await putTree(tree);
  await renderTreePhotos(tree);
  if (fail && ok) toast(`Added ${ok} photo(s), ${fail} failed`);
  else if (fail && !ok) toast("Photo failed");
  else if (ok > 1) toast(`Added ${ok} photos`);
}

async function handleTreePhoto(file) {
  return handleTreePhotos(file ? [file] : []);
}

async function handleDrillPhoto(slotIndex, file) {
  if (!file) return;
  try {
    const tree = await getTree(currentTreeId);
    const drill = (tree.drills || []).find((d) => d.id === currentDrillId);
    if (!drill) return;
    const blob = await fileToJpegBlob(file);
    const id = uid();
    const old = (drill.photoIds || [null, null])[slotIndex];
    if (old) await deletePhoto(old);
    await putPhoto(id, blob);
    drill.photoIds = drill.photoIds || [null, null];
    drill.photoIds[slotIndex] = id;
    tree.updatedAt = Date.now();
    await putTree(tree);
    await renderDrillPhotos(drill);
  } catch (err) {
    console.error(err);
    toast("Photo failed: " + (err && err.message ? err.message : "unknown"));
  }
}

function captureGps() {
  if (!navigator.geolocation) {
    toast("GPS unavailable");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const tree = await getTree(currentTreeId);
      tree.gps = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        acc: pos.coords.accuracy,
      };
      tree.updatedAt = Date.now();
      await putTree(tree);
      document.getElementById("gpsLabel").textContent = `${tree.gps.lat.toFixed(6)}, ${tree.gps.lng.toFixed(6)}`;
      toast(t("saved"));
    },
    () => toast("GPS failed"),
    { enableHighAccuracy: true, timeout: 12000 }
  );
}

async function deleteCurrentTree() {
  if (!confirm(t("confirmDelete"))) return;
  await deleteTree(currentTreeId);
  toast(t("deleted"));
  renderHome();
}

/* ---------- Export ---------- */

async function blobToDataUrl(blob) {
  return new Promise((resolve) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.readAsDataURL(blob);
  });
}

async function blobToBytesAndSize(blob) {
  const bytes = new Uint8Array(await blob.arrayBuffer());
  const url = URL.createObjectURL(blob);
  const dim = await new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({ w: img.naturalWidth || 1600, h: img.naturalHeight || 1200 });
      URL.revokeObjectURL(url);
    };
    img.onerror = () => {
      resolve({ w: 1600, h: 1200 });
      URL.revokeObjectURL(url);
    };
    img.src = url;
  });
  return { bytes, w: dim.w, h: dim.h };
}

async function exportReport() {
  const form = readTreeForm();
  const saved = await saveTreeFields();
  const tree = saved || (await getTree(currentTreeId));
  if (!tree) {
    toast("No tree record");
    return;
  }
  const treeId = form.treeId || tree.treeId || "";
  const species = form.species || tree.species || "";
  tree.treeId = treeId;
  tree.species = species;
  if (form.site) tree.site = form.site;
  if (form.inspector) tree.inspector = form.inspector;
  if (form.date) tree.date = form.date;
  if (form.notes) tree.notes = form.notes;
  tree.updatedAt = Date.now();
  await putTree(tree);
  if (!tree.treePhotoIds || !tree.treePhotoIds.length) {
    toast(t("need1treePhoto"));
    return;
  }
  if (typeof window.exportFilledDocx !== "function") {
    toast("Word export not ready");
    return;
  }
  try {
    toast(t("export") + "…");
    const treePhoto = await exportSizedPhoto(tree, tree.treePhotoIds[0]);
    const treePhotos = [];
    for (const pid of tree.treePhotoIds || []) {
      const sized = await exportSizedPhoto(tree, pid);
      if (sized) treePhotos.push(sized);
    }
    await window.exportFilledDocx({
      treeId,
      species,
      location: form.site || tree.site || "",
      nearby: form.nearby || tree.nearby || "",
      targets: form.targets || tree.targets || "",
      recommendation: form.recommendation || tree.recommendation || "",
      comments: form.comments || tree.comments || "",
      treePhoto,
      treePhotos,
    });
    toast(t("saved"));
    if (currentTreeId) await openTree(currentTreeId);
  } catch (err) {
    console.error(err);
    toast("Word export failed: " + (err && err.message ? err.message : "unknown"));
  }
}

async function exportReportHtmlLegacy() {
  await saveTreeFields();
  const tree = await getTree(currentTreeId);
  if (!tree.treePhotoIds || !tree.treePhotoIds.length) {
    toast(t("need1treePhoto"));
    return;
  }
  const treeImgs = [];
  for (const pid of tree.treePhotoIds) {
    const rec = await getPhoto(pid);
    if (rec) {
      const blob = await blobWithMarks(rec.blob, marksForPhoto(tree, pid));
      treeImgs.push(await blobToDataUrl(blob));
    }
  }
  const drillBlocks = [];
  for (let i = 0; i < (tree.drills || []).length; i++) {
    const d = tree.drills[i];
    const imgs = [];
    for (const pid of (d.photoIds || []).filter(Boolean)) {
      const rec = await getPhoto(pid);
      if (rec) imgs.push(await blobToDataUrl(rec.blob));
    }
    drillBlocks.push({ d, imgs, i });
  }

  const html = `<!DOCTYPE html>
<html lang="${lang}"><head><meta charset="utf-8">
<title>${escapeHtml(t("reportTitle"))} — ${escapeHtml(tree.treeId || "")}</title>
<style>
  body{font-family:Segoe UI,PingFang HK,Noto Sans TC,sans-serif;margin:24px;color:#122;}
  h1{margin:0 0 8px;font-size:22px}
  .meta{color:#445;margin-bottom:16px}
  table{border-collapse:collapse;width:100%;margin:12px 0}
  th,td{border:1px solid #ccc;padding:8px;text-align:left;vertical-align:top}
  th{background:#e8f5ee}
  img{max-width:320px;max-height:240px;margin:6px 6px 6px 0;border:1px solid #ddd}
  .sec{page-break-inside:avoid;margin:18px 0;padding-top:8px;border-top:2px solid #1b4332}
</style></head><body>
<h1>${escapeHtml(t("reportTitle"))}</h1>
<div class="meta">
  <div><b>${t("treeId")}:</b> ${escapeHtml(tree.treeId || "—")} &nbsp; <b>${t("species")}:</b> ${escapeHtml(tree.species || "—")}</div>
  <div><b>${t("site")}:</b> ${escapeHtml(tree.site || "—")} &nbsp; <b>${t("date")}:</b> ${escapeHtml(tree.date || "—")}</div>
  <div><b>${t("inspector")}:</b> ${escapeHtml(tree.inspector || "—")}
    ${tree.gps ? `&nbsp; <b>GPS:</b> ${tree.gps.lat.toFixed(6)}, ${tree.gps.lng.toFixed(6)}` : ""}
  </div>
  ${tree.notes ? `<div><b>${t("notes")}:</b> ${escapeHtml(tree.notes)}</div>` : ""}
</div>
<div class="sec">
  <h2>${t("treePhotos")}</h2>
  ${treeImgs.map((src) => `<img src="${src}" alt="tree">`).join("")}
</div>
<div class="sec">
  <h2>${t("drills")}</h2>
  <table>
    <tr><th>#</th><th>${t("height")}</th><th>${t("direction")}</th><th>${t("from")} → ${t("toward")}</th><th>${t("notes")}</th></tr>
    ${drillBlocks
      .map(({ d, i }) => {
        const deg = d.heading;
        const from = deg != null ? cardinalFromDeg(deg) : "—";
        const toward = deg != null ? cardinalFromDeg(oppositeDeg(deg)) : "—";
        return `<tr>
          <td>${i + 1}</td>
          <td>${escapeHtml(d.height || "—")} ${escapeHtml(d.unit || "")}</td>
          <td>${deg != null ? Math.round(deg) + "° magnetic" : "—"}</td>
          <td>${from} → ${toward}</td>
          <td>${escapeHtml(d.notes || "")}</td>
        </tr>`;
      })
      .join("")}
  </table>
</div>
${drillBlocks
  .map(
    ({ d, imgs, i }) => `<div class="sec">
      <h3>#${i + 1} — ${escapeHtml(d.height || "")} ${escapeHtml(d.unit || "")} — ${escapeHtml(formatHeading(d.heading))}</h3>
      ${imgs.map((src) => `<img src="${src}" alt="drill">`).join("")}
      ${d.notes ? `<p>${escapeHtml(d.notes)}</p>` : ""}
    </div>`
  )
  .join("")}
<p style="color:#667;font-size:12px">Generated by Form 2 Assessment</p>
</body></html>`;

  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `form2-${(tree.treeId || "tree").replace(/\s+/g, "_")}-${tree.date || "record"}.html`;
  a.click();
}

async function exportJson() {
  await saveTreeFields();
  const tree = await getTree(currentTreeId);
  const photos = {};
  const collect = async (id) => {
    if (!id || photos[id]) return;
    const rec = await getPhoto(id);
    if (rec) photos[id] = await blobToDataUrl(rec.blob);
  };
  for (const id of tree.treePhotoIds || []) await collect(id);
  for (const d of tree.drills || []) for (const id of d.photoIds || []) await collect(id);
  const payload = { app: "form2-field-record", version: 1, exportedAt: new Date().toISOString(), tree, photos };
  const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `form2-${(tree.treeId || "tree").replace(/\s+/g, "_")}.json`;
  a.click();
}

async function dataUrlToBlob(dataUrl) {
  const res = await fetch(dataUrl);
  return await res.blob();
}

async function getSelectedTrees() {
  const checks = [...document.querySelectorAll(".tree-check:checked")];
  if (!checks.length) {
    toast("Select at least one tree");
    return [];
  }
  const trees = [];
  for (const cb of checks) {
    const tree = await getTree(cb.getAttribute("data-id"));
    if (tree) trees.push(tree);
  }
  return trees;
}

function downloadBlob(blob, name) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

async function zipAndDownload(files, zipName) {
  if (typeof JSZip === "undefined") {
    toast("Zip not ready");
    return;
  }
  const zip = new JSZip();
  for (const f of files) zip.file(f.name, f.blob);
  const blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE" });
  downloadBlob(blob, zipName);
}

async function exportSelectedJson() {
  const trees = await getSelectedTrees();
  if (!trees.length) return;
  toast("Exporting…");
  const files = [];
  for (const tree of trees) {
    const photos = {};
    const collect = async (id) => {
      if (!id || photos[id]) return;
      const rec = await getPhoto(id);
      if (rec) photos[id] = await blobToDataUrl(rec.blob);
    };
    for (const id of tree.treePhotoIds || []) await collect(id);
    for (const d of tree.drills || []) for (const id of d.photoIds || []) await collect(id);
    const payload = { app: "form2-field-record", version: 1, exportedAt: new Date().toISOString(), tree, photos };
    const name = "Form 2-" + (tree.treeId || "tree").replace(/[^\w\-]+/g, "_") + ".json";
    files.push({ name, blob: new Blob([JSON.stringify(payload)], { type: "application/json" }) });
  }
  if (files.length === 1) {
    downloadBlob(files[0].blob, files[0].name);
  } else {
    await zipAndDownload(files, `Form 2-JSON-${files.length}-${new Date().toISOString().slice(0, 10)}.zip`);
  }
  toast(`Exported ${files.length} JSON`);
}

async function exportSelectedWord() {
  const trees = await getSelectedTrees();
  if (!trees.length) return;
  if (typeof window.exportFilledDocx !== "function") {
    toast("Word export not ready");
    return;
  }
  toast("Exporting Word…");
  const files = [];
  for (const tree of trees) {
    if (!tree.treePhotoIds || !tree.treePhotoIds.length) continue;
    const treePhoto = await exportSizedPhoto(tree, tree.treePhotoIds[0]);
    const treePhotos = [];
    for (const pid of tree.treePhotoIds || []) {
      const sized = await exportSizedPhoto(tree, pid);
      if (sized) treePhotos.push(sized);
    }
    const result = await window.exportFilledDocx({
      treeId: tree.treeId || "",
      species: tree.species || "",
      location: tree.site || "",
      nearby: tree.nearby || "",
      targets: tree.targets || "",
      recommendation: tree.recommendation || "",
      comments: tree.comments || "",
      treePhoto,
      treePhotos,
      returnBlob: true,
    });
    if (result && result.blob) files.push(result);
  }
  if (!files.length) {
    toast("No trees with photos to export");
    return;
  }
  if (files.length === 1) {
    downloadBlob(files[0].blob, files[0].name);
  } else {
    await zipAndDownload(files, `Form 2-Word-${files.length}-${new Date().toISOString().slice(0, 10)}.zip`);
  }
  toast(`Exported ${files.length} Word`);
}

function selectAllTrees() {
  const checks = [...document.querySelectorAll(".tree-check")];
  if (!checks.length) return;
  const allOn = checks.every((c) => c.checked);
  checks.forEach((c) => { c.checked = !allOn; });
}

async function deleteSelectedTrees() {
  const checks = [...document.querySelectorAll(".tree-check:checked")];
  if (!checks.length) {
    toast("Select at least one tree");
    return;
  }
  const n = checks.length;
  if (!confirm(`Delete ${n} tree(s)? This cannot be undone.`)) return;
  for (const cb of checks) {
    const id = cb.getAttribute("data-id");
    if (id) await deleteTree(id);
  }
  toast(`Deleted ${n} tree(s)`);
  await renderHome();
}

async function importJsonFiles(fileList) {
  const files = Array.isArray(fileList) ? fileList : [...fileList];
  if (!files.length) return;
  toast("Importing…");
  let count = 0;
  for (const file of files) {
    let data;
    try {
      const text = await file.text();
      data = JSON.parse(text);
    } catch (err) {
      toast("Invalid JSON: " + file.name);
      continue;
    }
    const trees = Array.isArray(data.trees) ? data.trees : data.tree ? [data.tree] : [];
    const photos = data.photos || {};
    for (const tree of trees) {
      if (!tree) continue;
      if (!tree.id) tree.id = uid();
      await putTree(tree);
      count++;
    }
    for (const [id, dataUrl] of Object.entries(photos)) {
      if (!dataUrl || typeof dataUrl !== "string") continue;
      try {
        const blob = await dataUrlToBlob(dataUrl);
        await putPhoto(id, blob);
      } catch (err) {
        console.warn("photo import failed", id, err);
      }
    }
  }
  toast(`Imported ${count} tree(s) from ${files.length} file(s)`);
  await renderHome();
}

async function init() {
  db = await openDb();
  applyI18n();
  refreshSuggestionLists();
  wireSpeciesPicker();
  document.getElementById("langBtn").addEventListener("click", toggleLang);
  document.getElementById("btnNew").addEventListener("click", newTree);
  document.getElementById("btnBackHome").addEventListener("click", async () => {
    await saveTreeFields();
    renderHome();
  });
  document.getElementById("btnSaveTree").addEventListener("click", async () => {
    await saveTreeFields();
    toast(t("saved"));
  });
  document.getElementById("btnGps").addEventListener("click", captureGps);
  document.getElementById("btnDeleteTree").addEventListener("click", deleteCurrentTree);
  document.getElementById("btnExport").addEventListener("click", exportReport);
  ["f-treeId", "f-species", "f-site", "f-nearby", "f-targets", "f-inspector", "f-date", "f-notes", "f-recommendation", "f-comments"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("change", () => {
      if (id === "f-recommendation") applyRecommendationToComments(el.value);
      saveTreeFields();
    });
    el.addEventListener("blur", () => {
      if (id === "f-recommendation") applyRecommendationToComments(el.value);
      saveTreeFields();
    });
  });
  document.getElementById("btnJson").addEventListener("click", exportJson);
  const btnExportSelected = document.getElementById("btnExportSelected");
  if (btnExportSelected) btnExportSelected.addEventListener("click", exportSelectedJson);
  const btnExportWord = document.getElementById("btnExportWord");
  if (btnExportWord) btnExportWord.addEventListener("click", exportSelectedWord);
  const btnSelectAll = document.getElementById("btnSelectAll");
  if (btnSelectAll) btnSelectAll.addEventListener("click", selectAllTrees);
  const btnSort = document.getElementById("btnSort");
  if (btnSort) btnSort.addEventListener("click", sortTreesById);
  const btnDeleteSelected = document.getElementById("btnDeleteSelected");
  if (btnDeleteSelected) btnDeleteSelected.addEventListener("click", deleteSelectedTrees);
  const btnImport = document.getElementById("btnImport");
  const fileImport = document.getElementById("fileImport");
  if (btnImport && fileImport) {
    btnImport.addEventListener("click", () => fileImport.click());
    fileImport.addEventListener("change", async (e) => {
      const files = e.target.files ? [...e.target.files] : [];
      e.target.value = "";
      if (!files.length) {
        toast("No file selected");
        return;
      }
      try {
        await importJsonFiles(files);
      } catch (err) {
        console.error(err);
        toast("Import failed: " + (err && err.message ? err.message : "unknown"));
      }
    });
  }
  const refreshBtn = document.getElementById("btnRefreshComments");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      refreshCommentsFromFields();
      saveTreeFields();
    });
  }
  ["f-nearby", "f-targets"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("blur", () => {
      el.value = el.value.trim().toLowerCase();
    });
  });
  document.querySelectorAll("[data-chip-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-chip-toggle");
      const box = document.getElementById(id);
      if (!box) return;
      const show = box.hidden;
      box.hidden = !show;
      btn.textContent = show ? "Hide options" : "Show options";
    });
  });

  document.getElementById("fileTreePhoto").addEventListener("change", async (e) => {
    const files = e.target.files ? [...e.target.files] : [];
    e.target.value = "";
    if (files.length) await handleTreePhotos(files);
  });
  document.getElementById("btnTreePhoto").addEventListener("click", () => document.getElementById("fileTreePhoto").click());
  const capToggleBtn = document.getElementById("btnToggleCaptionOptions");
  if (capToggleBtn) {
    capToggleBtn.addEventListener("click", async () => {
      captionOptionsVisible = !captionOptionsVisible;
      capToggleBtn.textContent = captionOptionsVisible ? "Hide options" : "Show options";
      if (currentTreeId) {
        const tree = await getTree(currentTreeId);
        if (tree) await renderTreePhotos(tree);
      }
    });
  }
  document.querySelectorAll("[data-stamp-toggle]").forEach((btn) => {
    btn.addEventListener("click", toggleStamp);
  });
  updateStampButtons();
  wirePhotoEditor();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
  await renderHome();
}

document.addEventListener("DOMContentLoaded", init);
