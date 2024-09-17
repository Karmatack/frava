import React, { useEffect } from 'react';

function Map() {
  useEffect(() => {
    // Función para inicializar el mapa
    function initMap() {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -11.876354, lng: -77.022492 }, // Coordenadas de Grupo FraVa
        zoom: 14,
      });

      // Marcador
      new window.google.maps.Marker({
        position: { lat: -11.876354, lng: -77.022492 },
        map,
        title: 'Grupo FraVa',
      });
    }

    // Espera a que Google Maps cargue y luego inicializa el mapa
    if (window.google) {
      initMap();
    }
  }, []);

  return (
    <div>
      {/* Contenedor del mapa */}
      <div id="map" style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
}

export default Map;
