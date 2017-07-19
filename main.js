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
        <a href="rotation01.html">rotations 1</a>
        <br>
        <a href="">blog</a>&nbsp;|
        <a href="about.html">about</a>&nbsp;|
    `;

    let footer = document.querySelector("footer");
    footer.innerHTML = `
        <p class="footers">younkeehong@gmail.com</p>
    `;
}