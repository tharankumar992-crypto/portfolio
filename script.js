const projects = [
  {
    title: "Differential",
    category: "transmission",
    label: "Power Transmission",
    description: "Designed a complete differential assembly demonstrating power transmission between drive shafts while allowing wheel speed variation.",
    tech: ["SolidWorks", "Assembly", "Gear Design"],
    shape: "differential",
    image: "assets/projects/differential-main.png",
    gallery: [
      { src: "assets/projects/differential-main.png", label: "Main View" },
      { src: "assets/projects/differential-exploded.png", label: "Exploded View" }
    ],
    overview: "A complete bevel-gear differential study designed to visualize torque transfer while allowing two output shafts to rotate at different speeds.",
    features: ["Bevel gear arrangement", "Twin output shafts", "Carrier and housing assembly", "Motion-ready component mates"],
    challenges: ["Maintaining correct gear relationships", "Packaging the mechanism compactly", "Controlling concentric alignment"],
    process: "Defined the power-flow layout, modeled the bevel gears and carrier components, assembled the mechanism with functional mates, and checked clearances through a full rotation cycle."
  },
  {
    title: "Single Stage Reduction Helical Gear Box",
    category: "transmission",
    label: "Speed Reduction",
    description: "Designed a helical gearbox assembly with shafts, bearings, gears, and housing for speed reduction applications.",
    tech: ["SolidWorks", "Helical Gears", "Housing"],
    shape: "gearbox",
    image: "assets/projects/gearbox-main.png",
    overview: "A compact single-stage gearbox integrating a helical gear pair, supported shafts, bearings, covers, and a split housing for practical speed reduction.",
    features: ["Helical gear pair", "Bearing-supported shafts", "Split housing design", "Serviceable cover layout"],
    challenges: ["Shaft and bearing alignment", "Housing clearances", "Assembly and maintenance access"],
    process: "Established the target reduction layout, built the gear and shaft train, selected bearing positions, designed the housing around the rotating assembly, and verified internal clearances."
  },
  {
    title: "Planetary Gear System",
    category: "transmission",
    label: "Compact Transmission",
    description: "Developed a planetary gear mechanism demonstrating compact high-ratio power transmission.",
    tech: ["SolidWorks", "Gear Train", "Motion"],
    shape: "planetary",
    image: "assets/projects/planetary-gear-main.png",
    overview: "A coaxial planetary transmission model with sun, planet, ring, and carrier components arranged for compact torque multiplication.",
    features: ["Sun and ring gears", "Three-planet carrier", "Coaxial input and output", "Compact ratio architecture"],
    challenges: ["Equal planet spacing", "Accurate meshing relationships", "Carrier constraint strategy"],
    process: "Calculated the compatible tooth relationship, modeled the sun, planets, and internal ring, patterned the planet gears on the carrier, and applied mechanical mates to demonstrate motion."
  },
  {
    title: "Hand Driller",
    category: "machine",
    label: "Manual Mechanism",
    description: "Designed a manually operated drilling mechanism with gear-driven motion transfer.",
    tech: ["SolidWorks", "Mechanism", "Ergonomics"],
    shape: "drill",
    overview: "A manually powered drilling tool translating crank motion through a geared transmission to produce controlled spindle rotation.",
    features: ["Crank-driven input", "Bevel gear transfer", "Guided drill spindle", "Ergonomic support handle"],
    challenges: ["Transferring motion through 90 degrees", "Balancing proportions and grip", "Preventing component interference"],
    process: "Mapped the hand-powered motion path, modeled the crank, frame, spindle, and gear set, then refined handle positions and component clearances for practical operation."
  },
  {
    title: "Turbo Pump",
    category: "machine",
    label: "Fluid Machinery",
    description: "Modeled a turbo pump assembly including impeller and casing components for fluid transport applications.",
    tech: ["SolidWorks", "Surfacing", "Impeller"],
    shape: "pump",
    image: "assets/projects/turbo-pump-main.png",
    overview: "A centrifugal turbo pump concept featuring a radial impeller, volute-inspired casing, central inlet, and tangential discharge.",
    features: ["Radial blade impeller", "Contoured pump casing", "Central suction inlet", "Tangential outlet path"],
    challenges: ["Developing repeated curved blades", "Maintaining casing clearance", "Building smooth fluid-facing geometry"],
    process: "Created the impeller hub and blades using patterned features, developed the enclosing casing around the flow path, and checked rotational clearance between the primary components."
  },
  {
    title: "Plastic Shredder",
    category: "machine",
    label: "Recycling Machine",
    description: "Created a plastic shredding machine assembly focused on waste reduction and recycling.",
    tech: ["SolidWorks", "Machine Design", "Manufacturing"],
    shape: "shredder",
    image: "assets/projects/plastic-shredder.png",
    overview: "A compact plastic shredding machine designed around counter-rotating cutter shafts, a feed hopper, rigid frame, and geared drive system.",
    features: ["Interlocking cutter stack", "Dual shaft arrangement", "Sheet-metal feed hopper", "Rigid support frame"],
    challenges: ["Cutter spacing and overlap", "High-load shaft support", "Safe material feed geometry"],
    process: "Started from the cutting zone, patterned the cutter stack and spacers, designed shafts and side plates, then built the hopper and structural frame around the mechanism."
  },
  {
    title: "Ball Valve",
    category: "product",
    label: "Flow Control",
    description: "Designed an industrial ball valve assembly showing flow control mechanisms.",
    tech: ["SolidWorks", "Assembly", "Section View"],
    shape: "valve",
    image: "assets/projects/ball-valve-main.png",
    overview: "An industrial quarter-turn ball valve assembly illustrating the body, spherical closure element, stem, handle, seals, and flow passage.",
    features: ["Quarter-turn operation", "Full-bore flow path", "Stem and lever assembly", "Multi-part valve body"],
    challenges: ["Matching spherical sealing surfaces", "Maintaining a continuous bore", "Controlling stem alignment"],
    process: "Defined the flow bore, developed the valve body and central ball, added the stem and lever mechanism, and reviewed open and closed positions through section views."
  },
  {
    title: "Sheet Metal Design",
    category: "product",
    label: "Fabrication",
    description: "Developed manufacturable sheet metal components using bend and fabrication principles.",
    tech: ["SolidWorks", "Sheet Metal", "Flat Pattern"],
    shape: "sheet",
    image: "assets/projects/sheet-metal-main.png",
    overview: "A manufacturable sheet-metal enclosure study built with consistent thickness, controlled bends, corner reliefs, and a production-ready flat pattern.",
    features: ["Uniform material thickness", "Bend and corner reliefs", "Mounting flange details", "Flattened fabrication state"],
    challenges: ["Avoiding corner deformation", "Maintaining bend allowances", "Designing accessible fastening points"],
    process: "Built a base flange, added edge flanges and relief features, refined corners for fabrication, and validated the design by generating and reviewing its flat pattern."
  },
  {
    title: "Wrench",
    category: "product",
    label: "Hand Tool",
    description: "Modeled a standard mechanical wrench with proper dimensions and manufacturing considerations.",
    tech: ["SolidWorks", "Part Design", "Drawing"],
    shape: "wrench",
    image: "assets/projects/wrench.png",
    overview: "A dimensionally controlled combination wrench modeled as a practical hand-tool study with attention to profile, strength, grip, and manufacturability.",
    features: ["Open-end jaw profile", "Ring-end geometry", "Ergonomic handle form", "Manufacturing-ready drawing"],
    challenges: ["Balancing strength and weight", "Controlling smooth profile transitions", "Applying practical tool dimensions"],
    process: "Established the functional jaw and ring dimensions, developed the handle profile between them, added strengthening transitions, and prepared a detailed production drawing."
  }
];

