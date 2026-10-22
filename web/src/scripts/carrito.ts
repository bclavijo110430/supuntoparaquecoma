type Linea = {
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
};

type DatosEnvio = {
  nombre: string;
  direccion: string;
};

const CLAVE = "spqc-carrito-v1";
const CLAVE_ENVIO = "spqc-envio-v1";

const parsePrecio = (valor: string): number =>
  Number(valor.replace(/[^\d]/g, "")) || 0;

const formatPrecio = (valor: number): string =>
  "$" + valor.toLocaleString("es-CO");

function cargar(): Linea[] {
  try {
    const crudo = localStorage.getItem(CLAVE);
    const datos = crudo ? JSON.parse(crudo) : [];
    if (!Array.isArray(datos)) return [];
    return datos.filter(
      (l): l is Linea =>
        l &&
        typeof l.id === "string" &&
        typeof l.nombre === "string" &&
        typeof l.precio === "number" &&
        typeof l.cantidad === "number",
    );
  } catch {
    return [];
  }
}

function guardar(): void {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(carrito));
  } catch {
    /* almacenamiento no disponible */
  }
}

function cargarEnvio(): DatosEnvio {
  try {
    const crudo = localStorage.getItem(CLAVE_ENVIO);
    const datos = crudo ? JSON.parse(crudo) : null;
    return {
      nombre: typeof datos?.nombre === "string" ? datos.nombre : "",
      direccion: typeof datos?.direccion === "string" ? datos.direccion : "",
    };
  } catch {
    return { nombre: "", direccion: "" };
  }
}

function guardarEnvio(): void {
  try {
    localStorage.setItem(CLAVE_ENVIO, JSON.stringify(envio));
  } catch {
    /* almacenamiento no disponible */
  }
}

let carrito: Linea[] = cargar();
let envio: DatosEnvio = cargarEnvio();

const total = (): number =>
  carrito.reduce((suma, l) => suma + l.precio * l.cantidad, 0);

const unidades = (): number =>
  carrito.reduce((suma, l) => suma + l.cantidad, 0);

function agregar(id: string, nombre: string, precio: number): void {
  const existente = carrito.find((l) => l.id === id);
  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ id, nombre, precio, cantidad: 1 });
  }
  guardar();
  render();
}

function cambiarCantidad(id: string, delta: number): void {
  const linea = carrito.find((l) => l.id === id);
  if (!linea) return;
  linea.cantidad += delta;
  if (linea.cantidad <= 0) {
    carrito = carrito.filter((l) => l.id !== id);
  }
  guardar();
  render();
}

function eliminar(id: string): void {
  carrito = carrito.filter((l) => l.id !== id);
  guardar();
  render();
}

let raiz: HTMLElement | null = null;
let panel: HTMLElement | null = null;
let overlay: HTMLElement | null = null;
let listaEl: HTMLElement | null = null;
let vacioEl: HTMLElement | null = null;
let totalEl: HTMLElement | null = null;
let contadorEl: HTMLElement | null = null;
let botonWa: HTMLButtonElement | null = null;
let datosEl: HTMLElement | null = null;
let nombreEl: HTMLInputElement | null = null;
let direccionEl: HTMLInputElement | null = null;
let nombreErrorEl: HTMLElement | null = null;
let direccionErrorEl: HTMLElement | null = null;
let avisoEl: HTMLElement | null = null;
let whatsappUrl = "https://wa.me/";

let ultimoFoco: HTMLElement | null = null;

const envioCompleto = (): boolean =>
  envio.nombre.trim() !== "" && envio.direccion.trim() !== "";

function marcarCampo(
  input: HTMLInputElement | null,
  error: HTMLElement | null,
  valido: boolean,
): void {
  if (input) {
    if (valido) input.removeAttribute("aria-invalid");
    else input.setAttribute("aria-invalid", "true");
  }
  if (error) error.hidden = valido;
}

function validarNombre(): void {
  marcarCampo(nombreEl, nombreErrorEl, envio.nombre.trim() !== "");
}

function validarDireccion(): void {
  marcarCampo(direccionEl, direccionErrorEl, envio.direccion.trim() !== "");
}

function actualizarBoton(): void {
  const vacio = carrito.length === 0;
  if (botonWa) botonWa.disabled = vacio || !envioCompleto();
  if (avisoEl) avisoEl.hidden = vacio || envioCompleto();
}

