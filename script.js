// toggle icon navbar
// scroll sections 
window.onscroll = () => {
    // sticky Headers
    let header = document.quaryselector('header');
    let navlinks =document.quaryselector('header nav a ');

    header.classlist.toggle('sticky',window.scrollY>100);
window.onscroll = () => 
Selection.foreach(sec =>{
    let top =window.scrollY;
    let offset =sec.offsetTop- 100;
    let height =sec.offsetheight;
    let id =sec.getattribute('id');
    if(top >= offset && top <offset  + height) {
        // active navbar links
        navlinks.foreach(links => {
            links.classlist.remove('active');
            document.querySelector('header nav a[href*=''+id+]') .classList.add('active');

        })
    }
});
// }
// script.js

// // Function to toggle the mobile menu
// function toggleMenu() {
//     const menuIcon = document.getElementById('menu-icon');
//     const navbar = document.querySelector('.navbar');

//     menuIcon.addEventListener('click', () => {
//         navbar.classList.toggle('show');
//     });
// }

// Function to handle smooth scrolling for anchor links
function smoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
//     links.forEach(link => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();

//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);

//             window.scrollTo({
//                 top: targetElement.offsetTop - 50, // Adjust the offset based on your design
//                 behavior: 'smooth'
//             });
//         });
//     });
// }

// // Call the functions when the DOM is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     toggleMenu();
//     smoothScrolling();
// 
