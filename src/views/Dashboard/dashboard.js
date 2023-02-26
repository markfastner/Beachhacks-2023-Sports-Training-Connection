import "./dashboard.css";
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

const dashboard = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    icon: {
      color: "rgba(128,128,128,1)",
      fontSize: 40,
      height: 43,
      width: 40,
    },
    icon2: {
      color: "rgba(128,128,128,1)",
      fontSize: 40,
      height: 44,
      width: 35,
      marginLeft: 38,
    },
    icon3: {
      color: "rgba(128,128,128,1)",
      fontSize: 40,
      height: 44,
      width: 33,
      marginLeft: 39,
    },
    icon4: {
      color: "rgba(128,128,128,1)",
      fontSize: 40,
      height: 44,
      width: 33,
      marginLeft: 38,
    },
    iconRow: {
      height: 44,
      flexDirection: "row",
      marginTop: 46,
      marginLeft: 41,
      marginRight: 54,
    },
    icon5: {
      color: "rgba(128,128,128,1)",
      fontSize: 40,
      height: 43,
      width: 40,
    },
    icon6: {
      color: "rgba(128,128,128,1)",
      fontSize: 40,
      height: 40,
      width: 40,
      marginLeft: 38,
    },
    icon7: {
      color: "rgba(128,128,128,1)",
      fontSize: 40,
      height: 43,
      width: 40,
      marginLeft: 34,
    },
    icon5Row: {
      height: 43,
      flexDirection: "row",
      marginTop: 41,
      marginLeft: 41,
      marginRight: 118,
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
      alignSelf: "center",
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
      alignSelf: "center",
    },
  });

  return (
    <View style={StyleSheet.container}>
      <View style={styles.rect}>
        <Text style={styles.dashBoard}>DashBoard</Text>
      </View>

      <View style={styles.rect2Row}>
        <View style={styles.rect2}>
          <View style={styles.iconRow}>
            <MaterialCommunityIconsIcon
              name="swim"
              style={styles.icon}
            ></MaterialCommunityIconsIcon>
            <IoniconsIcon
              name="ios-fitness"
              style={styles.icon2}
            ></IoniconsIcon>
            <IoniconsIcon
              name="ios-basketball"
              style={styles.icon3}
            ></IoniconsIcon>
            <IoniconsIcon
              name="ios-american-football"
              style={styles.icon4}
            ></IoniconsIcon>
          </View>
          <View style={styles.icon5Row}>
            <MaterialCommunityIconsIcon
              name="volleyball"
              style={styles.icon5}
            ></MaterialCommunityIconsIcon>
            <MaterialIconsIcon
              name="directions-bike"
              style={styles.icon6}
            ></MaterialIconsIcon>
            <MaterialCommunityIconsIcon
              name="home"
              style={styles.icon7}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
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
