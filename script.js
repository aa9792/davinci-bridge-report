const sections = [
  {
    time: "00:00 - 00:35",
    label: "STEAM 總覽",
    title: "我們用五個角度觀察同一座橋",
    points: [
      "S 看力學原理：重力、摩擦力、壓力如何讓木條互相卡住。",
      "T 看工具與紀錄：用影片和照片檢查組裝過程。",
      "E 看實作修正，A 看呈現設計，M 則負責把承重能力算出合理範圍。"
    ],
    note: "開場可以先播放成果影片，讓大家知道這不是只講理論，而是真的有完成模型。",
    mediaType: "video",
    mediaIndex: 0
  },
  {
    time: "00:35 - 01:25",
    label: "S / T 科學與技術",
    title: "橋會穩，是因為木條把力量傳到兩側",
    points: [
      "達文西橋的木條彼此交錯，受力時不是單點硬撐，而是分散到多個節點。",
      "摩擦力讓接觸面不容易滑動；角度越準，受力路徑越完整。",
      "我們用照片標記交疊位置，用影片觀察哪裡會晃動或滑開。"
    ],
    note: "這段可以指著照片說明橋面、斜撐、節點和兩側支撐點。",
    mediaType: "photo",
    mediaIndex: 1
  },
  {
    time: "01:25 - 02:25",
    label: "E 工程比較",
    title: "彩色冰棒棍、竹筷、教具包做出來的感覺不一樣",
    points: [
      "彩色冰棒棍扁平好排，適合看層次，但長跨距時比較容易彎。",
      "一般竹筷單支較硬，但圓形會滾，節點不易固定。",
      "小浣熊教具包尺寸一致、固定件清楚，穩定度最高，也最適合展示。"
    ],
    note: "可以強調：材料強不等於整座橋一定強，節點穩不穩才是關鍵。",
    mediaType: "photo",
    mediaIndex: 6
  },
  {
    time: "02:25 - 04:05",
    label: "M 承重計算",
    title: "用簡化模型估算安全承重",
    points: [
      "公式：估算承重 = 單支安全承重 x 有效承重支數 x 節點效率 / 安全係數。",
      "節點效率代表材料有多少強度真的被整座橋用到；會滑動的竹筷效率可能比教具包低。",
      "安全係數建議取 2 以上，表示算出 2 kgf 時，實際展示先不要超過約 2 kgf。"
    ],
    note: "這段是報告重點。可以切到下方估算器，示範三種材料的結果差異。",
    mediaType: "video",
    mediaIndex: 2
  },
  {
    time: "04:05 - 05:00",
    label: "A 呈現與心得",
    title: "我們學到工程設計需要美感，也需要證據",
    points: [
      "顏色和照片讓結構層次更容易看懂，這是 A 的呈現設計。",
      "承重計算讓心得不只停在「很穩」，而是能說出為什麼穩、穩到什麼程度。",
      "最大的收穫是：做模型時每一次晃動，都是在提醒我們要回去檢查受力路徑。"
    ],
    note: "結尾可以說：STEAM 讓我們把手作成果、科學原理和數學估算連在一起。",
    mediaType: "photo",
    mediaIndex: 5
  }
];

const photos = [
  { src: "小浣熊達文西橋1.jpg", caption: "完成的橋樑結構" },
  { src: "小浣熊達文西橋2.jpg", caption: "橋身交錯節點" },
  { src: "小浣熊達文西橋3.jpg", caption: "橋面與側向支撐" },
  { src: "小浣熊達文西橋4.jpg", caption: "拱形輪廓與受力路徑" },
  { src: "小浣熊達文西橋5.jpg", caption: "固定後的整體外觀" },
  { src: "小浣熊達文西橋6.jpg", caption: "成果展示角度" },
  { src: "彩色冰棒棍1.jpg", caption: "彩色冰棒棍材料排列" },
  { src: "彩色冰棒棍2.jpg", caption: "彩色木條組裝成果" }
];

const videos = [
  { src: "彩色冰棒棍影片1.mp4", caption: "成果影片 1" },
  { src: "彩色冰棒棍影片2.mp4", caption: "成果影片 2" },
  { src: "彩色冰棒棍影片3.mp4", caption: "成果影片 3" }
];

