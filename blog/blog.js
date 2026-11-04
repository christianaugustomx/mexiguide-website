document.getElementById('navToggle').addEventListener('click', function() {
  this.classList.toggle('open');
  document.getElementById('navLinks').classList.toggle('show');
});

// Category filter on the blog index: each .post-card lists its categories in data-cats
(function() {
  var buttons = document.querySelectorAll('.cat-filter button');
  var cards = document.querySelectorAll('#postGrid .post-card');
  var empty = document.getElementById('emptyCat');
  if (!buttons.length) return;

  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var cat = btn.dataset.cat;
      var shown = 0;
      buttons.forEach(function(b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
      cards.forEach(function(card) {
        var match = cat === 'all' || (card.dataset.cats || '').split(' ').indexOf(cat) !== -1;
        card.style.display = match ? '' : 'none';
        if (match) shown++;
      });
      if (empty) empty.style.display = shown ? 'none' : 'block';
    });
  });
})();
