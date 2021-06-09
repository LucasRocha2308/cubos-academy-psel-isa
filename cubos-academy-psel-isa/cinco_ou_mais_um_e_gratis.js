function solucao(precos) {
  let total = 0;
  let ordenarLista = precos.sort(function (a, b) {
    return a - b;
  });
  if (precos.length >= 5) {
    for (let i = 1; i < ordenarLista.length; i++) {
      total += ordenarLista[i];
    }
    console.log(total);
  } else {
    for (let i = 0; i < precos.length; i++) {
      total += ordenarLista[i];
    }
    console.log(total);
  }
}

function processData(input) {
  solucao(
    input
      .trim()
      .split(" ")
      .filter((x) => x)
      .map((x) => parseInt(x, 10))
  );
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
