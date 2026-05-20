
const cursor = document.getElementById('mousey');

window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out"
    });
});


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
            ease: 'back.out',
        });
        cursor.classList.remove('hover')
    });

});