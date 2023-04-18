import { View, Image, TouchableOpacity } from "react-native";
import { RadioButton, Text } from "react-native-paper";
import React, { useState } from "react";
import tw from "twrnc";
import { auth } from "../../Firebase.config";

const Gender = ({ gender, setGender }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (value) => {
    setSelectedImage(value);
    setGender(value);
  };

  const getImageStyle = (value) => {
    if (selectedImage === value) {
      return tw`bg-pink-500 rounded-full`;
    }
    return null;
  };

  return (
    <View style={tw`flex flex-row p-3`}>
      <RadioButton.Group
        onValueChange={(newValue) => setGender(newValue)}
        value={gender}
      >
        <View style={tw`w-full flex flex-row justify-evenly items-center`}>
          <TouchableOpacity
            style={[tw`flex items-center`, getImageStyle("Female")]}
            onPress={() => handleImagePress("Female")}
          >
            <Image source={require("../../assets/Frame28.png")} />
            <View style={tw`w-0 h-0`}>
              <RadioButton
                value="Female"
                color={gender === "Female" ? "pink" : "transparent"}
                uncheckedColor="transparent"
                checkedIcon={() => <View style={{ width: 0, height: 0 }} />}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[tw`flex items-center`, getImageStyle("Male")]}
            onPress={() => handleImagePress("Male")}
          >
            <Image source={require("../../assets/Frame27.png")} />
            <View style={tw`w-0 h-0`}>
              <RadioButton
                value="Male"
                color={gender === "Male" ? "pink" : "transparent"}
                uncheckedColor="transparent"
                checkedIcon={() => <View style={{ width: 0, height: 0 }} />}
              />
            </View>
          </TouchableOpacity>
        </View>
      </RadioButton.Group>
    </View>
  );
};

export default Gender;
