const GUARD_CLASS_DIR = "https://raw.githubusercontent.com/Project-Tempestus/assets/main/classes/"
const GUARD_CLASS_IMG = [
    "chirurgeon.png",
    "engineer.png",
    "grenadier.png",
    "sargeant.png",
    "scout.png",
    "sharpshooter.png",
    "stormtrooper.png",
]
const GUARD_CLASS = [
    "Chirurgon",
    "Inżynier",
    "Grenadier",
    "Sierżant",
    "Zwiadowca",
    "Szturmowiec",
    "Strzelec",
]

const GUARD_REGIMENT_DIR = "https://raw.githubusercontent.com/Project-Tempestus/assets/main/regiments/"
const GUARD_REGIMENT = [
    "Armageddon",
    "Cadia",
    "Krieg",
    "Vostroya"
];
const GUARD_REGIMENT_IMG = [
    "armageddon.png",
    "cadia.png",
    "krieg.png",
    "vostroya.png"
];

window.onload = function() {
    generateStatistics();
  };

function changeImgReverse(img, imgDir, arr) {
    let curr_src = ((img.src).split("/")).at(-1)
    let id_found = arr.findIndex((element) => element == curr_src);
    let id_next_guard = 0
    if (id_found == 0) {
        id_next_guard = arr.length - 1
    }
    else {
        id_next_guard = id_found - 1
    }
    img.src = imgDir + arr[id_next_guard]
    return false;
}

function changeImg(img, imgDir, arr) {
    let curr_src = ((img.src).split("/")).at(-1)
    let id_found = arr.findIndex((element) => element == curr_src);
    let id_next_guard = 0
    if (id_found == (arr.length - 1)) {
        id_next_guard = 0
    }
    else {
        id_next_guard = id_found + 1
    }
    img.src = imgDir + arr[id_next_guard]
    return false;
}

function changeTextReverse(p, arr) {
    var regiment = p.textContent;
    let id_found = arr.findIndex((element) => element == regiment);
    let id_next_guard = 0
    if (id_found == 0) {
        id_next_guard = (arr.length - 1)
    } else {
        id_next_guard = id_found - 1
    }
    p.textContent = arr[id_next_guard]
}

function changeText(p, arr) {
    var regiment = p.textContent;
    let id_found = arr.findIndex((element) => element == regiment);
    let id_next_guard = 0
    if (id_found == (arr.length - 1)) {
        id_next_guard = 0
    } else {
        id_next_guard = id_found + 1
    }
    p.textContent = arr[id_next_guard]
}

function changeClassReverse() {
    var img = document.getElementById("guard_class_img");
    changeImgReverse(img, GUARD_CLASS_DIR, GUARD_CLASS_IMG);

    var p = document.getElementById("guard_class_text")
    changeTextReverse(p, GUARD_CLASS);

    generateStatistics();

    return false;
}

function changeClass() {
    var img = document.getElementById("guard_class_img");
    changeImg(img, GUARD_CLASS_DIR, GUARD_CLASS_IMG);

    var p = document.getElementById("guard_class_text")
    changeText(p, GUARD_CLASS);

    generateStatistics();

    return false;
}
function changeRegiment() {
    var img = document.getElementById("guard_regiment_img");
    changeImg(img, GUARD_REGIMENT_DIR, GUARD_REGIMENT_IMG);

    var p = document.getElementById("guard_regiment_text")
    changeText(p, GUARD_REGIMENT);

    generateStatistics();

    return false;
}
function changeRegimentReverse() {
    var img = document.getElementById("guard_regiment_img");
    changeImgReverse(img, GUARD_REGIMENT_DIR, GUARD_REGIMENT_IMG);

    var p = document.getElementById("guard_regiment_text")
    changeTextReverse(p, GUARD_REGIMENT);

    generateStatistics();

    return false;
}
const BASE_MARKSMANSHIP = 10
const BASE_CQB = 40
const BASE_STRENGTH = 40
const BASE_constitution = 40
const BASE_AGILITY = 40
const BASE_KNOWLEDGE = 30
const BASE_HP = 100

