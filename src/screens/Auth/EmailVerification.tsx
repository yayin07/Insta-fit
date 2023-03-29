import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const EmailVerification = ({ navigation }: any) => {
  const handleSend = () => {
    navigation.navigate("About", {});
  };
  return (
    <View style={tw`flex-1 p-3`}>
      {/* Logo */}
      <View style={tw`flex items-center py-10`}>
        <View>
          <Image source={require("../../../assets/Vector2.png")} />
        </View>
        <View>
          <Text style={tw`text-[23px] font-semibold`}>Check you email!</Text>
        </View>
      </View>
      {/*  */}
      <View>
        <View>
          <Text style={tw`text-center text-[11px] px-8`}>
            as a final step, we sent an email to sample@gmail.com. Please check
            your inbox and click on the link you validate.
          </Text>
        </View>
        <View style={tw`py-10 flex items-center`}>
          <Image source={require("../../../assets/Line.png")} />
        </View>
        <View>
          <Text style={tw`text-center text-[11px] px-8`}>
            You can also enter a 4-digit code you’ve receive in your email to
            validate your email
          </Text>
        </View>
      </View>
      {/* 4 digits input */}
      <View style={tw`py-10`}>
        <View style={tw`flex flex-row justify-evenly py-2 px-10`}>
          <View
            style={tw`border-[2px] border-black w-[50px] h-[50px] flex justify-center`}
          >
            <TextInput
              keyboardType="number-pad"
              style={tw`text-center text-black  text-[15px]`}
            />
          </View>
          <View
            style={tw`border-[2px] border-black w-[50px] h-[50px] flex justify-center`}
          >
            <TextInput
              keyboardType="number-pad"
              style={tw`text-center text-black  text-[10px]`}
            />
          </View>
          <View
            style={tw`border-[2px] border-black w-[50px] h-[50px] flex justify-center`}
          >
            <TextInput
              keyboardType="number-pad"
              style={tw`text-center text-black  text-[10px]`}
            />
          </View>
          <View
            style={tw`border-[2px] border-black w-[50px] h-[50px] flex justify-center`}
          >
            <TextInput
              keyboardType="number-pad"
              style={tw`text-center text-black  text-[10px]`}
            />
          </View>
        </View>
        {/* Button */}
        <View style={tw`py-50 flex items-center`}>
          <TouchableOpacity
            onPress={handleSend}
            style={tw`bg-black w-[340px] rounded-[40px] py-2 px-2`}
          >
            <Text style={tw`text-[#ffffff] text-center font-bold text-[18px]`}>
              Send
            </Text>
          </TouchableOpacity>
          <View style={tw`flex flex-row items-center py-2`}>
            <Text style={tw`text-[#000000] `}>Didn’t get your code?</Text>
            <Text style={tw`text-[#FF0000] `}>Resend Email</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EmailVerification;
