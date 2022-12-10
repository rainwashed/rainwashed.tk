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
