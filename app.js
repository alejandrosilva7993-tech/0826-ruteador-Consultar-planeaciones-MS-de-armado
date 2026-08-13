const PAGE_SIZE = 10;
const DETAIL_PAGE_SIZE = 10;
const ROUTES_COLSPAN = 13;

const PLANS = [
  { name: "Plan 1", routes: 4, created: "07/08/2026", enRoute: "10/08/2026", received: "07/08/2026", progress: 100 },
  { name: "Plan 2", routes: 6, created: "07/08/2026", enRoute: "12/08/2026", received: "07/08/2026", progress: 80 },
  { name: "Plan 3", routes: 4, created: "07/08/2026", enRoute: "10/08/2026", received: "07/08/2026", progress: 0 },
  { name: "Plan 4", routes: 5, created: "08/08/2026", enRoute: "11/08/2026", received: "08/08/2026", progress: 45 },
  { name: "Plan 5", routes: 3, created: "08/08/2026", enRoute: "13/08/2026", received: "08/08/2026", progress: 100 },
  { name: "Plan 6", routes: 7, created: "09/08/2026", enRoute: "14/08/2026", received: "09/08/2026", progress: 20 },
  { name: "Plan 7", routes: 2, created: "09/08/2026", enRoute: "12/08/2026", received: "09/08/2026", progress: 60 },
  { name: "Plan 8", routes: 8, created: "10/08/2026", enRoute: "15/08/2026", received: "10/08/2026", progress: 0 },
  { name: "Plan 9", routes: 4, created: "10/08/2026", enRoute: "13/08/2026", received: "10/08/2026", progress: 90 },
  { name: "Plan 10", routes: 5, created: "11/08/2026", enRoute: "16/08/2026", received: "11/08/2026", progress: 35 },
  { name: "Plan 11", routes: 6, created: "11/08/2026", enRoute: "14/08/2026", received: "11/08/2026", progress: 100 },
  { name: "Plan 12", routes: 3, created: "12/08/2026", enRoute: "17/08/2026", received: "12/08/2026", progress: 15 },
];

