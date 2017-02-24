(function() {
  var _tabLinks = document.getElementById("tablinks");

  for (var i = 0, e = _tabLinks.children; i < e.length; i++) {
    e[i].onclick = function() {

      if(!this.classList.contains("active")) {
        var _nextElem = this.parentNode.parentNode.nextElementSibling,
          _getContentOf = this.getAttribute("data-content"),
          _elemFetch = document.getElementById(_getContentOf);

        for (var x = 0, t = _nextElem.children; x < t.length; x++) t[x].classList.remove("active");

        this.parentNode.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        _elemFetch.classList.add("active");
      }
    }
  }
})();
