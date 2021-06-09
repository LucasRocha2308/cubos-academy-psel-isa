function solucao(ano) {
  let diffAnos = ano - 2014;
  if (diffAnos % 4 === 0) {
    console.log("COPA");
  } else if (diffAnos % 2 === 0) {
    console.log("JOGOS");
  } else {
    console.log("MEH");
  }
}

function processData(input) {
  solucao(parseInt(input, 10));
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
