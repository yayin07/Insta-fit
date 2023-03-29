import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import { auth } from "../../../Firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import ToastManager, { Toast } from "toastify-react-native";

const Login = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    navigation.navigate("Create", {});
  };

  const handleSignin = () => {
    navigation.navigate("Fitness", {});
  };

  const handleForgot = () => {
    navigation.navigate("ForgotPassword");
  };

  const showToast = () => {
    Toast.success("Login success");
    <>
      <ToastManager />
    </>;
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
      <View style={tw`flex  `}>
        {/* Logo */}
        <View style={tw`flex flex-row justify-center items-center py-15 px-3`}>
          <View>
            <Image source={require("../../../assets/Image1.png")} />
          </View>
          <View style={tw`px-2`}>
            <View style={tw`flex flex-row`}>
              <Text style={tw`text-[#FFFFFF] text-[28px] font-extrabold`}>
                INSTA
              </Text>
              <Text style={tw`text-[#FF0000] text-[28px] font-extrabold`}>
                FIT
              </Text>
            </View>

            <Text style={tw`text-[#FFFFFF] text-[16px]`}>BE MORE FIT</Text>
          </View>
        </View>
        <View style={tw`px-3 flex py-14 `}>
          <View style={tw`py-1 px-1`}>
            <Text style={tw`text-[#FFFFFF] text-[28px] font-extrabold px-3`}>
              SIGN IN
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
                value={email}
              />
            </View>
            {/* Password Input */}
            <View style={tw`border-b-[2px] border-[#ffffff] opacity-70 `}>
              <Text style={tw`text-[#ffffff] py-2`}>Password</Text>
              <TextInput
                style={tw`text-[#ffffff] `}
                secureTextEntry={true}
                value={password}
              />
            </View>
            {/* Forgot Password */}
            <View style={tw`py-3`}>
              <TouchableOpacity
                onPress={handleForgot}
                style={tw`flex flex-row items-center`}
              >
                <Text style={tw`text-[#FFFFFF] `}>Forgot Password</Text>
                <Image
                  source={require("../../../assets/Icon2.png")}
                  style={tw``}
                />
              </TouchableOpacity>
            </View>
            {/* Button */}
            <View style={tw`py-3`}>
              <TouchableOpacity
                onPress={handleSignin}
                style={tw`bg-black w-[340px] rounded-[40px] py-2 px-2`}
              >
                <Text
                  style={tw`text-[#ffffff] text-center font-bold text-[18px]`}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Connect with google or facebook */}
          <View style={tw`flex items-center justify-between`}>
            <View style={tw``}>
              <Text style={tw`text-[#FFFFFF] opacity-60`}>OR CONNECT WITH</Text>
            </View>
            <View style={tw`py-3`}>
              {/* Google */}
              <View style={tw`py-1`}>
                <View
                  style={tw`bg-black w-[340px] rounded-[40px] py-2 px-2 flex flex-row justify-between items-center`}
                >
                  <View style={tw`flex flex-row items-center`}>
                    <Image source={require("../../../assets/google.png")} />
                    <Text
                      style={tw`text-[#ffffff] px-2 font-semibold text-[16px]`}
                    >
                      Sign in with Google
                    </Text>
                  </View>
                  <View>
                    <Image source={require("../../../assets/Vector1.png")} />
                  </View>
                </View>
              </View>
              {/* Facebook */}
              <View style={tw`py-1`}>
                <View
                  style={tw`bg-black w-[340px] rounded-[40px] py-2 px-2 flex flex-row justify-between items-center`}
                >
                  <View style={tw`flex flex-row items-center`}>
                    <Image source={require("../../../assets/facebook.png")} />
                    <Text
                      style={tw`text-[#ffffff] px-2 font-semibold text-[16px]`}
                    >
                      Sign in with Facebook
                    </Text>
                  </View>
                  <View>
                    <Image source={require("../../../assets/Vector1.png")} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* Register */}
          <TouchableOpacity
            onPress={handleRegister}
            style={tw`flex items-center`}
          >
            <Text style={tw`text-[#ffffff] opacity-50`}>
              Don’t have an account yet? Register.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
