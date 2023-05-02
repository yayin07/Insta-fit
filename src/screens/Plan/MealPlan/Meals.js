import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const Meals = () => {
  const navigation = useNavigation();

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
    navigation.navigate("Snacks");
  };
  return (
    <ScrollView style={tw`flex-1 `}>
      <View
        style={tw`flex items-center bg-[#ffffff] p-2 shadow-lg shadow-black`}
      >
        <Text style={tw`font-bold text-[15px] `}>MEALS</Text>
      </View>
      <View style={tw`px-4 py-4 flex items-center `}>
        <View style={tw`flex flex-col`}>
          <View style={tw`flex flex-row`}>
            <TouchableOpacity key="breakfast" onPress={handleBreakfast}>
              <Image source={require("../../../../assets/Frame9.png")} />
            </TouchableOpacity>
            <TouchableOpacity key="lunch" onPress={handleLunch}>
              <Image source={require("../../../../assets/Frame10.png")} />
            </TouchableOpacity>
          </View>
          <View style={tw`flex flex-row`}>
            <TouchableOpacity key="dinner" onPress={handleDinner}>
              <Image source={require("../../../../assets/Frame13.png")} />
            </TouchableOpacity>
            <TouchableOpacity key="maincourse" onPress={handleMainCourse}>
              <Image source={require("../../../../assets/Frame14.png")} />
            </TouchableOpacity>
          </View>
          <View style={tw`flex flex-row`}>
            <TouchableOpacity key="drinks" onPress={handleDrinks}>
              <Image source={require("../../../../assets/Frame15.png")} />
            </TouchableOpacity>
            <TouchableOpacity key="salad" onPress={handleSalad}>
              <Image source={require("../../../../assets/Frame16.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Meals;
