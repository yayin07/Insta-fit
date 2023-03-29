import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const Height = () => {
  return (
    <View style={tw`w-[340px] py-3`}>
      <View style={tw`flex flex-row `}>
        <View
          style={tw`flex flex-row justify-between w-full shadow-black shadow-md bg-[#ffffff] p-3`}
        >
          <View>
            <Text style={tw`text-[14px] text-black `}>Height</Text>
          </View>

          <View style={tw`flex flex-row items-center`}>
            <Text style={tw`px-3`}>160cm</Text>
            <Image source={require("../../assets/Vector3.png")} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Height;
