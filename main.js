window.onload = function() {
    let header = document.querySelector("header");
    header.innerHTML = `
        <h2><a href="index.html">Keehong Youn</a></h1>
    `;

    let nav = document.querySelector("nav");
    nav.innerHTML = `
        <a href="">link4</a>&nbsp;|
        <a href="">link3</a>&nbsp;|
        <a href="">link2</a>&nbsp;|
        <a href="rotation01.html">rotations, n=3</a>&nbsp;|
        <br>
        <a href="blog_main.html">blog</a>&nbsp;|
        <a href="about.html">about</a>&nbsp;|
    `;

    let footer = document.querySelector("footer");
    footer.innerHTML = `
        <p class="footers">younkeehong@gmail.com</p>
    `;
}