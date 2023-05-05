import { View, Text, ScrollView, Button } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { collection, getDocs, query, onSnapshot } from "firebase/firestore";
import { db } from "../../../Firebase.config";
import tw from "twrnc";
import YoutubePlayer from "react-native-youtube-iframe";
import { getAuth } from "firebase/auth";
import "react-native-url-polyfill/auto";

const EverydayFitnessPlan = () => {
  const respondPlanRef = collection(db, "respond_plans");
  const auth = getAuth();
  const user = auth.currentUser;
  const [playing, setPlaying] = useState(false);
  const [userPlanInfo, setUserPlanInfo] = useState([]);
  const [trainingUrl, setTrainingUrl] = useState(null);
  const [videoId, setVideoId] = useState(null);

  const extractVideoId = (url) => {
    if (!url) return null;

    const parsedUrl = new URL(url);
    const videoId =
      parsedUrl.searchParams.get("v") || parsedUrl.pathname.slice(1);

    return videoId;
  };

  useEffect(() => {
    const getRespondPlanList = async () => {
      try {
        const data = await getDocs(respondPlanRef, "user");
        if (data && data.docs) {
          const filteredData = data.docs.map((doc) => {
            const docData = doc.data();
            return {
              ...docData,
              id: doc.id,
            };
          });
          setUserPlanInfo(filteredData);

          // Set the trainingUrl from the first element of filteredData
          if (filteredData.length > 0) {
            setTrainingUrl(filteredData[0].training_url);
          }
        }
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
          if (getUserPlanInfo.user === user.email) {
            return (
              <View key={getUserPlanInfo.id}>
                <View style={tw`px-7 flex `}>
                  <View style={tw`border-b-[2px] flex `}>
                    <View style={tw`flex items-center`}>
                      {trainingUrl && (
                        <YoutubePlayer
                          height={300}
                          width={400}
                          videoId={extractVideoId(trainingUrl)}
                          play={playing}
                        />
                      )}

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
          } else {
            <Text>Still on pending</Text>;
          }
        })}
      </View>
    </ScrollView>
  );
};

export default EverydayFitnessPlan;
