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

const navArr = document.querySelectorAll(`a`)
const nav1 = navArr[0]
const nav2 = navArr[1]
const nav3 = navArr[2]
const nav4 = navArr[3]
const nav5 = navArr[4]
const nav6 = navArr[5]

const infoh4 = document.querySelectorAll(`h4`)
const features = infoh4[0]
const about = infoh4[1]
const services = infoh4[2]
const products = infoh4[3]
const vision = infoh4[4]

const textArr = document.querySelectorAll(`.text-content p`)

const para1 = textArr[0]
const para2 = textArr[1]
const para3 = textArr[2]
const para4 = textArr[3]
const para5 = textArr[4]

nav1.textContent = siteContent[`nav`][`nav-item-1`]
nav2.textContent = siteContent[`nav`][`nav-item-2`]
nav3.textContent = siteContent[`nav`][`nav-item-3`]
nav4.textContent = siteContent[`nav`][`nav-item-4`]
nav5.textContent = siteContent[`nav`][`nav-item-5`]
nav5.textContent = siteContent[`nav`][`nav-item-6`]

const headerH1 = document.querySelector(`.cta-text h1`)
headerH1.textContent = siteContent[`cta`][`h1`]

const topImg = document.querySelector(`.cta img`)
topImg.setAttribute(`src`, siteContent[`cta`][`img-src`])

const topButton = document.querySelector(`.cta button`)
topButton.textContent = siteContent [`cta`][`button`]

features.textContent = siteContent[`main-content`][`features-h4`]
about.textContent = siteContent[`main-content`][`about-h4`]  
services.textContent = siteContent[`main-content`][`services-h4`]
products.textContent = siteContent[`main-content`][`product-h4`]
vision.textContent = siteContent[`main-content`][`vision-h4`]

para1.textContent = siteContent[`main-content`][`features-content`]
para2.textContent = siteContent[`main-content`][`about-content`]
para3.textContent = siteContent[`main-content`][`services-content`]
para4.textContent = siteContent[`main-content`][`product-content`]
para5.textContent = siteContent[`main-content`][`vision-content`]

const midImg = document.querySelector(`.middle-img`)
midImg.setAttribute(`src`, siteContent[`main-content`][`middle-img-src`])

const contactTitleh4 = document.querySelector(`.contact h4`)
contactTitleh4.textContent[`contact`][`contact-h4`]

const contact = document.querySelectorAll(`.contact p`)
const address = conact[0]
const phone = contact[1]
const email = contact[2]

address.textContent = siteContent[`contact`][`address`]
phone.textContent = siteContent[`contact`][`phone`]
email.textContent = siteContent[`contact`][`email`]

const footer = document.querySelector(`footer p`)
footer.textContent[`footer`][`copyright`]
