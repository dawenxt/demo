const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})


// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})


const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
})

cancelBtn.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
})

//Close function
function closeBanner() {
    const banner = document.querySelector('.banner');
    banner.style.transition = 'opacity 0.3s ease'; // Smoothly fade out the banner
    banner.style.opacity = '0'; // Fade out the banner
    
    const navContainer = document.querySelector('.nav-container');
    navContainer.style.transition = 'margin-top 0.3s ease'; // Smoothly transition margin-top
    navContainer.style.marginTop = '0'; // Remove margin top
    
    // After the banner fades out, remove it from the DOM and reset styles
    banner.addEventListener('transitionend', function() {
        banner.style.display = 'none';
        banner.style.opacity = '1'; // Reset opacity for next use if needed
    }, { once: true }); // Ensure this listener only fires once
}
