
function repeatStringNumTimes(str, num) {
  // repeat after me

  var repeated = "";

  if (num < 0) {
    return "";
  }

  for (i = 0; i<num; i++){
      repeated += str;
    }
    return repeated;
  }

repeatStringNumTimes("abc", 3);
