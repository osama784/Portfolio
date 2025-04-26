const animtaionFadeUpClass = "fade-up-done";
const stdAnimationDelay = "0s, 0.2s, 0.2s";
const initialFadeUpTransform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 20, 0, 1)";
const finalFadeUpTransform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)";

const stdTransition = "all, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)";

const initialOpacity = "0";
const finalOpacity = "1";

const aboutSectionInner = document.querySelector("#about #about-inner") as HTMLElement;

const eventsSectionInner = document.querySelector("#events #events-inner") as HTMLElement;

const projectsSection = document.getElementById("projects") as HTMLElement;
const otherProjectsSection = document.getElementById("other-projects") as HTMLElement;

const projectsSectionHeading = projectsSection.querySelector("#section-heading") as HTMLElement;
const otherProjectsSectionHeading = otherProjectsSection.querySelector("#section-heading") as HTMLElement;

const projects = projectsSection.querySelectorAll("#project") as NodeListOf<HTMLElement>;
const otherProjects = otherProjectsSection.querySelectorAll("#project") as NodeListOf<HTMLElement>;

const contactSection = document.getElementById("contact") as HTMLElement;

const homeSection = document.getElementById("home") as HTMLElement;
const homeSectionIntro = homeSection.querySelector("#section-intro") as HTMLElement;
const homeSectionHeading = homeSection.querySelector("#section-heading") as HTMLElement;
const homeSectionHeadingName = homeSectionHeading.querySelector("#name") as HTMLElement;
const homeSectionHeadingDescription = homeSectionHeading.querySelector("#description") as HTMLElement;
const homeSectionContact = homeSection.querySelector("#section-contact") as HTMLElement;
const homeSectionContent = homeSection.querySelector("#section-content") as HTMLElement;
const homeSectionFooter = homeSection.querySelector("#section-footer") as HTMLElement;

const animatedElements = [aboutSectionInner, eventsSectionInner, projectsSectionHeading, otherProjectsSectionHeading, contactSection];

const animatedHomeElements = [
    homeSectionIntro,
    homeSectionHeadingName,
    homeSectionHeadingDescription,
    homeSectionContact,
    homeSectionContent,
    homeSectionFooter,
];
const navbar = document.querySelector("nav") as HTMLElement;
const navbarLogo = document.querySelector("#navbar-logo") as HTMLElement;
const navbarMenu = document.querySelector("nav #menu") as HTMLElement;
const navbarListWrapper = document.querySelector("#navbar-items-wrapper") as HTMLElement;
const navbarItemsList = document.getElementById("navbar-items-list") as HTMLElement;
const navbarItems = document.querySelectorAll("#navbar-items-list li") as NodeListOf<HTMLElement>;

const rightDiv = document.querySelector('[orientation="right"]') as HTMLElement;
const leftDiv = document.querySelector('[orientation="left"]') as HTMLElement;

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

const fadeUpElement = (element: HTMLElement, delay: string) => {
    element.style.opacity = finalOpacity;
    element.style.transform = finalFadeUpTransform;
    element.style.transition = stdTransition;
    element.style.transitionDelay = delay;
    element.classList.add(animtaionFadeUpClass);
};

const reached = (element: HTMLElement) => {
    return element.getBoundingClientRect().top + 50 <= window.innerHeight && !element.classList.contains(animtaionFadeUpClass);
};

const settingInitialState = () => {
    animatedElements.forEach((element: HTMLElement) => {
        element.style.opacity = initialOpacity;
        element.style.transform = initialFadeUpTransform;
    });
    animatedHomeElements.forEach((element: HTMLElement) => {
        element.style.opacity = initialOpacity;
        element.style.transform = initialFadeUpTransform;
    });
    navbarItems.forEach((element: HTMLElement) => {
        element.style.opacity = initialOpacity;
        element.style.transform = initialFadeUpTransform;
    });
    navbarItemsList.style.opacity = initialOpacity;
    navbarLogo.style.opacity = initialOpacity;
    navbarMenu.style.opacity = initialOpacity;

    rightDiv.style.opacity = initialOpacity;
    leftDiv.style.opacity = initialOpacity;

    projects.forEach((element: HTMLElement) => {
        element.style.opacity = initialOpacity;
        element.style.transform = initialFadeUpTransform;
    });

    otherProjects.forEach((element: HTMLElement) => {
        element.style.opacity = initialOpacity;
        element.style.transform = initialFadeUpTransform;
    });
};

const startupAnimation = () => {
    setTimeout(() => {
        fadeUpElement(navbarLogo, stdAnimationDelay);
    }, 500);

    setTimeout(() => {
        fadeUpElement(navbarMenu, stdAnimationDelay);
        fadeUpElement(navbarItemsList, stdAnimationDelay);
        navbarItems.forEach((element, index) => {
            const delay = `0s, ${index * 0.1}s, ${index * 0.1}s`;
            fadeUpElement(element, delay);
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

// sidebar

const blurEffect = document.getElementById("blurEffect") as HTMLElement;

const showSidebar = () => {
    blurEffect.style.zIndex = "10";
    blurEffect.style.opacity = "1";

    navbar.style.backgroundColor = "white";
    navbarListWrapper.style.display = "block";
    navbarMenu.classList.add("clicked");
};

const hideSidebar = () => {
    blurEffect.style.zIndex = "-10";
    blurEffect.style.opacity = "0";

    navbar.style.removeProperty("background-color");
    navbarListWrapper.style.removeProperty("display");
    navbarMenu.classList.remove("clicked");
};

navbarMenu.onclick = () => {
    if (!navbarMenu.classList.contains("clicked")) {
        showSidebar();
    } else {
        hideSidebar();
    }
};

navbarItems.forEach((item: HTMLElement) => {
    item.onclick = () => {
        if (navbarMenu.classList.contains("clicked")) {
            hideSidebar();
        }
    };
});

blurEffect.onclick = () => {
    hideSidebar();
};

window.onresize = () => {
    if (window.innerWidth >= 768 && navbarMenu.classList.contains("clicked")) {
        hideSidebar();
    }
};

// events section

const events = document.querySelectorAll("#events-list > li") as NodeListOf<HTMLElement>;
const eventsDescriptions = document.querySelectorAll("#event-description > div") as NodeListOf<HTMLElement>;

events.forEach((element) => {
    element.addEventListener("click", () => {
        events.forEach((e) => {
            e.classList.add("before:bg-slate-300");
            e.classList.remove("before:bg-main-purple");
        });
        element.classList.add("before:bg-main-purple");
        element.classList.remove("before:bg-slate-300");
        eventsDescriptions.forEach((descriptionDiv) => {
            descriptionDiv.classList.remove("flex");
            descriptionDiv.classList.add("hidden");
            if (descriptionDiv.dataset.order == element.dataset.order) {
                descriptionDiv.classList.add("flex");
                descriptionDiv.classList.remove("hidden");
            }
        });
    });
});
