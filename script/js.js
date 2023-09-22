function pr1() {
  var x = Number(document.forms["frm"].elements["x"].value),
    n = Number(document.forms["frm"].elements["n"].value),
    sum = 0,
    sum1 = 1;
  for (var i = 1; i <= n; i++) {
    var res = ((-1) ** i * x ** i) / fa(i);
    sum = sum + res;
  }
  document.writeln(sum);
}

function fa(n) {
  var res = 1;
  for (var i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}