const DETAIL_ROUTES = [
  {
    id: "R020201",
    vehicle: "Torton",
    plates: "ASE102",
    maxVol: 80,
    maxWeight: 50,
    realVol: 70,
    realWeight: 48,
    occupancy: "80%",
    stops: [
      {
        destination: "Central • San José • Comercial del Valle (Bodega Norte)",
        orders: [
          { id: "ORD-2001", weight: 12, volume: 18, isChild: false },
          {
            id: "ORD-2002-A",
            weight: 8,
            volume: 10,
            isChild: true,
            parentId: "ORD-2002",
            parentWeight: 20,
            parentVolume: 25,
          },
        ],
      },
      {
        destination: "Escazú • San José • Distribuidora Pacífico (Sucursal Centro)",
        orders: [
          { id: "ORD-2003", weight: 15, volume: 22, isChild: false },
        ],
      },
    ],
  },
  {
    id: "R020202",
    vehicle: "Torton",
    plates: "ASE103",
    maxVol: 80,
    maxWeight: 50,
    realVol: 65,
    realWeight: 42,
    occupancy: "75%",
    stops: [
      {
        destination: "Heredia • Heredia • Alimentos del Norte (Planta 1)",
        orders: [
          { id: "ORD-2101", weight: 10, volume: 14, isChild: false },
          {
            id: "ORD-2102-B",
            weight: 6,
            volume: 9,
            isChild: true,
            parentId: "ORD-2102",
            parentWeight: 18,
            parentVolume: 27,
          },
        ],
      },
    ],
  },
  {
    id: "R020203",
    vehicle: "Rabón",
    plates: "ASE210",
    maxVol: 45,
    maxWeight: 30,
    realVol: 40,
    realWeight: 28,
    occupancy: "88%",
    stops: [
      {
        destination: "Alajuela • Alajuela • Ferretería Central (Depósito)",
        orders: [
          { id: "ORD-2201", weight: 14, volume: 20, isChild: false },
          { id: "ORD-2202", weight: 9, volume: 12, isChild: false },
        ],
      },
      {
        destination: "Grecia • Alajuela • Mercado Regional (Punto 3)",
        orders: [
          {
            id: "ORD-2203-A",
            weight: 5,
            volume: 8,
            isChild: true,
            parentId: "ORD-2203",
            parentWeight: 15,
            parentVolume: 24,
          },
        ],
      },
    ],
  },
  {
    id: "R020204",
    vehicle: "Trailer",
    plates: "ASE301",
    maxVol: 120,
    maxWeight: 90,
    realVol: 95,
    realWeight: 78,
    occupancy: "82%",
    stops: [
      {
        destination: "Cartago • Cartago • Logística Este (Hub Cartago)",
        orders: [
          { id: "ORD-2301", weight: 30, volume: 40, isChild: false },
          { id: "ORD-2302", weight: 22, volume: 28, isChild: false },
        ],
      },
    ],
  },
  {
    id: "R020205",
    vehicle: "Torton",
    plates: "ASE104",
    maxVol: 80,
    maxWeight: 50,
    realVol: 55,
    realWeight: 36,
    occupancy: "68%",
    stops: [
      {
        destination: "Puntarenas • Puntarenas • Puerto Pacífico (Muelle 2)",
        orders: [
          { id: "ORD-2401", weight: 18, volume: 25, isChild: false },
        ],
      },
      {
        destination: "Esparza • Puntarenas • Abastos del Pacífico (CD)",
        orders: [
          {
            id: "ORD-2402-A",
            weight: 10,
            volume: 15,
            isChild: true,
            parentId: "ORD-2402",
            parentWeight: 28,
            parentVolume: 40,
          },
          { id: "ORD-2403", weight: 8, volume: 15, isChild: false },
        ],
      },
    ],
  },
  {
    id: "R020206",
    vehicle: "Rabón",
    plates: "ASE211",
    maxVol: 45,
    maxWeight: 30,
    realVol: 38,
    realWeight: 26,
    occupancy: "84%",
    stops: [
      {
        destination: "Liberia • Guanacaste • Comercial Guanacaste (Tienda 1)",
        orders: [
          { id: "ORD-2501", weight: 11, volume: 16, isChild: false },
          { id: "ORD-2502", weight: 15, volume: 22, isChild: false },
        ],
      },
    ],
  },
  {
    id: "R020207",
    vehicle: "Torton",
    plates: "ASE105",
    maxVol: 80,
    maxWeight: 50,
    realVol: 60,
    realWeight: 40,
    occupancy: "75%",
    stops: [
      {
        destination: "Limón • Limón • Caribe Logística (Patio)",
        orders: [
          {
            id: "ORD-2601-A",
            weight: 12,
            volume: 18,
            isChild: true,
            parentId: "ORD-2601",
            parentWeight: 30,
            parentVolume: 45,
          },
          { id: "ORD-2602", weight: 14, volume: 20, isChild: false },
        ],
      },
    ],
  },
  {
    id: "R020208",
    vehicle: "Trailer",
    plates: "ASE302",
    maxVol: 120,
    maxWeight: 90,
    realVol: 100,
    realWeight: 82,
    occupancy: "86%",
    stops: [
      {
        destination: "Desamparados • San José • Mega Distribuidora (Centro)",
        orders: [
          { id: "ORD-2701", weight: 40, volume: 50, isChild: false },
          { id: "ORD-2702", weight: 25, volume: 30, isChild: false },
          {
            id: "ORD-2703-B",
            weight: 17,
            volume: 20,
            isChild: true,
            parentId: "ORD-2703",
            parentWeight: 40,
            parentVolume: 48,
          },
        ],
      },
    ],
  },
  {
    id: "R020209",
    vehicle: "Torton",
    plates: "ASE106",
    maxVol: 80,
    maxWeight: 50,
    realVol: 58,
    realWeight: 39,
    occupancy: "72%",
    stops: [
      {
        destination: "Tibás • San José • Comercial Centro (Sucursal 2)",
        orders: [
          { id: "ORD-2801", weight: 16, volume: 21, isChild: false },
          { id: "ORD-2802", weight: 13, volume: 17, isChild: false },
        ],
      },
    ],
  },
  {
    id: "R020210",
    vehicle: "Rabón",
    plates: "ASE212",
    maxVol: 45,
    maxWeight: 30,
    realVol: 36,
    realWeight: 24,
    occupancy: "80%",
    stops: [
      {
        destination: "Curridabat • San José • Distribuidora Sur (Bodega)",
        orders: [
          { id: "ORD-2901", weight: 12, volume: 15, isChild: false },
          {
            id: "ORD-2902-A",
            weight: 7,
            volume: 9,
            isChild: true,
            parentId: "ORD-2902",
            parentWeight: 19,
            parentVolume: 26,
          },
        ],
      },
    ],
  },
  {
    id: "R020211",
    vehicle: "Trailer",
    plates: "ASE303",
    maxVol: 120,
    maxWeight: 90,
    realVol: 88,
    realWeight: 70,
    occupancy: "78%",
    stops: [
      {
        destination: "Belén • Heredia • Zona Franca (Módulo C)",
        orders: [
          { id: "ORD-3001", weight: 28, volume: 34, isChild: false },
          { id: "ORD-3002", weight: 20, volume: 26, isChild: false },
        ],
      },
    ],
  },
  {
    id: "R020212",
    vehicle: "Torton",
    plates: "ASE107",
    maxVol: 80,
    maxWeight: 50,
    realVol: 63,
    realWeight: 41,
    occupancy: "79%",
    stops: [
      {
        destination: "Santa Ana • San José • Retail Express (CD Oeste)",
        orders: [
          { id: "ORD-3101", weight: 19, volume: 24, isChild: false },
          { id: "ORD-3102", weight: 11, volume: 14, isChild: false },
          {
            id: "ORD-3103-A",
            weight: 9,
            volume: 12,
            isChild: true,
            parentId: "ORD-3103",
            parentWeight: 22,
            parentVolume: 30,
          },
        ],
      },
    ],
  },
];