const projectIllustration = (type, large = false) => {
  const stroke = "#f5f5f5";
  const fill = "rgba(255, 255, 255, .08)";
  const dim = "rgba(255, 255, 255, .35)";
  const parts = {
    differential: `<g transform="translate(200 125)"><circle r="70" fill="${fill}" stroke="${stroke}" stroke-width="2"/><circle r="35" fill="none" stroke="${stroke}" stroke-width="2"/><path d="M-125 0h250M-48-48l96 96M48-48l-96 96" stroke="${stroke}" stroke-width="9"/><circle cx="-125" r="18" fill="${fill}" stroke="${stroke}"/><circle cx="125" r="18" fill="${fill}" stroke="${stroke}"/><path d="M-90-76h180v152H-90z" fill="none" stroke="${dim}" stroke-dasharray="5 5"/></g>`,
    gearbox: `<g transform="translate(200 125)"><path d="M-125-78h205l45 42v114h-250z" fill="${fill}" stroke="${stroke}" stroke-width="2"/><circle cx="-45" cy="5" r="49" fill="none" stroke="${stroke}" stroke-width="3"/><circle cx="65" cy="-4" r="31" fill="none" stroke="${stroke}" stroke-width="3"/><path d="M-104 5h118M34-4h102" stroke="${stroke}" stroke-width="7"/><circle cx="-45" cy="5" r="13" fill="${stroke}"/><circle cx="65" cy="-4" r="10" fill="${stroke}"/></g>`,
    planetary: `<g transform="translate(200 125)"><circle r="96" fill="${fill}" stroke="${stroke}" stroke-width="3"/><circle r="36" fill="none" stroke="${stroke}" stroke-width="3"/><circle cy="-64" r="25" fill="none" stroke="${stroke}" stroke-width="2"/><circle cx="55" cy="32" r="25" fill="none" stroke="${stroke}" stroke-width="2"/><circle cx="-55" cy="32" r="25" fill="none" stroke="${stroke}" stroke-width="2"/><path d="M0-36v-28M31 18l24 14M-31 18l-24 14" stroke="${dim}" stroke-width="4"/></g>`,
    drill: `<g transform="translate(200 125)" fill="${fill}" stroke="${stroke}" stroke-width="2"><path d="M-88-65h100v40H-88zM-52-25h32v108h-32zM12-54h65l18 18-18 18H12z"/><circle cx="-104" cy="-45" r="31"/><path d="M-104-76v-42M-104-118h58M77-36h70M147-36l35 12-35 12z" fill="none"/><circle cx="-104" cy="-45" r="8" fill="${stroke}"/></g>`,
    pump: `<g transform="translate(200 125)"><path d="M10-91c-82 0-124 55-124 109s52 95 113 79c45-12 68-50 66-88l68-4v-58L47-48C33-75 26-91 10-91z" fill="${fill}" stroke="${stroke}" stroke-width="3"/><circle cx="-17" cy="12" r="59" fill="none" stroke="${stroke}" stroke-width="2"/><circle cx="-17" cy="12" r="14" fill="${stroke}"/><path d="M-17 12C10-18 22-28 28-53M-17 12C15 22 29 39 34 59M-17 12C-36 47-53 53-70 57M-17 12C-48-9-55-25-61-43" fill="none" stroke="${stroke}" stroke-width="8"/></g>`,
    shredder: `<g transform="translate(200 125)" stroke="${stroke}" stroke-width="2"><path d="M-104-95H104L78-20H-78z" fill="${fill}"/><path d="M-110-20h220v95h-220zM-82 75v42M82 75v42" fill="none"/><g>${[-72,-48,-24,0,24,48,72].map((x,i)=>`<path d="M${x}-5v52m-13-26h26" stroke-width="9" transform="rotate(${i%2?45:-45} ${x} 21)"/>`).join("")}</g><path d="M-125 117H125" stroke="${dim}"/></g>`,
    valve: `<g transform="translate(200 125)" fill="${fill}" stroke="${stroke}" stroke-width="2"><path d="M-130-36h260v72h-260z"/><circle r="65"/><circle r="39" fill="none" stroke-width="3"/><path d="M0-65v-57M-18-122h36v30H-18zM0-108h100" fill="none" stroke-width="8"/><circle cx="-130" r="47" fill="none"/><circle cx="130" r="47" fill="none"/></g>`,
    sheet: `<g transform="translate(200 125)" fill="${fill}" stroke="${stroke}" stroke-width="2"><path d="M-118-75H75l43 40V78H-55l-63-52z"/><path d="M-55 78V-25l-63-50M-55-25h173M75-75v40h43" fill="none"/><circle cx="70" cy="25" r="12" fill="none"/><circle cx="25" cy="25" r="12" fill="none"/><path d="M-28-2h28v52h-28z" fill="none"/></g>`,
    wrench: `<g transform="translate(200 125) rotate(-18)" fill="${fill}" stroke="${stroke}" stroke-width="2"><path d="M-142-45c25-15 55-7 69 15L70 22c12-20 39-29 62-18l-35 20 2 29 38 15c-22 17-55 13-72-8L-86 11c-20 14-48 10-65-7l39-17 5-28z"/><circle cx="91" cy="37" r="19" fill="none" stroke-width="6"/></g>`
  };
  return `<svg viewBox="0 0 400 250" role="img" aria-label="${type} technical illustration">
    <g fill="none" stroke="${dim}" stroke-width="1">
      <path d="M30 218H370M45 225v-14M355 225v-14"/><path d="M38 30v165M31 42h14M31 183h14"/>
      <circle cx="200" cy="125" r="105" stroke-dasharray="3 8"/>
    </g>
    ${parts[type]}
    <g fill="${dim}" font-family="monospace" font-size="7"><text x="171" y="235">XENOVOLT / CAD</text><text x="48" y="22">ISOMETRIC PROJECTION</text></g>
  </svg>`;
};

