import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, createRef } from "react";
import tw from "twrnc";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { query, collection, setDoc, doc, addDoc } from "firebase/firestore";

import { auth } from "../../../Firebase.config";
import { db } from "../../../Firebase.config";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../../component/AuthContext/AuthContext";
const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const navigation = useNavigation();
  const { setUserAccInfo } = useAuthContext();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setHideConfirmPassword(!hideConfirmPassword);
  };

  const handleSignup = async () => {
    if (
      !email ||
      !password ||
      !confirmPassword ||
      !firstname ||
      !lastname ||
      !phoneNumber ||
      !/^\d{10}$/.test(phoneNumber) ||
      password !== confirmPassword
    ) {
      ToastAndroid.show(
        "Please fill up the form correctly",
        ToastAndroid.SHORT
      );
      return;
    }

    setUserAccInfo({
      first_name: firstname,
      last_name: lastname,
      email,
      password,
      role: "user",
      phone: phoneNumber,
      subscriptions: "no",
    });

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            navigation.navigate("About");
            ToastAndroid.show("Registered Successfully", ToastAndroid.SHORT);
          })
          .catch((err) => {
            console.error(err);
            ToastAndroid.show("Failed to log in.", ToastAndroid.SHORT);
          });
      })
      .catch((err) => {
        console.error(err);
        ToastAndroid.show("Email already used.", ToastAndroid.SHORT);
      });
  };

  const handleDataPolicy = () => {
    navigation.navigate("DataPolicy");
  };

  return (
    <KeyboardAvoidingView style={tw`flex-1 bg-black`}>
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
                secureTextEntry={hidePassword}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity
                style={tw`absolute right-3 top-7`}
                onPress={togglePasswordVisibility}
              >
                <Feather
                  name={hidePassword ? "eye" : "eye-off"}
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            {/*Confirm Password Input */}
            <View style={tw`border-b-[2px] border-[#ffffff] opacity-70 `}>
              <Text style={tw`text-[#ffffff] py-2`}>Confirm Password</Text>
              <TextInput
                style={tw`text-[#ffffff] `}
                secureTextEntry={hideConfirmPassword}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
              <TouchableOpacity
                style={tw`absolute right-3 top-7`}
                onPress={toggleConfirmPasswordVisibility}
              >
                <Feather
                  name={hideConfirmPassword ? "eye" : "eye-off"}
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            {/* FirstName */}
            <View style={tw`border-b-[2px] border-[#ffffff] opacity-70 `}>
              <Text style={tw`text-[#ffffff] py-2`}>
                First Name/ Given Name
              </Text>
              <TextInput
                style={tw`text-[#ffffff]`}
                keyboardType="default"
                onChangeText={(text) => setFirstname(text)}
                value={firstname}
              />
            </View>
            {/* LastName */}
            <View style={tw`border-b-[2px] border-[#ffffff] opacity-70 `}>
              <Text style={tw`text-[#ffffff] py-2`}>
                Last Name/ Family Name
              </Text>
              <TextInput
                style={tw`text-[#ffffff]`}
                keyboardType="default"
                onChangeText={(text) => setLastname(text)}
                value={lastname}
              />
            </View>
            {/* number */}
            <View
              style={tw`flex flex-row justify-between opacity-70 w-full border-b-[2px] border-[#ffffff]`}
            >
              <View style={tw`w-[285px]`}>
                <Text style={tw`text-[#ffffff] opacity-70 py-2`}>
                  Phone Number
                </Text>
                <View style={tw`flex flex-row items-center`}>
                  <Text style={tw`text-[#ffffff] opacity-70 absolute`}>
                    +63
                  </Text>
                  <TextInput
                    style={tw`text-[#ffffff] px-6 opacity-70`}
                    keyboardType="number-pad"
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    maxLength={10}
                  />
                </View>
              </View>
            </View>

            {/* Button */}
            <View style={tw`py-10 flex items-center`}>
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
            <TouchableOpacity
              onPress={handleDataPolicy}
              style={tw`flex items-center py-5`}
            >
              <Text style={tw`text-[#ffffff] opacity-50 text-center`}>
                By clicking Create Account, you agree to our Terms Use & Privacy
                Policy
              </Text>
            </TouchableOpacity>
            {/* To Login */}
            <TouchableOpacity
              onPress={handleLogin}
              style={tw`flex items-center py-2`}
            >
              <Text style={tw`text-[#ffffff] opacity-50`}>
                Already have an account? Login.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateAccount;