const DISCARDED_ORDERS = [
  {
    id: "ORD-1042",
    weight: 48,
    volume: 22,
    deliveryClass: "Estándar",
    families: "Abarrotes",
    reason: "La orden excede la capacidad de las unidades disponibles",
  },
  {
    id: "ORD-1088",
    weight: 16,
    volume: 9,
    deliveryClass: "Express",
    families: "Bebidas | Lácteos",
    reason: "Ya no existen vehículos disponibles",
  },
  {
    id: "ORD-1103",
    weight: 35,
    volume: 18,
    deliveryClass: "Programada",
    families: "Congelados",
    reason: "Pertenece a una configuración que no permite generar Split",
  },
  {
    id: "ORD-1120",
    weight: 62,
    volume: 28,
    deliveryClass: "Estándar",
    families: "Ferretería | Empaque",
    reason: "La orden excede la capacidad de las unidades disponibles",
  },
  {
    id: "ORD-1135",
    weight: 21,
    volume: 11,
    deliveryClass: "Express",
    families: "Abarrotes | Bebidas",
    reason: "Ya no existen vehículos disponibles",
  },
  {
    id: "ORD-1148",
    weight: 40,
    volume: 19,
    deliveryClass: "Programada",
    families: "Lácteos",
    reason: "Pertenece a una configuración que no permite generar Split",
  },
  {
    id: "ORD-1162",
    weight: 27,
    volume: 14,
    deliveryClass: "Estándar",
    families: "Congelados | Abarrotes",
    reason: "La orden excede la capacidad de las unidades disponibles",
  },
  {
    id: "ORD-1175",
    weight: 33,
    volume: 16,
    deliveryClass: "Express",
    families: "Bebidas",
    reason: "Ya no existen vehículos disponibles",
  },
  {
    id: "ORD-1188",
    weight: 44,
    volume: 21,
    deliveryClass: "Programada",
    families: "Abarrotes | Empaque",
    reason: "Pertenece a una configuración que no permite generar Split",
  },
  {
    id: "ORD-1194",
    weight: 29,
    volume: 13,
    deliveryClass: "Estándar",
    families: "Lácteos | Congelados",
    reason: "La orden excede la capacidad de las unidades disponibles",
  },
  {
    id: "ORD-1201",
    weight: 18,
    volume: 10,
    deliveryClass: "Express",
    families: "Ferretería",
    reason: "Ya no existen vehículos disponibles",
  },
  {
    id: "ORD-1215",
    weight: 51,
    volume: 25,
    deliveryClass: "Programada",
    families: "Abarrotes",
    reason: "Pertenece a una configuración que no permite generar Split",
  },
];

const EYE_SVG = `
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M12 6.5C7.2 6.5 3.2 9.5 1.5 12c1.7 2.5 5.7 5.5 10.5 5.5s8.8-3 10.5-5.5C20.8 9.5 16.8 6.5 12 6.5zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
  </svg>
`;

