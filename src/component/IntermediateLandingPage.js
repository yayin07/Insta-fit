import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import React, { useState, useCallback } from "react";
import tw from "twrnc";
// import { useRoute } from "@react-navigation/native"
import YoutubePlayer from "react-native-youtube-iframe";
import PlanHeader from "./PlanHeader";
const IntermediateLandingPage = ({ route }) => {
  const { data } = route.params;
  const [playing, setPlaying] = useState(false);

  const extractVideoId = (url) => {
    if (!url) return null;

    const parsedUrl = new URL(url);
    const videoId =
      parsedUrl.searchParams.get("v") || parsedUrl.pathname.slice(1);

    return videoId;
  };

  return (
    <ScrollView>
      <View>
        <PlanHeader />
      </View>
      <View>
        <View style={tw`flex items-center py-5`}>
          <Text style={tw`text-30px font-bold`}>{data.workout_name}</Text>
        </View>
        <View style={tw`flex items-center`}>
          <YoutubePlayer
            height={200}
            width={350}
            videoId={extractVideoId(data.url)}
            play={playing}
          />

          {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
        </View>
        <View style={tw`p-3`}>
          <Text style={tw`text-[17px] font-bold px-1 `}>Trainer</Text>
          <Text style={tw`px-1 text-[16px]`}>{data.trainer}</Text>
        </View>
        <View style={tw`p-3 flex border-t-[1px] gap-3`}>
          <Text style={tw`text-[17px] font-bold `}>Procedure</Text>
          <Text style={tw`text-[17px]`}>{data.general_procedure}</Text>
        </View>
        <View style={tw`p-3 flex border-t-[1px]`}>
          <Text style={tw`text-[17px] font-bold`}>Target Areas</Text>
          <View style={tw`flex flex-row flex-wrap`}>
            {data.target_parts.map((part, index) => {
              return (
                <View key={index} style={tw`w-[120px]`}>
                  <Text
                    style={tw`bg-red-400 px-2 py-1 text-[15px] my-1 mr-2 text-[#ffffff] text-center rounded-5px`}
                  >
                    {part}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default IntermediateLandingPage;
