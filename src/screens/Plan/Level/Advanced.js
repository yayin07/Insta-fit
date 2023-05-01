import { View, Text, Image, TouchableOpacity } from "react-native"
import React, { useEffect, useState } from "react"
import tw from "twrnc"
import { useNavigation } from "@react-navigation/native"
import { getAuth } from "firebase/auth"
import { collection, onSnapshot, query } from "firebase/firestore"
import { db } from "../../../../Firebase.config"
const Advanced = () => {
  const [subs, setSubs] = useState([])
  const navigation = useNavigation()
  const auth = getAuth()
  const user = auth.currentUser

  useEffect(() => {
    const subsRef = collection(db, "subscriptions")
    const getRef = query(subsRef)
    const unsubcribe = onSnapshot(getRef, (snapshot) => {
      const fetchSubs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setSubs(fetchSubs)
    })
    return () => {
      unsubcribe()
    }
  }, [])

  const handleButton = () => {
    navigation.navigate("AdvancedPlan")
  }

  const getUserSub = subs.find(
    (getUserEmail) => user.email === getUserEmail.user
  )

  return (
    <View>
      {(getUserSub &&
        getUserSub.user === user.email &&
        getUserSub.subscription_type === "Basic") ||
        getUserSub && getUserSub.subscription_type === "Intermediate" ? (
        <View style={tw`relative`}>
          <Image
            style={tw`absolute h-[170px] z-10 w-[330px]`}
            source={require("../../../../assets/lockImage.png")}
          />
          <TouchableOpacity disabled>
            <Image
              source={require("../../../../assets/Frame18.png")}
              style={tw`w-330px rounded-[10px]`}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={handleButton}>
          <Image
            source={require("../../../../assets/Frame18.png")}
            style={tw`w-330px rounded-[10px]`}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Advanced
