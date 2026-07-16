const forms = {
  mushroom: {
    mark: "菌", name: "一朵蘑菇", target: "蘑菇", room: "一朵蘑菇的暗室",
    note: "允许自己长在阴影里", line: "阴影不是缺少光，是另一种生长。",
    reply: "蘑菇收到了。它把这句话放进软软的土里。",
    colors: ["#182018", "#899674", "#a89477"], visual: "mushroom",
  },
  stone: {
    mark: "石", name: "一块石头", target: "石头", room: "一块石头的房间",
    note: "今天不必回应任何事", line: "不说话，也是一种回答。",
    reply: "石头收到了。它不追问，也不催你。",
    colors: ["#111713", "#8d9688", "#b3aa92"], visual: "stone",
  },
  wind: {
    mark: "风", name: "一阵风", target: "风", room: "一阵风经过的山谷",
    note: "经过，但不被留下", line: "经过万物，不必被万物留下。",
    reply: "风收到了。它带着这句话，轻轻往前走。",
    colors: ["#111a1b", "#82999c", "#bdc1b0"], visual: "wind",
  },
  leaf: {
    mark: "叶", name: "一片落叶", target: "落叶", room: "一片落叶的黄昏",
    note: "落下也有落下的方向", line: "落下，不等于失去方向。",
    reply: "落叶收到了。它刚好有一段顺路的旅程。",
    colors: ["#1d1811", "#a0805a", "#c4aa77"], visual: "leaf",
  },
  human: {
    mark: "人", name: "就做一个人", target: "自己", room: "一个人自己的房间",
    note: "完整、矛盾，不必解释", line: "你可以矛盾，也仍然完整。",
    reply: "你收到了。先不用回答，听见就很好。",
    colors: ["#171418", "#977f8f", "#c0aaa3"], visual: "human",
  },
  cloud: {
    mark: "云", name: "一朵云", target: "云", room: "云层之上的房间",
    note: "形状可以随时改变", line: "没有一种形状，需要保持到永远。",
    reply: "云收到了。它让这句话变轻了一点。",
    colors: ["#13191c", "#9aa7aa", "#c8c7b9"], visual: "cloud",
  },
  rain: {
    mark: "雨", name: "一场雨", target: "雨", room: "一场无人躲避的雨",
    note: "让情绪自然落下", line: "雨落下，不是因为天空脆弱。",
    reply: "雨收到了。它替你把句号轻轻放下。",
    colors: ["#10171c", "#718b9a", "#aabac0"], visual: "rain",
  },
  river: {
    mark: "河", name: "一条河", target: "河流", room: "一条缓慢的河流",
    note: "不回头，也不匆忙", line: "慢慢流，也能抵达很远的地方。",
    reply: "河流收到了。它带着这句话慢慢走。",
    colors: ["#0e1919", "#5d8b86", "#a7b9a9"], visual: "river",
  },
  sea: {
    mark: "海", name: "一片海", target: "海", room: "一片没有岸的海",
    note: "允许心里有潮汐", line: "平静和汹涌，都属于同一片海。",
    reply: "海收到了。潮水会替你留一点空白。",
    colors: ["#0c171d", "#4f7e91", "#9eb2bd"], visual: "sea",
  },
  moon: {
    mark: "月", name: "一弯月亮", target: "月亮", room: "月亮背面的静室",
    note: "不必总是圆满", line: "缺一点，也仍然可以发光。",
    reply: "月亮收到了。不圆满的晚上，也很好。",
    colors: ["#101218", "#7d8195", "#c7c1ae"], visual: "moon",
  },
  mountain: {
    mark: "山", name: "一座山", target: "山", room: "一座无名的山",
    note: "不动，也是一种力量", line: "山没有赶路，山也抵达了春天。",
    reply: "山收到了。你可以空着手待一会儿。",
    colors: ["#111713", "#68786c", "#a49e85"], visual: "mountain",
  },
  fog: {
    mark: "雾", name: "一阵雾", target: "雾", room: "雾还没有散去的清晨",
    note: "看不清也可以前行", line: "不必一次看见全部的路。",
    reply: "雾收到了。今天不用看清全部。",
    colors: ["#141918", "#8c9892", "#b9b9ac"], visual: "fog",
  },
  snow: {
    mark: "雪", name: "一场雪", target: "雪", room: "一场安静落下的雪",
    note: "把世界暂时覆盖", line: "安静落下，也能改变一片大地。",
    reply: "雪收到了。它把声音调小了一点。",
    colors: ["#14191c", "#a7b3b8", "#d0cdc0"], visual: "snow",
  },
  fire: {
    mark: "火", name: "一簇火", target: "火", room: "一簇不灼人的火",
    note: "为自己留一点温度", line: "温柔，也可以是一种燃烧。",
    reply: "火收到了。只留一点暖，不留灰。",
    colors: ["#1d1210", "#a5644f", "#d0a078"], visual: "fire",
  },
  moss: {
    mark: "苔", name: "一片苔藓", target: "苔藓", room: "苔藓覆盖的旧墙",
    note: "在无人处悄悄生长", line: "微小的生命，也有自己的季节。",
    reply: "苔藓收到了。很小的心事，也有地方放。",
    colors: ["#111911", "#5f805f", "#9dae82"], visual: "moss",
  },
  flower: {
    mark: "花", name: "一朵花", target: "花", room: "一朵花开放的片刻",
    note: "开放不是为了被看见", line: "花开的时候，没有向谁证明。",
    reply: "花收到了。它没有催你现在就开放。",
    colors: ["#1a1417", "#9a7481", "#c4a6a0"], visual: "flower",
  },
  tree: {
    mark: "树", name: "一棵树", target: "树", room: "一棵树的树荫下",
    note: "向下扎根，向上沉默", line: "有些答案，需要长成，而不是想出。",
    reply: "树收到了。它把这句话放进年轮里。",
    colors: ["#101811", "#617a5e", "#a59172"], visual: "tree",
  },
  sand: {
    mark: "沙", name: "一粒沙", target: "沙", room: "一片缓慢移动的沙丘",
    note: "渺小也拥有重量", line: "一粒沙，不必承担整片荒漠。",
    reply: "沙收到了。今天只拿得动一粒，也很好。",
    colors: ["#1b1711", "#a18a64", "#c4b18d"], visual: "sand",
  },
  star: {
    mark: "星", name: "一颗星", target: "星星", room: "一颗星的遥远夜空",
    note: "远远亮着就好", line: "不必照亮全部，亮一点就够了。",
    reply: "星星收到了。很远，也还亮着。",
    colors: ["#0c1018", "#667397", "#c2b889"], visual: "star",
  },
  bird: {
    mark: "鸟", name: "一只鸟", target: "鸟", room: "一只鸟飞过的天空",
    note: "天空不要求留下痕迹", line: "飞过，就是飞过，不必留下证明。",
    reply: "鸟收到了。它没有回信，只飞了一小圈。",
    colors: ["#11191b", "#789398", "#b8b8a7"], visual: "bird",
  },
  light: {
    mark: "光", name: "一束光", target: "光", room: "一束光停留的窗边",
    note: "照见，不评价", line: "光只是照见，从不追问。",
    reply: "光收到了。它只是照见，没有评价。",
    colors: ["#171711", "#a5a071", "#d0c69e"], visual: "light",
  },
  night: {
    mark: "夜", name: "一片夜色", target: "夜色", room: "一片不需要入睡的夜色",
    note: "黑暗也可以包住你", line: "夜不是空白，是万物暂时闭上眼。",
    reply: "夜色收到了。天亮之前，不必做什么。",
    colors: ["#090d14", "#4f5c78", "#9c9b9b"], visual: "night",
  },
  bamboo: {
    mark: "竹", name: "一竿竹", target: "竹", room: "风穿过的竹林",
    note: "弯下，也不会折断", line: "柔软不是退让，是另一种坚韧。",
    reply: "竹收到了。弯一下，也没关系。",
    colors: ["#101911", "#628064", "#a6ad85"], visual: "bamboo",
  },
  seed: {
    mark: "种", name: "一颗种子", target: "种子", room: "一颗种子内部的黑暗",
    note: "还没发生也有意义", line: "没有发芽，不代表什么都没发生。",
    reply: "种子收到了。还没发芽，也没关系。",
    colors: ["#17130f", "#7e7157", "#afa277"], visual: "seed",
  },
  tide: {
    mark: "潮", name: "一阵潮汐", target: "潮汐", room: "一阵退去又归来的潮汐",
    note: "允许自己反复", line: "回来和离开，都不是失败。",
    reply: "潮汐收到了。回来和离开，都算路程。",
    colors: ["#0c171b", "#547f89", "#9eb8b3"], visual: "tide",
  },
};

