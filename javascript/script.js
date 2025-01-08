function changerStyle(css) {
  var linkElement = document.getElementById('style');
  var currentStyle = linkElement.getAttribute('href');
  let styleValue = localStorage.getItem("style");

  //console.log(styleValue);
  if (styleValue === null) {
    localStorage.setItem("style", "sombre");
    linkElement.setAttribute('href', "style/alternative/" + css);
    //console.log(localStorage.getItem("style"));
  }
  else if(styleValue == "normal"){
    linkElement.setAttribute('href', "style/alternative/"+ css);
    localStorage.setItem("style", "sombre");
    //console.log(localStorage.getItem("style"));
  }
  else if(styleValue == "sombre"){
    linkElement.setAttribute('href', "style/" + css);
    localStorage.setItem("style", "normal");
    //console.log(localStorage.getItem("style"));

  }
}