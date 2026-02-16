document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mock Data for Classes/Recordings (if no API)
    const upcomingClasses = [
        { id: 1, title: 'O/L ICT Revision - Hardware Basics', date: '2023-10-25', time: '18:00', link: '#' },
        { id: 2, title: 'A/L ICT - Programming Logic', date: '2023-10-27', time: '16:00', link: '#' },
    ];

    // Example function to populate lists if elements exist
    const classListContainer = document.getElementById('upcoming-classes-list');
    if (classListContainer) {
        upcomingClasses.forEach(cls => {
            const el = document.createElement('div');
            el.className = 'bg-slate-800 p-4 rounded-lg shadow-lg border border-slate-700 hover:border-blue-500 transition duration-300';
            el.innerHTML = `
                <h3 class="text-xl font-bold text-blue-400">${cls.title}</h3>
                <p class="text-slate-400 mt-2"><i class="fas fa-calendar-alt mr-2"></i>${cls.date}</p>
                <p class="text-slate-400"><i class="fas fa-clock mr-2"></i>${cls.time}</p>
                <a href="${cls.link}" class="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">Join Class</a>
            `;
            classListContainer.appendChild(el);
        });
    }
});
