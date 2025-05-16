const express = require('express');
const cors = require('cors');
const validator = require('./validator');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/validar', (req, res) => {
    const cedula = req.query.cedula;

    if (!cedula || !/^\d{11}$/.test(cedula)) {
        return res.status(400).json({
            cedula,
            valida: false,
            mensaje: "La cédula debe tener 11 dígitos numéricos."
        });
    }

    const esValida = validator.validarCedula(cedula);

    res.json({
        cedula,
        valida: esValida,
        mensaje: esValida ? "La cédula es válida." : "La cédula no es válida."
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
