import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState, createRef } from "react";
import tw from "twrnc";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { auth } from "../../../Firebase.config";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate("Goal");
        ToastAndroid.show("Registered Sucessfully", ToastAndroid.SHORT);
      })
      .catch((err) => {
        ToastAndroid.show("Please fill up the form", ToastAndroid.SHORT);
        if (email === "") {
          ToastAndroid.show("Email should not be empty", ToastAndroid.SHORT);
        }
        if (password === "") {
          ToastAndroid.show("Password should not be empty", ToastAndroid.SHORT);
        }
      });
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
        <View style={tw`px-3 flex py-10 `}>
          <View style={tw`py-1 px-1`}>
            <Text style={tw`text-[#FFFFFF] text-[28px] font-extrabold px-3`}>
              CREATE ACCOUNT
            </Text>
          </View>
          {/* Inputs */}
          <SafeAreaView style={tw`p-4 `}>
            {/* Email Input */}
            <View style={tw`border-b-[2px] border-[#ffffff] opacity-70 `}>
              <Text style={tw`text-[#ffffff] py-2`}>Email</Text>
              <TextInput
                style={tw`text-[#ffffff]`}
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            {/* Password Input */}
            <View style={tw`border-b-[2px] border-[#ffffff] opacity-70 `}>
              <Text style={tw`text-[#ffffff] py-2`}>Password</Text>
              <TextInput
                style={tw`text-[#ffffff] `}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <View></View>
            </View>
            {/*Confirm Password Input */}
            <View style={tw`border-b-[2px] border-[#ffffff] opacity-70 `}>
              <Text style={tw`text-[#ffffff] py-2`}>Confirm Password</Text>
              <TextInput
                style={tw`text-[#ffffff] `}
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
            </View>
            {/* FirstName */}
            <View style={tw`border-b-[2px] border-[#ffffff] opacity-70 `}>
              <Text style={tw`text-[#ffffff] py-2`}>
                First Name/ Given Name
              </Text>
              <TextInput
                style={tw`text-[#ffffff]`}
                keyboardType="email-address"
              />
            </View>
            {/* LastName */}
            <View style={tw`border-b-[2px] border-[#ffffff] opacity-70 `}>
              <Text style={tw`text-[#ffffff] py-2`}>
                Last Name/ Family Name
              </Text>
              <TextInput
                style={tw`text-[#ffffff]`}
                keyboardType="email-address"
              />
            </View>
            {/* number */}
            <View style={tw`flex flex-row justify-between w-full`}>
              <View
                style={tw`border-b-[2px] border-[#ffffff] opacity-70 w-[30px]`}
              >
                <Text style={tw`text-[#ffffff] py-2`}>+63</Text>
              </View>
              <View
                style={tw`border-b-[2px] border-[#ffffff] opacity-70 w-[285px]`}
              >
                <Text style={tw`text-[#ffffff] py-2`}>Phone Number</Text>
                <TextInput
                  style={tw`text-[#ffffff] px-2`}
                  keyboardType="number-pad"
                />
              </View>
            </View>

            {/* Button */}
            <View style={tw`py-10`}>
              <TouchableOpacity
                onPress={handleSignup}
                style={tw`bg-black w-[340px] rounded-[40px] py-3 px-2`}
              >
                <Text
                  style={tw`text-[#ffffff] text-center font-bold text-[18px]`}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
          {/* Privacy agreement */}
          <View style={tw``}>
            <View style={tw`flex items-center py-5`}>
              <Text style={tw`text-[#ffffff] opacity-50 text-center`}>
                By clicking Create Account, you agree to our Terms Use & Privacy
                Policy
              </Text>
            </View>
            {/* To Login */}
            <TouchableOpacity
              onPress={handleLogin}
              style={tw`flex items-center py-5`}
            >
              <Text style={tw`text-[#ffffff] opacity-50`}>
                Already have an account? Login.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
