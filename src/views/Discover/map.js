import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const MapContainer = () => {
  const mapStyles = {
    height: "600px",
    width: "800px",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyD4XPQaQeAeHTCqxYVpPHiWfVCIGGsZ0og">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
        position={{ lat: 47.444, lng: -122.176 }}
      >
        <Marker key="marker_1" position={{ lat: 41.3851, lng: 2.1734 }} />
      </GoogleMap>
    </LoadScript>
  );
};
export default MapContainer;
