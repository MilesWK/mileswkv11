const cursor = document.getElementById('mousey');
const themetoggle = document.getElementById('theme')
const body = document.getElementById('body')
const themechangeanimation = gsap.timeline({ paused: true });
const banner = document.getElementById("banner")

window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 1.2,
        stagger: 0.2,
        ease: "elastic"
    });
});

let hide_banner = function() {
    banner.classList.add("hidden")
}


document.querySelectorAll('.hoverable').forEach((el) => {

    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 3,
            duration: 0.2,
            ease: 'back.out',
        });
        cursor.classList.add('hover')
    });

    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
             duration: 0.2,
            ease: 'back.inOut',
        });
        cursor.classList.remove('hover')
    });

});


themechangeanimation.to("#sun", { duration: 1, ease: "elastic",  easeReverse: true, morphSVG: "#moon" });

function toLight() {
    body.classList.remove("dark");
    body.classList.add("light")
    themechangeanimation.reverse()
    themechangeanimation.paused()
}

function toDark() {
    body.classList.remove("light");
    body.classList.add("dark");
    themechangeanimation.play()
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
    toDark()
}

function changeTheme()  {
    if (body.classList.contains("light")) {
        toDark()
    } else {
        toLight()
    }
}
