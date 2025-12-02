tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#15803d', // Dark green
                secondary: '#000000', // Black
                accent: '#f0fdf4', // Light green
            }
        }
    }
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Mobile: 1 imagem por vez
    spaceBetween: 24, // Gap entre os slides (igual ao gap-6 do tailwind)
    loop: true, // Loop infinito
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Breakpoints para responsividade
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 3, // Desktop: 3 imagens por vez
            spaceBetween: 24,
        },
    },
});

var swiper = new Swiper(".pricingSwiper", { // <-- Classe nova
    slidesPerView: 1, // Mostra 1 card por vez no celular
    spaceBetween: 24, // Espaçamento
    loop: true,
    
    // Centraliza o slide principal no modo de 1 slide
    centeredSlides: true, 

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    // Breakpoints para responsividade
    breakpoints: {
        // Quando a tela for >= 768px (tablets)
        768: {
            slidesPerView: 2, // Mostra 2 cards
            centeredSlides: false, // Não precisa mais centrar
        },
        // Quando a tela for >= 1024px (desktop)
        1024: {
            slidesPerView: 3, // Mostra os 3 cards, como na sua imagem
            centeredSlides: false,
        },
    },
});

   // Toggle mobile menu
   function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Mobile: 1 imagem por vez
    spaceBetween: 24, // Gap entre os slides (igual ao gap-6 do tailwind)
    loop: true, // Loop infinito
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Breakpoints para responsividade
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 3, // Desktop: 3 imagens por vez
            spaceBetween: 24,
        },
    },
});

 // Toggle mobile menu
 function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Initialize feather icons
feather.replace();