let currentPage = 1;
let routesPage = 1;
let discardedPage = 1;
let currentRoutes = [];
let expandedRouteIds = new Set();
let selectedRouteIds = new Set();

const viewList = document.getElementById("view-list");
const viewDetail = document.getElementById("view-detail");
const mainEl = document.querySelector(".main-scroll");

function resetMainScroll() {
  if (mainEl) mainEl.scrollTop = 0;
}
const pageTitle = document.getElementById("page-title");
const pageSubtitle = document.getElementById("page-subtitle");
const btnRegresar = document.getElementById("btn-regresar");

function progressClass(value) {
  if (value >= 100) return "fill-green";
  if (value > 0) return "fill-blue";
  return "fill-empty";
}

function progressWidth(value) {
  if (value <= 0) return "";
  return `style="width:${value}%"`;
}

function countOrders(route) {
  return route.stops.reduce((sum, stop) => sum + stop.orders.length, 0);
}

function renderRow(plan) {
  const fillClass = progressClass(plan.progress);
  const widthAttr = progressWidth(plan.progress);
  return `
    <tr>
      <td>${plan.name}</td>
      <td>${plan.routes}</td>
      <td>${plan.created}</td>
      <td>${plan.enRoute}</td>
      <td class="td-recep">${plan.received}</td>
      <td>
        <div class="progress">
          <span class="progress-label">${plan.progress}%</span>
          <div class="progress-track">
            <div class="progress-fill ${fillClass}" ${widthAttr}></div>
          </div>
        </div>
      </td>
      <td>
        <button class="btn-detalle" type="button" data-plan="${plan.name}">
          ${EYE_SVG}
          Ver detalle
        </button>
      </td>
    </tr>
  `;
}

function totalPages() {
  return Math.max(1, Math.ceil(PLANS.length / PAGE_SIZE));
}

function renderPagination(options) {
  const {
    total,
    page,
    pageSize,
    infoId,
    prevId,
    nextId,
    numbersId,
    onChange,
  } = options;

  const pages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), pages);
  const start = (safePage - 1) * pageSize;
  const end = Math.min(start + pageSize, total);
  const from = total === 0 ? 0 : start + 1;

  document.getElementById(infoId).textContent = `Mostrando ${from}–${end} de ${total}`;

  const prev = document.getElementById(prevId);
  const next = document.getElementById(nextId);
  prev.disabled = safePage <= 1 || total === 0;
  next.disabled = safePage >= pages || total === 0;

  const numbers = document.getElementById(numbersId);
  numbers.innerHTML = "";
  for (let i = 1; i <= pages; i += 1) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "page-btn page-num" + (i === safePage ? " is-active" : "");
    btn.textContent = String(i);
    btn.setAttribute("aria-label", `Página ${i}`);
    if (i === safePage) btn.setAttribute("aria-current", "page");
    btn.addEventListener("click", () => onChange(i));
    numbers.appendChild(btn);
  }

  return { safePage, start, end, pages };
}

function renderTable() {
  const { safePage, start, end } = renderPagination({
    total: PLANS.length,
    page: currentPage,
    pageSize: PAGE_SIZE,
    infoId: "pagination-info",
    prevId: "page-prev",
    nextId: "page-next",
    numbersId: "page-numbers",
    onChange: (page) => {
      currentPage = page;
      renderTable();
    },
  });
  currentPage = safePage;
  document.getElementById("plans-tbody").innerHTML = PLANS.slice(start, end)
    .map(renderRow)
    .join("");
}

function formatWeight(value) {
  return `${value} kg`;
}

function formatVolume(value) {
  return `${value} m³`;
}

function renderOrderRow(order) {
  const isChild = Boolean(order.isChild);
  const childBadge = isChild
    ? '<span class="order-badge order-badge-child">Orden hija</span>'
    : '<span class="order-badge order-badge-plain">Sin split</span>';
  const parentId = isChild ? order.parentId : "No aplica";
  const parentWeight = isChild ? formatWeight(order.parentWeight) : "No aplica";
  const parentVolume = isChild ? formatVolume(order.parentVolume) : "No aplica";
  return `
    <tr class="${isChild ? "is-child" : ""}">
      <td class="td-order-id">${order.id}</td>
      <td>${formatWeight(order.weight)}</td>
      <td>${formatVolume(order.volume)}</td>
      <td>${childBadge}</td>
      <td>${parentId}</td>
      <td>${parentWeight}</td>
      <td>${parentVolume}</td>
    </tr>
  `;
}

