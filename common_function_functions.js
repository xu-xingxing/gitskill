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