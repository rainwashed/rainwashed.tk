import anime from "./anime.es.js";

anime({
  targets: ".text_div h1, .text_div p",
  opacity: [0, 1],
  translateY: [-100, 0],
  duration: 500,
  easing: "easeOutBack",
});

anime({
  targets: ".line",
  opacity: [0, 1],
  duration: 300,
  easing: "linear",
  delay: 500,
});

anime({
  targets: ".quick_links",
  opacity: [0, 1],
  duration: 300,
  easing: "linear",
  delay: 600,
});

const svgPaths = document.querySelectorAll(
  "body > main > div.image > svg > g path"
);

console.log(svgPaths);

svgPaths.forEach((elem, index) => {
  // initial delay - (-time per line * (index + 1) + offset)
  elem?.style?.setProperty("--delay", `${500 - (-200 * (index + 1) + 50)}ms`);
});

let x = window.matchMedia("(prefers-color-scheme: dark)");

function handleFavicon(x) {
  if (x.matches) {
    console.log("user likes the dark (like rainwashed)");
    document
      .getElementById("favicon")
      .setAttribute("href", "public/assets/favicon.dark.png");
  } else {
    console.log("user likes the light (like traurige)");
    document
      .getElementById("favicon")
      .setAttribute("href", "public/assets/favicon.light.png");
  }
}

handleFavicon(x);
x.addEventListener("change", handleFavicon);

const animationPathParent = document.querySelector("g.strokes-parent");
const cycleAnimBtn = document.getElementById("cycle_anim_btn");

if (localStorage.getItem("cooler_anim") === null) {
  localStorage.setItem("cooler_anim", "false");
} else {
  if (localStorage.getItem("cooler_anim") === "false")
    animationPathParent.classList.remove("stroke-anim-cooler");
  else animationPathParent.classList.add("stroke-anim-cooler");
}

cycleAnimBtn.addEventListener("click", (e) => {
  e.preventDefault();

  anime({
    targets: "button#cycle_anim_btn i",
    rotate: [0, 360],
    duration: 1250,
    easing: "easeOutElastic",
  });

  if (animationPathParent.classList.contains("stroke-anim-cooler")) {
    localStorage.setItem("cooler_anim", "false");
    animationPathParent.classList.remove("stroke-anim-cooler");
  } else {
    localStorage.setItem("cooler_anim", "true");
    animationPathParent.classList.add("stroke-anim-cooler");
  }
});