function renderExpandedContent(route) {
  const stopsHtml = route.stops
    .map((stop, stopIndex) => {
      const orderCount = stop.orders.length;
      return `
      <article class="stop-block">
        <header class="stop-header">
          <span class="stop-index">Parada ${stopIndex + 1}</span>
          <span class="stop-destination-label">Destino</span>
          <span class="stop-destination">${stop.destination}</span>
          <span class="stop-orders-count">${orderCount} ${orderCount === 1 ? "orden" : "órdenes"}</span>
        </header>
        <div class="orders-table-wrap">
          <table class="orders-table">
            <thead>
              <tr>
                <th>ID de orden</th>
                <th>Peso</th>
                <th>Volumen</th>
                <th>Orden hija</th>
                <th>ID orden padre</th>
                <th>Peso padre</th>
                <th>Vol. padre</th>
              </tr>
            </thead>
            <tbody>
              ${stop.orders.map(renderOrderRow).join("")}
            </tbody>
          </table>
        </div>
      </article>
    `;
    })
    .join("");

  return `
    <tr class="route-expand-row" data-expand-for="${route.id}">
      <td colspan="${ROUTES_COLSPAN}">
        <div class="route-orders-panel">
          <div class="route-orders-heading">
            <p class="route-orders-title">Órdenes de la ruta ${route.id}</p>
            <p class="route-orders-subtitle">${route.stops.length} ${route.stops.length === 1 ? "parada" : "paradas"} · ${countOrders(route)} órdenes</p>
          </div>
          <div class="stops-list">
            ${stopsHtml}
          </div>
        </div>
      </td>
    </tr>
  `;
}

function renderRouteRow(route, index) {
  const orderCount = countOrders(route);
  const isExpanded = expandedRouteIds.has(route.id);
  const zebra = index % 2 === 0 ? "is-odd" : "is-even";
  const main = `
    <tr class="route-row ${zebra} ${isExpanded ? "is-expanded" : ""}" data-route-id="${route.id}">
      <td class="td-expand">
        <button
          type="button"
          class="btn-expand ${isExpanded ? "is-open" : ""}"
          data-expand="${route.id}"
          aria-expanded="${isExpanded}"
          aria-label="${isExpanded ? "Ocultar" : "Mostrar"} órdenes de ${route.id}"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true">
            <path d="M9 6l6 6-6 6"/>
          </svg>
        </button>
      </td>
      <td class="td-check">
        <input
          type="checkbox"
          aria-label="Seleccionar ${route.id}"
          data-route-check="${route.id}"
          ${selectedRouteIds.has(route.id) ? "checked" : ""}
        />
      </td>
      <td>${route.id}</td>
      <td>${route.vehicle}</td>
      <td>${route.plates}</td>
      <td>${route.maxVol}</td>
      <td>${route.maxWeight}</td>
      <td>${route.realVol}</td>
      <td>${route.realWeight}</td>
      <td>${route.occupancy}</td>
      <td class="td-orders-count">${orderCount}</td>
      <td class="td-action">
        <button type="button" class="btn-aceptar" data-accept="${route.id}" aria-label="Aceptar ruta ${route.id}">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true">
            <path d="M5 12l5 5L20 7"/>
          </svg>
          Aceptar
        </button>
      </td>
      <td class="td-action">
        <button type="button" class="btn-rechazar" data-reject="${route.id}" aria-label="Rechazar ruta ${route.id}">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true">
            <circle cx="12" cy="12" r="9"/>
            <path d="M8.5 8.5l7 7M15.5 8.5l-7 7"/>
          </svg>
          Rechazar
        </button>
      </td>
    </tr>
  `;
  return isExpanded ? main + renderExpandedContent(route) : main;
}

function getSelectedRouteIds() {
  return Array.from(selectedRouteIds);
}

function updateRoutesSelectionHint() {
  const badges = document.querySelectorAll("[data-selection-badge]");
  const count = selectedRouteIds.size;
  const label = `${count} ${count === 1 ? "ruta seleccionada" : "rutas seleccionadas"}`;

  badges.forEach((badge) => {
    if (count === 0) {
      badge.hidden = true;
      badge.textContent = "0";
      badge.removeAttribute("aria-label");
      return;
    }

    badge.hidden = false;
    badge.textContent = String(count);
    badge.setAttribute("aria-label", label);
  });
}

