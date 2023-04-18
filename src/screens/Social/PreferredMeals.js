import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import PlanHeader from "../../component/PlanHeader";

const PreferredMeals = () => {
  return (
    <View style={tw`flex-1`}>
      <View>
        <PlanHeader />
      </View>

      <View style={tw`p-6`}>
        <Text>PreferredMeals</Text>
      </View>
    </View>
  );
};

export default PreferredMeals;
