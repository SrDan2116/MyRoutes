export function initMap() {
    // Coordenadas iniciales (Ejemplo: Centro de Lima, o tu ciudad)
    // Puedes cambiar esto a tu ubicación predeterminada
    const defaultLocation = [-12.0464, -77.0428]; 
    
    const map = L.map('map').setView(defaultLocation, 13);

    // Capa de OpenStreetMap (El mapa visual gratis)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    return map;
}