function syncRoutesCheckAll() {
  const checkAll = document.getElementById("routes-check-all");
  const boxes = Array.from(document.querySelectorAll("#routes-tbody input[data-route-check]"));
  if (!boxes.length) {
    checkAll.checked = false;
    checkAll.indeterminate = false;
    return;
  }
  const checkedCount = boxes.filter((cb) => selectedRouteIds.has(cb.dataset.routeCheck)).length;
  checkAll.checked = checkedCount === boxes.length;
  checkAll.indeterminate = checkedCount > 0 && checkedCount < boxes.length;
}

function syncRoutesViewportWidth() {
  const scroller = document.querySelector(".routes-scroll");
  if (!scroller) return;
  const width = Math.max(0, Math.floor(scroller.clientWidth));
  scroller.style.setProperty("--routes-viewport-w", `${width}px`);
}

function renderRoutesTable() {
  const { safePage, start, end } = renderPagination({
    total: currentRoutes.length,
    page: routesPage,
    pageSize: DETAIL_PAGE_SIZE,
    infoId: "routes-pagination-info",
    prevId: "routes-page-prev",
    nextId: "routes-page-next",
    numbersId: "routes-page-numbers",
    onChange: (page) => {
      routesPage = page;
      renderRoutesTable();
    },
  });
  routesPage = safePage;

  const slice = currentRoutes.slice(start, end);
  document.getElementById("routes-tbody").innerHTML = slice
    .map((route, index) => renderRouteRow(route, index))
    .join("");

  syncRoutesCheckAll();
  updateRoutesSelectionHint();
  syncRoutesViewportWidth();
}

function renderDiscardedTable() {
  const { safePage, start, end } = renderPagination({
    total: DISCARDED_ORDERS.length,
    page: discardedPage,
    pageSize: DETAIL_PAGE_SIZE,
    infoId: "discarded-pagination-info",
    prevId: "discarded-page-prev",
    nextId: "discarded-page-next",
    numbersId: "discarded-page-numbers",
    onChange: (page) => {
      discardedPage = page;
      renderDiscardedTable();
    },
  });
  discardedPage = safePage;

  document.getElementById("discarded-tbody").innerHTML = DISCARDED_ORDERS.slice(start, end)
    .map(
      (o) => `
      <tr>
        <td>${o.id}</td>
        <td>${formatWeight(o.weight)}</td>
        <td>${formatVolume(o.volume)}</td>
        <td>${o.deliveryClass}</td>
        <td>${o.families}</td>
        <td class="td-discard-reason">${o.reason}</td>
      </tr>
    `
    )
    .join("");
}

function updateDiscardedSummary(selectedTotal) {
  const discardedTotal = DISCARDED_ORDERS.length;
  const pct =
    selectedTotal > 0 ? `${Math.round((discardedTotal / selectedTotal) * 100)}%` : "0%";

  const totalEl = document.getElementById("discarded-total");
  const pctEl = document.getElementById("discarded-pct");
  if (totalEl) totalEl.textContent = String(discardedTotal);
  if (pctEl) pctEl.textContent = pct;
}

function toggleRouteExpand(routeId) {
  if (expandedRouteIds.has(routeId)) {
    expandedRouteIds.delete(routeId);
  } else {
    expandedRouteIds.add(routeId);
  }
  renderRoutesTable();
}

function renderDetail(planName) {
  const plan = PLANS.find((p) => p.name === planName) || PLANS[0];
  currentRoutes = DETAIL_ROUTES.slice();
  routesPage = 1;
  discardedPage = 1;
  expandedRouteIds = new Set();
  selectedRouteIds = new Set();

  const totalOrders = currentRoutes.reduce((sum, route) => sum + countOrders(route), 0);
  const selectedTotal = totalOrders + DISCARDED_ORDERS.length;
  document.querySelector('[data-key="selected"]').textContent = String(selectedTotal);
  document.querySelector('[data-key="assigned"]').textContent = String(totalOrders);
  document.querySelector('[data-key="pct"]').textContent =
    selectedTotal > 0 ? `${Math.round((totalOrders / selectedTotal) * 100)}%` : "0%";
  document.querySelector('[data-key="routes"]').textContent = String(currentRoutes.length);

  renderRoutesTable();
  updateDiscardedSummary(selectedTotal);
  renderDiscardedTable();
}

