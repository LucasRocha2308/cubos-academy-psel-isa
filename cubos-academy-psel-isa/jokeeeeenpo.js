function solucao(joao, andre) {
  // Escreva seu codigo aqui
}

function processData(input) {
  const pairs = input.trim().split(" ");
  const j = pairs[0];
  const a = pairs[1];
  solucao(j, a);
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
