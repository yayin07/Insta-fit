import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import React, { useState, useCallback } from "react";
import tw from "twrnc";
import { useRoute } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";
import PlanHeader from "./PlanHeader";
const IntermediateLandingPage = ({ route }) => {
  const { data } = route.params;
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={tw``}>
      <View>
        <PlanHeader />
      </View>
      <View style={tw`flex items-center`}>
        <Text style={tw`text-30px font-bold`}>{data.name}</Text>
      </View>
      {/*  */}
      <View>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={"CIxNJbit9BA"}
          onChangeState={onStateChange}
        />
        <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
      </View>
      {/* Description */}
      <View style={tw`p-3`}>
        <Text style={tw`text-[17px] font-bold px-1 `}>Description</Text>
        <Text style={tw`px-1`}>{data.description}</Text>
      </View>

      <View style={tw`p-3 flex flex-row items-center border-t-[1px]`}>
        <Text style={tw`text-[17px] font-bold px-1 `}>Target Areas</Text>
        <View style={tw`flex flex-row flex-wrap items-center `}>
          {data.target_body.map((part, index) => {
            return (
              <View key={index}>
                <Text style={tw`bg-red-400 px-2  py-1 m-2 rounded-5px`}>
                  {part}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={tw`p-3 flex flex-row items-center border-t-[1px] gap-3`}>
        <Text style={tw`text-[17px] font-bold px-1 `}>Procedure</Text>
        <Text style={tw`w-200px text-sm`}>{data.procedure}</Text>
      </View>
    </View>
  );
};

export default IntermediateLandingPage;