function showDetail(planName) {
  pageTitle.textContent = "Ver detalle de planeación";
  pageSubtitle.textContent = planName;
  btnRegresar.hidden = false;
  viewList.hidden = true;
  viewDetail.hidden = false;
  renderDetail(planName);
  resetMainScroll();
  requestAnimationFrame(syncRoutesViewportWidth);
}

function showList() {
  pageTitle.textContent = "Rutas";
  pageSubtitle.textContent = "Consultar planeaciones optimizadas";
  btnRegresar.hidden = true;
  viewDetail.hidden = true;
  viewList.hidden = false;
  resetMainScroll();
}

document.getElementById("page-prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage -= 1;
    renderTable();
  }
});

document.getElementById("page-next").addEventListener("click", () => {
  if (currentPage < totalPages()) {
    currentPage += 1;
    renderTable();
  }
});

document.getElementById("routes-page-prev").addEventListener("click", () => {
  if (routesPage > 1) {
    routesPage -= 1;
    renderRoutesTable();
  }
});

document.getElementById("routes-page-next").addEventListener("click", () => {
  const pages = Math.max(1, Math.ceil(currentRoutes.length / DETAIL_PAGE_SIZE));
  if (routesPage < pages) {
    routesPage += 1;
    renderRoutesTable();
  }
});

document.getElementById("discarded-page-prev").addEventListener("click", () => {
  if (discardedPage > 1) {
    discardedPage -= 1;
    renderDiscardedTable();
  }
});

document.getElementById("discarded-page-next").addEventListener("click", () => {
  const pages = Math.max(1, Math.ceil(DISCARDED_ORDERS.length / DETAIL_PAGE_SIZE));
  if (discardedPage < pages) {
    discardedPage += 1;
    renderDiscardedTable();
  }
});

document.getElementById("plans-tbody").addEventListener("click", (event) => {
  const btn = event.target.closest(".btn-detalle");
  if (!btn) return;
  showDetail(btn.dataset.plan);
});

document.getElementById("routes-tbody").addEventListener("click", (event) => {
  const expandBtn = event.target.closest(".btn-expand[data-expand]");
  if (expandBtn) {
    toggleRouteExpand(expandBtn.dataset.expand);
    return;
  }

  const acceptBtn = event.target.closest("[data-accept]");
  if (acceptBtn) {
    window.alert(`Ruta aceptada: ${acceptBtn.dataset.accept}`);
    return;
  }

  const rejectBtn = event.target.closest("[data-reject]");
  if (rejectBtn) {
    window.alert(`Ruta rechazada: ${rejectBtn.dataset.reject}`);
  }
});

document.getElementById("routes-tbody").addEventListener("change", (event) => {
  if (!event.target.matches("input[data-route-check]")) return;
  const routeId = event.target.dataset.routeCheck;
  if (event.target.checked) {
    selectedRouteIds.add(routeId);
  } else {
    selectedRouteIds.delete(routeId);
  }
  syncRoutesCheckAll();
  updateRoutesSelectionHint();
});

document.getElementById("routes-check-all").addEventListener("change", (event) => {
  const checked = event.target.checked;
  document.querySelectorAll("#routes-tbody input[data-route-check]").forEach((cb) => {
    cb.checked = checked;
    if (checked) {
      selectedRouteIds.add(cb.dataset.routeCheck);
    } else {
      selectedRouteIds.delete(cb.dataset.routeCheck);
    }
  });
  event.target.indeterminate = false;
  updateRoutesSelectionHint();
});

document.getElementById("btn-bulk-accept").addEventListener("click", () => {
  const ids = getSelectedRouteIds();
  if (!ids.length) {
    window.alert("Selecciona al menos una ruta para aceptar.");
    return;
  }
  window.alert(`Rutas aceptadas: ${ids.join(", ")}`);
});

document.getElementById("btn-bulk-reject").addEventListener("click", () => {
  const ids = getSelectedRouteIds();
  if (!ids.length) {
    window.alert("Selecciona al menos una ruta para rechazar.");
    return;
  }
  window.alert(`Rutas rechazadas: ${ids.join(", ")}`);
});

btnRegresar.addEventListener("click", showList);

window.addEventListener("resize", syncRoutesViewportWidth);

renderTable();
syncRoutesViewportWidth();