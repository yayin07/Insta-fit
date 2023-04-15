import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import Beginner from "./Level/Beginner";
import Intermidiate from "./Level/Intermidiate";
import Advanced from "./Level/Advanced";

import { db } from "../../../Firebase.config";
import { collection, onSnapshot, query } from "firebase/firestore";
// import { auth } from "../../../Firebase.config";

// import Logout from "../../component/Logout";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const FitnessPlan = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("BeginnerPlan");
  };
  const handleSubscription = () => {
    navigation.navigate("Subscription");
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
        ToastAndroid.show("Logout Successfully", ToastAndroid.SHORT);
      })
      .catch((error) => {
        ToastAndroid.show("Try again", ToastAndroid.SHORT);
      });
  };

  return (
    <View style={tw`flex justify-start items-start flex-1 bg-[#FAA0A0]`}>
      <View style={tw`flex flex-row justify-between items-center w-full`}>
        <View style={tw`h-20 flex flex-row items-center justify-between`}>
          {/* Logo */}
          <View style={tw`flex flex-row justify-start items-center py-2 px-4`}>
            <View style={tw``}>
              <Image
                source={require("../../../assets/Image2.png")}
                style={tw`w-10 h-10 `}
              />
            </View>
            <View style={tw`px-1`}>
              <View style={tw`flex flex-row`}>
                <Text style={tw`text-[#000000] text-[20px] font-extrabold`}>
                  INSTA
                </Text>
                <Text style={tw`text-[#FFFFFF] text-[20px] font-extrabold`}>
                  FIT
                </Text>
              </View>

              <Text style={tw`text-[#000000] text-[10px]`}>BE MORE FIT</Text>
            </View>
          </View>
        </View>
        {/* <Logout /> */}
        <View style={tw`px-5`}>
          <TouchableOpacity onPress={handleLogout}>
            <Image
              source={require("../../../assets/logout.png")}
              style={tw`w-[30px] h-[30px]`}
            />
            {/* <Text style={tw`text-[20px]`}>Logout</Text> */}
          </TouchableOpacity>
        </View>
      </View>
      {/*  */}
      <View
        style={tw`flex items-center w-full h-full bg-[#ffffff] rounded-[30px]`}
      >
        <View style={tw``}>
          <TouchableOpacity onPress={handlePress} style={tw`py-4 w-full`}>
            <Beginner />
          </TouchableOpacity>
        </View>
        <View style={tw``}>
          <TouchableOpacity style={tw`py-4`}>
            <Intermidiate />
          </TouchableOpacity>
        </View>
        <View style={tw``}>
          <TouchableOpacity style={tw`py-4`}>
            <Advanced />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FitnessPlan;
