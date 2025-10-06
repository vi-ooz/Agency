const details = document.querySelectorAll('.card-faq');

details.forEach ((targetDetail) => {
targetDetail.addEventListener('toggle', () => {
    if (targetDetail.open) {
    details.forEach((other) => {
        if (other !== targetDetail) other.open = false;
    });
    }
});
});
