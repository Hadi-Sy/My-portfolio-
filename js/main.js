let tablinks = document.getElementsByClassName('tab-links');
let tabcontent = document.getElementsByClassName('tab-content');

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcont of tabcontent) {
        tabcont.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// script for google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzgdTIEqnpUhYWKVSNi3Kp4bYw_q9vJckqnV1kK-_xN2YokZEwLMWNymA7uZBg1na4D/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})

// functions for open and close sidemenue
let sidemenue = document.getElementById("sidemenue");

function openmenue() {
    sidemenue.style.right = "0px";
}

function closemenue() {
    sidemenue.style.right = "-200px";
}

// event for website preloader animation
let loader = document.getElementById("pre");

window.addEventListener("load", function () {
    loader.style.display = "none";
})

// event to stop scrolling while menue is open 
let bars = document.getElementById("bar");

bars.addEventListener('click', (event) => {
    if (event.type === 'click') {
        document.body.classList.add("stop-scrolling");
    }
});


// event to close menue when clik on any where in screen
let drop = document.getElementById("drop")

drop.addEventListener('click', (ev) => {
    if (ev.type === 'click') {
        closemenue();
        document.body.classList.remove("stop-scrolling");
    }
})

// funvtion to close menue and start scrolling when click on menue member
function menuemember() {
    closemenue();
    document.body.classList.remove("stop-scrolling");
}