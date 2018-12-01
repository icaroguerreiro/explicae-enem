document.querySelectorAll('[data-tab-target]').forEach(function (o) {
  o.addEventListener('click', function (e) {
    var _this = this;

    e.preventDefault();
    var target = e.target.attributes['data-tab-target'].value;
    document.querySelectorAll('[data-tab]').forEach(function (o) {
      o.classList.remove('-is-active');
      if (target == o.attributes['data-tab'].value) o.classList.add('-is-active');
    });
    document.querySelectorAll('[data-tab-target]').forEach(function (o) {
      o.classList.remove('-is-active');

      _this.classList.add('-is-active');
    });
  });
});
//# sourceMappingURL=bundler.js.map