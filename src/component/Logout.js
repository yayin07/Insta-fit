import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const Logout = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth)
      .then(() => {
        navigation.navigate("Login");
        ToastAndroid.show("Logout Successfully", ToastAndroid.SHORT);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={tw`py-3 w-full  `}>
      <TouchableOpacity
        onPress={handleLogout}
        style={tw`p-3 rounded-[18px] bg-[#FAA0A0] `}
      >
        {/* <Image
          source={require("../../assets/logout.png")}
          style={tw`w-[30px] h-[30px]`}
        /> */}
        <Text style={tw`text-[15px] text-center font-bold`}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;
