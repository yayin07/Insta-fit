import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { db } from "../../../Firebase.config";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = ({ navigation }: any) => {
  const handleBack = () => {
    navigation.navigate("Login", {});
  };
  const [email, setEmail] = useState("");
  const changePassword = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        ToastAndroid.show("Password reset email sent", ToastAndroid.SHORT);
      })
      .catch((error) => {
        ToastAndroid.show("Try again", ToastAndroid.SHORT);
      });
  };

  return (
    <View style={tw`flex-1 p-3 flex items-center`}>
      <View
        style={tw`flex flex-col justify-evenly items-center w-full h-[200px] `}
      >
        <TouchableOpacity
          style={tw`flex justify-start w-full p-5`}
          onPress={handleBack}
        >
          <Image source={require("../../../assets/Vector8.png")} />
        </TouchableOpacity>
        <View style={tw`flex items-center`}>
          <Image source={require("../../../assets/Icon4.png")} />
          <Text style={tw`text-[23px] font-bold`}>Forgot Password?</Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={tw`text-center px-5`}>
            Please enter your email to receive a confirmation code to set a new
            password.
          </Text>
        </View>
        <View style={tw`border-b-[2px] mt-5`}>
          <Text style={tw`px-3 text-[18px]`}>Email</Text>
          <TextInput
            style={tw`px-3`}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
      </View>
      <View style={tw`absolute bottom-3 bg-black w-full rounded-[30px]`}>
        <TouchableOpacity style={tw``} onPress={changePassword}>
          <Text
            style={tw`text-[#ffffff] text-center p-3 text-[15px] font-semibold`}
          >
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;
