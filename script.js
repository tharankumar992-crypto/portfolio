// ===========================
// DATA
// ===========================
const SKILLS = [
  { name: "SolidWorks",          id: "SW", value: 92 },
  { name: "Mechanical Design",   id: "MD", value: 86 },
  { name: "Assembly Design",     id: "AS", value: 88 },
  { name: "Engineering Drawing", id: "ED", value: 84 },
  { name: "Product Development", id: "PD", value: 78 },
  { name: "Machine Design",      id: "ME", value: 82 },
  { name: "Gear Design",         id: "GR", value: 85 },
  { name: "Sheet Metal Design",  id: "SM", value: 76 },
  { name: "Manufacturing Basics",id: "MF", value: 74 },
  { name: "GD&T — Learning",     id: "GD", value: 58 },
];

const PROJECTS = [
{
  id: "01",
  name: "Ball Valve",
  category: "product",
  image: "assets/projects/ball-valve.png",
  desc: "3D CAD model of an industrial ball valve assembly."
},
{
  id: "02",
  name: "Differential Gear Assembly",
  category: "transmission",
  image: "assets/projects/differential-main.png",
  desc: "Automotive differential assembly with bevel gears and housing."
},
{
  id: "03",
  name: "Differential Exploded View",
  category: "transmission",
  image: "assets/projects/differential-exploded.png",
  desc: "Exploded assembly showing differential components and fasteners."
},
{
  id: "04",
  name: "Gearbox Assembly",
  category: "transmission",
  image: "assets/projects/gear-box.png",
  desc: "Multi-stage gearbox with shafts, bearings and gear train."
},
{
  id: "05",
  name: "Planetary Gear System",
  category: "transmission",
  image: "assets/projects/planetary-gear.png",
  desc: "Planetary gear train with ring, sun and planet gears."
},
{
  id: "06",
  name: "Plastic Shredder",
  category: "machine",
  image: "assets/projects/plastic-shredder.png",
  desc: "Industrial plastic shredder with cutting shaft assembly."
},
{
  id: "07",
  name: "Sheet Metal Enclosure",
  category: "product",
  image: "assets/projects/sheet-metal.png",
  desc: "Sheet metal electronics enclosure with ventilation features."
},
{
  id: "08",
  name: "Turbo Pump",
  category: "machine",
  image: "assets/projects/turbo-pump.png",
  desc: "Centrifugal turbo pump designed using CAD modeling."
},
{
  id: "09",
  name: "Double Open-End Wrench",
  category: "product",
  image: "assets/projects/wrench.png",
  desc: "Mechanical hand tool modeled for manufacturing study."
}
];

// ===========================
// YEAR
// ===========================
document.getElementById("year").textContent = new Date().getFullYear();

// ===========================
// MOBILE MENU
// ===========================
const menuBtn    = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
}

// ===========================
// RENDER SKILLS
// ===========================
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map((skill, i) => `
    <div class="skill-item" style="transition-delay: ${i * 0.05}s">
      <div class="skill-top">
        <div class="skill-left">
          <span class="skill-id">${skill.id}</span>
          <span class="skill-name">${skill.name}</span>
        </div>
        <span class="skill-pct">${skill.value}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-value="${skill.value}"></div>
      </div>
    </div>
  `).join("");
}

// ===========================
// RENDER PROJECTS
// ===========================
let currentFilter = "all";

function renderProjects(filter) {
  const grid = document.getElementById("projectsGrid");

  const filtered = filter === "all"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="project-card">

      <img src="${p.image}" alt="${p.name}" class="project-image">

      <div class="card-top">
        <span class="card-num">${p.id}</span>
        <span class="card-category">${p.category}</span>
      </div>

      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
      </div>

    </div>
  `).join("");
}

// ===========================
// FILTER BUTTONS
// ===========================
function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderProjects(currentFilter);
    });
  });
}

// ===========================
// SCROLL REVEAL
// ===========================
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// ===========================
// SKILL BAR ANIMATION
// ===========================
function initSkillBars() {
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          const fill = entry.target.querySelector(".skill-bar-fill");
          if (fill) {
            setTimeout(() => {
              fill.style.width = fill.dataset.value + "%";
            }, 200);
          }
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".skill-item").forEach(el => skillObserver.observe(el));
}

// ===========================
// NAVBAR SCROLL SHADOW
// ===========================
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = "0 1px 12px rgba(0,0,0,0.06)";
    } else {
      navbar.style.boxShadow = "none";
    }
  }, { passive: true });
}

// ===========================
// HERO REVEAL ON LOAD
// ===========================
function initHeroReveal() {
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    setTimeout(() => {
      heroContent.classList.add("visible");
    }, 100);
  }
}

// ===========================
// INIT
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects("all");
  initFilters();
  initReveal();
  initSkillBars();
  initNavbarScroll();
  initHeroReveal();
});
