function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => section.classList.add('hidden'));

    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');

    const navbar = document.getElementById('navbar');
    if (sectionId === 'home' || sectionId === 'read') {
        document.body.style.backgroundColor = '#003c6b';
        navbar.classList.add('navbar-dark');
        navbar.classList.remove('navbar-light');
        navbar.style.backgroundColor = '#003c6b';
        document.querySelectorAll('.nav-link').forEach(link => link.style.color = '#fff');
    } else {
        document.body.style.backgroundColor = '#7ac9fa';
        navbar.classList.add('navbar-light');
        navbar.classList.remove('navbar-dark');
        navbar.style.backgroundColor = '#7ac9fa';
        document.querySelectorAll('.nav-link').forEach(link => link.style.color = '#000');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    showSection('home');
});