function render(): void {
  if (!raiz) return;

  if (contadorEl) {
    contadorEl.textContent = String(unidades());
    contadorEl.hidden = unidades() === 0;
  }

  if (listaEl) {
    listaEl.replaceChildren();
    for (const linea of carrito) {
      listaEl.appendChild(crearFila(linea));
    }
  }

  const vacio = carrito.length === 0;
  if (vacioEl) vacioEl.hidden = !vacio;
  if (listaEl) listaEl.hidden = vacio;
  if (datosEl) datosEl.hidden = vacio;

  if (totalEl) totalEl.textContent = formatPrecio(total());
  actualizarBoton();
}

function crearFila(linea: Linea): HTMLLIElement {
  const fila = document.createElement("li");
  fila.className = "carrito-linea";

  const info = document.createElement("div");
  info.className = "carrito-linea__info";

  const nombre = document.createElement("span");
  nombre.className = "carrito-linea__nombre";
  nombre.textContent = linea.nombre;

  const precio = document.createElement("span");
  precio.className = "carrito-linea__precio";
  precio.textContent = `${formatPrecio(linea.precio)} c/u`;

  info.append(nombre, precio);

  const controles = document.createElement("div");
  controles.className = "carrito-linea__controles";

  const menos = document.createElement("button");
  menos.type = "button";
  menos.className = "carrito-cantidad";
  menos.dataset.carritoMenos = linea.id;
  menos.setAttribute("aria-label", `Quitar una unidad de ${linea.nombre}`);
  menos.textContent = "−";

  const cant = document.createElement("span");
  cant.className = "carrito-cantidad__valor";
  cant.textContent = String(linea.cantidad);

  const mas = document.createElement("button");
  mas.type = "button";
  mas.className = "carrito-cantidad";
  mas.dataset.carritoMas = linea.id;
  mas.setAttribute("aria-label", `Añadir una unidad de ${linea.nombre}`);
  mas.textContent = "+";

  const borrar = document.createElement("button");
  borrar.type = "button";
  borrar.className = "carrito-eliminar";
  borrar.dataset.carritoEliminar = linea.id;
  borrar.setAttribute("aria-label", `Eliminar ${linea.nombre} del pedido`);
  borrar.textContent = "🗑";

  const subtotal = document.createElement("span");
  subtotal.className = "carrito-linea__subtotal";
  subtotal.textContent = formatPrecio(linea.precio * linea.cantidad);

  controles.append(menos, cant, mas, borrar, subtotal);
  fila.append(info, controles);
  return fila;
}

function abrir(): void {
  if (!panel || !overlay) return;
  ultimoFoco = document.activeElement as HTMLElement | null;
  overlay.hidden = false;
  panel.hidden = false;
  requestAnimationFrame(() => {
    panel!.classList.add("carrito-panel--abierto");
    overlay!.classList.add("carrito-overlay--visible");
  });
  const cerrar = panel.querySelector<HTMLElement>("[data-carrito-cerrar-boton]");
  cerrar?.focus();
  document.body.classList.add("carrito-abierto");
}

function cerrar(): void {
  if (!panel || !overlay) return;
  panel.classList.remove("carrito-panel--abierto");
  overlay.classList.remove("carrito-overlay--visible");
  const ocultar = () => {
    panel!.hidden = true;
    overlay!.hidden = true;
  };
  window.setTimeout(ocultar, 220);
  document.body.classList.remove("carrito-abierto");
  ultimoFoco?.focus();
}

function alternar(): void {
  if (panel?.hidden) abrir();
  else cerrar();
}

