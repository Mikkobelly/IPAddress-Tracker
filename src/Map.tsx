import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

// import 'leaflet/dist/leaflet.css'

type MapProps = {
    lat: number
    lng: number
    ip?: string
}

function SetView({ lat, lng }: MapProps) {
    const map = useMap();
    map.setView([lat, lng], map.getZoom());

    return null;
}


const Map = ({ lat, lng, ip }: MapProps) => {
    return (
        <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <SetView lat={lat} lng={lng} />
            <Marker position={[lat, lng]}>
                <Popup>
                    IP Address: {ip}
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map
