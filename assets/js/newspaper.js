(function () {
    var root = document.documentElement;

    // Edition picker: swaps <html data-theme> and remembers the choice.
    var buttons = document.querySelectorAll('[data-set-theme]');
    function markPressed(theme) {
        buttons.forEach(function (b) {
            b.setAttribute('aria-pressed', String(b.getAttribute('data-set-theme') === theme));
        });
    }
    buttons.forEach(function (b) {
        b.addEventListener('click', function () {
            var theme = b.getAttribute('data-set-theme');
            root.setAttribute('data-theme', theme);
            try { localStorage.setItem('dfg-theme', theme); } catch (e) {}
            markPressed(theme);
        });
    });
    markPressed(root.getAttribute('data-theme'));

    // Today's date in the reader's language (the build date is the no-JS fallback).
    var locale = root.lang === 'el' ? 'el-GR' : 'en-US';
    var now = new Date();
    var today = new Intl.DateTimeFormat(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(now);
    // Greek capitals drop the tonos: ΤΕΤΑΡΤΗ, not ΤΕΤΆΡΤΗ.
    var upper = function (s) { return s.normalize('NFD').replace(/́/g, '').normalize('NFC').toUpperCase(); };
    document.querySelectorAll('[data-today]').forEach(function (el) { el.textContent = today; });
    document.querySelectorAll('[data-today-upper]').forEach(function (el) { el.textContent = upper(today); });
    document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = now.getFullYear(); });

    // Embed-code builder on dataset pages.
    var input = document.getElementById('chartId');
    if (input) {
        var code100 = document.querySelector('#embedCode1 code');
        var code700 = document.querySelector('#embedCode2 code');
        var embed = function (id, width) {
            return '<iframe src="https://dataforgreece.com/charts/' + id + '/" frameborder="0" style="border: 0; width: ' + width +
                '; aspect-ratio: 4 / 3;" allowfullscreen></iframe>';
        };
        input.addEventListener('input', function () {
            var id = input.value.trim() || input.getAttribute('data-default');
            code100.textContent = embed(id, '100%');
            code700.textContent = embed(id, '700px');
        });
    }
})();
