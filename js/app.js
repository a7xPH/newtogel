(function() {
  var _logo = document.getElementById("logo"),
    _logoHeight = _logo.clientHeight,
    _topNav = document.getElementById("top-navbar"),
    _signIn = document.querySelectorAll(".signin"),
    _daftar = document.querySelectorAll(".daftar"),
    _modal = document.getElementById("modal"),
    _overlay = document.querySelectorAll(".overlay"),
    _closeModal = document.querySelectorAll(".close-modal"),
    _holder = 0,
    canClose = false;

  window.onscroll = function() {
    var _scr = this.scrollY || this.pageYOffset;

    if(_scr >= _logoHeight) TweenMax.to(_topNav, 0.5, { top: 0 });
    else TweenMax.to(_topNav, 0.5, { ease: Power2.easeOut, top: -60 });
  }

  for (var i = 0; i < _signIn.length; i++) {
    _signIn[i].onclick = function() {
      openModalAnim(1);
      _holder = 1;
    }
  }

  for (var i = 0; i < _daftar.length; i++) {
    _daftar[i].onclick = function() {
      openModalAnim(2);
      _holder = 2;
    }
  }

  for (var i = 0; i < _overlay.length; i++) {
    _overlay[i].onclick = function() {
      closeModalAnim(_holder);
      _holder = 0;
    }
  }

  for (var i = 0; i < _closeModal.length; i++) {
    _closeModal[i].onclick = function() {
      if (canClose) closeModalAnim(_holder);
      _holder = 0;
    }
  }

  function openModalAnim(i) {
    document.body.style.overflow = "hidden";
    var tl = new TimelineMax();
    tl.to(_modal, 0, {opacity: 1, zIndex: 999999})
      .to(_modal.children[0], 0.4, {opacity: 1})
      .to(_modal.children[i], 0.5, {opacity: 1, top: "15%", display: "block", onComplete: function() {
        canClose = true;
      }}, "-=0.2")
  }

  function closeModalAnim(i) {
    document.body.style.overflow = "auto";
    var tl = new TimelineMax();
    tl.to(_modal.children[i], 0.5, {opacity: 0, top: "18%", display: "none"})
      .to(_modal.children[0], 0.4, {opacity: 0}, "-=0.2")
      .to(_modal, 0, {opacity: 0, zIndex: -1})

    canClose = false;
  }
})();
