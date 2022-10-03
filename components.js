// Create header and footer elements that can be reused throughout the website

function create_header() {
    const header = document.querySelector(".header");
    const title_div = document.createElement("div");
    title_div.className = "title";
    title_div.innerHTML = `
        <h1><a href="/">Ethan Posner - Software Engineer</a></h1>
    `;
    const navbar_div = document.createElement("div");
    navbar_div.className = "navbar";
    // make each div with the .navbar class have the navbar items
    navbar_div.innerHTML = `
        <ul class="button-list">
        <li><a href="/"><img alt="home-immage" src="img/home-white.png" class="button-icon">&nbsp;Home</a></li>
        <li><a href="resume.html"><img alt="paper-image" src="img/form-white.png" class="button-icon">&nbsp;Resume</a></li>
        <li><a href="projects.html"><img alt="bulb-image" src="img/bulb-white.png" class="button-icon">&nbsp;Projects</a></li>
        <li><a href="hobbies.html"><img alt="hiker-image" src="img/hobbies.png" class="button-icon">&nbsp;Hobbies</a></li>
        <li><a href="contact.html"><img alt="mail-image" src="img/contact.png" class="button-icon">&nbsp;Contact</a></li>
        </ul>
    `;
    header.appendChild(title_div)
    header.appendChild(navbar_div)
}

function create_footer() {
    const footer = document.querySelector(".footer");
    footer.innerHTML = `
        <ul id="social-links" class="button-list">
            <li><a href="https://github.com/Enprogames" target="_blank">
                <img alt="github-icon" src="img/GitHub-Mark-Light-32px.png" class="button-icon">&nbsp;Github
            </a></li>
            <li><a href="https://www.linkedin.com/in/ethanposner/" target="_blank">
                <img alt="linkedin-icon" src="img/linkedin-white.png" class="button-icon">&nbsp;Linkedin
            </a></li>
            <li><a href="https://stackoverflow.com/users/6946463/ethan-posner" target="_blank">
                <img alt="stackoverflow-icon" src="img/stackoverflow-white.png" class="button-icon">&nbsp;Stackoverflow
            </a></li>
        </ul>
    `;
}

// perform all the functions when the page finishes loading
window.onload = function() {
    create_header();
    create_footer();
}
