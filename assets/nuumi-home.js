function initNuumiHome(root = document) {
  document.documentElement.classList.add('nuumi-home-enhanced');

  root.querySelectorAll('[data-nuumi-faq]').forEach((details) => {
    if (details.dataset.nuumiInit === 'true') return;
    details.dataset.nuumiInit = 'true';

    details.addEventListener('toggle', () => {
      if (!details.open) return;

      root.querySelectorAll('[data-nuumi-faq]').forEach((other) => {
        if (other !== details) other.open = false;
      });
    });
  });

  const revealNodes = root.querySelectorAll('.nuumi-home-reveal');
  if (!revealNodes.length || !('IntersectionObserver' in window)) {
    revealNodes.forEach((node) => {
      node.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -30px 0px',
    }
  );

  revealNodes.forEach((node) => {
    observer.observe(node);
  });
}

document.addEventListener('DOMContentLoaded', () => initNuumiHome(document));
document.addEventListener('shopify:section:load', (event) => initNuumiHome(event.target));
