import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const Meals = ({ navigation }: any) => {
  const handleBreakfast = () => {
    navigation.navigate("Breakfast");
  };
  const handleLunch = () => {
    navigation.navigate("Lunch");
  };
  const handleDinner = () => {
    navigation.navigate("Dinner");
  };
  const handleMainCourse = () => {
    navigation.navigate("MainCourse");
  };
  const handleSalad = () => {
    navigation.navigate("Salad");
  };
  const handleDrinks = () => {
    navigation.navigate("Drinks");
  };
  return (
    <View style={tw`flex-1 `}>
      <View
        style={tw`flex items-center bg-[#ffffff] p-2 shadow-lg shadow-black`}
      >
        <Text style={tw`font-bold text-[15px] `}>MEALS</Text>
      </View>
      <View style={tw`px-4 py-4 flex items-center `}>
        <View style={tw`flex flex-col`}>
          <View style={tw`flex flex-row`}>
            <TouchableOpacity onPress={handleBreakfast}>
              <Image source={require("../../../../assets/Frame9.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLunch}>
              <Image source={require("../../../../assets/Frame10.png")} />
            </TouchableOpacity>
          </View>
          <View style={tw`flex flex-row`}>
            <TouchableOpacity onPress={handleDinner}>
              <Image source={require("../../../../assets/Frame13.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleMainCourse}>
              <Image source={require("../../../../assets/Frame14.png")} />
            </TouchableOpacity>
          </View>
          <View style={tw`flex flex-row`}>
            <TouchableOpacity onPress={handleDrinks}>
              <Image source={require("../../../../assets/Frame15.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSalad}>
              <Image source={require("../../../../assets/Frame16.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Meals;
