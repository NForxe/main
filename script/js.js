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

// В строке имеется один верный ip-адрес. При помощи регулярного выражения его найти, вывести и сообщить какой он версии.(v4 или v6)

function pr3() {
  var n = document.forms["ip"].elements["n"].value;
  var regexp4 = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/i;
  var regexp6 = /([0-9a-fA-F]{1,4}(:[0-9a-fA-F]{1,4}){7})/i;
  var ip4 = n.match(regexp4);
  var ip6 = n.match(regexp6);

  if (ip4) {
    document.writeln(`IP4 ${ip4[0]}`);
  } else if (ip6) {
    document.writeln(`IP6 ${ip6[0]}`);
  } else {
    document.writeln("IP нет");
  }
}
