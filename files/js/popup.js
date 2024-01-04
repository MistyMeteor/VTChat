const opt = document.getElementById("opt");
const help = document.getElementById("help");
function optTrigger() {
  opt.style.zIndex = cover.style.zIndex = '99';
  opt.style.visibility = cover.style.visibility = 'visible';
  opt.style.opacity = cover.style.opacity = 1;
  opt.style.transform = "scale(1)";
}
function optUntrigger() {
  opt.style.zIndex = cover.style.zIndex = '99';
  setTimeout(function() {
    opt.style.visibility = cover.style.visibility = "hidden";
  }, 250)
  opt.style.opacity = cover.style.opacity = 0;
  opt.style.transform = "scale(0)";
}
function helpTrigger() {
  help.style.zIndex = cover.style.zIndex = '99';
  help.style.visibility = cover.style.visibility = 'visible';
  help.style.opacity = cover.style.opacity = 1;
  help.style.transform = "scale(1)";
}
function helpUntrigger() {
  help.style.zIndex = cover.style.zIndex = '99';
  setTimeout(function() {
    help.style.visibility = cover.style.visibility = "hidden";
  }, 250)
  help.style.opacity = cover.style.opacity = 0;
  help.style.transform = "scale(0)";
}