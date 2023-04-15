import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
const Advanced = () => {
  const navigation = useNavigation();

  const handleButton = () => {
    navigation.navigate("AdvancedPlan");
  };
  return (
    <TouchableOpacity onPress={handleButton}>
      <Image
        source={require("../../../../assets/Frame18.png")}
        style={tw`w-330px rounded-[10px]`}
      />
    </TouchableOpacity>
  );
};

export default Advanced;
