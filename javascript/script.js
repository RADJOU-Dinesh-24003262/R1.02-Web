function changerStyle(css) {
    var linkElement = document.getElementById('style');
    var currentStyle = linkElement.getAttribute('href');
    
    if (currentStyle.includes("alternative")) {
      linkElement.setAttribute('href', "style/"+ css);
    }else{
      linkElement.setAttribute('href', "style/alternative/" + css)
    }
      
  }