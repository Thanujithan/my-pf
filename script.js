const words = ["AI & Machine Learning", "Software Engineering", "Web Developing", "UI/UX Designing", "Graphic Designing"];
const el = document.getElementById('typed');

let wIndex = 0, charIndex = 0;
let typing = true;

function tick() {
  const word = words[wIndex];
  if (typing) {
    charIndex++;
    el.textContent = word.slice(0, charIndex);
    if (charIndex === word.length) {
      typing = false;
      setTimeout(tick, 1100); // pause on full word
      return;
    }
  } else {
    charIndex--;
    el.textContent = word.slice(0, charIndex);
    if (charIndex === 0) {
      typing = true;
      wIndex = (wIndex + 1) % words.length;
    }
  }
  setTimeout(tick, typing ? 100 : 60);
}

tick();



