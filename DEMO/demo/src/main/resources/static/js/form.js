// Cargar localidades en el select
async function cargarLocalidades() {
    const res = await fetch("/api/v1/localidades");
    const localidades = await res.json();
    const select = document.getElementById("localidad-select");
    select.innerHTML = "";
    localidades.forEach(loc => {
        const option = document.createElement("option");
        option.value = loc.id;
        option.textContent = `${loc.denominacion} (ID: ${loc.id})`;
        select.appendChild(option);
    });
}

document.getElementById("persona-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const domicilio = {
        calle: data.calle,
        numero: data.numero,
        localidad: { id: Number(data.localidadId) }
    };
    const persona = {
        nombre: data.nombre,
        apellido: data.apellido,
        dni: Number(data.dni),
        domicilio,
        libros: []
    };
    await fetch("/api/v1/personas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(persona)
    });
    alert("Persona creada");
});

document.getElementById("autor-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const autor = {
        nombre: data.nombre,
        apellido: data.apellido,
        biografia: data.biografia
    };
    await fetch("/api/v1/autores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(autor)
    });
    alert("Autor creado");
});

document.getElementById("localidad-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const localidad = { denominacion: data.denominacion };
    await fetch("/api/v1/localidades", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(localidad)
    });
    alert("Localidad creada");
    cargarLocalidades();
});

cargarLocalidades();