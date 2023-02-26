import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { useState } from "react";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getApp } from "firebase/app";

// const MarkerFrame = ({ lat, lng }) => {
//   return <MarkerF key="Marker" position={{ lat, lng }} />;
// };

// const db = getFirestore(getApp());

const MapContainer = () => {
  // const [info, setInfo] = useState([]);

  const mapStyles = {
    height: "600px",
    width: "800px",
  };

  const defaultCenter = {
    lat: 33.78129604720617,
    lng: -118.11376327323174,
  };

  // const trainerMarker1 = db.setDoc(
  //   doc(getFirestore(), "Markers", "Trainer 1"),
  //   {
  //     lat: "33.78359095823877",
  //     lng: "-118.13001185467596",
  //   }
  // );
  // const trainerMaker2 = db.setDoc(doc(getFirestore(), "Markers", "Trainer 2"), {
  //   lat: "33.79016988590503",
  //   lng: "-118.10729130628533",
  // });

  // const docSnap = db.getDoc(trainerMarker1);
  // // Start the fetch operation as soon as
  // // the page loads
  // window.addEventListener("load", () => {
  //   Fetchdata();
  // });

  // Fetch the required data using the get() method
  // const Fetchdata = () => {
  //   db.collection("Markers")
  //     .get()
  //     .then((querySnapshot) => {
  //       // Loop through the data and store
  //       // it in array to display
  //       querySnapshot.forEach((element) => {
  //         var data = element.data();
  //         setInfo((arr) => [...arr, data]);
  //       });
  //     });
  // };
  return (
    <LoadScript googleMapsApiKey="AIzaSyC7wxgZWkIeg5_SopuRAryCEvpL5n4lm0E">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
        position={{ lat: 47.444, lng: -122.176 }}
      >
        {/* {info.map((data) => (
          <MarkerFrame lat={data.lat} lng={data.lng} />
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