const certificateCopy = {
  mushroom: "我去了阴影里的一小片菌落，听潮湿的土壤慢慢呼吸。",
  stone: "我去做了一块不必回答的石头，让时间从身边安静经过。",
  wind: "我跟一阵风穿过山谷，没有留下，也没有被留下。",
  leaf: "我随一片落叶慢慢落下，暂时把方向交给季节。",
  human: "我回到自己身边，做了一会儿不必解释的人。",
  cloud: "我躺进一朵云里，换了几个形状，也没有关系。",
  rain: "我去淋了一场无人躲避的雨，让心事自然落下。",
  river: "我沿着一条缓慢的河走了一程，没有催它，也没有催自己。",
  sea: "我去看心里的潮汐，平静和汹涌都被海接住。",
  moon: "我去了月亮背面，在不圆满的光里坐了一会儿。",
  mountain: "我去一座无名的山上，没有赶路，也抵达了片刻安静。",
  fog: "我走进一阵雾里，没有看清全部，也没有迷路。",
  snow: "我去听一场雪落下，世界的声音因此轻了一点。",
  fire: "我守着一簇不灼人的火，只取了一点温度。",
  moss: "我在旧墙的苔藓旁停了一会儿，看微小的生命悄悄生长。",
  flower: "我去看一朵花开放，它没有向任何人证明。",
  tree: "我坐在一棵树下，把急着想出的答案交给年轮。",
  sand: "我去一片缓慢移动的沙丘，只做了一粒有重量的沙。",
  star: "我去很远的夜空亮了一小会儿，不必照亮全部。",
  bird: "我跟一只鸟飞过天空，没有留下痕迹，也很自由。",
  light: "我在窗边的一束光里坐着，只被照见，没有被评价。",
  night: "我走进一片夜色，让万物和我一起暂时闭上眼。",
  bamboo: "我去听风穿过竹林，弯下一点，也没有折断。",
  seed: "我躲进一颗种子的黑暗里，暂时不必发芽。",
  tide: "我跟着潮汐离开又回来，反复也成了一段路。",
};

const soundProfiles = {
  hush: { label: "安静气流", color: "brown", highpass: 55, lowpass: 520, gain: 0.15, swell: 0.05, depth: 0.035 },
  earth: { label: "岩间风声", color: "brown", highpass: 70, lowpass: 650, gain: 0.17, swell: 0.045, depth: 0.04 },
  wind: { label: "风声", color: "pink", highpass: 130, lowpass: 920, gain: 0.15, swell: 0.1, depth: 0.055 },
  leaf: { label: "叶声", color: "pink", highpass: 260, lowpass: 1350, gain: 0.11, swell: 0.13, depth: 0.035 },
  air: { label: "高空风声", color: "pink", highpass: 180, lowpass: 1050, gain: 0.1, swell: 0.055, depth: 0.03 },
  rain: { label: "雨声", color: "pink", highpass: 380, lowpass: 1900, gain: 0.105, swell: 0.08, depth: 0.02 },
  water: { label: "溪流声", color: "brown", highpass: 90, lowpass: 820, gain: 0.18, swell: 0.14, depth: 0.045 },
  ocean: { label: "海浪声", color: "brown", highpass: 60, lowpass: 720, gain: 0.2, swell: 0.065, depth: 0.075 },
  night: { label: "夜声", color: "brown", highpass: 65, lowpass: 480, gain: 0.12, swell: 0.035, depth: 0.025 },
  snow: { label: "落雪声", color: "pink", highpass: 350, lowpass: 1200, gain: 0.07, swell: 0.045, depth: 0.018 },
  fire: { label: "炉火声", color: "pink", highpass: 180, lowpass: 1100, gain: 0.095, swell: 0.18, depth: 0.025 },
  forest: { label: "林间声", color: "brown", highpass: 90, lowpass: 760, gain: 0.14, swell: 0.055, depth: 0.035 },
  sand: { label: "沙风声", color: "pink", highpass: 170, lowpass: 960, gain: 0.1, swell: 0.075, depth: 0.028 },
};

const soundProfileByForm = {
  mushroom: "forest", stone: "earth", wind: "wind", leaf: "leaf", human: "hush",
  cloud: "air", rain: "rain", river: "water", sea: "ocean", moon: "night",
  mountain: "earth", fog: "air", snow: "snow", fire: "fire", moss: "forest",
  flower: "forest", tree: "forest", sand: "sand", star: "night", bird: "forest",
  light: "air", night: "night", bamboo: "forest", seed: "earth", tide: "ocean",
  custom: "hush",
};

const formOrder = [
  "mushroom", "stone", "wind", "leaf", "human", "cloud", "rain", "river", "sea",
  "moon", "mountain", "fog", "snow", "fire", "moss", "flower", "tree", "sand",
  "star", "bird", "light", "night", "bamboo", "seed", "tide",
];

const feelingForms = {
  still: ["stone", "mountain", "seed", "moss", "tree", "moon"],
  flow: ["wind", "river", "sea", "rain", "tide", "leaf"],
  held: ["night", "fog", "snow", "cloud", "light", "fire"],
  become: ["mushroom", "bird", "flower", "bamboo", "sand", "star", "human"],
};

const interactionFamilies = {
  pulse: ["stone", "mountain", "seed", "human"],
  flow: ["wind", "river", "sea", "rain", "tide"],
  drift: ["leaf", "cloud", "fog", "snow", "sand", "bird"],
  grow: ["mushroom", "moss", "flower", "tree", "bamboo"],
  glow: ["moon", "fire", "star", "light", "night"],
};

const interactionCopy = {
  pulse: "把手放在这里，感受一点重量",
  flow: "轻轻划过，让它从指尖经过",
  drift: "碰一碰，看它慢慢离开原处",
  grow: "轻轻触碰，允许一点生长",
  glow: "碰一碰，为自己留一点光",
};

const listenReplies = {
  pulse: ["它听见了。", "这句话可以先放在这里。"],
  flow: ["它听见了。", "不用急着让一切立刻过去。"],
  drift: ["它听见了。", "这句话暂时不需要找到方向。"],
  grow: ["它听见了。", "还没有答案，也可能正在发生什么。"],
  glow: ["它听见了。", "被看见，就已经够了一点。"],
};