const projectVisual = project => project.image
  ? `<img class="project-render" src="${project.image}" alt="${project.title} SolidWorks CAD render" loading="lazy">`
  : projectIllustration(project.shape);

const modalVisual = project => {
  if (project.gallery?.length) {
    return `<div class="modal-gallery">
      ${project.gallery.map(item => `
        <figure>
          <img class="modal-render" src="${item.src}" alt="${project.title} ${item.label} SolidWorks CAD render">
          <figcaption>${item.label}</figcaption>
        </figure>
      `).join("")}
    </div>`;
  }

  return project.image
    ? `<img class="modal-render" src="${project.image}" alt="${project.title} SolidWorks CAD render">`
    : projectIllustration(project.shape, true);
};

const grid = document.getElementById("projects-grid");
projects.forEach((project, index) => {
  const card = document.createElement("article");
  card.className = "project-card reveal";
  card.dataset.category = project.category;
  card.innerHTML = `
    <div class="project-visual">
      <span class="project-number">PRJ-${String(index + 1).padStart(2, "0")}</span>
      <span class="project-type">${project.label}</span>
      ${projectVisual(project)}
    </div>
    <div class="project-body">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tech-list">${project.tech.map(item => `<span>${item}</span>`).join("")}</div>
      <button class="project-button" type="button" data-project="${index}" aria-label="View details for ${project.title}">
        View Details
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </button>
    </div>`;
  grid.appendChild(card);
});

