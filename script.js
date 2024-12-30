window.onload = function() {
    let currentPage = 1;
    const totalPages = 3;

    // Show Page 1 initially
    showPage(currentPage);

    // Transition to next page after intro animation
    setTimeout(() => {
        currentPage = 2;
        showPage(currentPage);
    }, 5000); // after 5 seconds (for flower animation)

    // Transition to the ending page after video
    const video = document.getElementById("intro-video");
    video.onended = function() {
        currentPage = 3;
        showPage(currentPage);
    };
};

function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(`page${pageNumber}`).style.display = 'flex';
}