const buildSteps = [
  {
    image: "彩色冰棒棍1.jpg",
    alt: "製作材料排列",
    title: "準備材料，先確認尺寸一致",
    body: "把木條依長度與厚度整理好，尺寸越一致，後面交錯時越容易保持左右對稱。",
    tip: "報告提示：先說材料差異會影響摩擦力與節點穩定。"
  },
  {
    image: "彩色冰棒棍2.jpg",
    alt: "底層木條排列",
    title: "排出底層支撐，決定橋的寬度",
    body: "先放兩到三根平行木條作為底層，左右間距要固定，這會決定橋面寬度和後續拱形是否對稱。",
    tip: "操作重點：底層越歪，後面每一層的誤差會越放大。"
  },
  {
    image: "小浣熊達文西橋2.jpg",
    alt: "交錯節點特寫",
    title: "加入交錯木條，形成互鎖節點",
    body: "把新的木條斜放或橫放到前一層上方，讓每根木條同時壓住別人，也被別人托住。",
    tip: "操作重點：不要急著加很多根，先確認每個接觸點都有貼緊。"
  },
  {
    image: "小浣熊達文西橋4.jpg",
    alt: "達文西橋拱形輪廓",
    title: "左右同步延伸，慢慢形成拱形",
    body: "從中間往兩側或從兩側往中間延伸都可以，但左右要同步，讓重量能沿著拱形傳到兩端。",
    tip: "報告提示：這裡可以連到 S，說明力沿著木條傳遞。"
  },
  {
    image: "小浣熊達文西橋5.jpg",
    alt: "橋樑固定件",
    title: "微調角度，必要時加入固定件",
    body: "如果木條表面太滑，可以用膠帶、橡皮筋或釘子輔助固定。固定件會讓模型更適合搬動與展示。",
    tip: "操作重點：固定件是展示改良，不是原始無釘橋的唯一做法。"
  },
  {
    image: "小浣熊達文西橋6.jpg",
    alt: "完成橋樑展示角度",
    title: "逐步測試承重，記錄安全範圍",
    body: "測試時不要一次放太重，先從輕物開始，觀察哪個節點先滑動、哪根木條先彎曲，再回到 M 做承重估算。",
    tip: "報告提示：測試不是為了壓壞，而是找出安全承重與失效原因。"
  }
];

const presets = {
  popsicle: {
    stickStrength: 0.8,
    activeMembers: 8,
    jointEfficiency: 0.55,
    safetyFactor: 2,
    explanation: "彩色冰棒棍的預設值是示範用保守推估：材料較薄，節點也可能滑動，所以效率先用中低值。可用實測重量替換。"
  },
  chopstick: {
    stickStrength: 1.4,
    activeMembers: 8,
    jointEfficiency: 0.42,
    safetyFactor: 2.2,
    explanation: "竹筷單支較硬，所以單支承重先估高一些；但圓形接觸面容易滾動，節點效率先估低一些。"
  },
  kit: {
    stickStrength: 1.2,
    activeMembers: 10,
    jointEfficiency: 0.78,
    safetyFactor: 2,
    explanation: "教具包尺寸一致且有固定件，節點較不會滑動，因此有效承重支數和節點效率先估得較高。"
  }
};

const sectionLabel = document.querySelector("#section-label");
const sectionTitle = document.querySelector("#section-title");
const sectionPoints = document.querySelector("#section-points");
const sectionNote = document.querySelector("#section-note");
const tabs = [...document.querySelectorAll(".tab")];
const mediaChoices = [...document.querySelectorAll(".media-choice")];
const mainPhoto = document.querySelector("#mainPhoto");
const mainVideo = document.querySelector("#mainVideo");
const videoSource = mainVideo.querySelector("source");
const mediaCaption = document.querySelector("#mediaCaption");
const photoStrip = document.querySelector("#photoStrip");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const closeLightbox = document.querySelector("#closeLightbox");

const stickStrength = document.querySelector("#stickStrength");
const activeMembers = document.querySelector("#activeMembers");
const jointEfficiency = document.querySelector("#jointEfficiency");
const safetyFactor = document.querySelector("#safetyFactor");
const calculatedLoad = document.querySelector("#calculatedLoad");
const calculatedNewton = document.querySelector("#calculatedNewton");
const calcExplanation = document.querySelector("#calcExplanation");
const presetButtons = [...document.querySelectorAll(".preset")];
const stepButtons = [...document.querySelectorAll(".step-button")];
const stepImage = document.querySelector("#stepImage");
const stepNumber = document.querySelector("#stepNumber");
const stepTitle = document.querySelector("#stepTitle");
const stepBody = document.querySelector("#stepBody");
const stepTip = document.querySelector("#stepTip");

