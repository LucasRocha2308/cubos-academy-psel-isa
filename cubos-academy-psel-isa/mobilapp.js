function solucao(tempo, distancia) {
  let valor = 0;
  if (tempo < 5) {
    valor = 600;
    console.log(valor);
  } else if (tempo > 5 && tempo < 60) {
    valor = tempo * 100 + distancia * 50;
    console.log(valor);
  } else {
    if (distancia < 100) {
      valor = distancia * 200;
      console.log(valor);
    } else {
      valor = distancia * 150;
      console.log(valor);
    }
  }
}

function processData(input) {
  const { tempo, distancia } = JSON.parse(input);
  solucao(tempo, distancia);
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
