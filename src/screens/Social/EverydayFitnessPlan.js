import { View, Text, ScrollView, Button } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { collection, getDocs, query, onSnapshot } from "firebase/firestore";
import { db } from "../../../Firebase.config";
import tw from "twrnc";
import YoutubePlayer from "react-native-youtube-iframe";
import { getAuth } from "firebase/auth";
import "react-native-url-polyfill/auto";
import PlanHeader from "../../component/PlanHeader";

const EverydayFitnessPlan = () => {
  const respondPlanRef = collection(db, "respond_plans");
  const auth = getAuth();
  const user = auth.currentUser;
  const [playing, setPlaying] = useState(false);
  const [userPlanInfo, setUserPlanInfo] = useState([]);
  const [trainingUrl, setTrainingUrl] = useState(null);

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
        <PlanHeader />
      </View>
      <View>
        {userPlanInfo.map((getUserPlanInfo) => {
          if (getUserPlanInfo.user === user.email) {
            return (
              <View key={getUserPlanInfo.id}>
                <View style={tw`flex p-8 `}>
                  <View style={tw`flex `}>
                    <View
                      style={tw`flex items-center py-5 bg-[#ffffff] shadow-md rounded-[10px]  flex items-center`}
                    >
                      <View style={tw``}>
                        {trainingUrl && (
                          <YoutubePlayer
                            height={180}
                            width={300}
                            videoId={extractVideoId(trainingUrl)}
                            play={playing}
                          />
                        )}
                        <View style={tw``}>
                          <Text style={tw`text-[14px] font-bold`}>
                            Target body parts:
                          </Text>
                          <View style={tw`w-full py-3 flex flex-row gap-3 `}>
                            {getUserPlanInfo.hasOwnProperty(
                              "target_body_parts"
                            ) ? (
                              getUserPlanInfo.target_body_parts.map(
                                (part, index) => (
                                  <Text
                                    key={index}
                                    style={tw`text-[13px] text-white text-center rounded-[9px] w-70px bg-[#FAA0A0] py-1`}
                                  >
                                    {part}
                                  </Text>
                                )
                              )
                            ) : (
                              <Text
                                style={tw`text-[13px] text-white text-center rounded-[9px] w-70px bg-[#FAA0A0] py-1`}
                              >
                                No target parts
                              </Text>
                            )}
                          </View>
                        </View>
                        <View>
                          <Text style={tw`text-[14px] font-bold py-3`}>
                            Description:
                          </Text>
                          <Text style={tw`text-[12px] px-1 `}>
                            {getUserPlanInfo.hasOwnProperty("dinner_procedure")
                              ? getUserPlanInfo.dinner_procedure
                              : "No procedure"}
                          </Text>
                        </View>
                      </View>
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
