// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//         }
//         else {
//             entry.target.classList.remove("show");
//         }})
// })


// const hiddenElements = document.querySelectorAll(".hidden")
// hiddenElements.forEach((el) => observer.observe(el));


// document.addEventListener('DOMContentLoaded', function () {
//     const initialScreen = document.getElementById('initialScreen');
//     const mainContentElements = document.querySelectorAll(".main-content")
    
//     if (initialScreen) {
//         initialScreen.addEventListener('animationend', function (event) {
//             // Ensure the event is for the correct animation and it has ended
//             if (event.animationName === 'fadeInOut' && event.elapsedTime === 2) {
//                    initialScreen.style.display = 'none';
//                     mainContentElements.forEach((element) => {
//                     element.classList.add("show-content")
                     
//                 })
//             }
//         });
//     }
// });


document.addEventListener('DOMContentLoaded', function () {
    const initialScreen = document.querySelector('.initial-screen');
    const logo = document.querySelector('.logo-container img');

    initialScreen.addEventListener('animationend', function (event) {
        if (event.animationName === 'fadeInBackground') {
            // Add a delay before fading in the logo
            setTimeout(() => {
                logo.style.opacity = 1;
                // Add loaded class to each main-content section with a delay
                document.querySelectorAll('.main-content').forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add('loaded');
                    }, index * 250); // Adjust delay as needed
                });

                // Allow scrolling after the animation is complete
                document.body.style.overflow = "visible";

                // Hide the initial-screen after a delay
                setTimeout(() => {
                    initialScreen.classList.add('hidden');
                }, 500); // Adjust delay as needed
            }, 1000); // Adjust delay before logo fades in
        }
    });
});
console.log("hii99")