const modal = document.getElementById("project-modal");
const openProject = index => {
  const project = projects[index];
  document.getElementById("modal-visual").innerHTML = modalVisual(project);
  document.getElementById("modal-index").textContent = String(index + 1).padStart(2, "0");
  document.getElementById("modal-category").textContent = project.label;
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-overview").textContent = project.overview;
  document.getElementById("modal-features").innerHTML = project.features.map(item => `<li>${item}</li>`).join("");
  document.getElementById("modal-challenges").innerHTML = project.challenges.map(item => `<li>${item}</li>`).join("");
  document.getElementById("modal-process").textContent = project.process;
  document.getElementById("modal-tools").innerHTML = project.tech.map(item => `<span>${item}</span>`).join("");
  modal.showModal();
  document.body.classList.add("modal-open");
};

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-project]");
  if (button) openProject(Number(button.dataset.project));
});

const closeModal = () => {
  modal.close();
  document.body.classList.remove("modal-open");
};
document.getElementById("modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
modal.addEventListener("close", () => document.body.classList.remove("modal-open"));

document.querySelectorAll(".project-filters button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".project-filters button.active").classList.remove("active");
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal, .skill-card").forEach(el => observer.observe(el));

const header = document.getElementById("site-header");
const navLinks = [...document.querySelectorAll(".nav-links a")];
const sections = [...document.querySelectorAll("main section[id]")];
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
  const position = window.scrollY + 180;
  let current = "home";
  sections.forEach(section => { if (position >= section.offsetTop) current = section.id; });
  navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
}, { passive: true });

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});
navLinks.forEach(link => link.addEventListener("click", () => {
  menu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("xenovolt-theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
const updateThemeLabel = () => {
  const isDark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
};
updateThemeLabel();
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("xenovolt-theme", next);
  updateThemeLabel();
});

const resumeContent = `THARAN KUMAR
Mechanical Engineering Student | CAD Designer

CAREER OBJECTIVE
To build a career as a Mechanical Design Engineer, applying CAD, machine design, and product development skills to practical engineering challenges.

CORE SKILLS
SolidWorks, Mechanical Design, Assembly Design, Engineering Drawing, Product Development, Machine Design, Gear Design, Sheet Metal Design, Manufacturing Basics, GD&T (Learning)

SELECTED PROJECTS
Differential; Single Stage Reduction Helical Gear Box; Planetary Gear System; Hand Driller; Turbo Pump; Plastic Shredder; Ball Valve; Sheet Metal Design; Wrench

PORTFOLIO BRAND
Xenovolt Dynamics
`;
document.getElementById("resume-link").href = URL.createObjectURL(new Blob([resumeContent], { type: "text/plain" }));

document.getElementById("contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
  document.getElementById("form-status").textContent = "Opening your email app to send the message...";
  window.location.href = `mailto:tharankumar@example.com?subject=${subject}&body=${body}`;
  setTimeout(() => { document.getElementById("form-status").textContent = "Message prepared. Thank you for reaching out."; }, 800);
});

const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
let animationFrame;
const resizeCanvas = () => {
  canvas.width = window.innerWidth * Math.min(devicePixelRatio, 2);
  canvas.height = window.innerHeight * Math.min(devicePixelRatio, 2);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(Math.min(devicePixelRatio, 2), 0, 0, Math.min(devicePixelRatio, 2), 0, 0);
  const count = Math.min(65, Math.floor(window.innerWidth / 22));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - .5) * .18,
    vy: (Math.random() - .5) * .18,
    r: Math.random() * 1.2 + .3
  }));
};
const drawParticles = () => {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--accent");
  particles.forEach((p, i) => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
    if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;
    ctx.globalAlpha = .28;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j], distance = Math.hypot(p.x - q.x, p.y - q.y);
      if (distance < 120) {
        ctx.globalAlpha = (1 - distance / 120) * .08;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
      }
    }
  });
  animationFrame = requestAnimationFrame(drawParticles);
};
resizeCanvas();
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) drawParticles();
window.addEventListener("resize", resizeCanvas);

document.getElementById("year").textContent = new Date().getFullYear();
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("hidden"), 650);
});
setTimeout(() => document.getElementById("loader").classList.add("hidden"), 1800);