const formQuestions = {
  mushroom: "如果可以躲进阴影里一会儿，你最想放下什么？",
  stone: "如果今天只放下一件事，会是哪一件？",
  wind: "把别人的声音吹远一点，你听见自己说了什么？",
  leaf: "如果不急着找到方向，你想先落在哪里？",
  human: "此刻的你，最希望被允许成为什么样子？",
  cloud: "如果不用保持原来的形状，你想先变轻哪一点？",
  rain: "哪一种情绪，正在等待被允许落下来？",
  river: "如果慢一点也能抵达，你愿意先停在哪一步？",
  sea: "此刻的潮汐，更接近平静，还是汹涌？",
  moon: "不必圆满的话，今天可以缺少哪一部分？",
  mountain: "有什么事，可以暂时不推动它？",
  fog: "不用看清全部的话，下一小步会是什么？",
  snow: "你最想把哪一种声音调小一点？",
  fire: "此刻，你最需要为自己留住哪一点温度？",
  moss: "哪一件很小的心事，也值得被你看见？",
  flower: "如果不为了被看见，你想为自己做什么？",
  tree: "哪一个答案，也许需要慢慢长出来？",
  sand: "今天，你愿意只承担哪一粒沙的重量？",
  star: "不必照亮全部的话，哪里亮一点就够了？",
  bird: "如果不必留下证明，你想往哪里飞一小圈？",
  light: "只照见、不评价时，你看见了什么？",
  night: "今晚，有什么可以先被夜色包住？",
  bamboo: "如果可以弯一下，你想从哪里松开一点？",
  seed: "还不用发芽的话，你想先在黑暗里守住什么？",
  tide: "哪一次回来，也可以不被叫作反复？",
  custom: "以你喜欢的方式存在时，什么可以先不解释？",
};

function interactionFamilyFor(key) {
  return Object.entries(interactionFamilies).find(([, keys]) => keys.includes(key))?.[0] || "drift";
}

const SUPABASE_URL = "https://iewzsdznkkofdrkyxnev.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_CwKoK4wS-CRQwSb5mgZwqQ_X2eomoXq";
const PUBLIC_APP_URL = "https://superen1106-creator.github.io/buzai/";
const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: true, detectSessionInUrl: true, flowType: "implicit" },
});

function createClientId() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
}

const savedCustom = localStorage.getItem("buzai-custom-form");
if (savedCustom) {
  try {
    forms.custom = JSON.parse(savedCustom);
    const customCharacters = [...forms.custom.name];
    forms.custom.mark = customCharacters[customCharacters.length - 1] || "自";
    forms.custom.reply = `${forms.custom.name}收到了。它替你安静地留一会儿。`;
    forms.custom.certificate = `我去了${forms.custom.name}的秘密角落，按自己喜欢的方式安静了一会儿。`;
  } catch { localStorage.removeItem("buzai-custom-form"); }
}

const scenes = [...document.querySelectorAll("[data-scene]")];
const doorScene = document.querySelector('[data-scene="door"]');
const doorTitle = document.querySelector(".door-question");
const formsContainer = document.querySelector("[data-forms]");
const input = document.querySelector("#release-input");
const letGoButton = document.querySelector('[data-action="let-go"]');
const releaseCard = document.querySelector(".release-card");
const dissolveMessage = document.querySelector(".dissolve-message");
const certificateDialog = document.querySelector("[data-certificate-dialog]");
const customDialog = document.querySelector("[data-custom-dialog]");
const customInput = document.querySelector("#custom-form-input");
const confirmCustom = document.querySelector('[data-action="confirm-custom"]');
const lettersDialog = document.querySelector("[data-letters-dialog]");
const deleteDialog = document.querySelector("[data-delete-dialog]");
const restOverlay = document.querySelector("[data-rest-overlay]");
const accountDialog = document.querySelector("[data-account-dialog]");
const accountButton = document.querySelector("[data-action=\"account\"]");
const accountLabel = document.querySelector("[data-account-label]");
const accountStatus = document.querySelector("[data-account-status]");
const accountGuest = document.querySelector("[data-account-guest]");
const accountSent = document.querySelector("[data-account-sent]");
const accountUser = document.querySelector("[data-account-user]");
const loginForm = document.querySelector("[data-login-form]");
const storageNote = document.querySelector("[data-storage-note]");
const returnVisual = document.querySelector("[data-return-visual]");
const momentDialog = document.querySelector("[data-moment-dialog]");
const carryPrompt = document.querySelector("[data-carry-prompt]");
const shareStatus = document.querySelector("[data-share-status]");
const sharedFormKey = new URLSearchParams(window.location.search).get("form");
const visualMarkup = `
  <span class="visual-main"></span>
  <span class="visual-piece visual-piece--1"></span><span class="visual-piece visual-piece--2"></span>
  <span class="visual-piece visual-piece--3"></span><span class="visual-piece visual-piece--4"></span>
  <span class="visual-piece visual-piece--5"></span><span class="visual-piece visual-piece--6"></span>
  <span class="visual-piece visual-piece--7"></span><span class="visual-piece visual-piece--8"></span>
  <span class="visual-mark"></span>
  <span class="memory-traces" aria-hidden="true">
    <i></i><i></i><i></i><i></i><i></i><i></i>
  </span>`;

const hadSavedForm = localStorage.getItem("buzai-form");
let selectedForm = hadSavedForm || "stone";
if (!forms[selectedForm]) selectedForm = "stone";
if (sharedFormKey && forms[sharedFormKey]) selectedForm = sharedFormKey;
let hasVisited = localStorage.getItem("buzai-has-visited") === "true" || Boolean(hadSavedForm);
let currentFeeling = "still";
let replyMode = localStorage.getItem("buzai-reply-mode") || "listen";
let enteredAt = new Date();
let audioContext;
let soundNodes = [];
let soundMaster;
let pendingDeleteId = null;
let doorOpening = false;
let currentUser = null;
let authReady = false;
let authSyncing = false;
let profileSyncTimer = null;

function haptic(pattern = 12) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}

