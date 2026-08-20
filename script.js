document.addEventListener("DOMContentLoaded", function() {
    // 1. ANIMACIÓN DE APARECER (Esto hace que se vea el contenido)
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        let windowHeight = window.innerHeight;
        
        reveals.forEach(reveal => {
            let elementTop = reveal.getBoundingClientRect().top;
            let elementVisible = 120;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Ejecuta la animación apenas abres la página

    // 2. VENTANA EMERGENTE DE WHATSAPP
    const btnConectar = document.getElementById('btn-conectar');
    const modal = document.getElementById('contacto-modal');
    const closeModal = document.getElementById('close-modal');
    const copyBtn = document.getElementById('copy-btn');
    
    if(btnConectar && modal) {
        const phoneNumber = document.getElementById('phone-number').innerText;

        btnConectar.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });

        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.classList.remove('active');
            }
        });

        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(phoneNumber).then(() => {
                const originalHTML = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copiado';
                copyBtn.style.color = '#00f0ff';
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalHTML;
                    copyBtn.style.color = '';
                }, 2000);
            });
        });
    }
});