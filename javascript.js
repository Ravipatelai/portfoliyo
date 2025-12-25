const texts = [
  "MERN Stack doveloper",
  "AI & ML learner",
  "Frontend Designer",
  "Python Doveloper",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];
  const display = document.getElementById("text");

  if (!isDeleting) {
    display.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), 1000);
    }
  } else {
    display.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }
}

setInterval(typeEffect, 150);

// curser color random change
document.addEventListener("mousemove", (e) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  dot.style.left = e.pageX + "px";
  dot.style.top = e.pageY + "px";

  // Random color
  dot.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;

  document.body.appendChild(dot);

  // Remove after animation
  setTimeout(() => {
    dot.remove();
  }, 1000);
});

const button = document.getElementById("toggleButton");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    button.textContent = "🌙";
  } else {
    button.textContent = "☀️";
  }
});


// contact pages

document.getElementById("contactForm").addEventListener("submit",function(e){

  e.preventDefault();

  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  let message=document.getElementById("message").value;

  if(!name || !email || !message){
    alert("Please fill all fields");
    return;
  }

  window.location.href =
    "mailto:rkge6331@gmail.com"
    +"?subject=Message from "+encodeURIComponent(name)
    +"&body="
    +encodeURIComponent(
      "Name: "+name+
      "\nEmail: "+email+
      "\n\nMessage:\n"+message
    );

  document.getElementById("successBox").style.display="block";
  document.getElementById("contactForm").reset();

});

