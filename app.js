
const sections = document.querySelectorAll("section");
const navBar = document.querySelector("#navbar__list");

// Dynamically build the navigation.
function buildNavBar() {
    const frag = document.createDocumentFragment();
    for (const section of sections) {
        const id = section.id;
        const lable = section.dataset.nav;
        let listItem = document.createElement('li');
        listItem.innerHTML = `<a class="menu__link ${id}" href="#${id}">${lable}</a>`;
        frag.appendChild(listItem);
        
    }
    navBar.appendChild(frag);
}

buildNavBar();
// Smooth scrolling.
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute("href"))
        targetElement.scrollIntoView({behavior: "smooth"});
        
    });
});
//Helper function to check if an element is in viewport
//if in viewport returns true
function isInViewport(element) {
    const distance = element.getBoundingClientRect();
    return (
        distance.top <= 100 &&
        distance.left >= 0 &&
        distance.bottom >= 90 &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth));
}
//Event listener for scroll into section - uses the isInViewpot function
// Set sections and links as active
Rect();
function Rect() {
    document.addEventListener('scroll', function activeSection() {
        for (const section of sections) {
            const listItem = document.querySelector(`.${section.id}`);
            if (isInViewport(section)) {
                section.classList.add("activemenu");
                listItem.classList.add("activemenu");
            } else {
                section.classList.remove("activemenu");
                listItem.classList.remove("activemenu");
            }
        }
    }
    );
}