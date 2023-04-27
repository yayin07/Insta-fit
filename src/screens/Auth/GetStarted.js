import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import ConfettiCannon from "react-native-confetti-cannon";

const GetStarted = () => {
  const navigation = useNavigation();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleStarted = () => {
    navigation.navigate("Subscription");
  };

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={tw`flex-1 `}>
      <View></View>
      <View
        style={tw`h-[779px] bg-[#ffffff] p-3 flex items-center rounded-t-[32px]`}
      >
        {/* Logo */}
        <View style={tw`flex flex-row justify-center items-center py-10 px-3`}>
          <View>
            <Image source={require("../../../assets/Image2.png")} />
          </View>
          <View style={tw`px-2`}>
            <View style={tw`flex flex-row`}>
              <Text style={tw`text-[#000000] text-[28px] font-extrabold`}>
                INSTA
              </Text>
              <Text style={tw`text-[#FF0000] text-[28px] font-extrabold`}>
                FIT
              </Text>
            </View>

            <Text style={tw`text-[#000000] text-[16px]`}>BE MORE FIT</Text>
          </View>
        </View>
        {showConfetti && (
          <ConfettiCannon
            count={200}
            origin={{ x: -10, y: 0 }}
            fadeOut={true}
            autoStart={true}
            explosionSpeed={150}
            fallSpeed={5000}
          />
        )}
        {/* Thank You */}
        <View style={tw`px-3 py-1`}>
          <View>
            <Text style={tw`text-[50px] text-center font-bold`}>
              Thank you for registering!
            </Text>
          </View>
        </View>
        {/* Image */}
        <View style={tw`py-10`}>
          <View>
            <Image source={require("../../../assets/Image3.png")} />
          </View>
        </View>
        {/* Button */}
        <TouchableOpacity
          onPress={handleStarted}
          style={tw`bg-[#FAA0A0] w-[350px] py-3 px-3 rounded-[30px] absolute bottom-10`}
        >
          <Text
            style={tw`text-center text-[#ffffff] text-[16px] font-semibold`}
          >
            GET STARTED
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStarted;
