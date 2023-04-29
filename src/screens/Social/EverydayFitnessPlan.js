import { View, Text, ScrollView, Button } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { collection, getDocs, query, onSnapshot } from "firebase/firestore";
import { db } from "../../../Firebase.config";
import tw from "twrnc";
import YoutubePlayer from "react-native-youtube-iframe";

const EverydayFitnessPlan = () => {
  const respondPlanRef = collection(db, "respond_plans");
  const [playing, setPlaying] = useState(false);
  const [userPlanInfo, setUserPlanInfo] = useState([]);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    const getRespondPlanList = async () => {
      try {
        const data = await getDocs(respondPlanRef, "user");
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserPlanInfo(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getRespondPlanList();
  }, []);

  return (
    <ScrollView>
      <View>
        {userPlanInfo.map((getUserPlanInfo) => {
          return (
            <View>
              {/*  */}
              <View style={tw`p-10 flex `}>
                <View style={tw`border-b-[2px] py-10 flex `}>
                  <View>
                    <YoutubePlayer
                      height={300}
                      play={playing}
                      videoId={"Gr1GtwTp_ko"}
                      onChangeState={onStateChange}
                    />
                    {/* <Button
                        title={playing ? "pause" : "play"}
                        onPress={togglePlaying}
                      /> */}
                  </View>
                  <View>
                    <Text style={tw`text-[34px] font-bold`}>
                      Target body parts
                    </Text>
                    <View style={tw`gap-3 w-full `}>
                      <Text style={tw`text-[24px] py-1`}>
                        {getUserPlanInfo.hasOwnProperty("target_body_parts")
                          ? getUserPlanInfo.target_body_parts[0]
                          : "No target parts"}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={tw`text-[14px] font-bold py-5`}>
                      Description
                    </Text>
                    <Text style={tw`text-[14px] `}>
                      {getUserPlanInfo.hasOwnProperty("dinner_procedure")
                        ? getUserPlanInfo.dinner_procedure
                        : "No procedure"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default EverydayFitnessPlan;