function enviarWhatsApp(): void {
  if (carrito.length === 0) return;

  if (!envioCompleto()) {
    validarNombre();
    validarDireccion();
    if (!envio.nombre.trim()) nombreEl?.focus();
    else direccionEl?.focus();
    return;
  }

  const lineas = carrito
    .map(
      (l) =>
        `• ${l.cantidad}x ${l.nombre} — ${formatPrecio(l.precio * l.cantidad)}`,
    )
    .join("\n");
  const mensaje =
    `¡Hola *Su Punto Para Que Coma*! 👋 Quiero hacer este pedido:\n\n` +
    `${lineas}\n\n*Total: ${formatPrecio(total())}*\n\n` +
    `*Datos de envío*\n` +
    `*Nombre:* ${envio.nombre.trim()}\n` +
    `*Dirección:* ${envio.direccion.trim()}`;
  const url = `${whatsappUrl}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank", "noopener");
}

function onClick(evento: MouseEvent): void {
  const objetivo = evento.target as HTMLElement | null;
  if (!objetivo) return;

  const agregarBtn = objetivo.closest<HTMLElement>("[data-add]");
  if (agregarBtn) {
    const item = agregarBtn.closest<HTMLElement>(".item");
    if (item) {
      const id = item.dataset.id ?? item.dataset.nombre ?? "";
      const nombre = item.dataset.nombre ?? "";
      const precio = parsePrecio(item.dataset.precio ?? "");
      agregar(id, nombre, precio);
    }
    return;
  }

  const mas = objetivo.closest<HTMLElement>("[data-carrito-mas]");
  if (mas?.dataset.carritoMas) {
    cambiarCantidad(mas.dataset.carritoMas, 1);
    return;
  }

  const menos = objetivo.closest<HTMLElement>("[data-carrito-menos]");
  if (menos?.dataset.carritoMenos) {
    cambiarCantidad(menos.dataset.carritoMenos, -1);
    return;
  }

  const borrar = objetivo.closest<HTMLElement>("[data-carrito-eliminar]");
  if (borrar?.dataset.carritoEliminar) {
    eliminar(borrar.dataset.carritoEliminar);
    return;
  }

  const abrirBtn = objetivo.closest<HTMLElement>("[data-carrito-abrir]");
  if (abrirBtn) {
    alternar();
    return;
  }

  if (objetivo.closest("[data-carrito-cerrar]")) {
    cerrar();
    return;
  }

  if (objetivo.closest("[data-carrito-whatsapp]")) {
    enviarWhatsApp();
  }
}

function onKeydown(evento: KeyboardEvent): void {
  if (!panel || panel.hidden) return;
  if (evento.key === "Escape") {
    evento.preventDefault();
    cerrar();
    return;
  }
  if (evento.key !== "Tab") return;

  const focos = panel.querySelectorAll<HTMLElement>(
    'button:not([disabled]), a[href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])',
  );
  if (focos.length === 0) return;
  const primero = focos[0];
  const ultimo = focos[focos.length - 1];
  if (evento.shiftKey && document.activeElement === primero) {
    evento.preventDefault();
    ultimo.focus();
  } else if (!evento.shiftKey && document.activeElement === ultimo) {
    evento.preventDefault();
    primero.focus();
  }
}

function init(): void {
  raiz = document.querySelector<HTMLElement>("[data-carrito]");
  if (!raiz) return;

  panel = raiz.querySelector<HTMLElement>(".carrito-panel");
  overlay = raiz.querySelector<HTMLElement>(".carrito-overlay");
  listaEl = raiz.querySelector<HTMLElement>("[data-carrito-lista]");
  vacioEl = raiz.querySelector<HTMLElement>("[data-carrito-vacio]");
  totalEl = raiz.querySelector<HTMLElement>("[data-carrito-total]");
  contadorEl = raiz.querySelector<HTMLElement>("[data-carrito-contador]");
  botonWa = raiz.querySelector<HTMLButtonElement>("[data-carrito-whatsapp]");
  datosEl = raiz.querySelector<HTMLElement>("[data-carrito-datos]");
  nombreEl = raiz.querySelector<HTMLInputElement>("[data-carrito-nombre]");
  direccionEl = raiz.querySelector<HTMLInputElement>("[data-carrito-direccion]");
  nombreErrorEl = raiz.querySelector<HTMLElement>("[data-carrito-nombre-error]");
  direccionErrorEl = raiz.querySelector<HTMLElement>(
    "[data-carrito-direccion-error]",
  );
  avisoEl = raiz.querySelector<HTMLElement>("[data-carrito-aviso]");
  whatsappUrl = raiz.dataset.wa || whatsappUrl;

  if (nombreEl) nombreEl.value = envio.nombre;
  if (direccionEl) direccionEl.value = envio.direccion;

  nombreEl?.addEventListener("input", () => {
    envio.nombre = nombreEl!.value;
    guardarEnvio();
    if (envio.nombre.trim()) validarNombre();
    actualizarBoton();
  });
  nombreEl?.addEventListener("blur", validarNombre);

  direccionEl?.addEventListener("input", () => {
    envio.direccion = direccionEl!.value;
    guardarEnvio();
    if (envio.direccion.trim()) validarDireccion();
    actualizarBoton();
  });
  direccionEl?.addEventListener("blur", validarDireccion);

  document.addEventListener("click", onClick);
  document.addEventListener("keydown", onKeydown);

  render();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
