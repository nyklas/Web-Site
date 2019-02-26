var img = document.getElementsByClassName("pics")

function load(){
  for (var i = 0; i < img.length; i++) {
    var rect = img.item(i).getBoundingClientRect().top
    if (rect < window.innerHeight + 50) {
      var altsrc = img.item(i).getAttribute("altsrc")
      img.item(i).setAttribute("src", altsrc)
    }
  }
}

window.addEventListener("scroll", function() {
  load()
});
load()