function showScene(name) {
  scenes.forEach((scene) => {
    const active = scene.dataset.scene === name;
    scene.hidden = !active;
    scene.classList.toggle("is-active", active);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function memoryStorageKey(user = currentUser) {
  return user ? `buzai-sanctuary-memory-${user.id}` : "buzai-sanctuary-memory";
}

function emptyMemory() {
  return { totalVisits: 0, forms: {} };
}

function normalizeMemory(value) {
  const memory = value && typeof value === "object" ? value : emptyMemory();
  const formsMemory = {};
  Object.entries(memory.forms || {}).forEach(([key, item]) => {
    formsMemory[key] = {
      visits: Math.max(0, Number(item?.visits) || 0),
      letters: Math.max(0, Number(item?.letters) || 0),
      lastVisit: item?.lastVisit || null,
    };
  });
  return { totalVisits: Math.max(0, Number(memory.totalVisits) || 0), forms: formsMemory };
}

function getMemoryFromKey(key) {
  try { return normalizeMemory(JSON.parse(localStorage.getItem(key) || "{}")); }
  catch { return emptyMemory(); }
}

function getMemory() {
  return getMemoryFromKey(memoryStorageKey());
}

function setMemory(memory, user = currentUser) {
  localStorage.setItem(memoryStorageKey(user), JSON.stringify(normalizeMemory(memory)));
}

function mergeMemories(first, second) {
  const a = normalizeMemory(first);
  const b = normalizeMemory(second);
  const result = emptyMemory();
  result.totalVisits = a.totalVisits + b.totalVisits;
  new Set([...Object.keys(a.forms), ...Object.keys(b.forms)]).forEach((key) => {
    const one = a.forms[key] || {};
    const two = b.forms[key] || {};
    result.forms[key] = {
      visits: (one.visits || 0) + (two.visits || 0),
      letters: (one.letters || 0) + (two.letters || 0),
      lastVisit: [one.lastVisit, two.lastVisit].filter(Boolean).sort().at(-1) || null,
    };
  });
  return result;
}

function selectedMemory(memory = getMemory(), key = selectedForm) {
  return memory.forms[key] || { visits: 0, letters: 0, lastVisit: null };
}

function memoryLevel(memory = getMemory(), key = selectedForm) {
  const item = selectedMemory(memory, key);
  return Math.min(6, Math.max(0, Math.ceil((item.visits + item.letters * 2) / 2)));
}

function memoryCopy(memory = getMemory(), key = selectedForm) {
  const item = selectedMemory(memory, key);
  if (item.letters >= 4) return "有一些话，已经在这里长成了安静的纹理。";
  if (item.letters >= 1) return "你写下的话，在这里留下了一点痕迹。";
  if (item.visits >= 4) return "这个房间，已经认得你回来时的脚步。";
  if (item.visits >= 2) return "这里记得你来过。";
  return "这里还很安静，等你按自己的方式待一会儿。";
}

function updateMemoryPresentation() {
  const level = String(memoryLevel());
  document.querySelectorAll("[data-element-visual], [data-return-visual], [data-rest-visual]").forEach((visual) => {
    if (visual) visual.dataset.memoryLevel = level;
  });
  document.querySelector("[data-memory-whisper]").textContent = memoryCopy();
  document.querySelector("[data-return-memory]").textContent = memoryCopy();
}

function recordVisit(key) {
  const memory = getMemory();
  const item = memory.forms[key] || { visits: 0, letters: 0, lastVisit: null };
  item.visits += 1;
  item.lastVisit = new Date().toISOString();
  memory.forms[key] = item;
  memory.totalVisits += 1;
  setMemory(memory);
  updateMemoryPresentation();
  queueProfileSync();
}

function recordLetterMemory(key) {
  const memory = getMemory();
  const item = memory.forms[key] || { visits: 0, letters: 0, lastVisit: null };
  item.letters += 1;
  memory.forms[key] = item;
  setMemory(memory);
  updateMemoryPresentation();
  queueProfileSync();
}

function createFormCard(key, form) {
  const button = document.createElement("button");
  button.className = "form-card";
  button.type = "button";
  button.dataset.form = key;
  const mark = document.createElement("span");
  mark.className = "form-mark";
  mark.textContent = form.mark;
  const name = document.createElement("span");
  name.className = "form-name";
  name.textContent = form.name;
  const note = document.createElement("span");
  note.className = "form-note";
  note.textContent = form.note;
  button.append(mark, name, note);
  return button;
}

function renderFormChoices() {
  formsContainer.replaceChildren();
  formsContainer.dataset.feeling = currentFeeling;
  const visibleKeys = currentFeeling === "all" ? formOrder : feelingForms[currentFeeling];
  visibleKeys.forEach((key) => formsContainer.append(createFormCard(key, forms[key])));
  if (forms.custom && (currentFeeling === "all" || currentFeeling === "become")) {
    formsContainer.append(createFormCard("custom", forms.custom));
  }
  formsContainer.append(createFormCard("other", {
    mark: "＋", name: "其他", note: "写下只有你知道的存在",
  }));
  document.querySelector("[data-choice-count]").textContent = currentFeeling === "all" ? "全部的存在，都在这里。" : "先看这些。第一眼的喜欢，就很好。";
}

document.querySelector("[data-feeling-filter]").addEventListener("click", (event) => {
  const button = event.target.closest("[data-feeling]");
  if (!button) return;
  currentFeeling = button.dataset.feeling;
  document.querySelectorAll("[data-feeling]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
  renderFormChoices();
  haptic(8);
});

function setVisual(container, form) {
  const modifier = container.dataset.restVisual !== undefined
    ? "element-visual element-visual--rest"
    : container.dataset.returnVisual !== undefined
      ? "element-visual element-visual--return"
      : "element-visual";
  const family = interactionFamilyFor(selectedForm);
  container.className = `${modifier} visual--${form.visual} interaction--${family}`;
  container.dataset.interactionFamily = family;
  container.dataset.memoryLevel = String(memoryLevel());
  container.innerHTML = visualMarkup;
  container.querySelector(".visual-mark").textContent = form.mark;
}

function getSoundProfile() {
  const profileKey = soundProfileByForm[selectedForm] || "hush";
  return soundProfiles[profileKey];
}

function updateSoundButton(active) {
  const button = document.querySelector('[data-action="sound"]');
  if (!button) return;
  const label = getSoundProfile().label;
  button.setAttribute("aria-pressed", String(active));
  button.setAttribute("aria-label", active ? `关闭${label}` : `开启${label}`);
  button.querySelector(".sound-icon").textContent = active ? `${label} · 开` : label;
}

function applyForm(key, { persist = true } = {}) {
  selectedForm = key;
  if (persist) localStorage.setItem("buzai-form", key);
  const form = forms[key];
  document.documentElement.style.setProperty("--bg", form.colors[0]);
  document.documentElement.style.setProperty("--glow", form.colors[1]);
  document.documentElement.style.setProperty("--accent", form.colors[2]);
  document.querySelector("[data-form-title]").textContent = form.room;
  document.querySelector("[data-scene-line]").textContent = form.line;
  document.querySelector("[data-certificate-mark]").textContent = form.mark;
  document.querySelector("[data-certificate-form]").textContent = `化身 · ${form.name}`;
  document.querySelector("[data-certificate-body]").textContent = form.certificate || certificateCopy[key];
  document.querySelector("[data-write-to]").textContent = `写给${form.target}`;
  setVisual(document.querySelector("[data-element-visual]"), form);
  setVisual(returnVisual, form);
  document.querySelector("#return-title").textContent = `你上次是${form.name}。`;
  const family = interactionFamilyFor(key);
  document.querySelector("[data-interaction-hint]").textContent = interactionCopy[family];
  updateMemoryPresentation();
  updateSoundButton(false);
  queueProfileSync();
}

function enterForm(key) {
  haptic(18);
  applyForm(key);
  hasVisited = true;
  localStorage.setItem("buzai-has-visited", "true");
  recordVisit(key);
  enteredAt = new Date();
  setTimeout(() => showScene("sanctuary"), 220);
}

function openDoor() {
  if (doorOpening) return;
  doorOpening = true;
  haptic([10, 80, 10]);
  doorTitle.classList.add("is-leaving");
  setTimeout(() => {
    doorTitle.textContent = "不在";
    doorTitle.classList.remove("is-leaving");
    doorTitle.classList.add("is-returning");
  }, 650);
  setTimeout(() => {
    if (sharedFormKey && forms[sharedFormKey]) enterForm(sharedFormKey);
    else showScene(hasVisited ? "return" : "choose");
  }, 4400);
}

doorScene.addEventListener("click", openDoor);
doorScene.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  openDoor();
});

document.querySelector('[data-action="return-same"]').addEventListener("click", () => enterForm(selectedForm));
document.querySelector('[data-action="return-change"]').addEventListener("click", () => showScene("choose"));

formsContainer.addEventListener("click", (event) => {
  const button = event.target.closest("[data-form]");
  if (!button) return;
  if (button.dataset.form === "other") {
    customInput.value = "";
    confirmCustom.disabled = true;
    customDialog.showModal();
    setTimeout(() => customInput.focus(), 80);
    return;
  }
  enterForm(button.dataset.form);
});

customInput.addEventListener("input", () => { confirmCustom.disabled = !customInput.value.trim(); });
confirmCustom.addEventListener("click", () => {
  const value = customInput.value.trim();
  if (!value) return;
  const characters = [...value];
  const firstCharacter = characters[characters.length - 1] || "自";
  forms.custom = {
    mark: firstCharacter,
    name: value,
    target: value,
    room: `${value}的秘密角落`,
    note: "你的喜欢，自成一处风景",
    line: `今天，就以${value}的方式存在。`,
    reply: `${value}收到了。它替你安静地留一会儿。`,
    certificate: `我去了${value}的秘密角落，按自己喜欢的方式安静了一会儿。`,
    colors: ["#141519", "#837e98", "#b6aa9e"],
    visual: "other",
  };
  localStorage.setItem("buzai-custom-form", JSON.stringify(forms.custom));
  renderFormChoices();
  customDialog.close();
  enterForm("custom");
  queueProfileSync();
});
document.querySelector('[data-action="close-custom"]').addEventListener("click", () => customDialog.close());

document.querySelector('[data-action="rechoose"]').addEventListener("click", () => {
  stopSound();
  showScene("choose");
});
document.querySelector('[data-action="release"]').addEventListener("click", () => {
  showScene("release");
  setTimeout(() => input.focus(), 700);
});
document.querySelector('[data-action="cancel-release"]').addEventListener("click", () => showScene("sanctuary"));
document.querySelector('[data-action="return"]').addEventListener("click", () => {
  input.value = "";
  letGoButton.disabled = true;
  releaseCard.hidden = false;
  releaseCard.classList.remove("is-dissolving");
  dissolveMessage.hidden = true;
  showScene("sanctuary");
});

input.addEventListener("input", () => { letGoButton.disabled = !input.value.trim(); });

function setReplyMode(mode) {
  replyMode = mode === "reflect" ? "reflect" : "listen";
  localStorage.setItem("buzai-reply-mode", replyMode);
  document.querySelectorAll("[data-reply-mode]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.replyMode === replyMode));
  });
}

document.querySelector("[data-reply-modes]").addEventListener("click", (event) => {
  const button = event.target.closest("[data-reply-mode]");
  if (!button) return;
  setReplyMode(button.dataset.replyMode);
  haptic(8);
});

function lettersStorageKey(user = currentUser) {
  return user ? `buzai-letters-user-${user.id}` : "buzai-letters";
}

function inferFormKey(letter) {
  if (letter.formKey && forms[letter.formKey]) return letter.formKey;
  const match = Object.entries(forms).find(([, form]) => form.name === letter.formName);
  return match?.[0] || "custom";
}

function normalizeLetter(letter) {
  const clientId = String(letter.clientId || letter.id || createClientId());
  return {
    id: clientId,
    clientId,
    cloudId: letter.cloudId || null,
    text: String(letter.text || ""),
    createdAt: letter.createdAt || new Date().toISOString(),
    formKey: inferFormKey(letter),
    formName: letter.formName || "此刻的自己",
    target: letter.target || "自己",
    mark: letter.mark || "自",
    visual: letter.visual || "other",
  };
}

function getLettersFromKey(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]").map(normalizeLetter).filter((letter) => letter.text);
  } catch { return []; }
}

