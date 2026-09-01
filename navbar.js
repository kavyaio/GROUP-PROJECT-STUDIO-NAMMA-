let navbar = document.createElement("div");
navbar.setAttribute("id", "navbar");

let navLeft = document.createElement("div");
navLeft.className = "nav-left";

let navRight = document.createElement("div");
navRight.className = "nav-right";

let li1 = document.createElement("p");
li1.innerText = "STUDIO NAMMA";
li1.className = "nav-item logo";
li1.addEventListener("click", () => {
  window.location.href = "index.html";
});

let li2 = document.createElement("p");
li2.innerText = "DARK MODE";
li2.className = "nav-item dark-toggle";
li2.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    li2.innerText = "LIGHT MODE";
  } else {
    li2.innerText = "DARK MODE";
  }
});

let li3 = document.createElement("p");
li3.innerText = "MENU";
li3.className = "nav-item menu-btn";

let li4 = document.createElement("p");
li4.innerText = "LET'S TALK!";
li4.className = "nav-item talk-btn";

function menuEffect(element) {
  element.addEventListener("mouseenter", () => {
    if (element.innerText === "MENU") {
      element.innerText = "OPEN";
    } else if (element.innerText === "LET'S TALK!") {
      element.innerText = "CONTACT US";
    }
  });

  element.addEventListener("mouseleave", () => {
    if (element.innerText === "OPEN") {
      element.innerText = "MENU";
    } else if (element.innerText === "CONTACT US") {
      element.innerText = "LET'S TALK!";
    }
  });
}

menuEffect(li3);
menuEffect(li4);

let menu = document.createElement("ul");
menu.setAttribute("id", "menu");

li3.addEventListener("click", () => {
  if (li3.innerText === "OPEN" || li3.innerText === "MENU") {
    menu.classList.add("show");
    document.body.classList.add("menu-open");
    li3.innerText = "CLOSE";
  } else if (li3.innerText === "CLOSE") {
    menu.classList.remove("show");
    document.body.classList.remove("menu-open");
    li3.innerText = "OPEN";
  }
});

let validIndex = 0;

function createListElement(value) {
  let li = document.createElement("li");
  if (value !== "") {
    let wrapper = document.createElement("div");
    wrapper.className = "menu-item-wrapper";
    let span = document.createElement("span");
    span.className = "menu-item-text";
    span.innerText = value;
    span.style.transitionDelay = `${0.2 + validIndex * 0.06}s`;
    validIndex++;
    wrapper.append(span);
    li.append(wrapper);

    li.addEventListener("click", () => {
      menu.classList.remove("show");
      document.body.classList.remove("menu-open");
      if (li3.innerText === "CLOSE") {
        li3.innerText = "MENU";
      }
      if (value === "HOME") {
        window.location.href = "index.html";
      } else if (value === "APPROACH") {
        window.location.href = "approach.html";
      } else {
        alert(value);
      }
    });
  }
  menu.append(li);
}

createListElement("HOME");
createListElement("");
createListElement("WORK");
createListElement("STUDIO");
createListElement("SERVICES");
createListElement("PLANS");
createListElement("APPROACH");
createListElement("NEWS");


navLeft.append(li1, li2);
navRight.append(li3, li4);
navbar.append(navLeft, navRight);

let footerBar = document.createElement("div");
footerBar.setAttribute("id", "footer-bar");

let footerLeft = document.createElement("div");
footerLeft.className = "footer-left";
footerLeft.innerText = "WE CRAFT BOLD DESIGN & CLEAN WEBFLOW.";

let footerRight = document.createElement("div");
footerRight.className = "footer-right";

let locSpan = document.createElement("span");
locSpan.innerText = "BARCELONA, SPAIN  ";

let clockSpan = document.createElement("span");
clockSpan.id = "live-clock";

footerRight.append(locSpan, clockSpan);
footerBar.append(footerLeft, footerRight);

document.body.append(navbar, menu, footerBar);

function updateClock() {
  const clockEl = document.getElementById("live-clock");
  if (clockEl) {
    const now = new Date();
    const timeStr = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Madrid',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(now);
    clockEl.innerText = timeStr;
  }
}
setInterval(updateClock, 1000);
updateClock();




