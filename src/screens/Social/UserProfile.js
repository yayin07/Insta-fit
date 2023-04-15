import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import Logout from "../../component/Logout";

const UserProfile = () => {
  return (
    <View style={tw`flex-1 flex items-center `}>
      <View style={tw`h-20 flex flex-row items-center justify-between`}>
        {/* Logo */}
        <View style={tw`flex flex-row justify-start items-center py-1 px-4`}>
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
              <Text style={tw`text-[#FAA0A0] text-[20px] font-extrabold`}>
                FIT
              </Text>
            </View>

            <Text style={tw`text-[#000000] text-[10px]`}>BE MORE FIT</Text>
          </View>
        </View>
      </View>
      <View>
        <Image source={require("../../../assets/Frame19.png")} />
      </View>
      <View style={tw`flex flex-row justify-center items-center p-3 gap-3 `}>
        <View style={tw`flex items-center`}>
          <Image source={require("../../../assets/Frame20.png")} />
          <Text style={tw`text-10px`}>Suggest Plan</Text>
        </View>
        <View style={tw`flex items-center`}>
          <Image source={require("../../../assets/Frame21.png")} />
          <Text style={tw`text-10px`}>Fitness Plan</Text>
        </View>
      </View>

      <ScrollView>
        <View style={tw`px-6 py-2`}>
          <Text style={tw`px-1 py-2 text-17px font-bold`}>About Me</Text>
          <View>
            <Image source={require("../../../assets/Component1.png")} />
          </View>
          <View>
            <Image source={require("../../../assets/Component2.png")} />
          </View>
          <View>
            <Image source={require("../../../assets/Component3.png")} />
          </View>
          <View>
            <Image source={require("../../../assets/Component4.png")} />
          </View>
        </View>
        <View style={tw`px-6 py-2`}>
          <Text style={tw`px-1 py-2 text-17px font-bold`}>My Goal</Text>
          <View>
            <Image source={require("../../../assets/Component6.png")} />
          </View>
          <View>
            <Image source={require("../../../assets/Component7.png")} />
          </View>
          <View>
            <Image source={require("../../../assets/Component8.png")} />
          </View>
        </View>
        <View>
          <Logout />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserProfile;
