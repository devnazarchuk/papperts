"use client";
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

interface StoreLocation {
  id: number;
  name: string;
  address: string;
  coordinates: { lat: number; lng: number };
  description?: string;
}

const redIcon = new L.Icon({
  iconUrl: '/icons/maps.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  className: 'leaflet-red-marker',
});

function MapAutoFit({ locations }: { locations: StoreLocation[] }) {
  const map = useMap();
  useEffect(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(locations.map((loc: StoreLocation) => [loc.coordinates.lat, loc.coordinates.lng]));
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  }, [locations, map]);
  return null;
}

export default function MapClient({ storeLocations }: { storeLocations: StoreLocation[] }) {
  return (
    <MapContainer
      className="w-full h-full z-0"
      style={{ height: '100%', width: '100%', borderRadius: '16px' }}
      center={[storeLocations[0].coordinates.lat, storeLocations[0].coordinates.lng]}
      zoom={10}
      scrollWheelZoom={false}
      aria-label="Pappert Filialen Karte"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Mitwirkende'
        url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
      />
      <MapAutoFit locations={storeLocations} />
      {storeLocations.map((store) => (
        <Marker
          key={store.id}
          position={[store.coordinates.lat, store.coordinates.lng] as [number, number]}
          icon={redIcon as L.Icon}
          eventHandlers={{
            add: (e: L.LeafletEvent) => {
              const marker = e.target as { _icon: HTMLElement };
              marker._icon.classList.add('animate-bounce');
              setTimeout(() => marker._icon.classList.remove('animate-bounce'), 700);
            },
          }}
        >
          <Popup>
            <div className="text-sm">
              <strong className="text-[#D72638]">{store.name}</strong><br />
              {store.address}<br />
              {store.description && <span className="block mt-1 text-gray-700">{store.description}</span>}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
} 