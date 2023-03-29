import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const WhatsYourGoal = ({ navigation }: any) => {
  const handleNext = () => {
    navigation.navigate("Work", {});
  };
  return (
    <View style={tw`bg-[#FF1D38] flex-1`}>
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
        style={tw`h-[689px] bg-[#ffffff] absolute bottom-0 left-0 right-0 p-3 flex items-center rounded-t-[32px]`}
      >
        {/* About */}
        <View style={tw`py-10`}>
          <Text style={tw`py-1 text-[26px] text-center font-bold`}>
            What's your goal
          </Text>
        </View>
        {/* Goals */}
        <View>
          <View style={tw`py-3 w-[310px]`}>
            <TouchableOpacity
              style={tw`border-[2px] border-black p-3 rounded-[32px]`}
            >
              <Text style={tw`text-center text-[16px] font-semibold`}>
                Lose Weight
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tw`py-3 w-[310px]`}>
            <TouchableOpacity
              style={tw`border-[2px] border-black p-3 rounded-[32px]`}
            >
              <Text style={tw`text-center text-[16px] font-semibold`}>
                Be more active
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tw`py-3 w-[310px]`}>
            <TouchableOpacity
              style={tw`border-[2px] border-black p-3 rounded-[32px]`}
            >
              <Text style={tw`text-center text-[16px] font-semibold`}>
                Gain Muscle
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tw`py-3 w-[310px]`}>
            <TouchableOpacity
              style={tw`border-[2px] border-black p-3 rounded-[32px]`}
            >
              <Text style={tw`text-center text-[16px] font-semibold`}>
                Stay toned
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tw`py-3 w-[310px]`}>
            <TouchableOpacity
              style={tw`border-[2px] border-black p-3 rounded-[32px]`}
            >
              <Text style={tw`text-center text-[16px] font-semibold`}>
                Reduce stress
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tw`py-3 w-[310px]`}>
            <TouchableOpacity
              style={tw`border-[2px] border-black p-3 rounded-[32px]`}
            >
              <Text style={tw`text-center text-[16px] font-semibold`}>
                Prenatal fit
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity
          onPress={handleNext}
          style={tw`bg-[#FF1D38] w-[350px] py-3 px-3 rounded-[30px] absolute bottom-6`}
        >
          <Text
            style={tw`text-center text-[#ffffff] text-[16px] font-semibold`}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WhatsYourGoal;
