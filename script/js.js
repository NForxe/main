function pr1() {
  var x = Number(document.forms["frm"].elements["x"].value),
      n = Number(document.forms["frm"].elements["n"].value), 
      sum = 0, sum1 = 1;
  for(var i = 1; i <= n; i++){
    var res = (((-1) ** i) * (x ** (2 * i))) / (sum1 * i);
    sum = sum + res;
  }
  document.writeln(res);
}