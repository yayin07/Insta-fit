import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
const Intermidiate = () => {
  const navigation = useNavigation();
  const handleButton = () => {
    navigation.navigate("IntermidiatePlan");
  };
  return (
    <TouchableOpacity onPress={handleButton}>
      <Image
        source={require("../../../../assets/Frame17.png")}
        style={tw`w-330px rounded-[10px]`}
      />
    </TouchableOpacity>
  );
};

export default Intermidiate;
