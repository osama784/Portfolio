const animtaionFadeUpClass = "fade-up-done";
const animtaionFadeDownClass = "fade-down-done";
const stdAnimationDelay = "0s, 0.2s, 0.2s";
const initialFadeUpTransform =
  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 20, 0, 1)";
const finalFadeUpTransform =
  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)";

const initialFadeDownTransform = "";
const finalFadeDownTransform = "";

const stdTransition =
  "all, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)";

const initialOpacity = 0;
const finalOpacity = 1;

const aboutSectionInner = document.querySelector("#about #about-inner");

const projectsSection = document.getElementById("projects");
const otherProjectsSection = document.getElementById("other-projects");

const projectsSectionHeading =
  projectsSection.querySelector("#section-heading");
const otherProjectsSectionHeading =
  otherProjectsSection.querySelector("#section-heading");

const projects = projectsSection.querySelectorAll("#project");
const otherProjects = otherProjectsSection.querySelectorAll("#project");

const contactSection = document.getElementById("contact");

const homeSection = document.getElementById("home");
const homeSectionIntro = homeSection.querySelector("#section-intro");
const homeSectionHeading = homeSection.querySelector("#section-heading");
const homeSectionHeadingName = homeSectionHeading.querySelector("#name");
const homeSectionHeadingDescription =
  homeSectionHeading.querySelector("#description");
const homeSectionContact = homeSection.querySelector("#section-contact");
const homeSectionContent = homeSection.querySelector("#section-content");
const homeSectionFooter = homeSection.querySelector("#section-footer");

const animatedElements = [
  aboutSectionInner,
  projectsSectionHeading,
  otherProjectsSectionHeading,
  contactSection,
];

const animatedHomeElements = [
  homeSectionIntro,
  homeSectionHeadingName,
  homeSectionHeadingDescription,
  homeSectionContact,
  homeSectionContent,
  homeSectionFooter,
];

const navbarLogo = document.querySelector("#navbar-logo");
const navbarMenu = document.querySelector("nav #menu");
const navbarItems = document.querySelectorAll("#navbar-items-list li");

const rightDiv = document.querySelector('[orientation="right"]');
const leftDiv = document.querySelector('[orientation="left"]');

window.onscroll = () => {
  animatedElements.forEach((element) => {
    if (reached(element)) {
      fadeUpElement(element, stdAnimationDelay);
    }
  });

  projects.forEach((project, index) => {
    const delay = `0s, ${index * 0.1}s, ${index * 0.1}s`;
    if (reached(project)) {
      fadeUpElement(project, delay);
    }
  });

  otherProjects.forEach((project, index) => {
    const delay = `0s, ${index * 0.1}s, ${index * 0.1}s`;
    if (reached(project)) {
      fadeUpElement(project, delay);
    }
  });
};

const fadeUpElement = (element, delay) => {
  element.style.opacity = finalOpacity;
  element.style.transform = finalFadeUpTransform;
  element.style.transition = stdTransition;
  element.style.transitionDelay = delay;
  element.classList.add(animtaionFadeUpClass);
};

const fadeDownElement = (element, delay) => {
  element.style.opacity = finalOpacity;
  element.style.transform = finalFadeDownTransform;
  element.style.transition = stdTransition;
  element.style.transitionDelay = delay;
  element.classList.add(animtaionFadeDownClass);
};

const reached = (element) => {
  return (
    element.getBoundingClientRect().top + 50 <= window.innerHeight &&
    !element.classList.contains(animtaionFadeUpClass)
  );
};

const settingInitialState = () => {
  animatedElements.forEach((element) => {
    element.style.opacity = initialOpacity;
    element.style.transform = initialFadeUpTransform;
  });
  animatedHomeElements.forEach((element) => {
    element.style.opacity = initialOpacity;
    element.style.transform = initialFadeUpTransform;
  });
  navbarItems.forEach((element) => {
    element.style.opacity = initialOpacity;
    element.style.transform = initialFadeDownTransform;
  });

  navbarLogo.style.opacity = initialOpacity;
  navbarMenu.style.opacity = initialOpacity;

  rightDiv.style.opacity = initialOpacity;
  leftDiv.style.opacity = initialOpacity;

  projects.forEach((element) => {
    element.style.opacity = initialOpacity;
    element.style.transform = initialFadeUpTransform;
  });

  otherProjects.forEach((element) => {
    element.style.opacity = initialOpacity;
    element.style.transform = initialFadeUpTransform;
  });
};

const startupAnimation = () => {
  setTimeout(() => {
    fadeUpElement(navbarLogo, stdAnimationDelay);
  }, 500);

  setTimeout(() => {
    fadeDownElement(navbarMenu, stdAnimationDelay);
    navbarItems.forEach((element, index) => {
      const delay = `0s, ${index * 0.1}s, ${index * 0.1}s`;
      fadeDownElement(element, delay);
    });
  }, 1000);

  setTimeout(() => {
    fadeUpElement(rightDiv, stdAnimationDelay);
    fadeUpElement(leftDiv, stdAnimationDelay);
  }, 1500);

  setTimeout(() => {
    animatedHomeElements.forEach((element, index) => {
      const delay = `0s, ${index * 0.1}s, ${index * 0.1}s`;
      fadeUpElement(element, delay);
    });
  }, 2000);
};

settingInitialState();

startupAnimation();
