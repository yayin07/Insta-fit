import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../../Firebase.config";
import { getAuth } from "firebase/auth";

const Advanced = () => {
  const [subs, setSubs] = useState([]);
  const navigation = useNavigation();
  const auth = getAuth();
  const user = auth.currentUser;

  const handleSubscription = () => {
    navigation.navigate("Subscription");
  };

  const handleButton = (details) => {
    if (details.subscriptions === "paid") {
      return;
    } else {
      navigation.navigate("AdvancedPlan");
    }
  };

  useEffect(() => {
    const subsRef = collection(db, "subscriptions");
    const getRef = query(subsRef);
    const unsubcribe = onSnapshot(getRef, (snapshot) => {
      const fetchSubs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSubs(fetchSubs);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  const getUserSub =
    user && subs.find((getUserEmail) => user.email === getUserEmail.user);

  return (
    <View>
      {(getUserSub &&
        getUserSub.user === user.email &&
        getUserSub?.subscription_type === "Basic") ||
      getUserSub?.subscription_type === "Intermediate" ||
      getUserSub === undefined ? (
        <TouchableOpacity onPress={handleSubscription} style={tw`relative`}>
          <Image
            style={tw`absolute h-[170px] z-10 w-[330px]`}
            source={require("../../../../assets/lockImage.png")}
          />
          <View>
            <Image
              source={require("../../../../assets/Advance.png")}
              style={tw`w-330px rounded-[10px]`}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleButton}>
          <Image
            source={require("../../../../assets/Advance.png")}
            style={tw`w-330px rounded-[10px]`}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Advanced;
