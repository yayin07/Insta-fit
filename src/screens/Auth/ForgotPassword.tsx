import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";

const ForgotPassword = ({ navigation }: any) => {
  const handleLogin = () => {
    navigation.navigate("Login", {});
  };
  return (
    <View style={tw`flex-1 bg-black`}>
      {/* Background Image */}
      <View style={tw`flex items-center absolute -bottom-3 right-0 left-0 `}>
        <Image
          source={require("../../../assets/unsplash.png")}
          alt="/"
          style={tw`h-[850px] opacity-30`}
        />
      </View>
      <View style={tw`flex-1 flex justify-center items-center `}>
        <View style={tw`px-3 flex py-10 `}>
          <View style={tw`py-1 px-1`}>
            <Text style={tw`text-[#FFFFFF] text-[28px] font-extrabold px-3`}>
              FORGOT PASSWORD
            </Text>
          </View>
          {/* Inputs */}
          <View style={tw`p-4 `}>
            {/* Email Input */}
            <View style={tw`border-b-[2px] border-[#ffffff] opacity-70 `}>
              <Text style={tw`text-[#ffffff] py-2`}>Email</Text>
              <TextInput
                style={tw`text-[#ffffff]`}
                keyboardType="email-address"
              />
            </View>

            {/* Button */}
            <View style={tw`py-10`}>
              <TouchableOpacity
                style={tw`bg-black w-[340px] rounded-[40px] py-3 px-2`}
              >
                <Text
                  style={tw`text-[#ffffff] text-center font-bold text-[18px]`}
                >
                  Submit
                </Text>
              </TouchableOpacity>

              {/* To Login */}
              <TouchableOpacity
                onPress={handleLogin}
                style={tw`flex items-center py-20`}
              >
                <Text style={tw`text-[#ffffff] opacity-50`}>
                  Already have an account? Login.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
