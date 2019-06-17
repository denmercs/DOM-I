const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// updating the navigation bar 

let navbarLinks = document.querySelectorAll("nav a");
navbarLinks[0].textContent = siteContent.nav["nav-item-1"];
navbarLinks[1].textContent = siteContent.nav["nav-item-2"];
navbarLinks[2].textContent = siteContent.nav["nav-item-3"];
navbarLinks[3].textContent = siteContent.nav["nav-item-4"];
navbarLinks[4].textContent = siteContent.nav["nav-item-5"];
navbarLinks[5].textContent = siteContent.nav["nav-item-6"];

let navbar = document.querySelector("nav");
let newLinksAppend = document.createElement("a");
newLinksAppend.textContent = "Pricing";
newLinksAppend.style.color = "green";
navbar.append(newLinksAppend);

let newLinksPreprend = document.createElement("a");
newLinksPreprend.textContent = "Team";
newLinksPreprend.style.color = "green";
navbar.prepend(newLinksPreprend);

navbarLinks.forEach(currentVal => currentVal.style.color = "green");


// CTA
let mainHeader = document.querySelector(".cta h1");
mainHeader.innerHTML = siteContent.cta.h1.slice(0, 3) + "<br>" + siteContent.cta.h1.slice(4,7) + "<br>" + siteContent.cta.h1.slice(7, 15);


let mainHeaderButton = document.querySelector(".cta button");
mainHeaderButton.textContent = siteContent.cta.button;

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent.cta["img-src"]);
ctaImage.setAttribute('alt', 'Image of a code snippet');



// Main Content 
let mainContent = document.querySelectorAll(".top-content h4");
mainContent[0].textContent = siteContent["main-content"]["features-h4"];

let topContentText = document.querySelectorAll(".top-content p"); 
topContentText[0].textContent = siteContent["main-content"]["features-content"];

mainContent[1].textContent = siteContent["main-content"]["about-h4"];

topContentText[1].textContent = siteContent["main-content"]["about-content"];

// middle image
let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Bottom content
let bottomContent = document.querySelectorAll(".bottom-content h4");
bottomContent[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent[1].textContent = siteContent["main-content"]["product-h4"];
bottomContent[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomContentText = document.querySelectorAll(".bottom-content p");
bottomContentText[0].textContent = siteContent["main-content"]["services-content"];
bottomContentText[1].textContent = siteContent["main-content"]["product-content"];
bottomContentText[2].textContent = siteContent["main-content"]["vision-content"];

// Contact
let contactInfo = document.querySelector(".contact h4");
contactInfo.textContent = siteContent.contact["contact-h4"];

let contactInfoText = document.querySelectorAll(".contact p");
contactInfoText[0].textContent = siteContent.contact.address;
contactInfoText[1].textContent = siteContent.contact.phone;
contactInfoText[2].textContent = siteContent.contact.email;

// Footer 
let footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;