import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native"
import React, { useEffect, useState } from "react"
import tw from "twrnc"
import { db } from "../../../Firebase.config"
import { collection, onSnapshot, query } from "firebase/firestore"
import { useNavigation } from "@react-navigation/native"

const AdvancedPlan = ({ id, title, description }) => {
  const [trainings, setTrainings] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    const trainingRef = collection(db, "trainings")
    const getRef = query(trainingRef)
    const unsubcribe = onSnapshot(getRef, (snapshot) => {
      const fetchPlan = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setTrainings(fetchPlan)
    })
  }, [])

  const handleStart = (details) => {
    if (details.subscriptions === "paid") {
      return
    } else {
      navigation.navigate("AdvancedLandingPage", { data: details })
    }
  }

  const handleBack = () => {
    navigation.navigate("Fitness")
  }
  return (
    <View style={tw`flex-1 `}>
      <View
        style={tw`p-3 flex items-center shadow-xl shadow-black bg-[#FFFFFF]`}
      >
        <View style={tw`flex flex-row items-center justify-start w-full p-2`}>
          <TouchableOpacity onPress={handleBack}>
            <Image
              source={require("../../../assets/Vector11.png")}
              style={tw`w-4 h-4`}
            />
          </TouchableOpacity>

          <Text style={tw`text-[16px] font-bold px-27`}>Advanced</Text>
        </View>
      </View>
      {/*  */}
      <ScrollView>
        <View style={tw`flex items-center justify-start`}>
          {/* Card */}
          {trainings
            .filter(({ type }) => type === "advanced")
            .map((data, index) => (
              <View key={index} style={tw`relative`}>
                <TouchableOpacity
                  onPress={() => handleStart(data)}
                  style={tw`my-5`}
                >
                  {data.subscriptions === "paid" ? (
                    <Image
                      style={tw`absolute z-10 h-[330px] w-[300px]`}
                      source={require("../../../assets/lockImage.png")}
                    />
                  ) : (
                    ""
                  )}
                  <View
                    style={tw`shadow-black h-[319px] w-[300px] shadow-xl bg-[#ffffff] rounded-b-[10px] py-4`}
                  >
                    <View style={tw`flex`}>
                      <View>
                        <Image
                          style={tw`w-[300px]`}
                          source={require("../../../assets/Frame4.png")}
                        />
                      </View>
                      <View
                        style={tw`flex flex-row items-center justify-between px-4`}
                      >
                        <View style={tw`py-3 px-3`}>
                          <View>
                            <Text style={tw`text-[16px] font-bold`}>
                              {data.name}
                            </Text>
                          </View>
                          <View>
                            <Text style={tw`text-black opacity-70`}>
                              10 mins
                            </Text>
                          </View>
                          <View>
                            <Text style={tw`text-black opacity-70`}>
                              3 reps
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default AdvancedPlan
