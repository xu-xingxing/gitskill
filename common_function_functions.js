/*
  1.Determine whether the array has duplicate items, true is there, false is no
*/

function judgeRepeatItem (arr) {
  var hash = {};
  for (var i in arr) {
      if (hash[arr[i]]){
          return true; 
      }
      hash[arr[i]] = true;
  }
  return false;
}

/*
  2.The wrapper function is used to obtain the true width and height of the picture
  description: Function packages compatible with IE7+ browser:
*/
  function getNaturalSize (DomElement) {
    var natureSize = {};
    if(window.naturalWidth && window.naturalHeight) {
        natureSize.width = DomElement.naturalWidth;
        natureSizeheight = DomElement.naturalHeight;
    } else {
    var img = new Image();
        img.src = DomElement.src;
        natureSize.width = img.width;
        natureSize.height = img.height;
    }
    return natureSize;
  }

/*
  3.Use js to style dom elements
*/

// <!-- Use js to style dom elements -->
function addClass(el, className){
  // <!-- To determine whether dom already has className -->
  if(hasClass(el,className)){
      return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

// <!-- Determine if there is a className -->
function hasClass(el, className){
  // <!--Create a regular -->
  let reg = new RegExp('(^|\\s)'+className+'(\\s|$)')
  return reg.test(el.className)
  // <!-- Used to determine whether a string matches a certain pattern -->
}