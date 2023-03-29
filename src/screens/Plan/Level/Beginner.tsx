import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const Beginner = () => {
  return (
    <View style={tw``}>
      <View>
        <Image source={require("../../../../assets/Frame1.png")} />
      </View>
    </View>
  );
};

export default Beginner;
