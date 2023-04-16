import React, { useState } from "react";
import { View, Text, Image, Platform, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import tw from "twrnc";

const Height = () => {
  const [height, setHeight] = useState("5'0''");

  const onHeightChange = (selectedHeight) => {
    setHeight(selectedHeight);
  };

  // generate height options from 5'0" to 7'0"
  const heightOptions = Array.from({ length: 25 }, (_, index) => {
    const feet = Math.floor(index / 12) + 5;
    const inches = index % 12;
    return `${feet}'${inches}''`;
  });

  return (
    <View
      style={tw`bg-[#ffffff] w-full shadow-md shadow-black flex items-center p-3`}
    >
      <TouchableOpacity
        onPress={() => {}}
        style={tw`w-320px flex flex-row justify-between `}
      >
        <Text>Height</Text>
        <View style={tw`flex flex-row items-center gap-2`}>
          <Text>{height}</Text>
          <Image source={require("../../assets/Vector3.png")} />
        </View>
      </TouchableOpacity>

      <Picker
        selectedValue={height}
        style={tw`opacity-0 absolute top-0 left-0 right-0 bottom-0`}
        onValueChange={onHeightChange}
      >
        {heightOptions.map((option) => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>
    </View>
  );
};

export default Height;
