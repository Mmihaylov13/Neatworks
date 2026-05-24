(function () {
  var nav = document.getElementById('site-nav');
  if (!nav) return;
  var toggle = nav.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  var backdrop = nav.querySelector('.nav-backdrop');
  if (!toggle || !menu) return;

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
    if (backdrop) backdrop.hidden = !open;
  }

  toggle.addEventListener('click', function () {
    setOpen(!nav.classList.contains('is-open'));
  });

  if (backdrop) {
    backdrop.addEventListener('click', function () {
      setOpen(false);
    });
  }

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      setOpen(false);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  window.matchMedia('(min-width: 701px)').addEventListener('change', function (mq) {
    if (mq.matches) setOpen(false);
  });
})();
