function changerStyle(css) {
  var linkElement = document.getElementById('style');
  var currentStyle = linkElement.getAttribute('href');
  let styleValue = localStorage.getItem("style");

  console.log(styleValue);
  if (styleValue === null) {
    localStorage.setItem("style", "normal");
    linkElement.setAttribute('href', "style/" + css);
    console.log(styleValue);
  }
  else if(styleValue == "normal"){
    linkElement.setAttribute('href', "style/alternative/"+ css);
    localStorage.setItem("style", "sombre");
    console.log(styleValue);
  }
  else if(styleValue == "sombre"){
    linkElement.setAttribute('href', "style/" + css);
    localStorage.setItem("style", "normal");
    console.log(styleValue);

  }
}