function validarCedula(cedula) {
    const multiplicadores = [1, 2]; // Alternar entre 1 y 2
    let suma = 0;

    for (let i = 0; i < cedula.length; i++) {
        let digito = parseInt(cedula[i], 10);
        let resultado = digito * multiplicadores[i % 2];

        // Si el resultado tiene dos dígitos, sumarlos
        if (resultado > 9) {
            resultado = Math.floor(resultado / 10) + (resultado % 10);
        }

        suma += resultado;
    }

    return suma % 10 === 0;
}

module.exports = {
    validarCedula
};