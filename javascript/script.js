function allHoverActions(o, d, h, w){
  changeOpacity(o);
  displayDropDown(d);
  changeHeight(h);
  changeWidth(w)
}

function changeOpacity(opacity){
  document.getElementById('main').style.opacity=opacity+"%";
}

function displayDropDown(display){
  document.getElementById('dropdown').style.display = display;
}

function changeHeight(height){
  document.getElementById('centerAlignNav').style.height = height;
}

function changeWidth(width){
  document.getElementById('centerAlignNav').style.width = width;
}