let activePhotoIndex = 0;

function renderSection(index) {
  const section = sections[index];

  sectionLabel.textContent = section.label;
  sectionTitle.textContent = section.title;
  sectionNote.textContent = section.note;
  sectionPoints.replaceChildren(
    ...section.points.map((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      return item;
    })
  );

  tabs.forEach((tab) => {
    tab.classList.toggle("is-active", Number(tab.dataset.section) === index);
  });

  showMedia(section.mediaType, section.mediaIndex);
}

function showMedia(type, index) {
  if (type === "video") {
    const video = videos[index];
    mainPhoto.hidden = true;
    mainVideo.hidden = false;
    mainVideo.pause();
    videoSource.src = video.src;
    mainVideo.load();
    mediaCaption.textContent = video.caption;
  } else {
    const photo = photos[index];
    activePhotoIndex = index;
    mainVideo.pause();
    mainVideo.hidden = true;
    mainPhoto.hidden = false;
    mainPhoto.src = photo.src;
    mainPhoto.alt = photo.caption;
    mediaCaption.textContent = photo.caption;
  }

  mediaChoices.forEach((choice) => {
    choice.classList.toggle(
      "is-active",
      choice.dataset.mediaType === type && Number(choice.dataset.mediaIndex) === index
    );
  });

  [...photoStrip.children].forEach((thumb, thumbIndex) => {
    thumb.classList.toggle("is-active", type === "photo" && thumbIndex === activePhotoIndex);
  });
}

function renderPhotoStrip() {
  photoStrip.replaceChildren(
    ...photos.map((photo, index) => {
      const button = document.createElement("button");
      button.className = "photo-thumb";
      button.type = "button";
      button.title = photo.caption;
      button.innerHTML = `<img src="${photo.src}" alt="${photo.caption}">`;
      button.addEventListener("click", () => showMedia("photo", index));
      button.addEventListener("dblclick", () => openLightbox(index));
      return button;
    })
  );
}

function openLightbox(index) {
  const photo = photos[index];
  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.caption;
  lightbox.hidden = false;
}

function calculateLoad() {
  const strength = Number(stickStrength.value) || 0;
  const members = Number(activeMembers.value) || 0;
  const efficiency = Number(jointEfficiency.value) || 0;
  const factor = Math.max(Number(safetyFactor.value) || 1, 1);
  const load = (strength * members * efficiency) / factor;
  const newtons = load * 9.8;

  calculatedLoad.textContent = `${load.toFixed(2)} kgf`;
  calculatedNewton.textContent = `約 ${newtons.toFixed(1)} N`;
}

function applyPreset(name) {
  const preset = presets[name];
  stickStrength.value = preset.stickStrength;
  activeMembers.value = preset.activeMembers;
  jointEfficiency.value = preset.jointEfficiency;
  safetyFactor.value = preset.safetyFactor;
  calcExplanation.textContent = preset.explanation;
  presetButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.preset === name);
  });
  calculateLoad();
}

function renderBuildStep(index) {
  const step = buildSteps[index];
  stepImage.src = step.image;
  stepImage.alt = step.alt;
  stepNumber.textContent = `Step ${index + 1}`;
  stepTitle.textContent = step.title;
  stepBody.textContent = step.body;
  stepTip.textContent = step.tip;
  stepButtons.forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.step) === index);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => renderSection(Number(tab.dataset.section)));
});

mediaChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    showMedia(choice.dataset.mediaType, Number(choice.dataset.mediaIndex));
  });
});

presetButtons.forEach((button) => {
  button.addEventListener("click", () => applyPreset(button.dataset.preset));
});

stepButtons.forEach((button) => {
  button.addEventListener("click", () => renderBuildStep(Number(button.dataset.step)));
});

[stickStrength, activeMembers, jointEfficiency, safetyFactor].forEach((input) => {
  input.addEventListener("input", calculateLoad);
});

mainPhoto.addEventListener("click", () => openLightbox(activePhotoIndex));

closeLightbox.addEventListener("click", () => {
  lightbox.hidden = true;
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.hidden = true;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    lightbox.hidden = true;
  }
});

renderPhotoStrip();
renderSection(0);
renderBuildStep(0);
applyPreset("popsicle");
