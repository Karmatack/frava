import React, { useEffect, useRef } from "react";

function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Función para cargar el script de Google Maps
    function loadGoogleMapsScript(callback) {
      if (
        typeof window.google === "object" &&
        typeof window.google.maps === "object"
      ) {
        callback();
      } else {
        const existingScript = document.getElementById("googleMaps");

        if (!existingScript) {
          const script = document.createElement("script");
          const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

          script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
          script.id = "googleMaps";
          script.async = true;
          script.defer = true;
          document.body.appendChild(script);

          script.onload = () => {
            callback();
          };
        } else {
          existingScript.onload = () => {
            callback();
          };
        }
      }
    }

    // Función para inicializar el mapa
    function initMap() {
      if (mapRef.current) {
        // Evita inicializar el mapa más de una vez
        return;
      }

      const coordinates = { lat: -11.876354, lng: -77.022492 }; // Coordenadas fijas

      mapRef.current = new window.google.maps.Map(
        document.getElementById("map"),
        {
          center: coordinates,
          zoom: 14,
        }
      );

      new window.google.maps.Marker({
        position: coordinates,
        map: mapRef.current,
        title: "Grupo FraVa",
      });
    }

    // Cargar el script y luego inicializar el mapa
    loadGoogleMapsScript(initMap);
  }, []);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
}

export default Map;
