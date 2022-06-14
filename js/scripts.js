/*!
 * Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function() {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function(responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for galeria items
    new SimpleLightbox({
        elements: '#galeria a.galeria-box'
    });

});

function fetchPics() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            let catsImgUrl = data[0].url
            console.log(catsImgUrl)
            let catsImgEl = document.createElement("img")
            catsImgEl.setAttribute('src', catsImgUrl)
            catsImgEl.classList.add("w-50")
            catsImgEl.classList.add("h-50")

            document.getElementById('catImg').innerHTML = ''

            let catsImgDiv = document.getElementById("catImg")
            console.log(catsImgDiv)
            catsImgDiv.appendChild(catsImgEl)
        })
}

function local_storage_save() {
    var tab = document.getElementsByName("payment");
    var p;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].checked) p = tab[i].value;
    }
    let dane = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        date_begin: document.getElementsByName("date1")[0].value,
        date_end: document.getElementsByName("date2")[0].value,
        standard: document.getElementById("standard").value,
        payment: p,
        message: document.getElementById("message").value
    }
    console.log(dane)
    window.localStorage.setItem("data", JSON.stringify(dane))
}

function local_storage_load() {
    console.log('------------------')
    let dane
    if (window.localStorage.getItem('data') !== null) {
        dane = JSON.parse(window.localStorage.getItem('data'));
        var tab = document.getElementsByName("payment");
        var p;
        for (let i = 0; i < tab.length; i++) {
            if (tab[i].value) p = tab[i].checked;
        }
        document.getElementById("name").value = dane.name
        document.getElementById("email").value = dane.email
        document.getElementById("phone").value = dane.phone
        document.getElementsByName("date1")[0].value = dane.date_begin
        document.getElementsByName("date2")[0].value = dane.date_end
        document.getElementById("standard").value = dane.standard
        document.getElementById("message").value = dane.message
    }
    console.log(dane)
}