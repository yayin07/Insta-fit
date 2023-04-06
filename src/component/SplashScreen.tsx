import React, { useRef, useEffect } from "react";
import { StyleSheet, Animated, SafeAreaView, View } from "react-native";
import tw from "twrnc";
import * as Animatable from "react-native-animatable";

const SplashScreen = ({ Navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View
        style={styles.logoContainer}
        animation="pulse"
        iterationCount="infinite"
        easing="ease-in-out"
        duration={900}
      >
        <Animatable.Image
          style={styles.logo}
          animation="fadeIn"
          duration={5000}
          source={require("../../assets/Image2.png")}
        />
      </Animatable.View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC1CC",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 110,
    height: 110,
  },
});

export default SplashScreen;
