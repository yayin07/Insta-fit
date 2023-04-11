import { View, Text, ToastAndroid, Button } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import tw from "twrnc";
import { db } from "../../Firebase.config";
import { collection, onSnapshot, query } from "firebase/firestore";
import YoutubePlayer from "react-native-youtube-iframe";

const PlanTimer = ({ navigation }: any) => {
  const [trainings, setTrainings] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const trainingRef = collection(db, "trainings");
    const getRef = query(trainingRef);
    const unsubcribe = onSnapshot(getRef, (snapshot) => {
      const fetchPlan = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTrainings(fetchPlan);
    });
  }, []);

  const onStateChange = useCallback(({ state }: any) => {
    if (state === "Ended") {
      setIsPlaying(false);
      ToastAndroid.show("Video has ended", ToastAndroid.SHORT);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  return (
    <View style={tw`flex p-3 h-full`}>
      {trainings.map(({ data, url }) => (
        <View style={tw`flex-1`}>
          <View style={tw``} key={data}>
            <YoutubePlayer
              height={300}
              play={isPlaying}
              videoId={url}
              onChangeState={onStateChange}
              key="fullscreenVideo"
            />
          </View>

          <View style={tw`absolute bottom-0 left-0 right-0 `}>
            <Button
              title={isPlaying ? "pause" : "play"}
              onPress={togglePlaying}
              color="black"
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default PlanTimer;