function generateStatistics() {
    // Get regiment & class
    var guard_regiment = document.getElementById("guard_regiment_text").textContent
    var guard_class = document.getElementById("guard_class_text").textContent
    // Regiment bonuses
    // var marksmanship = BASE_MARKSMANSHIP
    let marksmanship_regiment_bonus = 0
    let cqb_regiment_bonus = 0
    let strength_regiment_bonus = 0
    let constitution_regiment_bonus = 0
    let agility_regiment_bonus = 0
    let knowledge_regiment_bonus = 0
    let hp_regiment_bonus = 0

    if (guard_regiment == "Cadia") {
        marksmanship_regiment_bonus = 5
        cqb_regiment_bonus = 5
        constitution_regiment_bonus = 5
        agility_regiment_bonus = 5
    } else if (guard_regiment == "Krieg") {
        cqb_regiment_bonus = 10
        constitution_regiment_bonus = 10
        knowledge_regiment_bonus = 10
    } else if (guard_regiment == "Armageddon") {
        agility_regiment_bonus = 10
        knowledge_regiment_bonus = 30
    } else if (guard_regiment == "Vostroya") {
        constitution_regiment_bonus = 15
        hp_regiment_bonus = 20
    } else {
        marksmanship_regiment_bonus = 0
        cqb_regiment_bonus = 0
        strength_regiment_bonus = 0
        constitution_regiment_bonus = 0
        agility_regiment_bonus = 0
        knowledge_regiment_bonus = 0
        hp_regiment_bonus = 0
    }
    // Class bonus
    let marksmanship_class_bonus = 0
    let cqb_class_bonus = 0
    let strength_class_bonus = 0
    let constitution_class_bonus = 0
    let agility_class_bonus = 0
    let knowledge_class_bonus = 0
    let hp_class_bonus = 0
    if (guard_class == "Chirurgon") {
        constitution_class_bonus = 15
        knowledge_class_bonus = 15
    } else if (guard_class == "Inżynier") {
        strength_class_bonus = 10
        knowledge_class_bonus = 20
    } else if (guard_class == "Grenadier") {
        strength_class_bonus = 15
        constitution_class_bonus = 15
    } else if (guard_class == "Sierżant") {
        constitution_class_bonus = 10
        hp_class_bonus = 10
    } else if (guard_class == "Zwiadowca") {
        agility_class_bonus = 30
        knowledge_class_bonus = 10
    } else if (guard_class == "Strzelec") {
        marksmanship_class_bonus = 10
    } else if (guard_class == "Szturmowiec") {
        cqb_class_bonus = 15
        agility_class_bonus = 15
    } else {
        marksmanship_class_bonus = 0
        cqb_class_bonus = 0
        strength_class_bonus = 0
        constitution_class_bonus = 0
        agility_class_bonus = 0
        knowledge_class_bonus = 0
        hp_class_bonus = 0
    }
    // Final stats
    let marksmanship_value = BASE_MARKSMANSHIP + marksmanship_regiment_bonus + marksmanship_class_bonus
    let cqb_value = BASE_CQB + cqb_regiment_bonus + cqb_class_bonus
    let strength_value = BASE_STRENGTH + strength_regiment_bonus + strength_class_bonus
    let constitution_value = BASE_constitution + constitution_regiment_bonus + constitution_class_bonus
    let agility_value = BASE_AGILITY + agility_regiment_bonus + agility_class_bonus
    let knowledge_value = BASE_KNOWLEDGE + knowledge_regiment_bonus + knowledge_class_bonus
    let hp_value = BASE_HP + hp_regiment_bonus + hp_class_bonus

    // Write back complete stats
    var marksmanship = document.getElementById("marksmanship-value")
    var cqb = document.getElementById("cqb-value")
    var strength = document.getElementById("strength-value")
    var constitution = document.getElementById("constitution-value")
    var agility = document.getElementById("agility-value")
    var knowledge = document.getElementById("knowledge-value")
    var hp = document.getElementById("hp-value")
    marksmanship.innerHTML = marksmanship_value
    cqb.innerHTML = cqb_value
    strength.innerHTML = strength_value
    constitution.innerHTML = constitution_value
    agility.innerHTML = agility_value
    knowledge.innerHTML = knowledge_value
    hp.innerHTML = hp_value

    // Write back partial stats
    var marksmanship_class = document.getElementById("marksmanship-class-value")
    var cqb_class = document.getElementById("cqb-class-value")
    var strength_class = document.getElementById("strength-class-value")
    var constitution_class = document.getElementById("constitution-class-value")
    var agility_class = document.getElementById("agility-class-value")
    var knowledge_class = document.getElementById("knowledge-class-value")
    var hp_class = document.getElementById("hp-class-value")
    marksmanship_class.innerHTML = marksmanship_class_bonus
    cqb_class.innerHTML = cqb_class_bonus
    strength_class.innerHTML = strength_class_bonus
    constitution_class.innerHTML = constitution_class_bonus
    agility_class.innerHTML = agility_class_bonus
    knowledge_class.innerHTML = knowledge_class_bonus
    hp_class.innerHTML = hp_class_bonus

    // Write back partial stats
    var marksmanship_regiment = document.getElementById("marksmanship-regiment-value")
    var cqb_regiment = document.getElementById("cqb-regiment-value")
    var strength_regiment = document.getElementById("strength-regiment-value")
    var constitution_regiment = document.getElementById("constitution-regiment-value")
    var agility_regiment = document.getElementById("agility-regiment-value")
    var knowledge_regiment = document.getElementById("knowledge-regiment-value")
    var hp_regiment = document.getElementById("hp-regiment-value")
    marksmanship_regiment.innerHTML = marksmanship_regiment_bonus
    cqb_regiment.innerHTML = cqb_regiment_bonus
    strength_regiment.innerHTML = strength_regiment_bonus
    constitution_regiment.innerHTML = constitution_regiment_bonus
    agility_regiment.innerHTML = agility_regiment_bonus
    knowledge_regiment.innerHTML = knowledge_regiment_bonus
    hp_regiment.innerHTML = hp_regiment_bonus

    return false;
}