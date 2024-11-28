const onPageClose = (e) => {
    const PAGE_TRANSITION_DURATION = 400;

    const link = e.currentTarget.getAttribute('href');
    const currentLink = window.location.origin + window.location.pathname;

    const hasTransition = e.currentTarget.getAttribute('target') !== '_blank' &&
        !link.includes('mailto:') &&
        !link.includes('tel:');

    if (!hasTransition) {
        return;
    }

    const doesLeadToCurrentPage = link[0] === '#' || ((window.location.origin + link).includes(currentLink) && window.location.pathname !== '/');
    if (doesLeadToCurrentPage) {
        return;
    }

    e.preventDefault();

    document.querySelector('body').classList.add('closed');
    setTimeout(() => {
        window.location = link;
    }, PAGE_TRANSITION_DURATION);
};

document.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', onPageClose);
});