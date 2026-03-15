function formatNuumiMoney(cents) {
  if (window.Shopify && typeof window.Shopify.formatMoney === 'function') {
    return window.Shopify.formatMoney(cents, window.Shopify.money_format);
  }

  const value = Number(cents || 0) / 100;
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

function initNuumiProductHero(section) {
  if (section.dataset.nuumiInitialized === 'true') return;
  section.dataset.nuumiInitialized = 'true';

  const variantJson = section.querySelector('[data-nuumi-variants-json]');
  const variants = variantJson ? JSON.parse(variantJson.textContent) : [];
  const variantInput = section.querySelector('[data-nuumi-variant-id]');
  const quantityInput = section.querySelector('[data-nuumi-quantity-input]');
  const packInput = section.querySelector('[data-nuumi-pack-label]');
  const purchaseInput = section.querySelector('[data-nuumi-purchase-label]');
  const optionGroups = section.querySelectorAll('[data-nuumi-option-group]');
  const priceEl = section.querySelector('[data-nuumi-price]');
  const compareEl = section.querySelector('[data-nuumi-compare-price]');
  const summaryEl = section.querySelector('[data-nuumi-selection-summary]');
  const submitEl = section.querySelector('[data-nuumi-submit]');
  const gallerySlides = section.querySelectorAll('[data-nuumi-media-slide]');
  const galleryThumbs = section.querySelectorAll('[data-nuumi-media-thumb]');

  function getSelectedQuantity() {
    return Number(quantityInput ? quantityInput.value : 1) || 1;
  }

  function getSelectedOptions() {
    return Array.from(optionGroups).map((group) => {
      const selected = group.querySelector('.nuumi-variant-button.is-active');
      return selected ? selected.dataset.value : '';
    });
  }

  function findVariant() {
    const selected = getSelectedOptions();
    if (!selected.length) return variants[0] || null;

    return (
      variants.find((variant) =>
        selected.every((value, index) => !value || (variant.options && variant.options[index] === value))
      ) || null
    );
  }

  function updateVariantUI() {
    const variant = findVariant();
    if (!variant) return;

    if (variantInput) variantInput.value = variant.id;
    if (submitEl) {
      submitEl.disabled = !variant.available;
      submitEl.querySelector('[data-nuumi-submit-label]').textContent = variant.available
        ? submitEl.dataset.availableLabel
        : submitEl.dataset.soldOutLabel;
    }

    const quantity = getSelectedQuantity();
    const totalPrice = Number(variant.price || 0) * quantity;
    const totalCompareAt = Number(variant.compare_at_price || 0) * quantity;

    if (priceEl) priceEl.textContent = formatNuumiMoney(totalPrice);

    if (compareEl) {
      if (variant.compare_at_price && variant.compare_at_price > variant.price) {
        compareEl.textContent = formatNuumiMoney(totalCompareAt);
        compareEl.hidden = false;
      } else {
        compareEl.hidden = true;
      }
    }

    if (summaryEl) {
      const pack = packInput ? packInput.value : '1 jar';
      const purchase = purchaseInput ? purchaseInput.value : 'One-time purchase';
      summaryEl.textContent = `${purchase} - ${pack}`;
    }

    document.dispatchEvent(
      new CustomEvent('nuumi:variant-change', {
        detail: {
          productId: section.dataset.productId,
          title: section.dataset.productTitle,
          price: formatNuumiMoney(totalPrice),
          compareAt:
            variant.compare_at_price && variant.compare_at_price > variant.price
              ? formatNuumiMoney(totalCompareAt)
              : '',
        },
      })
    );
  }

  optionGroups.forEach((group) => {
    group.querySelectorAll('.nuumi-variant-button').forEach((button) => {
      button.addEventListener('click', () => {
        group.querySelectorAll('.nuumi-variant-button').forEach((item) => {
          item.classList.remove('is-active');
        });
        button.classList.add('is-active');
        updateVariantUI();
      });
    });
  });

  section.querySelectorAll('[data-nuumi-qty-option]').forEach((button) => {
    button.addEventListener('click', () => {
      section.querySelectorAll('[data-nuumi-qty-option]').forEach((item) => {
        item.classList.remove('is-active');
      });
      button.classList.add('is-active');
      if (quantityInput) quantityInput.value = button.dataset.quantity;
      if (packInput) packInput.value = button.dataset.label;
      updateVariantUI();
    });
  });

  section.querySelectorAll('[data-nuumi-plan-option]').forEach((button) => {
    button.addEventListener('click', () => {
      if (button.getAttribute('aria-disabled') === 'true') return;

      section.querySelectorAll('[data-nuumi-plan-option]').forEach((item) => {
        item.classList.remove('is-active');
      });
      button.classList.add('is-active');
      if (purchaseInput) purchaseInput.value = button.dataset.label;
      updateVariantUI();
    });
  });

  galleryThumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const mediaId = thumb.dataset.nuumiMediaThumb;
      galleryThumbs.forEach((item) => {
        item.classList.toggle('is-active', item === thumb);
      });
      gallerySlides.forEach((slide) => {
        slide.classList.toggle('is-active', slide.dataset.nuumiMediaSlide === mediaId);
      });
    });
  });

  updateVariantUI();
}

function initNuumiStickyAtc(section) {
  if (section.dataset.nuumiInitialized === 'true') return;
  section.dataset.nuumiInitialized = 'true';

  const trigger = document.querySelector('[data-nuumi-buy-box]');
  const button = section.querySelector('[data-nuumi-sticky-button]');
  const titleEl = section.querySelector('[data-nuumi-sticky-title]');
  const priceEl = section.querySelector('[data-nuumi-sticky-price]');
  const compareEl = section.querySelector('[data-nuumi-sticky-compare]');

  if (button && trigger) {
    button.addEventListener('click', () => {
      trigger.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function updateVisibility() {
    if (!trigger || window.innerWidth >= 990) {
      section.classList.remove('is-visible');
      return;
    }

    const rect = trigger.getBoundingClientRect();
    const shouldShow = rect.bottom < 0 || rect.top < -160;
    section.classList.toggle('is-visible', shouldShow);
  }

  document.addEventListener('nuumi:variant-change', (event) => {
    const { title, price, compareAt } = event.detail;
    if (titleEl) titleEl.textContent = title;
    if (priceEl) priceEl.textContent = price;
    if (compareEl) {
      compareEl.textContent = compareAt;
      compareEl.hidden = !compareAt;
    }
  });

  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('resize', updateVisibility);
  updateVisibility();
}

function initNuumiProductFaqs(root) {
  root.querySelectorAll('[data-nuumi-product-faq]').forEach((details) => {
    details.addEventListener('toggle', () => {
      if (!details.open) return;
      root.querySelectorAll('[data-nuumi-product-faq]').forEach((item) => {
        if (item !== details) item.open = false;
      });
    });
  });
}

function initNuumiProduct(root = document) {
  root.querySelectorAll('[data-nuumi-product-hero]').forEach(initNuumiProductHero);
  root.querySelectorAll('[data-nuumi-sticky-atc]').forEach(initNuumiStickyAtc);
  initNuumiProductFaqs(root);
}

document.addEventListener('DOMContentLoaded', () => initNuumiProduct(document));
document.addEventListener('shopify:section:load', (event) => initNuumiProduct(event.target));
