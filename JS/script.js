
// ANIMAÇÃO DOS CARDS AO ENTRAR NA TELA

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("aparecer");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

cards.forEach((card) => {
    observer.observe(card);
});


// EFEITO 3D NA FOTO 2

const foto = document.querySelector(".foto2");

if (foto) {

    foto.addEventListener("mousemove", (e) => {

        const rect = foto.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centroX = rect.width / 2;
        const centroY = rect.height / 2;

        const rotacaoY = ((x - centroX) / centroX) * 10;
        const rotacaoX = ((centroY - y) / centroY) * 10;

        foto.style.transform = `
            perspective(600px)
            rotateX(${rotacaoX}deg)
            rotateY(${rotacaoY}deg)
            scale(1.05)
        `;

    });

    foto.addEventListener("mouseleave", () => {

        foto.style.transform = `
            perspective(600px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;

    });

}
