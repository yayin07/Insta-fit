import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
const Advanced = () => {
  return (
    <View>
      <Image
        source={require("../../../../assets/Frame3.png")}
        style={tw`w-330px`}
      />
    </View>
  );
};

export default Advanced;
