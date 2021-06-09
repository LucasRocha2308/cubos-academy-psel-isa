function solucao(produtos) {
  let saida = { totalTop: 0, percentual: 0 };
  let total = 0;
  let totalTop = 0;
  for (let i = 0; i < produtos.length; i++) {
    total += produtos[i].preco;
    if (produtos[i].preco >= 10000) {
      totalTop += produtos[i].preco;
    }
  }
  saida.totalTop = totalTop;
  saida.percentual = totalTop / total;
  console.log(saida);
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