function getLetters() {
  return getLettersFromKey(lettersStorageKey());
}

function setLetters(letters, user = currentUser) {
  localStorage.setItem(lettersStorageKey(user), JSON.stringify(letters.map(normalizeLetter)));
}

function saveLetter(text) {
  const form = forms[selectedForm];
  const letter = normalizeLetter({
    id: createClientId(), text, createdAt: new Date().toISOString(), formKey: selectedForm,
    formName: form.name, target: form.target, mark: form.mark, visual: form.visual,
  });
  const letters = getLetters();
  letters.push(letter);
  setLetters(letters);
  recordLetterMemory(selectedForm);
  if (currentUser) void syncLetterToCloud(letter);
  return letter;
}

function gentleQuestion(text) {
  if (/来不及|迟到|时间|赶不上|太晚/.test(text)) return "如果今天只放下一件事，会是哪一件？";
  if (/累|疲惫|撑不住|没力气|辛苦/.test(text)) return "此刻，你最希望被允许停下哪一部分？";
  if (/爱自己|喜欢自己|讨厌自己|不够好|自卑/.test(text)) return "如果不急着改变，你愿意先看见哪一部分自己？";
  if (/害怕|担心|焦虑|不安|恐惧/.test(text)) return "这份担心，正在努力替你守住什么？";
  if (/不知道|迷茫|选择|决定|方向/.test(text)) return "现在不用决定的话，你想先靠近哪一点？";
  if (/别人|他们|关系|吵架|离开|孤独/.test(text)) return "把别人的声音放远一点，你自己的声音说了什么？";
  return formQuestions[selectedForm] || formQuestions.custom;
}

function generateReply(text) {
  const form = forms[selectedForm];
  const family = interactionFamilyFor(selectedForm);
  const first = `${form.target}听见了。`;
  if (replyMode === "reflect") return [first, gentleQuestion(text)];
  return [first, listenReplies[family]?.[1] || "这句话可以先放在这里。"];
}

function renderReply(sentences) {
  const reply = dissolveMessage.querySelector("[data-dissolve-copy]");
  reply.replaceChildren();
  const lines = Array.isArray(sentences) ? sentences : String(sentences).split("。").filter(Boolean).slice(0, 2);
  lines.forEach((sentence) => {
    const line = document.createElement("span");
    line.textContent = /[。？！]$/.test(sentence) ? sentence : `${sentence}。`;
    reply.append(line);
  });
}

letGoButton.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;
  saveLetter(text);
  haptic([12, 60, 18, 60, 25]);
  releaseCard.classList.add("is-dissolving");
  setTimeout(() => {
    releaseCard.hidden = true;
    renderReply(generateReply(text));
    carryPrompt.hidden = Boolean(currentUser) || getLetters().length < 2;
    dissolveMessage.hidden = false;
  }, 2200);
});

function renderLetters() {
  const list = document.querySelector("[data-letters-list]");
  const letters = getLetters().reverse();
  list.replaceChildren();
  if (!letters.length) {
    const empty = document.createElement("p");
    empty.className = "letters-empty";
    empty.textContent = "这里还没有来信。等你想说话的时候，再回来。";
    list.append(empty);
    return;
  }
  letters.forEach((letter) => {
    const article = document.createElement("article");
    article.className = "letter-card";
    const meta = document.createElement("div");
    meta.className = "letter-meta";
    const form = document.createElement("span");
    form.textContent = `${letter.mark} · 写给${letter.target}`;
    const time = document.createElement("time");
    time.dateTime = letter.createdAt;
    time.textContent = new Intl.DateTimeFormat("zh-CN", {
      year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit",
    }).format(new Date(letter.createdAt));
    meta.append(form, time);
    const text = document.createElement("p");
    text.textContent = letter.text;
    const actions = document.createElement("div");
    actions.className = "letter-actions";
    const remove = document.createElement("button");
    remove.className = "letter-delete";
    remove.type = "button";
    remove.dataset.deleteLetter = String(letter.id);
    remove.textContent = "删除";
    remove.setAttribute("aria-label", `删除写给${letter.target}的来信`);
    actions.append(remove);
    article.append(meta, text, actions);
    list.append(article);
  });
}

function openLetters() {
  renderLetters();
  lettersDialog.showModal();
  if (currentUser) void refreshLettersFromCloud();
}

