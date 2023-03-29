import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const VideoLink = ({ navigation }: any) => {
  const handleStart = () => {
    navigation.navigate("Timer");
  };
  return (
    <View style={tw`flex-1`}>
      <View>
        {/* Logo */}
        <View
          style={tw`flex flex-row justify-start items-center py-2 px-4 shadow-xl shadow-black bg-white`}
        >
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
              <Text style={tw`text-[#FF1D38] text-[20px] font-extrabold`}>
                FIT
              </Text>
            </View>

            <Text style={tw`text-[#000000] text-[10px]`}>BE MORE FIT</Text>
          </View>
        </View>
      </View>
      <View>
        <Image
          source={require("../../assets/Frame5.png")}
          style={tw`h-[350px]`}
        />
      </View>
      {/* Description */}
      <View style={tw`p-3`}>
        <Text style={tw`text-[17px] font-bold px-3 `}>Description</Text>
        <Text style={tw`px-3`}>
          A new 20 min Sweaty All Standing HIIT! It's a quick & effective home
          workout with light weights. Short on time? This workout will make you
          burn calories and get the heart rate up! Imagine how good you'll feel
          after just 20 mins of moving your body? It's a GOOD DAY to push it to
          your limit
        </Text>
      </View>
      {/*  */}
      <View>
        <View style={tw`flex items-center`}>
          <Image source={require("../../assets/Line1.png")} />
        </View>

        <View style={tw`flex flex-row justify-start items-center px-9 py-4`}>
          <View>
            <Text style={tw`text-[16px] font-bold`}>Target Areas</Text>
          </View>
          {/*  */}
          <View style={tw`flex flex-row px-4`}>
            <View style={tw`px-3`}>
              <View style={tw`bg-[#FF1D38] px-2 py-2 rounded-[10px]`}>
                <Text style={tw`text-[#ffffff]`}>ABS</Text>
              </View>
            </View>
            <View style={tw`px-3`}>
              <View style={tw`bg-[#FF1D38] px-2 py-2 rounded-[10px]`}>
                <Text style={tw`text-[#ffffff]`}>BACK</Text>
              </View>
            </View>
            <View style={tw`px-3`}>
              <View style={tw`bg-[#FF1D38] px-2 py-2 rounded-[10px]`}>
                <Text style={tw`text-[#ffffff]`}>TORSO</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={tw`flex items-center`}>
          <Image source={require("../../assets/Line1.png")} />
        </View>
      </View>
      {/*  */}
      {/*  */}
      <View>
        <View style={tw`flex flex-row justify-start  px-10 py-4`}>
          <View>
            <Text style={tw`text-[16px] font-bold`}>Procedure</Text>
          </View>
          {/*  */}
          <View style={tw`flex flex-row justify-around px-2`}>
            <View style={tw``}>
              <View style={tw`w-[250px]`}>
                <Text style={tw`text-[#000000] `}>
                  Stand in front of the chair with your feet shoulder width
                  apart, toes pointed slightly out
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/*  */}
      <View style={tw`flex items-center `}>
        <TouchableOpacity
          onPress={handleStart}
          style={tw`bg-[#FF1D38] w-[350px] py-3 px-3 rounded-[30px] `}
        >
          <Text
            style={tw`text-center text-[#ffffff] text-[16px] font-semibold`}
          >
            START
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoLink;
