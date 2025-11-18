import { initMap } from './mapManager.js';
import { setupRouting } from './routeManager.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Iniciando aplicación de entregas...");

    // 1. Iniciar el Mapa
    const map = initMap();

    // 2. Configurar el sistema de rutas
    const routeControl = setupRouting(map);

    // 3. Evento: Click en el mapa para agregar destino
    // Esto facilita agregar puntos sin saber la dirección exacta
    map.on('click', function(e) {
        const container = L.DomUtil.create('div'),
            startBtn = createButton('Iniciar aquí', container),
            destBtn = createButton('Agregar destino', container);

        L.popup()
            .setContent(container)
            .setLatLng(e.latlng)
            .openOn(map);
            
        // Lógica de los botones del popup
        startBtn.onclick = function() {
            routeControl.spliceWaypoints(0, 1, e.latlng);
            map.closePopup();
        };

        destBtn.onclick = function() {
            const lastIndex = routeControl.getWaypoints().length;
            routeControl.spliceWaypoints(lastIndex, 0, e.latlng);
            map.closePopup();
        };
    });
});

// Función auxiliar para crear botones en el popup
function createButton(label, container) {
    const btn = L.DomUtil.create('button', '', container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = label;
    btn.style.margin = '5px';
    return btn;
}