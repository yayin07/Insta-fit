import { View, Image } from "react-native";
import { RadioButton, Text } from "react-native-paper";
import React, { useState } from "react";
import tw from "twrnc";

const Gender = () => {
  const [gender, setGender] = useState("Female");
  return (
    <View style={tw`flex flex-row p-3`}>
      <RadioButton.Group
        onValueChange={(newValue) => setGender(newValue)}
        value={gender}
      >
        <View style={tw`w-full flex flex-row justify-evenly items-center`}>
          <View style={tw`flex items-center`}>
            <Image source={require("../../assets/Frame23.png")} />
            {/* <RadioButton value="Female" /> */}
          </View>
          <View style={tw`flex items-center`}>
            <Image source={require("../../assets/Frame22.png")} />
            {/* <RadioButton value="Male"  /> */}
          </View>
        </View>
      </RadioButton.Group>
    </View>
  );
};

export default Gender;
