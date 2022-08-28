function UpdateCost() {
  var sum = 0;
  var gn, elem;
  var gn, elem;

  gn = "carne0";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(2.5);
  }
  gn = "carne1";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(5.5);
  }

  gn = "pao0";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(3);
  }
  gn = "pao1";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(2);
  }
  // gn = "pao2";
  // elem = document.getElementById(gn);
  // if (elem.checked == true) {
  //   sum += Number(2);
  // }

  gn = "queijo0";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(2.25);
  }
  gn = "queijo1";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(2.25);
  }
  gn = "queijo2";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(2.5);
  }

  gn = "adicional0";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(2);
  }
  gn = "adicional1";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(3);
  }
  gn = "adicional2";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(2);
  }
  gn = "adicional3";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(2.5);
  }
  gn = "adicional4";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(1);
  }
  gn = "adicional5";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(1.25);
  }
  gn = "adicional6";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(1);
  }
  gn = "adicional7";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(1.5);
  }

  document.getElementById("TotalSanduiche").value = sum;

  document.getElementById("totalcost").innerHTML = sum.toFixed(2);
}
