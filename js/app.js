(function() {
  var _logo = document.getElementById("logo"),
    _logoHeight = _logo.clientHeight,
    _topNav = document.getElementById("top-navbar");

  window.onscroll = function() {
    var _scr = this.scrollY || this.pageYOffset;

    if(_scr >= _logoHeight) {
      TweenMax.to(_topNav, 0.3, { top: 0 });
    } else {
      TweenMax.to(_topNav, 0.3, { top: -60 });
    }
  }
})();
