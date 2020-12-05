const sections = document.querySelectorAll("section");
const navBar = document.querySelector("#navbar__list");

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


document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute("href"))
        targetElement.scrollIntoView({behavior: "smooth"});
    });
});

window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
	
});




