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
const Logout = ({ navigation }: any) => {
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
    <View style={tw`px-5`}>
      <TouchableOpacity onPress={handleLogout}>
        {/* <Image
          source={require("../../assets/logout.png")}
          style={tw`w-[30px] h-[30px]`}
        /> */}
        <Text style={tw`text-[15px]`}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;
