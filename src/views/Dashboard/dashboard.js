import "./dashboard.css";
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const dashboard = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    rect: {
      width: 461,
      height: 76,
      backgroundColor: "rgba(37,32,32,1)",
      marginTop: 80,
      alignSelf: "center",
    },
    dashBoard: {
      fontFamily: "roboto-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 40,
      marginTop: 14,
      marginLeft: 132,
    },
    rect2: {
      width: 351,
      height: 212,
      backgroundColor: "#E6E6E6",
    },
    rect4: {
      width: 230,
      height: 212,
      backgroundColor: "#E6E6E6",
      marginLeft: 78,
    },
    rect5: {
      width: 199,
      height: 212,
      backgroundColor: "#E6E6E6",
      marginLeft: 46,
    },
    rect2Row: {
      height: 212,
      flexDirection: "row",
      marginTop: 52,
      marginLeft: 234,
      marginRight: 228,
    },
    rect3: {
      width: 351,
      height: 263,
      backgroundColor: "#E6E6E6",
    },
    rect6: {
      width: 475,
      height: 256,
      backgroundColor: "#E6E6E6",
      marginLeft: 78,
      marginTop: 4,
    },
    rect3Row: {
      height: 263,
      flexDirection: "row",
      marginTop: 37,
      marginLeft: 234,
      marginRight: 228,
    },
  });

  return (
    // <section className="Box">
    //   <div className="Dash-Header-Box">
    //     <div className="Dash-Header">
    //       <h1>Dashboard</h1>
    //     </div>
    //   </div>

    //   <div className="Dash-Messages"></div>

    //   <div className="Dash-Analytics"></div>

    //   <div className="Dash-Graph"></div>
    // </section>
    <View style={StyleSheet.container}>
      <View style={styles.rect}>
        <Text style={styles.dashBoard}>DashBoard</Text>
      </View>

      <View style={styles.rect2Row}>
        <View style={styles.rect2}></View>
        <View style={styles.rect4}></View>
        <View style={styles.rect5}></View>
      </View>
      <View style={styles.rect3Row}>
        <View style={styles.rect3}></View>
        <View style={styles.rect6}></View>
      </View>
    </View>
  );
};
export default dashboard;
