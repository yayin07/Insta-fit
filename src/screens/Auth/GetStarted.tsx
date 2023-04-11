import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const GetStarted = ({ navigation }: any) => {
  const handleStarted = () => {
    navigation.navigate("Fitness");
  };

  return (
    <View style={tw`flex-1 `}>
      <View
        style={tw`h-[779px] bg-[#ffffff] p-3 flex items-center rounded-t-[32px]`}
      >
        {/* Logo */}
        <View style={tw`flex flex-row justify-center items-center py-10 px-3`}>
          <View>
            <Image source={require("../../../assets/Image2.png")} />
          </View>
          <View style={tw`px-2`}>
            <View style={tw`flex flex-row`}>
              <Text style={tw`text-[#000000] text-[28px] font-extrabold`}>
                INSTA
              </Text>
              <Text style={tw`text-[#FF0000] text-[28px] font-extrabold`}>
                FIT
              </Text>
            </View>

            <Text style={tw`text-[#000000] text-[16px]`}>BE MORE FIT</Text>
          </View>
        </View>
        {/* Thank You */}
        <View style={tw`px-3 py-1`}>
          <View>
            <Text style={tw`text-[50px] text-center font-bold`}>
              Thank you for registering!
            </Text>
          </View>
        </View>
        {/* Image */}
        <View style={tw`py-10`}>
          <View>
            <Image source={require("../../../assets/Image3.png")} />
          </View>
        </View>
        {/* Button */}
        <TouchableOpacity
          onPress={handleStarted}
          style={tw`bg-[#FF1D38] w-[350px] py-3 px-3 rounded-[30px] absolute bottom-10`}
        >
          <Text
            style={tw`text-center text-[#ffffff] text-[16px] font-semibold`}
          >
            GET STARTED
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStarted;
