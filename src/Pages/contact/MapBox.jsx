import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapBoxl = () => {
	return (
		<MapContainer
			className="markercluster-map h-[400px] mt-12 mx-auto max-w-[90%] md:max-w-[95%]"
			// style={{ zIndex: -10 }}
			center={[6.700071, -1.630783]}
			zoom={9}
			maxZoom={18}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker position={[6.700071, -1.630783]}>
				<Popup>
					Yaay!! <br /> You found me...
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default MapBoxl;
