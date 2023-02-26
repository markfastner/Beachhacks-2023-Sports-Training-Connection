import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import { Firestore, getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc, collection } from "firebase/firestore";
import { getApp } from "firebase/app";
import { getDb } from "../../firebase.js";

const MapContainer = () => {
  const mapStyles = {
    height: "600px",
    width: "800px",
  };

  const defaultCenter = {
    lat: 33.78129604720617,
    lng: -118.11376327323174,
  };

  const findAll = async () => {
    const doc_refs = await getDoc(collection(getFirestore(), "Markers"));
    const res = [];

    doc_refs.forEach((marker) => {
      res.push({
        id: marker.id,
        ...marker.data(),
      });
    });

    return res;
  };

  const [loading, setLoading] = useState(false);
  const [markers, setMarkers] = useState([]);
  const fetchData = async () => {
    setLoading(true);

    const res = await findAll();

    setMarkers([...res]);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(markers);
  return (
    <LoadScript googleMapsApiKey="AIzaSyC7wxgZWkIeg5_SopuRAryCEvpL5n4lm0E">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
        position={{ lat: 47.444, lng: -122.176 }}
      >
        {/* {markers.length > 0 &&
          markers.map((marker) => (
            <MarkerF
              key={marker.name}
              position={{ lat: marker.lat, lng: marker.lng }}
            />
          ))} */}
        <MarkerF
          key="Location"
          position={{ lat: 33.78129604720617, lng: -118.11376327323174 }}
        />
        <MarkerF
          key="Trainer_1"
          position={{ lat: 33.78359095823877, lng: -118.13001185467596 }}
        />
        <MarkerF
          key="Trainer_2"
          position={{ lat: 33.79016988590503, lng: -118.10729130628533 }}
        />
      </GoogleMap>
    </LoadScript>
  );
};
export default MapContainer;
