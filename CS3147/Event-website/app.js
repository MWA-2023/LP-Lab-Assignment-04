// JavaScript code to add interactivity

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchorLinks.length; i++) {
        anchorLinks[i].addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                scrollTo(target, 500); // Adjust scroll speed (in milliseconds)
            }
        });
    }
});

function scrollTo(element, duration) {
    var start = window.pageYOffset;
    var targetOffset = element.getBoundingClientRect().top;
    var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    var offset = targetOffset - 80; // Adjust scroll offset based on header height
    var easing = function (t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    function scroll() {
        var currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        var time = Math.min(1, ((currentTime - startTime) / duration));
        var scrollY = start + ((offset - start) * easing(time));
        window.scrollTo(0, scrollY);
        if (time < 1) {
            requestAnimationFrame(scroll);
        }
    }

    scroll();
}
