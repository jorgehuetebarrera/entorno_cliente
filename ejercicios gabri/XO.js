function mismoNumeroDeXeO(texto) {
    texto = texto.toLowerCase();
    const numeroDeX = (texto.match(/x/g) || []).length;
    const numeroDeO = (texto.match(/o/g) || []).length;
    return numeroDeX === numeroDeO;
}
  
  const texto = "xxooXoO";
  const resultado = mismoNumeroDeXeO(texto);
  console.log(resultado); 