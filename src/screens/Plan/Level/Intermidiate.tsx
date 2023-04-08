import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const Intermidiate = () => {
  return (
    <View>
      <Image
        source={require("../../../../assets/Frame2.png")}
        style={tw`w-330px`}
      />
    </View>
  );
};

export default Intermidiate;
