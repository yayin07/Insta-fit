import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const BeginnerPlan = ({ navigation }: any) => {
  const handleStart = () => {
    navigation.navigate("Video");
  };
  return (
    <View style={tw`flex-1 `}>
      <View
        style={tw`p-3 flex items-center shadow-xl shadow-black bg-[#FFFFFF]`}
      >
        <Text style={tw`text-[16px] font-bold`}>Beginner</Text>
      </View>
      {/*  */}
      <View style={tw`flex items-center justify-start h-[800px] py-10  `}>
        {/* Card */}
        <View style={tw`py-5`}>
          <View
            style={tw`shadow-black shadow-xl bg-[#ffffff] rounded-b-[10px]`}
          >
            <View style={tw`flex`}>
              <View>
                <Image source={require("../../../assets/Frame4.png")} />
              </View>
              <View style={tw`flex flex-row items-center justify-between px-4`}>
                <View style={tw`py-3 px-3`}>
                  <View>
                    <Text style={tw`text-[16px] font-bold`}>Chair Squat</Text>
                  </View>
                  <View>
                    <Text style={tw`text-black opacity-70`}>10 mins</Text>
                  </View>
                </View>
                {/* Button */}
                <View>
                  <TouchableOpacity
                    onPress={handleStart}
                    style={tw`bg-[#FF1D38] p-2 rounded-[15px] px-6`}
                  >
                    <Text style={tw`text-[#ffffff]`}>START</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Card */}
        <View style={tw`py-5`}>
          <View
            style={tw`shadow-black shadow-xl bg-[#ffffff] rounded-b-[10px] py-4`}
          >
            <View style={tw`flex`}>
              <View>
                <Image source={require("../../../assets/Frame4.png")} />
              </View>
              <View style={tw`flex flex-row items-center justify-between px-4`}>
                <View style={tw`py-3 px-3`}>
                  <View>
                    <Text style={tw`text-[16px] font-bold`}>Chair Squat</Text>
                  </View>
                  <View>
                    <Text style={tw`text-black opacity-70`}>10 mins</Text>
                  </View>
                </View>
                {/* Button */}
                <View>
                  <TouchableOpacity
                    onPress={handleStart}
                    style={tw`bg-[#FF1D38] p-2 rounded-[15px] px-6`}
                  >
                    <Text style={tw`text-[#ffffff]`}>START</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BeginnerPlan;
