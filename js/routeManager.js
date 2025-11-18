export function setupRouting(map) {
    // L.Routing es inyectado globalmente por la librería externa script
    const control = L.Routing.control({
        waypoints: [
            // Puedes iniciar sin puntos o con un punto fijo (ej. tu almacén)
            // L.latLng(-12.0464, -77.0428) 
        ],
        routeWhileDragging: true, // Recalcula si arrastras la ruta
        geocoder: L.Control.Geocoder.nominatim(), // Usa el buscador gratuito de OSM
        language: 'es', // Instrucciones en español
        showAlternatives: false, // Para entregas, queremos la ruta directa
        containerClassName: 'routing-container' // Clase para estilos si necesitas
    }).addTo(map);

    return control;
}

// Pequeño hack porque el geocoder a veces no viene incluido en el core bundle 
// Si falla el geocoder, necesitamos agregar la librería "leaflet-control-geocoder"
// Pero Routing Machine suele traer uno básico integrado.