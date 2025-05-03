// Inject keyframes + style
const style = document.createElement("style");
style.textContent = `
  @keyframes letterRain {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(600px);
      opacity: 0;
    }
  }

  .falling-letter {
    display: inline-block;
    position: relative;
    animation-name: letterRain;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
    pointer-events: none;
  }
`;
document.head.appendChild(style);

// Main function: apply to each letter
function makeItRainText() {
  const elements = document.querySelectorAll("p, span, div, a, h1, h2, h3, h4, h5, h6, li");

  elements.forEach(el => {
    const text = el.innerText;
    el.innerHTML = "";

    for (let char of text) {
      const span = document.createElement("span");
      span.innerText = char;

      if (char.trim() !== "") {
        span.classList.add("falling-letter");
        span.style.animationDuration = `${2 + Math.random() * 3}s`;
        span.style.animationDelay = `${Math.random() * 5}s`;
      }

      el.appendChild(span);
    }
  });
}

// Run after slight delay
setTimeout(makeItRainText, 300);
