import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { db } from "../../../Firebase.config";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const IntermidiatePlan = ({ id, title, description }) => {
  const [trainings, setTrainings] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const trainingRef = collection(db, "fitness-plan");
    const getRef = query(trainingRef);
    const unsubcribe = onSnapshot(getRef, (snapshot) => {
      const fetchPlan = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTrainings(fetchPlan);
    });
  }, []);

  const handleStart = (training) => {
    navigation.navigate("Video", { training });
  };

  const handleBack = () => {
    navigation.navigate("Fitness");
  };
  return (
    <View style={tw`flex-1 `}>
      <View
        style={tw`p-3 flex items-center shadow-xl shadow-black bg-[#FFFFFF]`}
      >
        <View style={tw`flex flex-row items-center justify-start w-full p-2`}>
          <TouchableOpacity onPress={handleBack}>
            <Image source={require("../../../assets/Vector11.png")} />
          </TouchableOpacity>

          <Text style={tw`text-[16px] font-bold px-31`}>Intermediate</Text>
        </View>
      </View>
      {/*  */}
      <ScrollView>
        <View style={tw`flex items-center justify-start h-[800px] py-10  `}>
          {/* Card */}
          {trainings
            .filter(({ intensity }) => intensity === "intermediate")
            .map(({ date, img, name, target_parts, id }) => (
              <TouchableOpacity onPress={handleStart} style={tw`py-5`}>
                <View
                  key={id}
                  style={tw`shadow-black shadow-xl bg-[#ffffff] rounded-b-[10px] py-4`}
                >
                  <View style={tw`flex`}>
                    <View>
                      <Image source={require("../../../assets/Frame4.png")} />
                    </View>
                    <View
                      style={tw`flex flex-row items-center justify-between px-4`}
                    >
                      <View style={tw`py-3 px-3`}>
                        <View>
                          <Text style={tw`text-[16px] font-bold`}>{name}</Text>
                        </View>
                        <View>
                          <Text style={tw`text-black opacity-70`}>10 mins</Text>
                        </View>
                        <View>
                          <Text style={tw`text-black opacity-70`}>3 reps</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default IntermidiatePlan;
