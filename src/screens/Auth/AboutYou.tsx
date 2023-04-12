import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import PickDate from "../../component/PickDate";
import Height from "../../component/Height";
import Weight from "../../component/Weight";

const AboutYou = ({ navigation }: any) => {
  const [birthday, setBirthday] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleNext = () => {
    navigation.navigate("Goal", {});
  };

  return (
    <View style={tw`bg-[#FAA0A0] flex-1`}>
      <View style={tw`px-4 py-4 `}>
        {/* Logo */}
        <View style={tw`flex flex-row justify-center items-center  px-3`}>
          <View>
            <Image source={require("../../../assets/Image2.png")} />
          </View>
          <View style={tw`px-2`}>
            <View style={tw`flex flex-row`}>
              <Text style={tw`text-black text-[22px] font-extrabold`}>
                INSTA
              </Text>
              <Text style={tw`text-[#ffffff] text-[22px] font-extrabold`}>
                FIT
              </Text>
            </View>

            <Text style={tw`text-black text-[13px]`}>BE MORE FIT</Text>
          </View>
        </View>
      </View>

      <View
        style={tw`h-[699px] bg-[#ffffff] absolute -bottom-3 left-0 right-0 p-3 flex items-center rounded-t-[32px]`}
      >
        {/* About */}
        <View style={tw`py-7`}>
          <Text style={tw`py-1 text-[26px] text-center font-bold`}>
            About you
          </Text>
          <Text style={tw`py-1 text-[13px] font-semibold`}>
            tell us about yourself
          </Text>
        </View>
        {/* Gender Tab */}
        <View style={tw`flex flex-row justify-between w-full px-3`}>
          <View style={tw`bg-[#FF1D38] p-3 rounded-[100px]`}>
            <Text style={tw`px-5 text-[#ffffff]`}>Female</Text>
          </View>
          <View style={tw`p-3 rounded-[100px]`}>
            <Text style={tw`px-5 text-[#000000]`}>Male</Text>
          </View>
          {/* <View style={tw`p-3 rounded-[100px]`}>
            <Text style={tw`px-5 text-[#000000]`}>Other</Text>
          </View> */}
        </View>
        {/*  */}
        <View>
          <PickDate />
        </View>
        {/*  */}
        <View>
          <Height />
        </View>
        {/*  */}
        <View>
          <Weight />
        </View>
        {/* Button */}
        <TouchableOpacity
          onPress={handleNext}
          style={tw`bg-[#FF1D38] w-[350px] py-3 px-3 rounded-[30px] absolute bottom-6`}
        >
          <Text
            style={tw`text-center text-[#ffffff] text-[16px] font-semibold`}
          >
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AboutYou;
