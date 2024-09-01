function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");
}


document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 100, 3000);
    counter("count2", 100, 1200, 2500);
    counter("count3", 0, 1200, 3000);
    counter("count4", 0, 500, 3000);
});





