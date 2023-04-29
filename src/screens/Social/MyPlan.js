import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const MyPlan = () => {
  const navigation = useNavigation();

  const handleFitnessPlan = () => {
    navigation.navigate("EverydayFitnessPlan");
  };

  const handleMealPlan = () => {
    navigation.navigate("EverydayMealPlan");
  };

  return (
    <View style={tw`flex-1 `}>
      <View style={tw`bg-[#ffffff] p-3 shadow-lg flex items-center`}>
        <Text style={tw`font-bold`}>My Fitness Plan</Text>
      </View>
      <View style={tw`flex items-center justify-start py-5`}>
        <View style={tw`p-2`}>
          <TouchableOpacity onPress={handleMealPlan}>
            <Image source={require("../../../assets/Frame35.png")} />
          </TouchableOpacity>
        </View>
        <View style={tw`p-2`}>
          <TouchableOpacity onPress={handleFitnessPlan}>
            <Image source={require("../../../assets/Frame34.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyPlan;
