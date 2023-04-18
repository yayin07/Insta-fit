import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const PlanHeader = () => {
  return (
    <View
      style={tw`flex flex-row items-center justify-between shadow-xl bg-[#ffffff] p-2`}
    >
      {/* Logo */}
      <View style={tw`flex flex-row justify-start items-center py-1 px-4`}>
        <View style={tw``}>
          <Image
            source={require("../../assets/Image2.png")}
            style={tw`w-10 h-10 `}
          />
        </View>

        <View style={tw`px-1`}>
          <View style={tw`flex flex-row`}>
            <Text style={tw`text-[#000000] text-[20px] font-extrabold`}>
              INSTA
            </Text>
            <Text style={tw`text-[#FAA0A0] text-[20px] font-extrabold`}>
              FIT
            </Text>
          </View>

          <Text style={tw`text-[#000000] text-[10px]`}>BE MORE FIT</Text>
        </View>
      </View>
    </View>
  );
};

export default PlanHeader;
