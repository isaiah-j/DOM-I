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


// h1 

let h1 = document.querySelector("h1")
h1.innerText = siteContent.cta.h1

// Images
let img = document.querySelector(".middle-img")
let img2 = document.querySelector("#cta-img")
img.setAttribute("src", siteContent["main-content"]["middle-img-src"])
img2.setAttribute("src", siteContent["cta"]["img-src"])


//button

let btn = document.querySelector("button")
btn.innerText = siteContent.cta.button





// subtitles/h4
let textContent = document.querySelectorAll(".text-content")

let textContentTitles = Object.entries(siteContent['main-content']).filter((el) => {
  return el[0].includes("h4")
})

let titles = document.querySelectorAll("h4")

let counter = 0
titles.forEach((el) => {
  if(textContentTitles[counter]){
    el.innerText = textContentTitles[counter][1]
    counter += 1
  }
})

// text paragraphs

let paragraphs = Object.entries(siteContent['main-content']).filter((el) => {
  return el[0].includes("content")
})

let p = document.querySelectorAll("p")

counter = 0

p.forEach((el) => {
  if(paragraphs[counter]){
    el.innerText = paragraphs[counter][1]
    counter += 1
  }
})

// Navbar 
let nav = document.querySelector('nav')
let navChildren = document.querySelector("nav").childNodes
let navItems = Object.values(siteContent['nav'])

// remove the image url

navItems.pop()

//

counter = 0

for(let i = 1; i < navChildren.length; i += 2){
  navChildren[i].innerText = navItems[counter]
  navChildren[i].style.color = "green"
  counter += 1

}

// Creating elements

let nav1 = document.createElement('a')
let nav2 = document.createElement('a')

nav1.innerText = "Hello!"
nav1.style.color = 'green'
nav2.innerText = "Cool nav item"
nav2.style.color = 'green'
nav.append(nav1)
nav.prepend(nav2)

