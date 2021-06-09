function solucao(obj) {
  if (
    obj.temIngresso === true &&
    (obj.idade >= obj.censura || obj.estaComPais === true)
  ) {
    if (obj.temCarteirinha === true || obj.idade < 18) {
      console.log("MEIA");
    } else {
      console.log("INTEIRA");
    }
  } else {
    console.log("ACESSO NEGADO");
  }
}

function processData(input) {
  solucao(JSON.parse(input));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