document.querySelector('[data-action="letters"]').addEventListener("click", openLetters);
document.querySelector('[data-action="close-letters"]').addEventListener("click", () => lettersDialog.close());
document.querySelector('[data-action="letters-from-certificate"]').addEventListener("click", () => {
  certificateDialog.close();
  setTimeout(openLetters, 80);
});
document.querySelector("[data-letters-list]").addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-letter]");
  if (!button) return;
  pendingDeleteId = button.dataset.deleteLetter;
  lettersDialog.close();
  setTimeout(() => deleteDialog.showModal(), 80);
});
document.querySelector('[data-action="cancel-delete"]').addEventListener("click", () => {
  pendingDeleteId = null;
  deleteDialog.close();
  setTimeout(openLetters, 80);
});
document.querySelector('[data-action="confirm-delete"]').addEventListener("click", () => {
  if (pendingDeleteId === null) return;
  const letters = getLetters();
  const deletedLetter = letters.find((letter) => letter.id === pendingDeleteId);
  const remaining = letters.filter((letter) => letter.id !== pendingDeleteId);
  setLetters(remaining);
  if (currentUser && deletedLetter) void syncLetterToCloud(deletedLetter, new Date().toISOString());
  pendingDeleteId = null;
  deleteDialog.close();
  haptic([12, 70, 18]);
  setTimeout(openLetters, 80);
});

function updateCertificate() {
  const now = new Date();
  const date = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit",
  }).format(now);
  const minutes = Math.max(1, Math.round((now - enteredAt) / 60000));
  document.querySelector("[data-certificate-time]").textContent = `${date} · 离开了 ${minutes} 分钟`;
}

document.querySelector('[data-action="certificate"]').addEventListener("click", () => {
  updateCertificate();
  shareStatus.textContent = "分享不会带走你写下的私密文字。";
  certificateDialog.showModal();
});
document.querySelector('[data-action="close-certificate"]').addEventListener("click", () => certificateDialog.close());
document.querySelector('[data-action="share"]').addEventListener("click", async () => {
  const form = forms[selectedForm];
  const url = `${PUBLIC_APP_URL}?form=${encodeURIComponent(selectedForm)}&from=certificate`;
  const text = `刚才，我去做了一会儿${form.target}。你也可以在这里待一会儿。`;
  try {
    if (navigator.share) {
      await navigator.share({ title: "不在 · 口袋里的避难所", text, url });
      shareStatus.textContent = "已经把入口轻轻递出去了。";
    } else {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      shareStatus.textContent = "链接已复制。分享里没有你的私密文字。";
    }
  } catch (error) {
    if (error?.name !== "AbortError") shareStatus.textContent = "暂时没能分享，可以先保存这张证明。";
  }
});
certificateDialog.addEventListener("click", (event) => { if (event.target === certificateDialog) certificateDialog.close(); });
customDialog.addEventListener("click", (event) => { if (event.target === customDialog) customDialog.close(); });
lettersDialog.addEventListener("click", (event) => { if (event.target === lettersDialog) lettersDialog.close(); });
deleteDialog.addEventListener("click", (event) => {
  if (event.target !== deleteDialog) return;
  pendingDeleteId = null;
  deleteDialog.close();
  setTimeout(openLetters, 80);
});
deleteDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  pendingDeleteId = null;
  deleteDialog.close();
  setTimeout(openLetters, 80);
});

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const chars = [...text];
  let line = "";
  let row = 0;
  chars.forEach((char, index) => {
    const test = line + char;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y + row * lineHeight);
      line = char;
      row += 1;
    } else line = test;
    if (index === chars.length - 1) ctx.fillText(line, x, y + row * lineHeight);
  });
}

