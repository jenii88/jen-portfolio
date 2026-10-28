/* Tells the page-turn animation which way you're going (Chromium only; harmless elsewhere).
   Pages in book order — going to an earlier one plays the animation in reverse. */
(function () {
  var order = ['index', 'dedication', 'automations', 'designs', 'web-dev', 'resume', 'closing'];
  function idx(url) {
    var name = new URL(url).pathname.split('/').pop().replace(/\.html$/, '');
    return order.indexOf(name || 'index');
  }
  window.addEventListener('pagereveal', function (e) {
    try {
      if (!e.viewTransition || !window.navigation || !navigation.activation || !navigation.activation.from) return;
      var from = idx(navigation.activation.from.url);
      var to = idx(navigation.activation.entry.url);
      if (from < 0 || to < 0) return;
      var wrapAround = from === order.length - 1 && to === 0; // back cover -> cover keeps going forward
      if (to < from && !wrapAround) e.viewTransition.types.add('back');
    } catch (err) { /* never block navigation */ }
  });
})();
