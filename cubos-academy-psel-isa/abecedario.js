function solucao(letra, palavras) {
  let count = 0;
  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i][0] !== letra) {
      count++;
    }
  }
  console.log(count);
}

function processData(input) {
  const { letra, palavras } = JSON.parse(input)[0];
  solucao(letra, palavras);
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
