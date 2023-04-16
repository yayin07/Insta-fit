import React, { useState } from "react";
import { View, Text, Image, Platform, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import tw from "twrnc";

const PickWeight = () => {
  const [weight, setWeight] = useState("50 kg");

  const onWeightChange = (selectedWeight) => {
    setWeight(selectedWeight);
  };

  // generate weight options from 50 kg to 150 kg
  const weightOptions = Array.from({ length: 101 }, (_, index) => {
    const weight = index + 50;
    return `${weight} kg`;
  });

  return (
    <View
      style={tw`bg-[#ffffff] w-full shadow-md shadow-black flex items-center p-3`}
    >
      <TouchableOpacity
        onPress={() => {}}
        style={tw`w-320px flex flex-row justify-between `}
      >
        <Text>Weight</Text>
        <View style={tw`flex flex-row items-center gap-2`}>
          <Text>{weight}</Text>
          <Image source={require("../../assets/Vector3.png")} />
        </View>
      </TouchableOpacity>

      <Picker
        selectedValue={weight}
        style={tw`opacity-0 absolute top-0 left-0 right-0 bottom-0`}
        onValueChange={onWeightChange}
      >
        {weightOptions.map((option) => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>
    </View>
  );
};

export default PickWeight;
