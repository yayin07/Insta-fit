import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const Subscription = () => {
  const navigation = useNavigation();
  const subscription = [
    { value: "Basic" },
    { value: "Intermediate" },
    { value: "Advanced" },
  ];

  const handleNext = () => {
    navigation.navigate("Start");
  };

  const [selectedSubscription, setSelectedSubscription] = useState("Basic");

  return (
    <View style={tw`flex justify-start items-center flex-1 bg-[#FAA0A0]`}>
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

      <View
        style={tw`h-[720px] w-full bg-[#ffffff] rounded-[32px] p-5 gap-5 flex`}
      >
        {subscription.map((plan) => (
          <View
            key={plan.value}
            style={[
              tw`p-4 shadow-xl shadow-black bg-[#ffffff] h-[150px] flex flex-row justify-between items-center rounded-[8px]`,
              selectedSubscription === plan.value &&
                tw`border-2 border-[#FF69B4]`,
            ]}
          >
            <View>
              <Text style={tw`font-bold py-2`}>{plan.value}</Text>
              {plan.value === "Advanced" && (
                <View>
                  <View>
                    <Text style={tw`font-bold`}>₱ 500</Text>
                  </View>
                  <Text>Full access of all Workout Levels</Text>
                  <Text>Full access on InstaFeed</Text>
                  <Text>Full access on Meal Plan</Text>
                </View>
              )}
              {plan.value === "Intermediate" && (
                <View>
                  <View>
                    <Text style={tw`font-bold`}>₱ 300</Text>
                  </View>
                  <Text style={tw`w-200px`}>
                    Full access on Intermediate Workout
                  </Text>
                  <Text style={tw`w-200px`}>
                    Limited Upload Photos per day on InstaFeed
                  </Text>
                </View>
              )}
              {/* Add other information related to each subscription plan here */}
            </View>
            <View style={tw`flex flex-row justify-between items-center`}>
              <View>
                <RadioButton
                  value={plan.value}
                  status={
                    selectedSubscription === plan.value
                      ? "checked"
                      : "unchecked"
                  }
                  onPress={() => setSelectedSubscription(plan.value)}
                />
              </View>
            </View>
          </View>
        ))}

        {/* Button */}
        <View
          style={tw`py-3 flex justify-center items-center absolute bottom-15 left-5  gap-3`}
        >
          <View
            style={tw`border-[#FAA0A0] border-[2px] w-full p-2 rounded-[20px]`}
          >
            <TouchableOpacity onPress={handleNext}>
              <Text style={tw`text-center`}>Next</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={tw`bg-[#FAA0A0] w-[340px] rounded-[40px] py-2 px-2`}
          >
            <Text style={tw`text-[#ffffff] text-center font-bold text-[18px]`}>
              UPGRADE NOW - SAVE 10%
            </Text>
          </TouchableOpacity>
          <View>
            <Text>₱ 5000 billed yearly (only ₱ 4500/month)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Subscription;
