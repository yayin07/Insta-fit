import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const WorkoutTime = () => {
  const navigation = useNavigation();
  const [selectedTime, setSelectedTime] = useState(null);

  const handleNext = () => {
    navigation.navigate("Subscription");
  };

  const handleSelectTime = (time) => {
    setSelectedTime(time);
  };

  const timeOptions = ["5-10min", "15-20min", "25-30min", "30+min"];
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
        style={tw`h-[659px] bg-[#ffffff] absolute bottom-0 left-0 right-0 p-3 flex items-center rounded-t-[32px]`}
      >
        {/*  */}
        <View style={tw`py-10`}>
          <Text style={tw`py-1 text-[26px] text-center font-bold`}>
            How much time do you have to work out?
          </Text>
        </View>
        {/* Goals */}
        <View>
          {timeOptions.map((time, index) => (
            <View key={index} style={tw`py-3 w-[310px]`}>
              <TouchableOpacity
                onPress={() => handleSelectTime(time)}
                style={[
                  tw`border-[2px] p-3 rounded-[32px]`,
                  selectedTime === time
                    ? tw`border-[#FF1D38] bg-[#FAA0A0]`
                    : tw`border-black`,
                ]}
              >
                <Text
                  style={[
                    tw`text-center text-[16px] font-semibold`,
                    selectedTime === time ? tw`text-[#ffffff]` : tw`text-black`,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Button */}
        <TouchableOpacity
          onPress={handleNext}
          style={tw`bg-[#FAA0A0] w-[350px] py-3 px-3 rounded-[30px] absolute bottom-6`}
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

export default WorkoutTime;
