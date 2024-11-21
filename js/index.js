function toggleNav() {
    const navList = document.querySelectorAll('.nav__list');
    
    navList.forEach((item) => item.classList.toggle('show'))
}