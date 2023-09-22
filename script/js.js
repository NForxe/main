function fa(n) {
  var res = 1;
  for (var i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

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

// Дана последовательность целых чисел а1, а2, …, аn Выяснить какое число встречается раньше – положительное или отрицательное

function pr2() {
  var arr = [2, -5, 7, -3, 0, 9];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      document.writeln(`Первое число положительно ${arr[i]} <br>`);
    } else if (arr[i] < 0) {
      document.writeln(`Первое число отрицательное ${arr[i]}<br>`);
    } else {
      document.writeln("Нет ни положительных, ни отрицательных чисел <br>");
    }
  }
}
