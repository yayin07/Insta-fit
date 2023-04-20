import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import PlanHeader from "../../component/PlanHeader";
import tw from "twrnc";

const MyFitnessPlan = () => {
  return (
    <View>
      <View
        style={tw`p-3 flex items-center shadow-md shadow-black bg-[#ffffff]`}
      >
        <Text style={tw`text-16px font-bold`}>MyFitnessPlan</Text>
      </View>
      <View style={tw`p-6 flex items-center gap-3`}>
        <TouchableOpacity>
          <Image source={require("../../../assets/Frame29.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../../assets/Frame30.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyFitnessPlan;
