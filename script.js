const form = document.getElementById('cedulaForm');
const input = document.getElementById('cedulaInput');
const resultado = document.getElementById('resultado');

const API_URL = 'https://cedula-validator.onrender.com';

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const cedula = input.value.trim();

  if (cedula.length === 0) {
    resultado.textContent = 'Por favor ingresa una cédula';
    resultado.style.color = 'red';
    return;
  }

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cedula })
    });

    const data = await res.json();

    if (res.ok) {
      resultado.style.color = data.valid ? 'green' : 'red';
      resultado.textContent = data.message;
    } else {
      resultado.style.color = 'red';
      resultado.textContent = data.message || 'Error en la validación';
    }
  } catch (error) {
    resultado.style.color = 'red';
    resultado.textContent = 'Error al conectar con el servidor';
  }
});
