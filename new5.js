
const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

//

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.fa-bars').addEventListener("click", function() {
        var navLinks = document.querySelector('.nav-links');
        if (navLinks.style.display === "none" || navLinks.style.display === "") {
            navLinks.style.display = "block";
        } else {
            navLinks.style.display = "none";
        }
    });
});

window.addEventListener("scroll", function() {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (scroll >= 70 && width >= 995) {
        document.querySelector('nav').classList.add("new-nav");
        var navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(function(link) {
            link.style.color = "black";
        });
        document.querySelector('.nav-heading span').style.color = "black";
        document.querySelector('.nav-heading span i').style.color = "#F85A40";
        document.querySelector('.fa-moon').style.color = "black";
    } else if (scroll == 0 && width >= 995) {
        document.querySelector('nav').classList.remove("new-nav");
        var navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(function(link) {
            link.style.color = "#fff";
        });
        document.querySelector('.nav-heading span i').style.color = "#fff";
        document.querySelector('.nav-heading span').style.color = "white";
        document.querySelector('.fa-moon').style.color = "#fff";
    } else if (scroll >= 70 && width < 995) {
        document.querySelector('.nav-heading span').style.color = "black";
        document.querySelector('nav').classList.add("new-nav");
        document.querySelector('.nav-heading span').classList.add("black");
        document.querySelector('.nav-heading span i').style.color = "#F85A40";
        document.querySelector('.fa-moon').style.color = "black";
    } else if (scroll == 0 && width < 995) {
        document.querySelector('nav').classList.remove("new-nav");
        document.querySelector('.nav-heading span').style.color = "white";
        document.querySelector('.nav-heading span').classList.remove("black");
        document.querySelector('.fa-moon').style.color = "white";
        document.querySelector('.nav-links > span > i').style.color = "#fff";
    }
});
