import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import PickDate from "../../component/PickDate";
import Height from "../../component/Height";
import Weight from "../../component/Weight";
import Gender from "../../component/Gender";
import { useNavigation } from "@react-navigation/native";
import { collection, setDoc, doc, addDoc } from "firebase/firestore";
import { auth } from "../../../Firebase.config";
import { db } from "../../../Firebase.config";
import { StatusBar } from "react-native";
import { useAuthContext } from "../../component/AuthContext/AuthContext";
const AboutYou = () => {
  const navigation = useNavigation();
  const { getUser } = useAuthContext();
  const [date, setDate] = useState(new Date());
  const [height, setHeight] = useState("5'0''");
  const [weight, setWeight] = useState("50 kg");
  const [gender, setGender] = useState(null);
  const { setUserAboutInfo } = useAuthContext();
  const userCollectionRef = collection(db, "user");

  const addUserToCollection = async () => {
    if (!date || !height || !weight || !gender) {
      ToastAndroid.show("Please choose  correctly", ToastAndroid.SHORT);
      return;
    }

    setUserAboutInfo({
      date: date,
      user_height: height,
      user_weight: weight,
      user_gender: gender,
    });
    console.log("User", getUser);

    ToastAndroid.show(
      "User Information added successfully",
      ToastAndroid.SHORT
    );
    navigation.navigate("Goal");
  };

  // const addUserToCollection = () => {
  //   navigation.navigate("Goal");
  // };

  return (
    <View style={tw`bg-[#FAA0A0] flex-1`}>
      <View style={tw`px-4 py-4 `}>
        {/* Logo */}
        <View style={tw`flex flex-row justify-center items-center  px-3`}>
          <View>
            <Image source={require("../../../assets/Image2.png")} />
          </View>
          <View style={tw`px-2`}>
            <View style={tw`flex flex-row`}>
              <Text style={tw`text-black text-[22px] font-extrabold`}>
                INSTA
              </Text>
              <Text style={tw`text-[#ffffff] text-[22px] font-extrabold`}>
                FIT
              </Text>
            </View>

            <Text style={tw`text-black text-[13px]`}>BE MORE FIT</Text>
          </View>
        </View>
      </View>

      <View
        style={tw`h-full bg-[#ffffff] relative bottom-0 left-0 right-0 p-3 flex items-center rounded-t-[32px]`}
      >
        {/* About */}
        <View style={tw`py-7`}>
          <Text style={tw`py-1 text-[26px] text-center font-bold`}>
            About you
          </Text>
          <Text style={tw`text-[13px] font-semibold`}>
            tell us about yourself
          </Text>
        </View>
        {/*  */}
        <View style={tw`w-full h-full gap-6`}>
          {/* Gender Tab */}
          <View style={tw`flex items-center`}>
            <Image source={require("../../../assets/Frame24.png")} />
            <Gender gender={gender} setGender={setGender} />
          </View>
          {/*  */}
          <View style={tw`w-full `}>
            <PickDate date={date} setDate={setDate} />
          </View>
          {/*  */}
          <View style={tw`w-full `}>
            <Height height={height} setHeight={setHeight} />
          </View>
          {/*  */}
          <View>
            <Weight weight={weight} setWeight={setWeight} />
          </View>
          {/* Button */}
          <TouchableOpacity
            onPress={addUserToCollection}
            style={tw`bg-[#FAA0A0] w-full py-3 px-3 rounded-[30px] flex items-center `}
          >
            <Text
              style={tw`text-center text-[#ffffff] text-[16px] font-semibold`}
            >
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AboutYou;
