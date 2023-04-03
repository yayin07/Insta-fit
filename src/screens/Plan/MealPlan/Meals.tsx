import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const Meals = ({ navigation }: any) => {
  const handleBreakfast = () => {
    navigation.navigate("Breakfast");
  };
  return (
    <View style={tw`flex-1 `}>
      <View
        style={tw`flex items-center bg-[#ffffff] p-2 shadow-lg shadow-black`}
      >
        <Text style={tw`font-bold text-[15px] `}>MEALS</Text>
      </View>
      <View style={tw`px-3 py-4`}>
        <View style={tw`flex flex-row`}>
          <TouchableOpacity onPress={handleBreakfast}>
            <Image source={require("../../../../assets/Frame9.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../../../../assets/Frame10.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Meals;
