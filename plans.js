/**
 * Studio Namma - Plans Page Vanilla JavaScript
 * Interactions, Scroll Animations, Dynamic Capsule Reveals & Sticky Tab Tracker
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. HERO ENTRANCE ANIMATION ---
  const heroHeading = document.querySelector('.hero_heading_container .line-appear-content');
  if (heroHeading) {
    setTimeout(() => {
      heroHeading.classList.add('in-view');
    }, 150);
  }

  // --- 2. SCROLL INDICATOR CLICK HANDLER ---
  const scrollIndicator = document.querySelector('.hero_bottom_wrapper');
  const introSection = document.querySelector('.section_intro');
  if (scrollIndicator && introSection) {
    scrollIndicator.addEventListener('click', () => {
      introSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // --- 3. INTERSECTION OBSERVER FOR FADE-UP & LINE REVEALS ---
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.1
  };

  const animObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // If the element is or contains a cta_visual, activate capsule expansion
        const capsules = entry.target.querySelectorAll ? entry.target.querySelectorAll('.cta_visual') : [];
        capsules.forEach(capsule => capsule.classList.add('active'));
        if (entry.target.classList.contains('cta_visual')) {
          entry.target.classList.add('active');
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animatable elements
  const animElements = document.querySelectorAll('.fade-up-element, .line-appear-content, .cta_visual');
  animElements.forEach(el => animObserver.observe(el));

  // --- 4. STICKY PLANS TRACKER & INTERACTIVE TABS ---
  const planItems = document.querySelectorAll('.packs_item');
  const planTabs = document.querySelectorAll('.pack_tab');

  // Handle Tab Click -> Smooth scroll to corresponding plan
  planTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const offset = 80;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });

  // Track scrolling and highlight current plan tab
  const updateActivePlanTab = () => {
    let currentPlanId = '';
    const scrollPos = window.scrollY + window.innerHeight * 0.45;

    planItems.forEach(item => {
      const itemTop = item.offsetTop;
      const itemHeight = item.offsetHeight;
      if (scrollPos >= itemTop && scrollPos < itemTop + itemHeight) {
        currentPlanId = item.id;
      }
    });

    if (!currentPlanId && planItems.length > 0) {
      if (window.scrollY < planItems[0].offsetTop) {
        currentPlanId = planItems[0].id;
      } else {
        currentPlanId = planItems[planItems.length - 1].id;
      }
    }

    planTabs.forEach(tab => {
      if (tab.getAttribute('data-target') === currentPlanId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', updateActivePlanTab, { passive: true });
  updateActivePlanTab();

  // --- 5. MICRO-INTERACTIONS & SMOOTH HOVERS ---
  const smallLinks = document.querySelectorAll('.small-link');
  smallLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const arrow = link.querySelector('.small-link_arrow');
      if (arrow) {
        arrow.style.transform = 'translate(6px, -1px)';
      }
    });
    link.addEventListener('mouseleave', () => {
      const arrow = link.querySelector('.small-link_arrow');
      if (arrow) {
        arrow.style.transform = '';
      }
    });
  });
});
