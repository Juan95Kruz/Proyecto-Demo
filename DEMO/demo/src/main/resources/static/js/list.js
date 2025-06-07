async function cargarDatos() {
    const [personas, autores, localidades] = await Promise.all([
        fetch("/api/v1/personas").then(r => r.json()),
        fetch("/api/v1/autores").then(r => r.json()),
        fetch("/api/v1/localidades").then(r => r.json())
    ]);

    const personasList = document.getElementById("personas");
    personasList.innerHTML = "";
    personas.forEach(p => {
        personasList.innerHTML += `<li>${p.nombre} ${p.apellido}, DNI: ${p.dni}, Domicilio: ${p.domicilio?.calle ?? ''} ${p.domicilio?.numero ?? ''} (${p.domicilio?.localidad?.denominacion ?? ''})</li>`;
    });

    const autoresList = document.getElementById("autores");
    autoresList.innerHTML = "";
    autores.forEach(a => {
        autoresList.innerHTML += `<li>${a.nombre} ${a.apellido} - ${a.biografia}</li>`;
    });

    const localidadesList = document.getElementById("localidades");
    localidadesList.innerHTML = "";
    localidades.forEach(l => {
        localidadesList.innerHTML += `<li>${l.denominacion}</li>`;
    });
}

cargarDatos();