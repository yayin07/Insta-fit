import { View, Text, Image, TouchableOpacity } from "react-native";

import React, { useState } from "react";
import tw from "twrnc";

const Subscription = () => {
  const [current, setCurrent] = useState("");

  return (
    <View style={tw`flex justify-start items-center flex-1 bg-[#FF1D38]`}>
      <View style={tw`flex justify-start`}>
        <View style={tw`h-20`}>
          {/* Logo */}
          <View style={tw`flex flex-row justify-center items-center py-2 px-4`}>
            <View style={tw``}>
              <Image
                source={require("../../assets/Image2.png")}
                style={tw`w-10 h-10 `}
              />
            </View>
            {/*  */}
            <View style={tw`px-1`}>
              <View style={tw`flex flex-row`}>
                <Text style={tw`text-[#000000] text-[20px] font-extrabold`}>
                  INSTA
                </Text>
                <Text style={tw`text-[#FFFFFF] text-[20px] font-extrabold`}>
                  FIT
                </Text>
              </View>
              <Text style={tw`text-[#000000] text-[10px]`}>BE MORE FIT</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={tw`h-[720px] w-full bg-[#ffffff] rounded-[32px] p-5`}>
        {/* Intermediate */}
        <View
          style={tw`p-4 shadow-xl shadow-black bg-[#ffffff] h-[150px] flex justify-center rounded-[8px]`}
        >
          <View style={tw`flex flex-row justify-between`}>
            <View>
              <View>
                <Text>Intermediate</Text>
                <Text>₱ 300</Text>
              </View>
              <View>
                <Text>Full access on Intermediate Workout </Text>
                <Text>Like and Comment on InstaFeed</Text>
              </View>
            </View>
            <View>
              <Image source={require("../../assets/Frame7.png")} />
            </View>
          </View>
        </View>

        {/* Advanced */}
        <View
          style={tw`p-4 shadow-xl shadow-black bg-[#ffffff] h-[150px] flex justify-center rounded-[8px]`}
        >
          <View style={tw`flex flex-row justify-between`}>
            <View>
              <View>
                <Text>Advanced</Text>
                <Text>₱ 500</Text>
              </View>
              <View>
                <Text>Full access on Intermediate Workout </Text>
                <Text>Like and Comment on InstaFeed</Text>
              </View>
            </View>
            <View>
              <Image source={require("../../assets/Frame8.png")} />
            </View>
          </View>
        </View>
        {/* Button */}
        <View style={tw`py-3 flex justify-center absolute bottom-6 left-6`}>
          <TouchableOpacity
            // onPress={handleSignin}
            style={tw`bg-[#FF1D38] w-[340px] rounded-[40px] py-2 px-2`}
          >
            <Text style={tw`text-[#ffffff] text-center font-bold text-[18px]`}>
              UPGRADE NOW - SAVE 10%
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Subscription;
