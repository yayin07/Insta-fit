import { View, Text, Image, TouchableOpacity } from "react-native"
import React, { useEffect, useState } from "react"
import tw from "twrnc"
import { useNavigation } from "@react-navigation/native"
import { db } from "../../../Firebase.config"
import { collection, onSnapshot, query } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const MyPlan = () => {
  const navigation = useNavigation()
  const [getAllPlan, setGetAllPlan] = useState([])
  const auth = getAuth()
  const user = auth.currentUser

  useEffect(() => {
    const requestRef = collection(db, "request_plan")
    const getRef = query(requestRef)
    const unsubcribe = onSnapshot(getRef, (snaphot) => {
      const fetchPlan = snaphot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setGetAllPlan(fetchPlan)
    })
  }, [])

  const checkRequest = getAllPlan.find((dat) => dat.request_user === user.email)

  const handleFitnessPlan = () => {
    navigation.navigate("EverydayFitnessPlan")
  }

  const handleMealPlan = () => {
    navigation.navigate("EverydayMealPlan")
  }

  return (
    <View style={tw`flex-1 `}>
      <View style={tw`bg-[#ffffff] p-3 shadow-lg flex items-center`}>
        <Text style={tw`font-bold`}>My Fitness Plan</Text>
      </View>
      <View style={tw`flex items-center justify-start p-15`}>
        {checkRequest?.request_user === user.email &&
        checkRequest?.request_status === "Not Processed" ? (
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ textAlign: "center" }}>
              You already submitted your plan, please wait while we process
              it...
            </Text>
          </View>
        ) : (
          <View>
            <View style={tw`p-2`}>
              <TouchableOpacity onPress={handleMealPlan}>
                <Image source={require("../../../assets/Frame35.png")} />
              </TouchableOpacity>
            </View>
            <View style={tw`p-2`}>
              <TouchableOpacity onPress={handleFitnessPlan}>
                <Image source={require("../../../assets/Frame34.png")} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  )
}

export default MyPlan