document.querySelector('[data-action="download"]').addEventListener("click", () => {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 1600;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 1200, 1600);
  gradient.addColorStop(0, "#e2dfd1");
  gradient.addColorStop(1, "#b8b7a6");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(39,42,36,.28)";
  ctx.lineWidth = 2;
  ctx.strokeRect(35, 35, 1130, 1530);
  ctx.fillStyle = "#272a24";
  ctx.font = "24px monospace";
  ctx.fillText("NOT PRESENT · 不在场证明", 110, 150);
  ctx.beginPath();
  ctx.arc(190, 430, 78, 0, Math.PI * 2);
  ctx.stroke();
  ctx.font = "44px 'Noto Serif SC', serif";
  ctx.textAlign = "center";
  ctx.fillText(forms[selectedForm].mark, 190, 447);
  ctx.textAlign = "left";
  ctx.font = "74px 'Noto Serif SC', serif";
  ctx.fillText("刚才，我不在。", 110, 650);
  ctx.fillStyle = "rgba(39,42,36,.72)";
  ctx.font = "34px 'Noto Serif SC', serif";
  const certificateText = forms[selectedForm].certificate || certificateCopy[selectedForm];
  wrapCanvasText(ctx, certificateText, 110, 755, 850, 64);
  ctx.strokeStyle = "rgba(39,42,36,.24)";
  ctx.beginPath();
  ctx.moveTo(110, 1180);
  ctx.lineTo(1090, 1180);
  ctx.stroke();
  ctx.fillStyle = "#272a24";
  ctx.font = "22px monospace";
  const meta = document.querySelector("[data-certificate-time]").textContent;
  ctx.fillText(meta, 110, 1235);
  ctx.fillText(`化身 · ${forms[selectedForm].name}`, 110, 1280);
  ctx.textAlign = "right";
  ctx.fillText("不在 · BUZAI", 1090, 1460);
  const link = document.createElement("a");
  link.download = `不在场证明-${Date.now()}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  haptic(18);
});

const restCopies = {
  breath: "先不去任何地方",
  sleep: "今天到这里就够了",
  after: "把外面的声音放远",
  home: "这里还在",
};

document.querySelector('[data-action="rest"]').addEventListener("click", () => momentDialog.showModal());
document.querySelector('[data-action="close-moment"]').addEventListener("click", () => momentDialog.close());
momentDialog.addEventListener("click", (event) => { if (event.target === momentDialog) momentDialog.close(); });
document.querySelector(".moment-options").addEventListener("click", (event) => {
  const button = event.target.closest("[data-moment]");
  if (!button) return;
  setVisual(document.querySelector("[data-rest-visual]"), forms[selectedForm]);
  updateMemoryPresentation();
  document.querySelector("[data-rest-copy]").textContent = restCopies[button.dataset.moment] || "允许自己不在";
  momentDialog.close();
  restOverlay.hidden = false;
  haptic(10);
});

function endRest() {
  restOverlay.hidden = true;
  haptic([10, 100, 10]);
}
document.querySelector('[data-action="end-rest"]').addEventListener("click", endRest);

function createSound() {
  const profile = getSoundProfile();
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  soundMaster = audioContext.createGain();
  soundMaster.gain.setValueAtTime(0, audioContext.currentTime);
  soundMaster.gain.linearRampToValueAtTime(0.55, audioContext.currentTime + 1.2);
  soundMaster.connect(audioContext.destination);

  const noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 4, audioContext.sampleRate);
  const noiseData = noiseBuffer.getChannelData(0);
  let coloredSample = 0;
  for (let index = 0; index < noiseData.length; index += 1) {
    const whiteSample = Math.random() * 2 - 1;
    if (profile.color === "brown") {
      coloredSample = (coloredSample + 0.022 * whiteSample) / 1.022;
      noiseData[index] = Math.max(-1, Math.min(1, coloredSample * 3.4));
    } else {
      coloredSample = coloredSample * 0.985 + whiteSample * 0.015;
      noiseData[index] = Math.max(-1, Math.min(1, coloredSample * 2.2 + whiteSample * 0.035));
    }
  }
  const noise = audioContext.createBufferSource();
  const highpass = audioContext.createBiquadFilter();
  const lowpass = audioContext.createBiquadFilter();
  const noiseGain = audioContext.createGain();
  noise.buffer = noiseBuffer;
  noise.loop = true;
  highpass.type = "highpass";
  highpass.frequency.value = profile.highpass;
  lowpass.type = "lowpass";
  lowpass.frequency.value = profile.lowpass;
  lowpass.Q.value = 0.25;
  noiseGain.gain.value = profile.gain;
  noise.connect(highpass).connect(lowpass).connect(noiseGain).connect(soundMaster);
  noise.start();

  const lfo = audioContext.createOscillator();
  const lfoGain = audioContext.createGain();
  lfo.frequency.value = profile.swell;
  lfoGain.gain.value = profile.depth;
  lfo.connect(lfoGain).connect(noiseGain.gain);
  lfo.start();
  soundNodes.push(noise, lfo, highpass, lowpass, noiseGain, soundMaster);
}

function stopSound() {
  soundNodes.forEach((node) => {
    try { node.stop?.(); } catch {}
    try { node.disconnect?.(); } catch {}
  });
  soundNodes = [];
  if (audioContext && audioContext.state !== "closed") audioContext.close();
  audioContext = undefined;
  soundMaster = undefined;
  updateSoundButton(false);
}

document.querySelector('[data-action="sound"]').addEventListener("click", (event) => {
  const button = event.currentTarget;
  const active = button.getAttribute("aria-pressed") === "true";
  if (active) {
    stopSound();
    return;
  }
  createSound();
  audioContext.resume();
  updateSoundButton(true);
});

function applyTilt(x, y) {
  const weather = document.querySelector(".weather");
  weather?.style.setProperty("--tilt-x", `${x}px`);
  weather?.style.setProperty("--tilt-y", `${y}px`);
}

window.addEventListener("pointermove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 18;
  const y = (event.clientY / window.innerHeight - 0.5) * 18;
  applyTilt(x, y);
});
window.addEventListener("deviceorientation", (event) => {
  applyTilt(Math.max(-18, Math.min(18, event.gamma || 0)), Math.max(-18, Math.min(18, event.beta || 0)));
});

function visualFromEvent(event) {
  return event.target.closest?.("[data-element-visual], [data-rest-visual], [data-return-visual]");
}

document.addEventListener("pointerdown", (event) => {
  const visual = visualFromEvent(event);
  if (!visual) return;
  const bounds = visual.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  visual.style.setProperty("--touch-x", `${x}px`);
  visual.style.setProperty("--touch-y", `${y}px`);
  visual.classList.add("is-interacting");
  const echo = document.createElement("span");
  echo.className = "touch-echo";
  echo.style.left = `${x}px`;
  echo.style.top = `${y}px`;
  visual.append(echo);
  setTimeout(() => echo.remove(), 1400);
  haptic(visual.dataset.interactionFamily === "pulse" ? [10, 70, 10] : 10);
});

document.addEventListener("pointermove", (event) => {
  if (!event.buttons) return;
  const visual = visualFromEvent(event);
  if (!visual) return;
  const bounds = visual.getBoundingClientRect();
  visual.style.setProperty("--touch-x", `${event.clientX - bounds.left}px`);
  visual.style.setProperty("--touch-y", `${event.clientY - bounds.top}px`);
});

document.addEventListener("pointerup", (event) => {
  const visual = visualFromEvent(event);
  if (!visual) return;
  setTimeout(() => visual.classList.remove("is-interacting"), 500);
});

function setAccountMode(mode, message = "") {
  accountGuest.hidden = mode !== "guest";
  accountSent.hidden = mode !== "sent";
  accountUser.hidden = mode !== "user";
  accountStatus.textContent = message;
  if (mode === "user" && currentUser) {
    document.querySelector("[data-account-email]").textContent = currentUser.email || "已登录";
  }
}

function setSyncState(state, message = "") {
  accountButton.classList.toggle("is-online", state === "online");
  accountButton.classList.toggle("is-syncing", state === "syncing");
  accountButton.classList.toggle("has-error", state === "error");
  if (!currentUser) {
    accountLabel.textContent = "游客 · 登录";
    storageNote.textContent = "只保存在这台设备里";
    return;
  }
  accountLabel.textContent = state === "syncing" ? "云端 · 同步中" : state === "error" ? "云端 · 待同步" : "云端 · 已同步";
  storageNote.textContent = state === "error" ? "暂存在这台设备里" : "已与云端同步";
  document.querySelector("[data-sync-message]").textContent = message || (state === "error" ? "这一次没有连上云端，来信仍在这台设备里。" : "来信已经安静地同步。 ");
  if (accountDialog.open) accountStatus.textContent = message;
}

function profilePayload(user = currentUser) {
  return {
    user_id: user.id,
    selected_form: selectedForm,
    custom_form: forms.custom || null,
    sanctuary_state: getMemory(),
  };
}

function queueProfileSync() {
  if (!authReady || !currentUser || authSyncing || !supabaseClient) return;
  clearTimeout(profileSyncTimer);
  profileSyncTimer = setTimeout(() => { void syncProfile(); }, 500);
}

async function syncProfile() {
  if (!currentUser || !supabaseClient) return;
  const user = currentUser;
  const { error } = await supabaseClient.from("profiles").upsert(profilePayload(user), { onConflict: "user_id" });
  if (currentUser?.id !== user.id) return;
  setSyncState(error ? "error" : "online", error ? "化身暂时没有同步，但仍保存在这里。" : "化身和来信已经同步。 ");
}

function cloudLetterPayload(letter, user, deletedAt = null) {
  return {
    user_id: user.id,
    client_id: letter.clientId,
    body: letter.text,
    form_key: letter.formKey,
    form_name: letter.formName,
    target: letter.target,
    mark: letter.mark,
    visual: letter.visual,
    created_at: letter.createdAt,
    deleted_at: deletedAt,
  };
}

function letterFromCloud(row) {
  return normalizeLetter({
    id: row.client_id,
    clientId: row.client_id,
    cloudId: row.id,
    text: row.body,
    createdAt: row.created_at,
    formKey: row.form_key,
    formName: row.form_name,
    target: row.target,
    mark: row.mark,
    visual: row.visual,
  });
}

async function syncLetterToCloud(letter, deletedAt = null) {
  if (!currentUser || !supabaseClient) return;
  const user = currentUser;
  setSyncState("syncing", "正在把这封来信放好……");
  const { data, error } = await supabaseClient
    .from("letters")
    .upsert(cloudLetterPayload(letter, user, deletedAt), { onConflict: "user_id,client_id" })
    .select("id")
    .maybeSingle();
  if (currentUser?.id !== user.id) return;
  if (!error && data?.id && !deletedAt) {
    const cached = getLettersFromKey(lettersStorageKey(user));
    const item = cached.find((entry) => entry.clientId === letter.clientId);
    if (item) item.cloudId = data.id;
    setLetters(cached, user);
  }
  setSyncState(error ? "error" : "online", error ? "暂时没有连上云端，这封信仍在这里。" : "这封来信已经放好了。 ");
}

function restoreCustomForm(customForm) {
  if (!customForm || typeof customForm !== "object") return;
  const name = String(customForm.name || "自定义的存在");
  forms.custom = {
    ...customForm,
    name,
    target: customForm.target || name,
    mark: customForm.mark || [...name].at(-1) || "自",
    room: customForm.room || `${name}的秘密角落`,
    note: customForm.note || "你的喜欢，自成一处风景",
    line: customForm.line || `今天，就以${name}的方式存在。`,
    reply: customForm.reply || `${name}收到了。它替你安静地留一会儿。`,
    certificate: customForm.certificate || `我去了${name}的秘密角落，按自己喜欢的方式安静了一会儿。`,
    colors: customForm.colors || ["#141519", "#837e98", "#b6aa9e"],
    visual: "other",
  };
  localStorage.setItem("buzai-custom-form", JSON.stringify(forms.custom));
  renderFormChoices();
}

async function fetchCloudLetters(user = currentUser) {
  if (!user || !supabaseClient) return null;
  const { data, error } = await supabaseClient
    .from("letters")
    .select("id, client_id, body, form_key, form_name, target, mark, visual, created_at, deleted_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: true });
  if (error) throw error;
  return data || [];
}

async function refreshLettersFromCloud() {
  if (!currentUser) return;
  const user = currentUser;
  try {
    const rows = await fetchCloudLetters(user);
    if (currentUser?.id !== user.id) return;
    setLetters(rows.filter((row) => !row.deleted_at).map(letterFromCloud), user);
    if (lettersDialog.open) renderLetters();
    setSyncState("online", "已经看见最新的来信。 ");
  } catch {
    if (currentUser?.id === user.id) setSyncState("error", "暂时没有连上云端，先为你保存在这里。 ");
  }
}

async function syncAfterLogin(user) {
  authSyncing = true;
  setSyncState("syncing", "正在把这台设备上的来信带到云端……");
  const guestLetters = getLettersFromKey("buzai-letters");
  const guestMemory = getMemoryFromKey("buzai-sanctuary-memory");
  try {
    const [{ data: profile, error: profileError }, existingRows] = await Promise.all([
      supabaseClient.from("profiles").select("selected_form, custom_form, sanctuary_state").eq("user_id", user.id).maybeSingle(),
      fetchCloudLetters(user),
    ]);
    if (profileError) throw profileError;

    const existingIds = new Set(existingRows.map((row) => row.client_id));
    const lettersToUpload = guestLetters.filter((letter) => !existingIds.has(letter.clientId));
    if (lettersToUpload.length) {
      const { error } = await supabaseClient
        .from("letters")
        .upsert(lettersToUpload.map((letter) => cloudLetterPayload(letter, user)), { onConflict: "user_id,client_id" });
      if (error) throw error;
    }

    if (profile) {
      setMemory(mergeMemories(profile.sanctuary_state, guestMemory), user);
      if (profile.custom_form) restoreCustomForm(profile.custom_form);
      if (forms[profile.selected_form]) applyForm(profile.selected_form);
      const { error } = await supabaseClient.from("profiles").upsert(profilePayload(user), { onConflict: "user_id" });
      if (error) throw error;
    } else {
      setMemory(guestMemory, user);
      const { error } = await supabaseClient.from("profiles").upsert(profilePayload(user), { onConflict: "user_id" });
      if (error) throw error;
    }

    const latestRows = await fetchCloudLetters(user);
    if (currentUser?.id !== user.id) return;
    setLetters(latestRows.filter((row) => !row.deleted_at).map(letterFromCloud), user);
    localStorage.setItem("buzai-letters", "[]");
    localStorage.setItem("buzai-sanctuary-memory", JSON.stringify(emptyMemory()));
    updateMemoryPresentation();
    setSyncState("online", guestLetters.length ? "这台设备上的来信，已经一起带过来了。" : "化身和来信已经同步。 ");
  } catch {
    if (!getLettersFromKey(lettersStorageKey(user)).length && guestLetters.length) setLetters(guestLetters, user);
    if (currentUser?.id === user.id) setSyncState("error", "暂时没有连上云端，来信仍在这台设备里。 ");
  } finally {
    authSyncing = false;
  }
}

let lastSyncedUserId = null;

async function handleSession(session) {
  const nextUser = session?.user || null;
  currentUser = nextUser;
  if (!nextUser) {
    lastSyncedUserId = null;
    setAccountMode("guest");
    setSyncState("guest");
    updateMemoryPresentation();
    return;
  }
  setAccountMode("user");
  setSyncState("syncing", "正在确认云端的来信……");
  if (lastSyncedUserId !== nextUser.id) {
    lastSyncedUserId = nextUser.id;
    await syncAfterLogin(nextUser);
  } else {
    setSyncState("online", "化身和来信已经同步。 ");
  }
}

function openAccountDialog() {
  setAccountMode(currentUser ? "user" : "guest");
  accountDialog.showModal();
}

accountButton.addEventListener("click", openAccountDialog);
document.querySelector('[data-action="carry-letters"]').addEventListener("click", openAccountDialog);
document.querySelector('[data-action="close-account"]').addEventListener("click", () => accountDialog.close());
document.querySelector('[data-action="change-email"]').addEventListener("click", () => setAccountMode("guest"));
document.querySelector('[data-action="sign-out"]').addEventListener("click", async () => {
  accountStatus.textContent = "正在轻轻关上云端……";
  const { error } = await supabaseClient.auth.signOut();
  if (error) {
    accountStatus.textContent = "暂时没能退出，请再试一次。";
    return;
  }
  accountDialog.close();
});
accountDialog.addEventListener("click", (event) => { if (event.target === accountDialog) accountDialog.close(); });

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!supabaseClient) {
    accountStatus.textContent = "云端暂时没有醒来，游客模式仍然可以使用。";
    return;
  }
  const submit = loginForm.querySelector('button[type="submit"]');
  const email = new FormData(loginForm).get("email")?.toString().trim();
  if (!email) return;
  submit.disabled = true;
  accountStatus.textContent = "正在寄出登录链接……";
  const { error } = await supabaseClient.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: "https://superen1106-creator.github.io/buzai/", shouldCreateUser: true },
  });
  submit.disabled = false;
  if (error) {
    accountStatus.textContent = error.message.includes("rate") ? "邮件寄得有点频繁，稍后再试一次。" : "这次没有寄出去，请检查邮箱后再试一次。";
    return;
  }
  setAccountMode("sent");
});

async function initializeAuth() {
  if (!supabaseClient) {
    authReady = true;
    setAccountMode("guest", "云端暂时没有醒来，游客模式仍然可以使用。 ");
    return;
  }
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const queryParams = new URLSearchParams(window.location.search);
  const authError = hashParams.get("error_description") || queryParams.get("error_description");
  const { data, error } = await supabaseClient.auth.getSession();
  authReady = true;
  await handleSession(data.session);
  if (!data.session && (authError || error)) {
    setAccountMode("guest", "这条登录链接没有生效。请重新寄一封，并用刚收到的最新链接回来。 ");
    accountDialog.showModal();
  }
  supabaseClient.auth.onAuthStateChange((_event, session) => {
    setTimeout(() => { void handleSession(session); }, 0);
  });
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && currentUser) void refreshLettersFromCloud();
});

if (sharedFormKey && forms[sharedFormKey]) {
  document.querySelector("[data-door-eyebrow]").textContent = "有人从这里安静地经过";
  document.querySelector("[data-door-whisper]").textContent = `有人刚刚去做了一会儿${forms[sharedFormKey].target}。你也可以进去待一会儿。`;
}

renderFormChoices();
setReplyMode(replyMode);
applyForm(selectedForm, { persist: false });
void initializeAuth();

if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", () => { void navigator.serviceWorker.register("service-worker.js?v=11"); });
}
