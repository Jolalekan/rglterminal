"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Next.js
const icon = L.icon({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const LocationMap = () => {
  // Your business location - Victoria Island, Lagos
  const position: [number, number] = [6.4281, 3.4219]; // Replace with your exact coordinates

  useEffect(() => {
    // Fix for marker icon in production
    // Remove private _getIconUrl in a type-safe way
    delete (
      L.Icon.Default.prototype as unknown as { _getIconUrl?: () => string }
    )._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: "/marker-icon.png",
      iconRetinaUrl: "/marker-icon-2x.png",
      shadowUrl: "/marker-shadow.png",
    });
  }, []);

  //     useEffect(() => {
  //     // Fix for marker icon in production
  //     delete (L.Icon.Default.prototype as any)._getIconUrl
  //     L.Icon.Default.mergeOptions({
  //       iconUrl: '/marker-icon.png',
  //       iconRetinaUrl: '/marker-icon-2x.png',
  //       shadowUrl: '/marker-shadow.png',
  //     })
  //   }, [])

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "100%", width: "100%", borderRadius: "1rem" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          <div className="text-center">
            <strong>Rolling Grazing Bonded Terminal</strong>
            <br />
            klm 26, Opp. Foreign Affair Academy,
            <br />
            Lagos/ Badagry Expressway,
            <br />
            Ayetoro/ Ijanikin,
            <br />
            Lagos State, Nigeria
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;
